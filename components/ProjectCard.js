import styles from '../styles/card.module.css';

const ProjectCard = () => {
  return (
  <div className="projects_card_section">
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
  </div>
  );
}


const Card = (props) => {
  return (
      <div className={styles.container} >
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>01</h2>
              <h3>Card One</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
);
};
export default ProjectCard;