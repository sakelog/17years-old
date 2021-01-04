import Head from 'next/head';
import SiteMeta from './config';

const GTM_ID = process.env.GTM_ID;

const GTMScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

const CustomHead = () => {
  const ogpImage = SiteMeta.url + './img/ogp.png';

  return (
    <Head>
      <title>{SiteMeta.title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta name="description" content={SiteMeta.description} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href={
          'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap'
        }
        rel="stylesheet"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: GTMScript,
        }}
      />

      <meta property="og:title" content={SiteMeta.title} />
      <meta property="og:description" content={SiteMeta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogpImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={SiteMeta.description} />
      <meta name="theme-color" content="#ff4081" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./icon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="./icon/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="./icon/android-chrome-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./icon/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./icon/favicon-32x32.png"
      />
    </Head>
  );
};

export default CustomHead;
