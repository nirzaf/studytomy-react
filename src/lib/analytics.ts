import Clarity from '@microsoft/clarity';

declare global {
  interface Window {
    clarity?: any;
  }
}

export const initClarity = () => {
  try {
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
    if (typeof window !== 'undefined' && window.clarity && typeof window.clarity.identify === 'function') {
      Clarity.identify(userId, sessionId, pageId, friendlyName);
    } else if (typeof window !== 'undefined' && window.clarity) {
      window.clarity('identify', userId, sessionId, pageId, friendlyName);
    }
  } catch (error) {
    console.error('Error identifying user in Clarity:', error);
  }
};
