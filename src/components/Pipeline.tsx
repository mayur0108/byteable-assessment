import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, Plus, DollarSign, Calendar } from 'lucide-react';

const stages = [
  { id: 'discovery', title: 'Discovery', color: '#9E7FFF' },
  { id: 'proposal', title: 'Proposal', color: '#38bdf8' },
  { id: 'negotiation', title: 'Negotiation', color: '#f472b6' },
  { id: 'closed', title: 'Closed Won', color: '#10b981' },
];

const deals = [
  { id: 1, company: 'Nike', deal: 'Q4 Brand Campaign', value: '$120,000', stage: 'discovery', date: 'Oct 24' },
  { id: 2, company: 'Airbnb', deal: 'Summer Launch', value: '$85,000', stage: 'proposal', date: 'Oct 28' },
  { id: 3, company: 'Tesla', deal: 'Model 3 Refresh', value: '$250,000', stage: 'negotiation', date: 'Nov 02' },
  { id: 4, company: 'Spotify', deal: 'Wrapped 2025', value: '$45,000', stage: 'discovery', date: 'Oct 30' },
];

export const Pipeline: React.FC = () => {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Sales Pipeline</h1>
          <p className="text-textSecondary mt-1">Drag and drop deals to update stages and trigger automations.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-glow">
          <Plus size={20} />
          New Deal
        </button>
      </div>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-6 custom-scrollbar">
        {stages.map((stage) => (
          <div key={stage.id} className="flex-shrink-0 w-80 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stage.color }} />
                <h3 className="font-semibold text-sm uppercase tracking-wider text-textSecondary">{stage.title}</h3>
                <span className="bg-surface px-2 py-0.5 rounded-md text-xs text-textSecondary">
                  {deals.filter(d => d.stage === stage.id).length}
                </span>
              </div>
              <button className="text-textSecondary hover:text-text">
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className="flex-1 bg-surface/30 rounded-2xl p-3 border border-border/50 space-y-3">
              {deals.filter(d => d.stage === stage.id).map((deal) => (
                <motion.div
                  key={deal.id}
                  layoutId={String(deal.id)}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 cursor-grab active:cursor-grabbing"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">
                      {deal.company}
                    </span>
                    <button className="text-textSecondary hover:text-text">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                  <h4 className="font-semibold mb-4">{deal.deal}</h4>
                  <div className="flex items-center justify-between text-sm text-textSecondary">
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} />
                      <span>{deal.value}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{deal.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              <button className="w-full py-3 border-2 border-dashed border-border rounded-xl text-textSecondary hover:text-text hover:border-textSecondary transition-all text-sm font-medium">
                + Add Deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
