import developer from '../config/developer'
import {Button} from '../components/Button/Button'
import styles from './about.module.css'
function About () {
    return (
        <>
            <div className={styles.text_wrapper}>
                <h1>Hello,</h1>
                <h2>I'm {developer.name}.</h2>
                <h1 className={styles['text-green']}>Web Developer</h1>
                <p>To work in an environment where I can utilize my skills and knowledge to make most unique products with any technologies.</p>
                <Button text="Hire Me"/>
            </div>
        </>
    )
}
export default About
