import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, Plus, MessageSquare, Paperclip } from 'lucide-react';

const columns = [
  { id: 'leads', title: 'New Leads', count: 5 },
  { id: 'contacted', title: 'Contacted', count: 3 },
  { id: 'proposal', title: 'Proposal Sent', count: 2 },
  { id: 'onboarding', title: 'Onboarding', count: 4 },
];

const DealCard = ({ name, company, value, tags }: any) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-surface border border-border p-4 rounded-xl cursor-grab active:cursor-grabbing hover:border-primary/50 transition-colors group"
  >
    <div className="flex justify-between items-start mb-3">
      <h4 className="font-medium text-sm">{name}</h4>
      <button className="text-textSecondary opacity-0 group-hover:opacity-100 transition-opacity">
        <MoreHorizontal size={16} />
      </button>
    </div>
    <p className="text-xs text-textSecondary mb-4">{company}</p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag: string) => (
        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
          {tag}
        </span>
      ))}
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-border">
      <div className="flex items-center gap-3 text-textSecondary">
        <div className="flex items-center gap-1">
          <MessageSquare size={12} />
          <span className="text-[10px]">3</span>
        </div>
        <div className="flex items-center gap-1">
          <Paperclip size={12} />
          <span className="text-[10px]">1</span>
        </div>
      </div>
      <span className="text-xs font-bold text-primary">{value}</span>
    </div>
  </motion.div>
);

export const Pipeline: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Sales Pipeline</h1>
          <p className="text-textSecondary mt-1">Manage your lead flow and automation triggers.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all shadow-glow">
          <Plus size={20} />
          <span className="font-medium">Add Deal</span>
        </button>
      </header>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-4 custom-scrollbar">
        {columns.map((col) => (
          <div key={col.id} className="flex-shrink-0 w-80 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{col.title}</h3>
                <span className="bg-surface text-textSecondary text-xs px-2 py-0.5 rounded-full border border-border">
                  {col.count}
                </span>
              </div>
              <button className="text-textSecondary hover:text-text">
                <Plus size={18} />
              </button>
            </div>
            
            <div className="flex-1 bg-surface/30 rounded-2xl p-3 border border-dashed border-border flex flex-col gap-3">
              {col.id === 'leads' && (
                <>
                  <DealCard name="TechFlow SaaS" company="Cloud Infrastructure" value="$12,000" tags={['High Intent', 'SEO']} />
                  <DealCard name="Urban Eats" company="Restaurant Chain" value="$4,500" tags={['Social Ads']} />
                </>
              )}
              {col.id === 'proposal' && (
                <DealCard name="Nexus Gaming" company="E-sports Org" value="$25,000" tags={['Influencer', 'Branding']} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
