import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
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
        <ProjectCard/>
        <Experience/>
        <BlogCard/>
        <StickCom/>
      </div>
    </>

  );
}

export default App;