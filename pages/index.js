import Head from "next/head";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Tech from "../components/Tech";
import StickCom from "../components/StickCom";
import Experience from "../components/Experience";
import BlogCard from "../components/BlogCard";


function App() {
  return (
    <>
     <Head>
        <title>portfolio</title>
        <link rel="icon" type="image/ico" href="user.ico" />
      </Head>
      <div className="main_container">
        <Navbar/>
        <Intro/>
        <Tech/>
        <div className="projects_card_section">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      <Experience/>
      {/* <StickCom/>  */}
      <BlogCard/>
      </div>
    </>

  );
}

export default App;