// pages/_app.js
import "../../public/css/global.css";
import "../../public/css/detailPage.css"


function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default MyApp;