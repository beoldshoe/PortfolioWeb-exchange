import TopNavBar from "../components/TopNavBar";
import '../styles/IntroducePage.css'
import { useNavigate } from "react-router-dom";

const IntroducePage = () => {

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
            <div className="contentFrame">
                <div className="firstFrame">
                    <div className="overviewFrame">
                        <div className="overviewTitle">
                            <p>Overview</p>
                        </div>
                        <div className="overviewFirstContent">
                            <div className="overviewImageFrame">
                                <img src="/images/HyunsooKIM.jpeg" alt="Hyunsoo KIM" className="overviewImage" />
                            </div>
                            <div className="overviewKoreanContent">
                                <p className="overviewKorean">컴퓨터학부를 재학 중이며, React FE 프로젝트 개발 경험, Flutter 모바일 어플리케이션 개발 경험 및 NodeJS BE 프로젝트 개발 경험을 보유하고 있는 학부생입니다.<br /><br /> I am a computer undergraduate student with experience in React FE project development, Flutter mobile application development experience, and NodeJS BE project development experience.</p>
                            </div>
                        </div>
                        <div className="overviewSecondContent">
                            <div className="overviewEnglishContent">
                                <p className="overviewEnglish">
                                    I am a computer undergraduate student with experience in React FE project development, Flutter mobile application development experience, and NodeJS BE project development experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondFrame">
                    <div className="infoFrame">
                        <div className="infoTitleFrame">
                            <p>Contacts</p>
                        </div>
                        <div className="infoContentFrame">
                            <p className="infoContent">이름 Name. 김현수 Hyunsoo KIM <br /><br />

                                이메일 Email. howeve18@gmail.com<br /><br />

                                전화번호 Phone Number. 010-2827-7940
                                <div className="githubLink">
                                    <br />
                                    <a
                                        href="https://github.com/beoldshoe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }} // 필요하면 스타일 추가
                                    >
                                        Github Link
                                    </a>
                                </div>
                                <div className="AnotherLink">
                                    <br />
                                    <a
                                        href="https://velog.io/@beoldshoe/posts"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }} // 필요하면 스타일 추가
                                    >
                                        Blog Link
                                    </a>
                                </div>
                            </p>

                        </div>
                    </div>
                    <div className="awardsFrame">
                        <div className="awardsTitleFrame">
                            <p>Awards</p>
                        </div>
                        <div className="awardsContentFrame">
                            <p className="awardsContent">
                                2023 대경권 산학협력프로젝트 경진대회 우수상<br />
                                2023 Daegyeong Industry-Academic Cooperation Project Competition excellence prize<br />
                                2023 대구를 빛내는 해커톤 최우수상<br />
                                2023 Hackathon Shines Daegu the grand prize<br />
                                2024 대구를 빛내는 해커톤 최우수상<br />
                                2024 Hackathon Shines Daegu the grand prize
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bottomNavBarFrame">
                <p
                    className="bottomNavBar"
                    onClick={() => navigate("/Project")}
                    style={{ cursor: "pointer" }} // 클릭 가능 표시
                >
                    소개면<br />The Introduce Page
                </p>
            </div>
        </div>
    )
}

export default IntroducePage;