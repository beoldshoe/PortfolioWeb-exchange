import '../styles/FirstPage.css'
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";

const FirstPage = () => {

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [selectedOption, setSelectedOption] = useState(null);

    const handleConfirm = () => {
        if (selectedOption === "Option1") {
            navigate("/Project/0");
        } else if (selectedOption === "Option2") {
            navigate("/Project/1");
        } else if (selectedOption === "Option3") {
            navigate("/Project/2");
        } else {
            alert("옵션을 선택해주세요!");
        }
    };

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
                        <p className='navText' onClick={openModal}>
                            About Detail Project
                        </p>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <>
                    <div className="modalOverlay1" onClick={closeModal}></div>
                    <div className="modal1">
                        <div className="options">
                            <label className='input'>
                                <input
                                    type="radio"
                                    name="option"
                                    value="Option1"
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                /> 웹캠을 이용한 사용자별 메뉴 추천 키오스크
                            </label>
                            <label className='input'>
                                <input
                                    type="radio"
                                    name="option"
                                    value="Option2"
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                /> 학교 내 외국인 학생들을 위한 모바일 앱
                            </label>
                            <label className='input'>
                                <input
                                    type="radio"
                                    name="option"
                                    value="Option3"
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                /> 낙상 예방 관련 모바일 앱 및 낙상 예방 관련 모바일 앱 관리자 웹 페이지
                            </label>
                        </div>
                        <div className="buttons">
                            <button onClick={closeModal}>닫기 Close</button>
                            <button
                                className='confirmButton'
                                onClick={handleConfirm}>확인 Confirm</button>
                        </div>
                    </div>
                </>
            )}
        </div>

    )
}

export default FirstPage;