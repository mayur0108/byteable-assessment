import { create } from 'zustand';

interface AppState {
  activeTab: 'dashboard' | 'pipeline' | 'clients' | 'analytics';
  setActiveTab: (tab: 'dashboard' | 'pipeline' | 'clients' | 'analytics') => void;
}

export const useStore = create<AppState>((set) => ({
  activeTab: 'dashboard',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
