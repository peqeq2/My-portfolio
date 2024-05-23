import { Navbar } from './components/Navbar/Navbar';
import styles from  './App.module.css';
import { Hero } from './components/Hero/Hero';
import { About } from './components/about/About';



function App() {


  return (
    <div className={styles.App}>
     <Navbar/>
     <Hero/>
     <About/>
    </div>
  )
}

export default App
