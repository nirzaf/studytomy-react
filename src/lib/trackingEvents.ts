import { identifyUser } from './analytics';

// Track specific page views with custom IDs
export const trackPageView = (pageName: string) => {
  try {
    identifyUser(
      crypto.randomUUID(), // Generate a unique ID for the page view
      undefined,
      pageName,
      `Page View: ${pageName}`
    );
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  try {
    identifyUser(
      crypto.randomUUID(),
      undefined,
      `form_${formName}`,
      `Form Submission: ${formName} - ${success ? 'Success' : 'Failed'}`
    );
  } catch (error) {
    console.error('Error tracking form submission:', error);
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  try {
    identifyUser(
      crypto.randomUUID(),
      undefined,
      `button_${buttonName}`,
      `Button Click: ${buttonName}`
    );
  } catch (error) {
    console.error('Error tracking button click:', error);
  }
};
