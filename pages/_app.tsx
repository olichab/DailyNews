import type { AppProps } from "next/app";
import { NewsProvider } from "@context/NewsContext";
import SiteLayout from "@components/SiteLayout";
import "@styles/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SiteLayout siteTitle="DailyNews">
      <NewsProvider>
        <Component {...pageProps} />
      </NewsProvider>
    </SiteLayout>
  );
};

export default App;
