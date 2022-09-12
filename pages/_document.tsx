import Document, { Head, Html, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicons  */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;700;800&family=Montserrat:wght@300;400;500;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jura:wght@400;700&family=Oxanium:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jura:wght@400;700&family=Orbitron:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          ></link>
          {/* icons */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
          ></link>
        </Head>
        <body dir="ltr">
          <Main />
          <div id="Modal"></div>
        </body>
        <NextScript />
      </Html>
    );
  }
}
