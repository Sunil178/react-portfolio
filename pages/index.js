
import Navbar from '../widgets/Navbar/Navbar'
import About from './about'

export default function Home () {
  return (
    <>
      <Navbar />
      <div className='portfolio-container'>
        <About />
      </div>
    </>
  )
}

