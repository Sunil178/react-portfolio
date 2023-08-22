function Button (props) {
    return (
        <>
        <a href="./resume/ANNU_PODDAR_CV.pdf" download>
            <button className="prime_btn">
                {props.data}
            </button> 
        </a>
        </>
    )
}
export default Button;