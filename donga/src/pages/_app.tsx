// pages/_app.js
import "../../public/css/global.css";
import "../../public/css/detailPage.css"
import "../../public/css/footer.css"
import { DataProvider } from "../../controller/store/GlobalState";
import { GlobalLayout } from "../components/GlobalLayout";

function MyApp({Component, pageProps}) {
  return (
    <DataProvider>
      <GlobalLayout>
      <Component {...pageProps} />
      </GlobalLayout>
    </DataProvider>
  )
}

export default MyApp;