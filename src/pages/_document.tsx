import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#003049" />

        {/* Preconnect to font domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical logo */}
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/studytomy/minimal%20primary%20logo%20mini.png?updatedAt=1732362156819"
        />

        {/* Preload critical font (optional, but good for LCP if using next/font isn't an option yet) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
