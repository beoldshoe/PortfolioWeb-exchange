import '../styles/TopNavBar.css'

const TopNavBar = () => {
    return (
        <div className="navbarFrame">
            <nav className="topnavbar">
                나는 할 수 있다, I can do
            </nav>
            <div className="phaseFrame">
                <div className="firstPhase">
                    소개면<br />The Introduce Page
                </div>
                <div className='secondPhase'>
                    김현수<br />Hyunsoo KIM
                </div>
            </div>
        </div>
    )
}

export default TopNavBar;