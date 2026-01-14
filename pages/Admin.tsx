
import React, { useState } from 'react';
import { LayoutDashboard, Users, FileText, Settings, LogOut, Plus, Search, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { INITIAL_LEADS, SERVICES } from '../constants';
import { LeadStatus } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { gemini } from '../services/geminiService';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('leads');
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [isGenerating, setIsGenerating] = useState(false);

  const statsData = [
    { name: 'Mon', leads: 4 },
    { name: 'Tue', leads: 7 },
    { name: 'Wed', leads: 5 },
    { name: 'Thu', leads: 12 },
    { name: 'Fri', leads: 8 },
  ];

  const handleStatusChange = (id: string, status: LeadStatus) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
  };

  const Sidebar = () => (
    <div className="w-64 bg-black border-r border-white/10 flex flex-col h-screen fixed left-0 top-0">
      <div className="p-8 border-b border-white/10">
        <h1 className="text-xl font-black font-sora tracking-tighter"><span className="text-orange-brand">Q</span>ONQAIT ADMIN</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {[
          { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
          { id: 'leads', label: 'Lead Center', icon: Users },
          { id: 'content', label: 'CMS', icon: FileText },
          { id: 'settings', label: 'Settings', icon: Settings },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === item.id ? 'bg-orange-brand text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <item.icon size={18} /> {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10">
        <button onClick={() => window.location.href = '#/'} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10">
          <LogOut size={18} /> Exit Admin
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-10">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold capitalize">{activeTab}</h2>
          <div className="flex gap-4">
            <button className="bg-white/5 border border-white/10 p-2 rounded-md text-gray-400 hover:text-white"><Mail size={20}/></button>
            <div className="w-10 h-10 rounded-full bg-orange-brand flex items-center justify-center font-bold">A</div>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: 'Total Leads', val: '142', change: '+12%' },
                { label: 'Conversion', val: '18.4%', change: '+2.1%' },
                { label: 'Open Audits', val: '7', change: 'Stable' },
                { label: 'ROI (Avg)', val: '52%', change: '+5%' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold mb-2">{stat.val}</p>
                  <p className={`text-xs ${stat.change.includes('+') ? 'text-green-500' : 'text-gray-500'}`}>{stat.change} vs last month</p>
                </div>
              ))}
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl h-[400px]">
              <h3 className="text-lg font-bold mb-6">Lead Velocity</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="name" stroke="#555" />
                  <YAxis stroke="#555" />
                  <Tooltip contentStyle={{ background: '#111', border: '1px solid #333' }} />
                  <Bar dataKey="leads" fill="#FF6600" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input placeholder="Search leads..." className="bg-black/40 border border-white/10 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-orange-brand" />
              </div>
              <button className="bg-orange-brand text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2"><Plus size={16}/> New Lead</button>
            </div>
            <table className="w-full text-left">
              <thead className="bg-white/5 text-xs uppercase tracking-widest text-gray-500 font-bold">
                <tr>
                  <th className="p-4">Name/Company</th>
                  <th className="p-4">Context</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {leads.map(lead => (
                  <tr key={lead.id} className="hover:bg-white/[0.02]">
                    <td className="p-4">
                      <div className="font-bold">{lead.name}</div>
                      <div className="text-xs text-gray-500">{lead.company}</div>
                    </td>
                    <td className="p-4 text-sm">
                      <div className="text-gray-300">{lead.industry}</div>
                      <div className="text-[10px] text-orange-brand/70">{lead.currentSystem}</div>
                    </td>
                    <td className="p-4 text-xs text-gray-500">{lead.date}</td>
                    <td className="p-4">
                      <select 
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                        className={`text-[10px] font-bold uppercase py-1 px-2 rounded border border-white/10 bg-black/50 ${lead.status === LeadStatus.NEW ? 'text-blue-400' : 'text-green-400'}`}
                      >
                        {Object.values(LeadStatus).map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                    <td className="p-4">
                      <button className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={16}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Blog Manager</h3>
                <button className="bg-orange-brand text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2"><Plus size={16}/> New Post</button>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'The Future of ERP in SA', date: 'May 12, 2024' },
                  { title: '90-Day AI Roadmap Guide', date: 'May 10, 2024' }
                ].map((post, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-black/40 border border-white/5 rounded-lg">
                    <div>
                      <h4 className="font-bold">{post.title}</h4>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={async () => {
                          setIsGenerating(true);
                          const meta = await gemini.generateMetaDescription(post.title, "Exploring transformation trends.");
                          alert(`AI Generated Meta: ${meta}`);
                          setIsGenerating(false);
                        }}
                        disabled={isGenerating}
                        className="p-2 rounded bg-white/5 hover:bg-orange-brand/20 text-orange-brand border border-orange-brand/20 transition-all flex items-center gap-2 text-xs"
                      >
                        <Sparkles size={14} /> {isGenerating ? 'Analyzing...' : 'AI Meta Assist'}
                      </button>
                      <button className="p-2 rounded bg-white/5 hover:bg-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest px-4">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
