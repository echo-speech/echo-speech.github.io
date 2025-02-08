import Head from "next/head";

const MetadataHead = () => (
  <Head>
    <meta property="og:title" content="Justin Osagie Portfolio" />
    <meta
      property="og:description"
      content="Portfolio of Justin Osagie, a full-stack developer based in Florida."
    />
    <meta property="og:url" content="https://justinosagie.com" />
    <meta property="og:site_name" content="Justin Osagie Portfolio" />
    <meta
      property="og:image"
      content="https://justinosagie.com/images/og-image.jpg"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="500" />
  </Head>
);

export default MetadataHead;
