import React, {useState} from 'react';
import styles from "./ResponsiveNavBar.module.css"
import menu_btn_img from "./img/ResposiveNavBar/menu-btn.png";

type mobileMenu = {
  marginLeft?: number
  state: boolean
}

export default function ResponsiveNavBar() {
  const [mobileMenu, setmobileMenu] = useState<mobileMenu>({ state: false });
  const handleClick = () => {
    if(!mobileMenu.state) {
      setmobileMenu({ marginLeft: 0, state: true });
    } else {
      setmobileMenu({ state: false });
    }
  };

  return (
    <>
      <nav className = {styles.navbar}>
        <a href="#" className = {styles.logo}>ADVENTURE</a>
        <div className = {styles.navLinks} style={mobileMenu}>
          <ul>
            <li className = {styles.active}><a href="#">Home</a></li>
            <li><a href="#">Adventures</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Infos</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <img src={menu_btn_img} alt="menu-btn" onClick={handleClick} className ={styles.menuHamberger} />
      </nav>
      <header></header>
    </>
  );
}