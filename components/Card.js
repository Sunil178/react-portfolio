import styles from '../styles/card.module.css';

const Card = (props) => {
    return (
<>
<div className={styles['container']} >
  <div className={styles["card"]}>
    <div className={styles["box"]}>
      <div className={styles["content"]}>
        <h2>{props.data}</h2>
        <h3>Card One</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
{/* 

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>02</h2>
        <h3>Card Two</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>03</h2>
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div> */}
</div> 
</>
);
};
export default Card;