import React from 'react';
import Sidebar from '../ui/dashboard/Sidebar/sidebar.jsx';
import Navbar from '../ui/dashboard/Navbar/navbar.jsx';

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
