import React, {useState} from 'react';
import './SideNav.css';

export default function SideNav() {
    const [sideOpen, setSideOpen] = useState('close');

    const handleClick = () => {
        (sideOpen === 'close') ?  setSideOpen('open') : setSideOpen('close')
    };
    return (
    <div className={`navigation ${sideOpen}`}>
      <div className={`menuToggle`} onClick={handleClick}>
      </div>
        <ul>
            <li className={`list`}>
                <a href="#">
                    <span className={`icon`}></span>
                    <span className={`text`}>나의 정보</span>
                </a>
            </li>
            <li className={`list`}>
                <a href="#">
                    <span className={`icon`}></span>
                    <span className={`text`}>공지사항 관리</span>
                </a>
            </li>
            <li className={`list`}>
                <a href="#">
                    <span className={`icon`}></span>
                    <span className={`text`}>원데이클래스</span>
                </a>
            </li>
            <li className={`list`}>
                <a href="#">
                    <span className={`icon`}></span>
                    <span className={`text`}>문의 관리</span>
                </a>
            </li>
            <li className={`list`}>
                <a href="#">
                    <span className={`icon`}></span>
                    <span className={`text`}>리뷰 관리</span>
                </a>
            </li>
            <li className={`list`}>
                <a href="#">
                    <span className={`icon`}></span>
                    <span className={`text`}>판매 내역</span>
                </a>
            </li>
            <li className={`list`}>
                <a href="#">
                    <span className={`icon`}></span>
                    <span className={`text`}>정산 내역</span>
                </a>
            </li>
        </ul>
    </div>
  );
}