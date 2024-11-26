import { useLocation } from "react-router-dom";
import '../styles/TopNavBar.css'

const TopNavBar = () => {
    const location = useLocation();

    const isIntroducePage = location.pathname === "/";
    const isProjectPage = location.pathname === "/Project";

    return (
        <div className="navbarFrame">
            <nav className="topnavbar">
                나는 할 수 있다, I can do
            </nav>
            <div className="phaseFrame">
                <div className="firstPhase">
                    {isIntroducePage && (
                        <>
                            소개면<br />The Introduce Page
                        </>
                    )}
                    {isProjectPage && (
                        <>
                            프로젝트면<br />The Project Page
                        </>
                    )}
                </div>
                <div className='secondPhase'>
                    김현수<br />Hyunsoo KIM
                </div>
            </div>
        </div>
    )
}

export default TopNavBar;