import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Mon', spend: 4000, leads: 24 },
  { name: 'Tue', spend: 3000, leads: 18 },
  { name: 'Wed', spend: 5000, leads: 32 },
  { name: 'Thu', spend: 2780, leads: 15 },
  { name: 'Fri', spend: 1890, leads: 10 },
  { name: 'Sat', spend: 2390, leads: 12 },
  { name: 'Sun', spend: 3490, leads: 20 },
];

const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-card p-6 flex flex-col gap-4"
  >
    <div className="flex justify-between items-start">
      <div className={`p-3 rounded-xl bg-${color}/10 text-${color}`}>
        <Icon size={24} />
      </div>
      <span className={`text-xs font-medium px-2 py-1 rounded-full bg-success/10 text-success`}>
        {change}
      </span>
    </div>
    <div>
      <p className="text-textSecondary text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
    </div>
  </motion.div>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Agency Overview</h1>
        <p className="text-textSecondary mt-1">Real-time performance across all active campaigns.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Ad Spend" value="$42,850" change="+12.5%" icon={DollarSign} color="primary" />
        <StatCard title="Active Leads" value="156" change="+8.2%" icon={Users} color="secondary" />
        <StatCard title="Conversion Rate" value="3.2%" change="+2.4%" icon={Target} color="accent" />
        <StatCard title="ROAS" value="4.2x" change="+0.5%" icon={TrendingUp} color="success" />
      </div>

      <div className="glass-card p-8 h-[400px]">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-lg font-semibold">Spend vs. Lead Generation</h3>
          <select className="bg-surface border border-border rounded-lg px-3 py-1 text-sm outline-none">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9E7FFF" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#9E7FFF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2F2F2F" vertical={false} />
            <XAxis dataKey="name" stroke="#A3A3A3" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#A3A3A3" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#262626', border: '1px solid #2F2F2F', borderRadius: '12px' }}
              itemStyle={{ color: '#FFFFFF' }}
            />
            <Area type="monotone" dataKey="spend" stroke="#9E7FFF" fillOpacity={1} fill="url(#colorSpend)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
