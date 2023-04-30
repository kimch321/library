import React from 'react';
import Styles from "./ResponsiveAdminDashboard.module.css"
import Navigation from "./components/ResponsiveAdminDashboard/Navigation";


export default function ResponsiveAdminDashboard() {
  return (
    <div className={Styles.container}>
      <Navigation />
    </div>
  );
}