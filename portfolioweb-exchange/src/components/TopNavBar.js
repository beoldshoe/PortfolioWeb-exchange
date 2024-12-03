import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/TopNavBar.css';

const TopNavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const renderFirstPhaseText = () => {
        const path = location.pathname;
        if (path === "/Introduce") {
            return (
                <>
                    소개면<br />The Introduce Page
                </>
            );
        } else if (path.startsWith("/Project")) {
            return (
                <>
                    프로젝트면<br />The Project Page
                </>
            );
        }
        return null;
    };

    return (
        <div className="navbarFrame">
            <nav className="topnavbar" onClick={openModal}>
                나는 할 수 있다, I can do
            </nav>
            {isModalOpen && (
                <>
                    <div className="modalOverlay" onClick={closeModal}></div>
                    <div className="modal">
                        <h2 className="modalTitle">만들어진 배경 The background that was made</h2>
                        <p>'신문'은 대중들에게 정보를 전달하고 세상에 관한 내용을 습득할 수 있는 권리를 보장하도록 해줍니다.<br /></p>
                        <p>이를 본 따, 신문의 형태로 '김현수'의 정보를 전달하고자 하는 의도가 담겨져 있습니다.<br /><br /></p>
                        <p>Newspapers guarantee the public the right to communicate information and learn about the world.<br /></p>
                        <p>Based on this, it contains the intention to deliver Hyunsoo KIM's information in the form of a newspaper.<br /></p>
                        <button onClick={closeModal}>닫기 Close</button>
                    </div>
                </>
            )}
            <div className="phaseFrame">
                <div className="firstPhase">
                    {renderFirstPhaseText()}
                </div>
                <div className='secondPhase'>
                    김현수<br />Hyunsoo KIM
                </div>
            </div>
        </div>
    );
};

export default TopNavBar;