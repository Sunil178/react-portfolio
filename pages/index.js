import Head from "next/head";
import Header from "../components/Header";
import MyCard from "../components/MyCard";
import styles from '../styles/home.module.css';
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";

function App() {
  return (
    <>
     <Head>
        <title>portfolio</title>
        <link rel="icon" type="image/ico" href="user.ico" />
      </Head>
      <div className="main_container">
        <Navbar/>
        <Home/>
        <About/>
        <div className="projects_card_section">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </>

  );
}

export default App;