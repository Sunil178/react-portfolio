import styles from './Button.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


export function Button (props) {
    const text = props.children
    return (
        <>
            <button className={styles.button}>{text} <ArrowForwardIcon className={styles.arrow_icon} /></button>
        </>
    )
}
