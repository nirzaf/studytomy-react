import { supabase } from './supabaseClient';

interface VisitorData {
  visitor_id: string;
  ip_address: string;
  location?: {
    country?: string;
    city?: string;
    region?: string;
  };
  user_agent: string;
  visit_count: number;
  last_visit: string;
}

export async function trackVisitor() {
  try {
    // Get IP address first
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const { ip } = await ipResponse.json();
    
    // Collect basic visitor data
    const visitorData: Partial<VisitorData> = {
      visitor_id: ip, // Using IP as visitor_id for simplicity
      ip_address: ip,
      user_agent: navigator.userAgent,
      last_visit: new Date().toISOString(),
    };

    // Try to get location data
    try {
      const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      const locationData = await locationResponse.json();
      
      if (!locationData.error) {
        visitorData.location = {
          country: locationData.country_name,
          city: locationData.city,
          region: locationData.region,
        };
      }
    } catch (error) {
      console.log('Location fetch failed, continuing with IP only');
    }

    // Check if this IP has visited before
    const { data: existingVisitor } = await supabase
      .from('visitors')
      .select('*')
      .eq('visitor_id', ip)
      .single();

    if (existingVisitor) {
      // Update returning visitor count
      const { error } = await supabase
        .from('visitors')
        .update({
          visit_count: existingVisitor.visit_count + 1,
          last_visit: new Date().toISOString(),
          location: visitorData.location || existingVisitor.location,
        })
        .eq('visitor_id', ip);

      if (error) throw error;
    } else {
      // Insert new visitor
      const { error } = await supabase
        .from('visitors')
        .insert([
          {
            ...visitorData,
            visit_count: 1,
            total_time_spent: 0, // Keeping this as 0 since we're not tracking time
          },
        ]);

      if (error) throw error;
    }

  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
}
