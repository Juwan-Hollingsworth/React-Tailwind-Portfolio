import "../styles/globals.css";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    //handle route change & track page views
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    // attach event listener to event
    router.events.on("routeChangeComplete", handleRouteChange);
    // clean up event listener when component is not mounted
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
