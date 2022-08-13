import style from './navbar.module.css'

function Navbar() {
    const items = ['Home', 'Skills', 'Projects', 'Blogs', 'Contat us']
    return (
        <>
        <div className={style.nav_bg}>
            <div className={style.nav_items}>
                {items.map((item) => <span>{item}</span>)}
            </div>
        </div>
        </>
    )
  }
  
  export default Navbar