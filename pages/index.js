import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tech from "../components/Tech";
import StickCom from "../components/StickCom";
import Experience from "../components/Experience";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

function App() {
  return (
    <>
     <Head>
        <title>portfolio</title>
        <link rel="icon" type="image/ico" href="user.ico" />
      </Head>
      <div className="main_container">
        <Navbar />
        <Hero />
        <Tech />
        <ProjectCard />
        <Experience />
        <BlogCard />
        <StickCom />
        <Footer />
      </div>
    </>

  );
}

export default App;