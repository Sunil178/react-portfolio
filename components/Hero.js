import Image from "next/image";
import styles from "../styles/hero.module.css";
import Button from "./Button";
const Hero = () => {
    return (
        <div className={styles["home_section"]}>
            <div className={styles["hero_content"]}>
                <h1>Hello I am Annu Poddar</h1>
                <h2>Software Developer | Senior Software Engineer</h2>
                <h3>With more than<span className={styles['bold_txt']}> 3 Years </span> of Experience </h3>
                <Button data="Download Resume" />
            </div>
            <div className={styles["hero_image"]}>
                <Image
                src="/hero.svg"
                height={570}
                width={500}
                alt="hero image"
                />
            </div>
        </div>
    )
}

export default Hero;