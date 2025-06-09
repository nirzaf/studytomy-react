import Clarity from '@microsoft/clarity';

export const initClarity = () => {
  try {
    // Check if Clarity is already initialized
    if (typeof window !== 'undefined' && !window.clarity) {
      Clarity.init('igippdunx8');
      console.log('Microsoft Clarity initialized successfully');
    }
  } catch (error) {
    console.error('Error initializing Microsoft Clarity:', error);
  }
};

export const identifyUser = (userId: string, sessionId?: string, pageId?: string, friendlyName?: string) => {
  try {
    // Check if Clarity is available before calling identify
    if (typeof window !== 'undefined' && window.clarity && typeof window.clarity.identify === 'function') {
      Clarity.identify(userId, sessionId, pageId, friendlyName);
    } else if (typeof window !== 'undefined' && window.clarity) {
      // Fallback for older Clarity versions
      window.clarity('identify', userId, sessionId, pageId, friendlyName);
    }
  } catch (error) {
    console.error('Error identifying user in Clarity:', error);
  }
};
