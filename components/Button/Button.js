import styles from './Button.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


export function Button ({text}) {
    return (
        <>
            <button className={styles["btn-grad"]} >{text} </button> 
        </>
    )
}
