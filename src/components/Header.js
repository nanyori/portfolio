import logo from '../images/logo.png'
 function Header (){
      return(
          <div className='row header'>
              <p>[N]anyori</p>
              <nav>
                <a href="#home"> Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#works">Works</a>
                <a href="#contacts">Contact</a>
              </nav>
          </div>
      )
 };
export default Header;