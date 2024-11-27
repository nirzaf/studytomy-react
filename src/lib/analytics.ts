import Clarity from '@microsoft/clarity';

export const initClarity = () => {
  try {
    Clarity.init('igippdunx8');
    console.log('Microsoft Clarity initialized successfully');
  } catch (error) {
    console.error('Error initializing Microsoft Clarity:', error);
  }
};

export const identifyUser = (userId: string, sessionId?: string, pageId?: string, friendlyName?: string) => {
  try {
    Clarity.identify(userId, sessionId, pageId, friendlyName);
  } catch (error) {
    console.error('Error identifying user in Clarity:', error);
  }
};
