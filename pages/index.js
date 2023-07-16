import Head from "next/head";
import Header from "../components/Header";
import About from './about';
import MyCard from "../components/MyCard";
import styles from '../styles/home.module.css';
import Card from "../components/Card";

export default function Home() {
  const data = ['01', '02']
  return (
    <>
    
      <Head>
        <title>portfolio</title>
        <link rel="icon" type="image/ico" href="user.ico" />
      </Head>
      <Header />
      <div className= "portfolio-container">
        <About/>
       </div>
     
     <div className = {styles["section_gap"]}></div>

      <div className = {`${styles.card_container}`}>
        <Card data={data[1]}/>
      </div>
    
      {/* <Card/> */}
    </>
  );
}