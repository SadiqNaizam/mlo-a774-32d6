import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  UserRound,
  FileText,
  Receipt,
  Package,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  CircleDot,
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, isActive = false, onClick }) => (
  <li>
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md transition-colors',
        isActive
          ? 'bg-background text-primary shadow-sm'
          : 'text-sidebar-foreground hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5'
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  </li>
);

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const mainNavItems = [
    { icon: LayoutGrid, label: 'Dashboard', isActive: true },
    { icon: Users, label: 'Leads' },
    { icon: UserRound, label: 'Customers' },
    { icon: FileText, label: 'Proposals' },
    { icon: Receipt, label: 'Invoices' },
    { icon: Package, label: 'Items' },
    { icon: Mail, label: 'Mail' },
    { icon: Archive, label: 'Shoebox' },
    { icon: CalendarDays, label: 'Calendar' },
  ];

  const secondaryNavItems = [
    { icon: HelpCircle, label: 'Help' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      <aside
        className={cn(
          'fixed top-0 left-0 h-screen w-64 bg-sidebar flex flex-col z-40',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:translate-x-0'
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-black/10 dark:border-white/10">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <CircleDot className="h-6 w-6" />
            </div>
             <span className="font-bold text-lg text-foreground">Dashboard</span>
          </div>
        </div>
        <nav className="flex-1 flex flex-col justify-between p-4">
          <ul className="space-y-2">
            {mainNavItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
          <ul className="space-y-2">
            {secondaryNavItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
        </nav>
      </aside>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
