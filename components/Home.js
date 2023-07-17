import Image from "next/image";
import styles from "../styles/home.module.css";
const Home = () => {
    return (
        <div className={styles["home_section"]}>
            <div className={styles["hero_content"]}>
                <h1>Hello I am Annu Poddar</h1>
                <h2>Website Developer</h2>
            </div>
            <div className={styles["hero_image"]}>
            <Image
             src="/hero.svg"
             height={650}
             width={500}
             alt="hero image"
            />
            </div>
        </div>
    )
}

export default Home;