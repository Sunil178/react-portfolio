import developer from '../config/developer'
import {TextYellow, TextWhite, TextGreen, TextParagraph} from '../components/Text/Text'
import {Button} from '../components/Button/Button'
import {text_wrapper} from '../components/Text/Text.module.css'

function About () {
    return (
        <>
            <div className={text_wrapper}>
                <TextYellow>Hello,</TextYellow>
                <TextWhite>I'm {developer.name}.</TextWhite>
                <TextGreen>Web Developer</TextGreen>
                <TextParagraph>To work in an environment where I can utilize my skills and knowledge to make most unique products with any technologies.</TextParagraph>
                <Button>Hire Me</Button>
            </div>
        </>
    )
}
export default About
