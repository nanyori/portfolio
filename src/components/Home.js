import profile from '../images/bg.png'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'

const styles={
    color: 'black',
    fontSize: '30px'
}
function Home(){
    return(
        <>
            <div className="home" id="home">
                <div className="overlay">
                <div class="social">
                        <a href="https://github.com/nanyori"><FaGithub style={styles}/></a>
                        <a href="https://instagram.com/nanyorylawasare"><FaInstagram style={styles}/></a>
                        <a href="https://facebook.com/nanyori.lawasare"><FaFacebook style={styles}/></a>
                    </div>
                    <div className="profile-description">
                    <p>Hello, I'm Nanyori</p> 
                    <h1>Frontend Web Developer</h1>
                    </div>
                    <img src={profile} alt="Profile"/>
                    
                    
                </div>
            </div>
        </>
    )
}
export default Home;