import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AnimatedLoginForm from "./components/AnimatedLoginForm/AnimatedLoginForm";
import ResponsiveNavBar from "./components/ResponsiceNavBar/ResponsiveNavBar";
import ResponsiveAdminDashboard from "./ResponsiveAdminDashboard";
import SideNav from "./SideNav";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SideNav />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
