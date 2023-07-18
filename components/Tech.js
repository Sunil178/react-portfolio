const LanguageCard = (props) =>{
   return (
    <span className="mini_card" style={{backgroundColor: props.data.color}}>
        {props.data.name}
    </span>
   )
}

const Tech = () => {
   const languages = [
    {
        id: "01",
        name: 'Java',
        color: 'orange'
    },
    {
        id: "02",
        name: 'JavaScript',
    },
   ]
    return(
        <div className="about_section">
           {
            languages.map((lang)=>{
                return (
                    <LanguageCard key={lang.id} data={lang} />
                )
            })
           }
        </div>
    )
}


export default Tech;