import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

type SiteLayoutProps = {
  children: JSX.Element;
  siteTitle: string;
};

const SiteLayout: React.FC<SiteLayoutProps> = ({ children, siteTitle }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta name="description" content="DailyNews" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="container m-8">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default SiteLayout;
