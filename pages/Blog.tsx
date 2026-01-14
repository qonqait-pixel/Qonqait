
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, GlassCard, Button } from '../components/UI';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "The 90-Day AI ROI Framework for SAP Environments",
      excerpt: "How South African enterprises are bypassing multi-year migration cycles to achieve immediate efficiency gains using autonomous agents.",
      date: "May 12, 2024",
      author: "Lindiwe Dlamini",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Bridging Legacy Sage X3 with Modern LLMs",
      excerpt: "Techniques for implementing secure API layers that allow generative AI to interact with sensitive financial data without compromising POPIA compliance.",
      date: "May 08, 2024",
      author: "Kabelo Mokoena",
      category: "Technical",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4628c6bb5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          subtitle="Enterprise Insights" 
          title="Thought Leadership in AI & ICT" 
        />

        {/* AI-Inspired Featured Image Section */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden group border border-white/10"
          >
            {/* The AI Inspired Picture */}
            <img 
              src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=1600" 
              alt="AI Neural Network Transformation" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-3xl">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-brand text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                Featured Insight
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Architecting the Autonomous Enterprise: From Data Silos to Intelligence Streams
              </h2>
              <p className="text-gray-300 text-lg mb-8 line-clamp-2">
                A deep dive into how QONQAIT is redefining the digital foundation for the next generation of African business leaders.
              </p>
              <Button>Read Article <ArrowRight size={18} /></Button>
            </div>
          </motion.div>
        </section>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {posts.map((post, i) => (
            <GlassCard key={i} className="!p-0 overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-[10px] uppercase tracking-widest text-orange-brand font-bold">
                  <span className="flex items-center gap-1"><Tag size={12}/> {post.category}</span>
                  <span className="flex items-center gap-1 text-gray-500"><Calendar size={12}/> {post.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-brand transition-colors">{post.title}</h3>
                <p className="text-gray-400 mb-8 flex-1">{post.excerpt}</p>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{post.author}</span>
                  </div>
                  <button className="text-sm font-bold uppercase tracking-widest hover:text-orange-brand transition-colors flex items-center gap-2">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
