import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Aqua Labs</title>
        <meta property="og:title" content="Aqua Labs" key="title" />
        <meta name="description" content="Aqua Labs" key="desc" />
      </Head>
      <body className="bg-gradient-to-b from-[#000b31] to-[#04041b]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
