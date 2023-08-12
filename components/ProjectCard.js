import styles from '../styles/card.module.css';
import projects from '../config/projects';
import Title from './Title';
const ProjectCard = () => {
  return(
    <div className='section_title'>
    <Title data="Projects"/>
      <div className={styles["projects_card_section"]}>
      {
        projects.map((project) => {
          return (
            <Card key={project.id} data={project}/>
          )
        })
      }

       
      </div>
    </div>
  );
}


const Card = ({data}) => {
  console.log(data);
  const { id, title, description, btn_txt} = data;

  return (
      <div className={styles.container} >
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>{id}</h2>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#">{btn_txt}</a>
            </div>
          </div>
        </div>
      </div>
);
};
export default ProjectCard;