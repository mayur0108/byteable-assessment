import React from 'react';
import { 
  LayoutDashboard, 
  Trello, 
  Users, 
  BarChart3, 
  Settings, 
  Bell,
  Search,
  Zap
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { activeTab, setActiveTab } = useStore();

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'pipeline', icon: Trello, label: 'Pipeline' },
    { id: 'clients', icon: Users, label: 'Clients' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  ] as const;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border flex flex-col bg-background/50 backdrop-blur-xl sticky top-0 h-screen">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-glow">
            <Zap className="text-white fill-white" size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">Lumina</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeTab === item.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-textSecondary hover:bg-surface hover:text-text'
              }`}
            >
              <item.icon size={20} className={activeTab === item.id ? 'text-primary' : 'group-hover:scale-110 transition-transform'} />
              <span className="font-medium">{item.label}</span>
              {activeTab === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(158,127,255,0.8)]"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-textSecondary hover:bg-surface hover:text-text transition-all">
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-20 border-b border-border flex items-center justify-between px-8 bg-background/50 backdrop-blur-md sticky top-0 z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" size={18} />
            <input 
              type="text" 
              placeholder="Search deals, clients, or campaigns..." 
              className="w-full bg-surface border border-border rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-textSecondary hover:text-text hover:bg-surface rounded-full transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-background"></span>
            </button>
            <div className="h-8 w-[1px] bg-border mx-2"></div>
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right">
                <p className="text-sm font-medium">Alex Rivera</p>
                <p className="text-xs text-textSecondary">Agency Director</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent p-[2px]">
                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
};
