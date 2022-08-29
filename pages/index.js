import Head from "next/head";
import Header from "../components/Header";
import About from './about';

export default function Home() {
  return (
    <>
    
      <Head>
        <title>portfolio</title>
        <link rel="icon" type="image/ico" href="user.ico" />
      </Head>
      <Header />
      <div className="portfolio-container">
       <About/>
      </div>
    </>
  );
}