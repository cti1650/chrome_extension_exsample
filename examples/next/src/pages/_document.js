import Document, { Html, Head, Main, NextScript } from "next/document";
import {
  createStylesServer,
  ServerStyles,
} from "@mantine/next";

const stylesServer = createStylesServer();

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body style={{ margin: "0px",minWidth:"450px",minHeight:"220px" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
