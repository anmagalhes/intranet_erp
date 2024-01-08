import React from 'react';
import Sidebar from '../ui/dashboard/Sidebar/sidebar.jsx';
import Navbar from '../ui/dashboard/Navbar/navbar.jsx';

import style from '../ui/dashboard/dashboard.module.css';

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <Sidebar />
      </div>
      <div className={style.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
