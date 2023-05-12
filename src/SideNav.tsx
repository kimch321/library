import React, {useState} from 'react';
import './SideNav.css';
import {RiFileListLine, RiQuestionAnswerLine, RiUser5Line} from "react-icons/ri";
import {BiChalkboard} from "react-icons/bi";
import {FaChalkboardTeacher} from "react-icons/fa";
import {IoStarHalf} from "react-icons/io5";
import {MdOutlineDashboard} from "react-icons/md";
import {TbPigMoney} from "react-icons/tb";

export default function SideNav() {
    const [sideOpen, setSideOpen] = useState('close');
    const [activeLi, setActiveLi] = useState(0);

    const handleClick = () => {
        (sideOpen === 'close') ?  setSideOpen('open') : setSideOpen('close')
    };

    return (
    <div className={`navigation ${sideOpen}`}>
      <div className={`menuToggle`} onClick={handleClick}>
      </div>
        <ul>
            <li className={`list ${activeLi === 0 ? 'active' : ''}`}
                onClick={() => setActiveLi(0)}>
                <a href="#">
                    <span className={`icon`} style={{'--clr': '#f44336'} as React.CSSProperties}>
                        <MdOutlineDashboard />
                    </span>
                    <span className={`text`}>HOME</span>
                </a>
            </li>
            <li className={`list ${activeLi === 1 ? 'active' : ''}`}
                onClick={() => setActiveLi(1)}>
                <a href="#">
                    <span className={`icon`} style={{'--clr': '#ffa117'} as React.CSSProperties}>
                        <RiUser5Line />
                    </span>
                    <span className={`text`}>나의 정보</span>
                </a>
            </li>
            <li className={`list ${activeLi === 2 ? 'active' : ''}`}
                onClick={() => setActiveLi(2)}>
                <a href="#">
                    <span className={`icon`} style={{'--clr': '#0fc70f'} as React.CSSProperties}>
                        <BiChalkboard />
                    </span>
                    <span className={`text`}>공지사항 관리</span>
                </a>
            </li>
            <li className={`list ${activeLi === 3 ? 'active' : ''}`}
                onClick={() => setActiveLi(3)}>
                <a href="#">
                    <span className={`icon`} style={{'--clr': '#2196f3'} as React.CSSProperties}>
                        <FaChalkboardTeacher />
                    </span>
                    <span className={`text`}>원데이클래스</span>
                </a>
            </li>
            <li className={`list ${activeLi === 4 ? 'active' : ''}`}
                onClick={() => setActiveLi(4)}>
                <a href="#">
                    <span className={`icon`} style={{'--clr': '#7986cb'} as React.CSSProperties}>
                       <RiQuestionAnswerLine />
                    </span>
                    <span className={`text`}>문의 관리</span>
                </a>
            </li>
            <li className={`list ${activeLi === 5 ? 'active' : ''}`}
                onClick={() => setActiveLi(5)}>
                <a href="#">
                    <span className={`icon`} style={{'--clr': '#b145e9'} as React.CSSProperties}>
                        <IoStarHalf />
                    </span>
                    <span className={`text`}>리뷰 관리</span>
                </a>
            </li>
            <li className={`list ${activeLi === 6 ? 'active' : ''}`}
                onClick={() => setActiveLi(6)}>
                <a href="#">
                    <span className={`icon`} style={{'--clr': '#c5e1a5'} as React.CSSProperties}>
                        <RiFileListLine />
                    </span>
                    <span className={`text`}>판매 내역</span>
                </a>
            </li>
            <li className={`list ${activeLi === 7 ? 'active' : ''}`}
                onClick={() => setActiveLi(7)}>
                <a href="#">
                    <span className={`icon`} style={{'--clr': '#e57373'} as React.CSSProperties}>
                        <TbPigMoney />
                    </span>
                    <span className={`text`}>정산 내역</span>
                </a>
            </li>
        </ul>
    </div>
  );
}