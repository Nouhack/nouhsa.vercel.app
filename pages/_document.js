// pages/_document.js
import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" style={{ marginLeft: " calc(100vw - 100%)" }}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
