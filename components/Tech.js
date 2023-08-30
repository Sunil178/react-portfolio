import Image from "next/image";
import Title from "./Title";
import styles from '../styles/tech.module.css';
import techstack from "../config/techstack";

const LanguageCard = (props) =>{
   return (
    <span className={styles["mini_card"]} style={{border: `5px solid ${props.data.color}`}}>
        <figure className={styles["tech_icon"]}>
            <Image
            src={props.data.img}
            height={30}
            width={30}
            alt="icon"
            />
        </figure>
        {props.data.name}
    </span>
   )
}

const Tech = () => {
    return (
        <div className='section_title sec_color' id="techstack">
        <Title data="Tech Stack"/>
            <div className={styles["tech_section_body"]}>
            {
                techstack.map((lang)=>{
                    return (
                        <LanguageCard key={lang.id} data={lang} />
                    )
                })
            }
            </div>
        </div>
    )
}


export default Tech;