// Layout.js
import React from 'react';
import Header from './Header';
import Sidebar from './Siderbar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 h-screen w-screen overflow-hidden">
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full h-full">
          <Navbar />
          <main className="p-4 w-full min-h-10 ">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
