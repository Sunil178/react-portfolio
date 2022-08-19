
import Navbar from '../widgets/Navbar/Navbar'
import About from './about'
import Skill from './skills/index'

export default function Home () {
  return (
    <>
      <Navbar />
      <div className='portfolio-container'>
        <About />
        <Skill />
      </div>
    </>
  )
}

