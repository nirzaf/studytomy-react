import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#003049" />

        {/* Preload critical logo */}
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/studytomy/minimal%20primary%20logo%20mini.png?updatedAt=1732362156819"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
