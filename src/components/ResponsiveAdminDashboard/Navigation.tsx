import React from 'react';
import styles from "./Navigation.module.css"
import IonIcon from '@reacticons/ionicons';

export default function Navigation() {
  return (
        <div className={styles.navigation}>
            <ul>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IonIcon name="logo-apple" className={styles.IonIcon}></IonIcon></span>
                        <span className={styles.title}>Brand Name</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IonIcon name="home-outline" className={styles.IonIcon}></IonIcon></span>
                        <span className={styles.title}>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IonIcon name="person-outline" className={styles.IonIcon}></IonIcon></span>
                        <span className={styles.title}>Customers</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IonIcon name="chatbubble-outline" className={styles.IonIcon}></IonIcon></span>
                        <span className={styles.title}>Message</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IonIcon name="help-outline" className={styles.IonIcon}></IonIcon></span>
                        <span className={styles.title}>Help</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IonIcon name="settings-outline" className={styles.IonIcon}></IonIcon></span>
                        <span className={styles.title}>Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IonIcon name="lock-closed-outline" className={styles.IonIcon}></IonIcon></span>
                        <span className={styles.title}>Password</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IonIcon name="log-out-outline" className={styles.IonIcon}></IonIcon></span>
                        <span className={styles.title}>Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>

  );
}