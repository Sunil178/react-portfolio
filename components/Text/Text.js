import styles from './Text.module.css'

export function TextYellow (props) {
    const text = props.children
    return (
        <>
            <h1 className={styles['text-yellow']}>{text}</h1>
        </>
    )
}

export function TextWhite (props) {
    const text = props.children
    return (
        <>
            <h1 className={`${styles['text-white']} ${styles['font-size-4']}`}>{text}</h1>
        </>
    )
}

export function TextGreen (props) {
    const text = props.children
    return (
        <>
            <h1 className={styles['text-green']}>{text}</h1>
        </>
    )
}

export function TextParagraph (props) {
    const text = props.children
    return (
        <>
            <p className={`${styles['text-white']} ${styles['font-size-15']}`}>{text}</p>
        </>
    )
}
