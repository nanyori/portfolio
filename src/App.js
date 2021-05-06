import './styles/main.css'

import Home from './components/Home'
import About from './components/About'
import Contact from'./components/Contact'
import Header from './components/Header'
import Skills from './components/Skills'
import Works from './components/Works'
import Footer from './components/Footer'

function App(){
    return(
        <div className="app">
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Works/>
            <Contact/>
            <Footer/>
           </div>
    )
}
     export default App;