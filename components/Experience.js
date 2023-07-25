import styles from '../styles/experience.module.css';
import Title from './Title';
const ExperCard = ({ date, designation, company, bspace }) => {
    return (
        <div className={styles.exper_detail} style={{ '--elem_num': bspace + 'px' }}>
            <span>{date}</span>
            <h2>{designation}</h2>
            <h3>{company}</h3>
        </div>
    )
}

const Experience = () => {
    const elem_num = (100 / 3) + 100;
    return <>
   <div className='section_title sec_color'>
        <Title data="Experience"/>
        <div className={styles.exper_section}>
            <ExperCard bspace={elem_num*0} date={'2021 - 2023'} designation={'Sr. Full Stack Developer'} company={'Botic Oceans Technologies Pvt. Ltd.'} />
            <ExperCard bspace={elem_num*1} date={'2020 - 2021'} designation={'PHP Developer'} company={'Gigs Media Pvt. Ltd.'} />
            <ExperCard bspace={elem_num*2} date={'2019 - 2020'} designation={'Junior Software Engineer'} company={'R-Tech Solutions'} />
        </div>
    </div>
    </>
}



export default Experience;