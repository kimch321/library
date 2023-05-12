import React from 'react';

export default function AdminSidebar() {

    return (
    <div className={"sidebarContainer"}>
      <div>
        <a>
          <span>
              admin page
          </span>
        </a>
      </div>
      <ul>
          <li>HOME</li>
          <li>나의 정보</li>
          <li>내 클래스 공지사항</li>
          <li>클래스 등록</li>
          <li>클래스 관리</li>
          <li>문의 관리</li>
          <li>리뷰 관리</li>
          <li>정산 내역</li>
      </ul>
    </div>


    );
}