import '../styles/FirstPage.css'
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {

    const navigate = useNavigate();

    return (
        <div className="allFrame"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                fontFamily: 'Chosun',
                height: '100vh',
                margin: '0',
            }}>
            <div className="rowFrame">
                <div className='titleAndImageFrame'>
                    <div className='blank'></div>
                    <div className='imageFrame'>
                        <img src="/images/ReactIcon.png" alt="React Rogo" className="overviewImage" />
                    </div>
                    <div className='titleFrame'>Portpolio of Hyunsoo KIM<br />현수의 포트폴리오</div>
                </div>
                <div className='navigationFrame'>
                    <div className='navItem'>
                        <p
                            className='navText'
                            onClick={() => navigate("Introduce")}
                        >
                            About Me
                        </p>
                    </div>
                    <div className='navItem'>
                        <p
                            className='navText'
                            onClick={() => navigate("Project")}
                        >
                            About Project
                        </p>
                    </div>
                    <div className='navItem'>
                        <p className='navText'>
                            About Detail Project
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;