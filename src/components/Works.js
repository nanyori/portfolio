import project1 from '../images/raiseup.png'
import project2 from '../images/fashion house.png'
import project3 from '../images/todaylist.png'
function Works(){
    return(
        <>
        <div className="works" id="works">
        <div className="liner">
                 <div className="line"></div>
                 <h1>My Recent Projects</h1>
                 <div className="line"></div>
                </div>

                <h3>Here are a few design projects I've worked on recently. Want to see more? Email me.</h3>
                <div className="projects">
                    <div className="project">
                        <img src={project1} alt="Project One"/>
                        <h3>Raise Up</h3>
                        <p>Project Description and links</p>
                        <button><a href="http://nanyori.lostnfound.co.tz/">Visit Website</a></button>
                    </div>
                    <div className="project">
                        <img src={project2} alt="Project One"/>
                        <h3>Fashion House</h3>
                        <p>Project Description and links</p>
                        <button><a href="https://nanyori.github.io/fashion-house/">Visit Website</a></button>
                        </div>
                    <div className="project">
                        <img src={project3} alt="Project One"/>
                        <h3>Today List</h3>
                        <p>Project Description and links</p>
                        <button><a href="https://nanyori.github.io/todaylist/">Visit Website</a></button>
                    </div>
                </div>
        </div>
           

        </>
    )
}
export default Works;