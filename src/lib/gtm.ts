declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const GTM_ID = 'GTM-PWTGRCTV';
export const GA_ID = 'G-EQC6PQ0E9Q';

export const initGTM = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];

    // Initialize GTM
    (function(w: { [key: string]: any },d: Document,s: string,l: string,i: string){
      w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s) as HTMLScriptElement,dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;
      if (f && f.parentNode) f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',GTM_ID);

    // Initialize GA4
    const script = document.createElement('script') as HTMLScriptElement;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
}; 