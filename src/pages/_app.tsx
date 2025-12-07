import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
const CookieConsent = dynamic(() => import('@/components/common/CookieConsent'), { ssr: false });
import { trackPageView } from '@/lib/trackingEvents';
import { initPerformanceMonitoring } from '@/lib/performance';
import { inter, pacifico } from '@/lib/fonts';
import '@/styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/subject-icons-consolidated.css';
import '@/styles/subject-icons-consolidated-part2.css';
import '@/styles/subject-icons-consolidated-part3.css';
import '@/styles/subject-icons-consolidated-part4.css';
import '@/styles/testimonials.css';
import '@/styles/WhyUs.css';

const PageTracker = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };

    handleRouteChange(router.asPath);

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.asPath, router.events]);

  return null;
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const cleanup = initPerformanceMonitoring();
    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${inter.variable} ${pacifico.variable} font-sans flex min-h-screen flex-col overflow-x-hidden`}>
        <PageTracker />
        <Navbar />
        <main className="mt-16 flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </>
  );
}
