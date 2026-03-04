import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const data = [
  { name: 'Jan', value: 4000, spend: 2400 },
  { name: 'Feb', value: 3000, spend: 1398 },
  { name: 'Mar', value: 2000, spend: 9800 },
  { name: 'Apr', value: 2780, spend: 3908 },
  { name: 'May', value: 1890, spend: 4800 },
  { name: 'Jun', value: 2390, spend: 3800 },
  { name: 'Jul', value: 3490, spend: 4300 },
];

const StatCard = ({ title, value, change, icon: Icon, trend }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-card p-6"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-primary/10 rounded-xl">
        <Icon className="text-primary" size={24} />
      </div>
      <div className={`flex items-center gap-1 text-sm font-medium ${trend === 'up' ? 'text-success' : 'text-error'}`}>
        {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        {change}
      </div>
    </div>
    <h3 className="text-textSecondary text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </motion.div>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Agency Overview</h1>
        <p className="text-textSecondary mt-1">Welcome back, Alex. Here's what's happening today.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Pipeline" value="$1.2M" change="+12.5%" icon={Target} trend="up" />
        <StatCard title="Active Clients" value="48" change="+3" icon={Users} trend="up" />
        <StatCard title="Monthly Spend" value="$84.2k" change="-2.4%" icon={DollarSign} trend="down" />
        <StatCard title="Avg. ROAS" value="4.2x" change="+0.8" icon={TrendingUp} trend="up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="text-lg font-semibold mb-6">Revenue vs Ad Spend</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9E7FFF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#9E7FFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2F2F2F" vertical={false} />
                <XAxis dataKey="name" stroke="#A3A3A3" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#A3A3A3" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#262626', border: '1px solid #2F2F2F', borderRadius: '12px' }}
                  itemStyle={{ color: '#FFFFFF' }}
                />
                <Area type="monotone" dataKey="value" stroke="#9E7FFF" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-6">Lead Sources</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2F2F2F" vertical={false} />
                <XAxis dataKey="name" stroke="#A3A3A3" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#262626', border: '1px solid #2F2F2F', borderRadius: '12px' }}
                />
                <Bar dataKey="value" fill="#38bdf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
