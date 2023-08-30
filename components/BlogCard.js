import Image from 'next/image'
import Title from './Title';
import styles from '../styles/blog.module.css';

const OneCard = ({num}) => {
    return (
        <div className={styles['blog-card']}>
            <h2>{num}</h2>
            <div className={styles["blog-card-img"]}>
                <Image
                    src="/blog-demo.jpg"
                    alt=""
                    width={100}
                    height={60}
                    layout="responsive"
                />
            </div> 
            <div className={styles['blog-text']}>
                <h2>Blog Title</h2>
               <h4>Blog subtitle 1</h4>
               <h4>Blog subtitle 2</h4>

            </div>
        </div>
    )
}

const BlogCard = () => {
    return(
        <div className='section_title' id='blog'>
        <Title data="Blog"/>
        <div className={styles["blog-section"]}>
            <OneCard num={'01'}/>
            <OneCard num={'02'}/>
            <OneCard num={'03'}/>
            <OneCard num={'04'}/>
            <OneCard num={'05'}/>
            <OneCard num={'06'}/>
            <OneCard num={'07'}/>
            <OneCard num={'08'}/>
        </div>
        </div>
    )
}

export default BlogCard;