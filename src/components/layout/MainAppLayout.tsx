import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={handleToggleSidebar} />

      <div className="lg:pl-64 flex flex-col h-full">
        <Header onMenuClick={handleToggleSidebar} />
        <main className="flex-1 px-6 py-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
