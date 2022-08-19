import style from './navbar.module.css'
import { Button } from '../../components/Button/Button'
function Navbar() {
    const items = ['Home', 'Skills', 'Projects', 'Blogs', 'Contat us']
    return (
        <>
        <div className={style.nav_bg}>
            <div>
                <img src = "https://cdn-icons-png.flaticon.com/128/8099/8099491.png" height={50} width={50}/>
                <span>Hi</span>
            </div>
            <div className={style.nav_items}>
                {items.map((item) => <span>{item}</span>)}
            </div>
            <Button text="Download Resume"/>

        </div>
        </>
    )
  }
  
  export default Navbar