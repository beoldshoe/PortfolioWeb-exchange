import TopNavBar from "../components/TopNavBar";
import '../styles/IntroducePage.css'

const IntroducePage = () => {
    return (
        <div className="all">
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
                                <p className="overviewKorean">컴퓨터학부를 재학 중이며, React FE 프로젝트 개발 경험, Flutter 모바일 어플리케이션 개발 경험 및 NodeJS BE 프로젝트 개발 경험을 보유하고 있는 학부생입니다.</p>
                            </div>
                        </div>
                        <div className="overviewSecondContent">
                            <div className="overviewEnglishContent"></div>
                        </div>
                    </div>
                </div>
                <div className="secondFrame">
                    <div className="infoFrame">
                        <div className="infoTitleFrame">
                            <p>Information</p>
                        </div>
                        <div className="infoContentFrame">
                            <p className="infoContent">이름 Name. 김현수 Hyunsoo KIM <br /><br />

                                이메일 Email. howeve18@gmail.com<br /><br />

                                전화번호 Phone Number. 010-2827-7940</p>
                        </div>
                    </div>
                    <div className="awardsFrame"></div>
                </div>
            </div>
        </div>

    )
}

export default IntroducePage;