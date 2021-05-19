import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
const styles={
    color: 'white',
    fontSize: '20px'
}
function Footer(){
    return(
        <>
            <div className="row footer">
                <h3 style={{color: 'white'}}>Let's Connect On Social Media</h3>
                
            <div class="footer-social">
                        <a href="https://github.com/nanyori"><FaGithub style={styles}/></a>
                        <a href="https://instagram.com/nanyorylawasare"><FaInstagram style={styles}/></a>
                        <a href="https://facebook.com/nanyori.lawasare"><FaFacebook style={styles}/></a>
                    </div>
            </div>
        </>
    )
}
export default Footer;