import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/DetailProjectFrame.css';

const DetailProjectFrame = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [projects] = useState([
        {
            id: 0,
            koreanTitle: "웹캠을 이용한 사용자별 메뉴 추천 키오스크",
            englishTitle: "Menu recommendation kiosk for each user using a webcam",
            koreanContent: "저의 생애 첫 프로젝트입니다. React를 공부해보고 사용해보고 싶어 프론트엔드 팀원과 함께 React로 개발하기로 결정했고 React에 대한 첫 개념을 어느 정도 잡게 해준 프로젝트입니다. bootstrap CSS 라이브러리를 사용해서 기본적인 디자인을 진행했고 또 기본적인 CRUD 기능들의 로직을 구현했습니다. 기본적인 레이아웃의 구성, 비율 등을 어떻게 구현해야하는지 알게 되었고 디자인 측면에서도 어떻게 구성하는 것이 보기 편한지 알게 해준 저의 소중한 프로젝트 입니다.",
            englishContent: "This is my first project in my life. I wanted to study and use React, so I decided to develop it with a front-end team member, and this project helped me get my first concept of React. I used the bootstrap CSS library to do basic design and implement the logic of basic CRUD functions. It's a valuable project that helped me understand how to implement the composition and ratio of basic layouts and how to configure them in terms of design.",
            dataAndType: "2023.09 - 2023.12 수업 내 프로젝트 (Project in course)",
            framework: "Framework - React",
            isGithub: 1,
            GithubLink: "https://github.com/noFlowWater/signage_solution",
            BlogLink: "https://velog.io/@beoldshoe/Project-LG-WebOS",
            images: ["/images/kiosk1.png", "/images/kiosk2.png", "/images/kiosk3.png", "/images/kiosk4.png", "/images/kiosk5.png"],
            imageDetail: ["Admin Login - 초기에 설정해둔 비밀번호 또는 관리자가 임의로 변경한 비밀번호로 관리자 모드로 접속할 수 있게 됩니다. 데이터베이스에 저장된 비밀번호가 입력한 비밀번호와 같다면 접속이 가능하게 만들었습니다. 키오스크라는 특성 때문에 URL로 접속할 경우는 존재하지 않다고 판단하여 토큰을 저장해서 다음 페이지로 넘어가는 등의 로직은 구현하지 않았습니다. / You can access the password initially set or the password arbitrarily changed by the administrator in administrator mode. If the password stored in the database is the same as the password entered, access was made possible. Due to the nature of the kiosk, we decided that access by URL did not exist, so we did not implement logic such as saving tokens and moving to the next page.",
                "View menus by category(delete button is existed) - 등록한 메뉴들을 카테고리별로 조회해서 확인할 수 있습니다. 각 카테고리별로 API를 불러서 카테고리별로 조회할 수 있도록 로직을 구현했습니다. 그리고 각 메뉴별로 삭제 버튼을 만들어 필요없는 메뉴는 삭제가 가능하도록 했습니다. / You can check the registered menus by category. We implemented logic so that you can inquire by category by calling API for each category. And by creating a delete button for each menu, menus that are not needed can be deleted.",
                "Detailed Menu Inquiry - 선택한 메뉴의 가격, 이름, 이미지 등의 정보를 조회하고 확인 할 수 있습니다. / You can inquire and check information such as price, name, and image of the selected menu.",
                "Register menu - 등록하고 싶은 메뉴의 정보를 기입해 등록할 수 있습니다. / You can register by filling out the information on the menu you want to register.",
                "Change password - 비밀번호를 변경하고 싶다면 원하는 비밀번호로 변경할 수 있습니다. 비밀번호 확인 란에서 입력한 비밀번호와 일치하는지 각 usestate를 비교하여 판단할 수 있도록 했습니다. / If you want to change the password, you can change it to the password you want. We compared each usestate to determine if it matches the password entered in the password check box."
            ]
        },
        {
            id: 1,
            koreanTitle: "학교 내 외국인 학생들을 위한 모바일 앱",
            englishTitle: "Mobile app for international students in university",
            koreanContent: "학교 내에 있는 외국인 학생(유학생 및 교환학생)들을 위하여 필요한 정보들을 담고 공유할 수 있는 앱을 기획하고 개발했습니다. 실제로 우리 학교에 다녀 온 외국인 학생에게 불편한 점을 물어보고 이를 수용해 정보를 담을 수 있도록 했습니다. 학교를 경험한 외국인 학생들이 리뷰를 남기고 정보를 공유할 수 있고, 외국인 학생들끼리 중고 거래를 할 수 있으며 가능한 언어가 기재되어있는 편의 시설 등을 확인할 수 있도록 했습니다. Flutter로 진행했던 프로젝트 중에 가장 완성도가 높았던 프로젝트였습니다.",
            englishContent: "We planned and developed an app that can contain and share necessary information for foreign students (students and exchange students) in the school. In fact, we asked foreign students who attended our school about their inconveniences and accepted them so that they could contain information. We allowed foreign students who have experienced school to leave reviews, share information, conduct second-hand transactions among foreign students, and check convenience facilities with possible languages. It was the most complete project I worked on with Flutter.",
            dataAndType: "2024.09 해커톤 (hackathon)",
            framework: "Framework - Flutter",
            isGithub: 1,
            GithubLink: "https://github.com/ohyatt/knu_mingle",
            BlogLink: "",
            images: ["/images/mingle1.png", "/images/mingle2.png", "/images/mingle3.png", "/images/mingle4.png", "/images/mingle5.png"],
            imageDetail: ["User register - email 중복 확인 등 email 인증 등의 기능을 API를 통해 로직을 구현하고 여러가지 정보들을 기입한 후 사용자를 등록할 수 있습니다. / Functions such as email authentication such as email duplication verification can be implemented through API, and users can register after filling out various information.",
                "Review check - 작성한 리뷰를 카드로 확인할 수 있습니다. 설명란에 일정 라인 수가 넘어가면 ‘…’으로 처리되고 해당 카드를 눌렀을 때 modal로 전체 내용을 확인할 수 있습니다. image가 있다면 슬라이드 형태로 넘기면서 확인할 수 있도록 하여 사용자 입장에서 보기 편하게 했습니다. 또한 카테고리별 조회가 가능하고 제목을 검색해서 조회가 가능하도록 했습니다. 그리고  별점순, 날짜 순으로 정렬이 가능하게 만들었습니다./ You can check the reviews you've written with your card. If there are more than a certain number of lines in the comment box, '...It is processed as ' and when you press the card, you can check the entire contents with modal. If there is an image, it can be viewed in the form of a slide, making it easier for users to see it. In addition, it is possible to look up by category and search for titles. And we made it possible to sort it in order of stars and dates.",
                "Market check - 작성된 마켓의 게시물을 게시판 형태로 확인할 수 있습니다. 게시판 형태에서 예약 여부(status)를 확인할 수 있고 국적도 확인할 수 있습니다. 제목 검색으로 조회를 할 수 있고 게시물 등록한 사용자의 국적으로 조회할 수 있습니다. / You can check the posts on the created market in the form of a bulletin board. You can check the status of the reservation in the form of the bulletin board and also check the nationality. You can look up by searching for the title and by the nationality of the user who registered the post.",
                "Market detail check - 작성된 마켓의 게시물을 상세하게 확인할 수 있습니다. 작성자는 예약 상태를 설정할 수 있습니다. 그리고 게시물에 댓글을 작성할 수 있습니다. / You can check the posts in the created market in detail. Authors can set the status of the reservation. And they can write comments on the posts.",
                "Map - 외국인들이 이용할 수 있는 편의 시설의 마커가 찍혀있는 지도입니다. / It is a map with markers of convenience facilities available to foreigners."
            ]
        },
        {
            id: 2,
            koreanTitle: "낙상 예방 관련 모바일 앱 및 낙상 예방 관련 모바일 앱 관리자 웹 페이지",
            englishTitle: "Fall prevention related mobile app and fall prevention related mobile app administrator web page",
            koreanContent: "노인 분들의 낙상 예방 및 관리를 위해 만들어진 모바일 앱과 회사 내 데이터 관리를 용이하게 하기 위해 웹사이트를 제작하는 프로젝트를 진행했습니다. 회사 내 직원이 사용자들의 권한을 부여할 수 있도록 하고 낙상 예방 설문조사 등의 데이터를 확인 및 다운로드할 수 있도록 만들었습니다. 또한 등록되어있는 설문 조사에서 문항을 수정할 수 있고 추가 및 삭제할 수 있는 기능을 만들었습니다. 로그인 시 토큰을 유지하고 로그인을 유지하는 방법을 배웠고 개인적으로 좀 더 심화된 부분을 배울 수 있었던 프로젝트였습니다. 모바일 애플리케이션은 실제 사용자들 또는 회사와 계약된 구청에서 사용하기 위해 개발했습니다. 기존에 있던 버전의 앱에서 UI를 조금 더 최적화하여 개발했습니다. 가장 큰 초점은 관리자 웹 페이지에서 수정한 권한이 앱에서 알맞게 적용되어 로그인 되는지, 그리고 그 권한에 맞게 원하는 기능들을 불러오는지가 초점이었습니다. 기존에 Flutter를 사용해본 적은 있었지만 조금 더 체계적으로 배울 수 있었던 프로젝트였습니다.",
            englishContent: " worked on a project to create a mobile app created for the prevention and management of falls for the elderly and a website to facilitate data management within the company. We made it possible for employees within the company to empower users and to check and download data such as fall prevention surveys. It was a project where I learned how to keep tokens and keep logins when I logged in, and I was able to learn more deeply about it personally. I worked on a project to create a mobile app created for the prevention and management of falls for the elderly and a website to facilitate data management within the company. We made it possible for employees within the company to empower users and to check and download data such as fall prevention surveys. We also created a function to modify, add, and delete questions in registered surveys. It was a project that allowed us to learn how to maintain tokens and keep logins when logging in, and to learn more deeply about it personally.",
            dataAndType: "2024.03 - 2024.07 수업 내 프로젝트 및 현장실습 (Project in course and Field training)",
            framework: "Framework - React, Flutter",
            isGithub: 0,
            GithubLink: "회사 내 private repository라서 공개가 불가합니다. It is a private repository within the company, so it cannot be disclosed.",
            BlogLink: "",
            images: ["/images/NoImage.png"],
            imageDetail: []
        },
    ]);


    const project = projects.find((project) => project.id === parseInt(id));
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const [selectedImageIndex, setSelectedImageIndex] = useState(null); // 현재 선택된 이미지 인덱스
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 여부

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setScrollLeft(e.currentTarget.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - e.currentTarget.offsetLeft;
        const walk = (x - startX) * 2; // 스크롤 속도 조정
        e.currentTarget.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        setIsModalOpen(false);
    };

    return (
        <div className="allFrame1">
            <div className="koreanTitleFrame1">
                <div className="koreanTitle1">
                    <p>{project.koreanTitle}</p>
                </div>
                <div className="enlgishTitle1">
                    <p>{project.englishTitle}</p>
                </div>
            </div>
            <div className="rowFrame1">
                <div className="contentFrame1">
                    <div className="dataAndtype1">{project.dataAndType}</div>
                    <div className="koreanContent1">{project.koreanContent}</div>
                    <div className="englishContent1">{project.englishContent}</div>
                </div>
                <div className="nextFrame1">
                    <div className="frameworkFrame1">{project.framework}</div>
                    <div className="githubLink1">
                        {project.isGithub ? <a href={project.GithubLink} target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}>GitHub Link</a> : <p>{project.GithubLink}</p>}
                    </div>
                    <div className="blogLink1">
                        {project.BlogLink && <a href={project.BlogLink} target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}>Blog Link</a>}
                    </div>
                    <div className="imageFrame12">
                        <div
                            className="imageFrame1 slider"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUpOrLeave}
                            onMouseLeave={handleMouseUpOrLeave}
                        >
                            {project.images.length > 0 ? (
                                project.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="slider-image"
                                        onClick={() => openModal(index)}
                                    />
                                ))
                            ) : (
                                <p>No image available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modalOverlay" onClick={closeModal}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={project.images[selectedImageIndex]}
                            alt={`Modal Slide ${selectedImageIndex + 1}`}
                            className="modalImage"
                        />
                        <p className="imageDetail">{project.imageDetail[selectedImageIndex]}</p>
                        <button onClick={closeModal}>닫기 Close</button>
                    </div>
                </div>
            )}
            <div className="bottom" onClick={() => navigate("/Project")}>
                {project.koreanTitle}<br />{project.englishTitle}
            </div>
        </div>
    );
};

export default DetailProjectFrame;