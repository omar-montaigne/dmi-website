import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Muli:300,400,600,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            media="screen"
            href="https://fontlibrary.org/face/bebas"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
