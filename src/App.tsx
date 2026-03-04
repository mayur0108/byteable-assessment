import React from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Pipeline } from './components/Pipeline';
import { useStore } from './store/useStore';

export default function App() {
  const { activeTab } = useStore();

  return (
    <Layout>
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'pipeline' && <Pipeline />}
      {activeTab === 'clients' && (
        <div className="flex items-center justify-center h-[60vh] text-textSecondary">
          Client Database View Coming Soon
        </div>
      )}
      {activeTab === 'analytics' && (
        <div className="flex items-center justify-center h-[60vh] text-textSecondary">
          Advanced Analytics View Coming Soon
        </div>
      )}
    </Layout>
  );
}
