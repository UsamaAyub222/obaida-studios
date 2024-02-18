import "@/styles/globals.css";
import "@/styles/Home.module.css";
import "animate.css/animate.min.css";
import data from "../data";
import Head from "next/head";
import CursorProvider from "@/Providers/cursorProvider";
import { GoogleAnalytics } from "nextjs-google-analytics";
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <meta charset="utf-8" /> */}
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Obaida Studios offers a quality comprehensive graphic design subscription in Ottawa. We provide quality and affordable designs with quick turn around times, so you can have the perfect design hassle-free."
        />
        <meta
          property="og:title"
          content="Obaida Studios | Premium Graphic Design Services in Ottawa"
        />
        <meta
          property="og:description"
          content="Obaida Studios offers a quality comprehensive graphic design subscription in Ottawa. We provide quality and affordable designs with quick turn around times, so you can have the perfect design hassle-free."
        />
        <meta property="og:image" content="%PUBLIC_URL%/favicon.ico" />
        <meta property="og:url" content="https://www.obaidazeino.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@300;500;900&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>
      <CursorProvider>
        <GoogleAnalytics trackPageViews gaMeasurementId={"G-H91LDZVGKB"} />
        <Component {...pageProps} passData={data} />
      </CursorProvider>
    </>
  );
}
export default App;
