import Image from "next/image"

const LanguageCard = (props) =>{
   return (
    <span className="mini_card" style={{border: `5px solid ${props.data.color}`}}>
        <figure className="tech_icon">
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
   const languages = [
    {
        id: "01",
        name: 'Java',
        color: 'orange',
        img: '/java_icon.svg'
    },
    {
        id: "02",
        name: 'JavaScript',
        color:'green',
        img: '/javascript_icon.svg'
    },
    {
        id: "03",
        name: 'nodejs',
        color: 'green',
        img: '/nodejs_icon.svg'
    },
    {
        id: "04",
        name: 'Java',
        color: 'orange',
        img: '/java_icon.svg'
    },
   ]
    return(
        <div className="tech_section">
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