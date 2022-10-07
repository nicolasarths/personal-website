import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&family=Playfair+Display:ital,wght@0,400;1,400;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/victor-cortado.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
