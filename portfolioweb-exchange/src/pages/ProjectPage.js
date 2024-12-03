import TopNavBar from "../components/TopNavBar";
import ProjectFrame from "../components/ProjectFrame";
import { useNavigate } from "react-router-dom";
import '../styles/ProjectPage.css'

const ProjectPage = () => {

    const navigate = useNavigate();

    return (
        <div className="all"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                fontFamily: 'Chosun'
            }}>
            <div>
                <TopNavBar />
            </div>
            <div>
                <ProjectFrame />
            </div>
            <div className="bottomNavBar1Frame">
                <p
                    className="bottomNavBar1"
                    onClick={() => navigate("/Introduce")}
                    style={{ cursor: "pointer" }}
                >
                    프로젝트면<br />The Project Page
                </p>
            </div>
        </div>
    )
}

export default ProjectPage;