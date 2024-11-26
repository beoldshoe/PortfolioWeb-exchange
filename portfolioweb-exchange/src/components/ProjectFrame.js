import { useState } from "react";
import '../styles/ProjectFrame.css';

const ProjectFrame = () => {

    const [projects, setProjects] = useState([
        {
            id: 0,
            koreanTitle: "웹캠을 이용한 사용자별 메뉴 추천 키오스크",
            englishTitle: "Menu recommendation kiosk for each user using a webcam",
            koreanContent: "저의 생애 첫 프로젝트입니다. React를 공부해보고 사용해보고 싶어 프론트엔드 팀원과 함께 React로 개발하기로 결정했고 React에 대한 첫 개념을 어느 정도 잡게 해준 프로젝트입니다. bootstrap CSS 라이브러리를 사용해서 기본적인 디자인을 진행했고 또 기본적인 CRUD 기능들의 로직을 구현했습니다. 기본적인 레이아웃의 구성, 비율 등을 어떻게 구현해야하는지 알게 되었고 디자인 측면에서도 어떻게 구성하는 것이 보기 편한지 알게 해준 저의 소중한 프로젝트 입니다.",
            englishContent: "This is my first project in my life. I wanted to study and use React, so I decided to develop it with a front-end team member, and this project helped me get my first concept of React. I used the bootstrap CSS library to do basic design and implement the logic of basic CRUD functions. It's a valuable project that helped me understand how to implement the composition and ratio of basic layouts and how to configure them in terms of design.",
        },
        {
            id: 1,
            koreanTitle: "학교 내 외국인 학생들을 위한 모바일 앱",
            englishTitle: "Mobile app for international students in university",
            koreanContent: "학교 내에 있는 외국인 학생(유학생 및 교환학생)들을 위하여 필요한 정보들을 담고 공유할 수 있는 앱을 기획하고 개발했습니다. 실제로 우리 학교에 다녀 온 외국인 학생에게 불편한 점을 물어보고 이를 수용해 정보를 담을 수 있도록 했습니다. 학교를 경험한 외국인 학생들이 리뷰를 남기고 정보를 공유할 수 있고, 외국인 학생들끼리 중고 거래를 할 수 있으며 가능한 언어가 기재되어있는 편의 시설 등을 확인할 수 있도록 했습니다. Flutter로 진행했던 프로젝트 중에 가장 완성도가 높았던 프로젝트였습니다.",
            englishContent: "We planned and developed an app that can contain and share necessary information for foreign students (students and exchange students) in the school. In fact, we asked foreign students who attended our school about their inconveniences and accepted them so that they could contain information. We allowed foreign students who have experienced school to leave reviews, share information, conduct second-hand transactions among foreign students, and check convenience facilities with possible languages. It was the most complete project I worked on with Flutter.",
        },
        {
            id: 2,
            koreanTitle: "낙상 예방 관련 모바일 앱 및 낙상 예방 관련 모바일 앱 관리자 웹 페이지",
            englishTitle: "Fall prevention related mobile app and fall prevention related mobile app administrator web page",
            koreanContent: "노인 분들의 낙상 예방 및 관리를 위해 만들어진 모바일 앱과 회사 내 데이터 관리를 용이하게 하기 위해 웹사이트를 제작하는 프로젝트를 진행했습니다. 회사 내 직원이 사용자들의 권한을 부여할 수 있도록 하고 낙상 예방 설문조사 등의 데이터를 확인 및 다운로드할 수 있도록 만들었습니다. 또한 등록되어있는 설문 조사에서 문항을 수정할 수 있고 추가 및 삭제할 수 있는 기능을 만들었습니다. 로그인 시 토큰을 유지하고 로그인을 유지하는 방법을 배웠고 개인적으로 좀 더 심화된 부분을 배울 수 있었던 프로젝트였습니다. 모바일 애플리케이션은 실제 사용자들 또는 회사와 계약된 구청에서 사용하기 위해 개발했습니다. 기존에 있던 버전의 앱에서 UI를 조금 더 최적화하여 개발했습니다. 가장 큰 초점은 관리자 웹 페이지에서 수정한 권한이 앱에서 알맞게 적용되어 로그인 되는지, 그리고 그 권한에 맞게 원하는 기능들을 불러오는지가 초점이었습니다. 기존에 Flutter를 사용해본 적은 있었지만 조금 더 체계적으로 배울 수 있었던 프로젝트였습니다.",
            englishContent: " worked on a project to create a mobile app created for the prevention and management of falls for the elderly and a website to facilitate data management within the company. We made it possible for employees within the company to empower users and to check and download data such as fall prevention surveys. It was a project where I learned how to keep tokens and keep logins when I logged in, and I was able to learn more deeply about it personally. I worked on a project to create a mobile app created for the prevention and management of falls for the elderly and a website to facilitate data management within the company. We made it possible for employees within the company to empower users and to check and download data such as fall prevention surveys. We also created a function to modify, add, and delete questions in registered surveys. It was a project that allowed us to learn how to maintain tokens and keep logins when logging in, and to learn more deeply about it personally.",
        },
    ]);

    return (
        <div className="projectContainer">
            {projects.map((project, index) => (
                <div className="all" key={index}>
                    <div className="koreanTitle">
                        <p>{project.koreanTitle}</p>
                    </div>
                    <div className="englishTitle">
                        <p>{project.englishTitle}</p>
                    </div>
                    <div className="fitLeft">
                        <div className="koreanContent">
                            <p>{project.koreanContent}</p>
                        </div>
                        <div className="englishContent">
                            <p>{project.englishContent}</p>
                        </div>
                        <div className="detailButton">
                            <div onClick={() => alert(`야호!`)}>
                                자세히 보기 See detail
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectFrame;