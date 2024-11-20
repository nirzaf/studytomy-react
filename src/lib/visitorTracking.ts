import { supabase } from './supabaseClient';

interface VisitorData {
  visitor_id: string;
  ip_address?: string;
  location?: {
    country?: string;
    city?: string;
    region?: string;
  };
  user_agent: string;
  visit_count: number;
  last_visit: string;
}

// Generate a unique visitor ID using timestamp and random string
function generateVisitorId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Array of IP lookup services to try
const IP_SERVICES = [
  'https://api.ipgeolocation.io/getip'
];

// Fetch IP address in the background
async function getIpAddress(): Promise<string | undefined> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  
  try {
    const promises = IP_SERVICES.map(service =>
      fetch(service, {
        signal: controller.signal,
        headers: { 
          'Accept': 'application/json'
        }
      })
      .then(async response => {
        if (!response.ok) throw new Error('Service unavailable');
        const data = await response.json();
        return data.ip || data.ipAddress;
      })
      .catch(() => null)
    );

    const results = await Promise.race([
      Promise.all(promises),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000))
    ]);

    clearTimeout(timeoutId);

    if (Array.isArray(results)) {
      const ip = results.find(result => result !== null);
      return ip || undefined;
    }
    
    return undefined;
  } catch (error) {
    console.log('IP lookup failed silently');
    return undefined;
  }
}

// Fetch location data in the background
async function getLocationData(ip: string): Promise<VisitorData['location'] | undefined> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const response = await fetch(`https://api.iplocation.net/?ip=${ip}`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) return undefined;
    
    const data = await response.json();
    
    return {
      country: data.country_name,
      city: undefined,
      region: undefined
    };
  } catch (error) {
    return undefined;
  }
}

// Main tracking function that doesn't block
export function trackVisitor() {
  // Generate visitor ID immediately
  const visitorId = generateVisitorId();
  
  // Start with basic data that we have immediately
  const visitorData: Partial<VisitorData> = {
    visitor_id: visitorId,
    user_agent: navigator.userAgent,
    last_visit: new Date().toISOString(),
  };

  // Insert basic visitor data immediately
  supabase
    .from('visitors')
    .insert([{
      ...visitorData,
      visit_count: 1,
      total_time_spent: 0,
    }])
    .then(({ error }) => {
      if (error) console.log('Initial visitor insert failed silently');
    });

  // Fetch additional data in the background
  Promise.all([
    getIpAddress(),
    // We'll get location data after we have the IP
  ]).then(async ([ip]) => {
    if (!ip) return;

    // Get location data only if we have an IP
    const location = await getLocationData(ip);
    
    // Update the visitor record with IP and location
    supabase
      .from('visitors')
      .update({
        ip_address: ip,
        location: location,
      })
      .eq('visitor_id', visitorId)
      .then(({ error }) => {
        if (error) console.log('Visitor update failed silently');
      });
  });
}
