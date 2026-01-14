
import React from 'react';
import { Hero, TrustBar, Pillars, MethodSection, Stats } from '../sections/HomeSections';
import { SectionTitle, Button, GlassCard } from '../components/UI';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <TrustBar />
      <Pillars />
      <MethodSection />
      
      {/* Case Studies Teaser */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Success Stories" title="Impact That Speaks for Itself" />
          <div className="grid md:grid-cols-2 gap-10">
            <GlassCard className="!p-0 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-orange-brand/20 p-10 flex items-center justify-center">
                <span className="text-8xl font-black text-orange-brand/30">SA</span>
              </div>
              <div className="md:w-3/5 p-10">
                <h3 className="text-2xl font-bold mb-4">Retail Giant Automation</h3>
                <p className="text-gray-400 mb-6">Implementing an AI inventory agent across 200+ stores, resulting in a 25% waste reduction.</p>
                <div className="flex justify-between items-center border-t border-white/10 pt-6">
                  <div>
                    <div className="text-2xl font-bold text-orange-brand">25%</div>
                    <div className="text-[10px] uppercase tracking-tighter text-gray-500">Savings</div>
                  </div>
                  <Button variant="outline" className="!py-2 !px-4 !text-xs">Case Study</Button>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="!p-0 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-white/10 p-10 flex items-center justify-center">
                <span className="text-8xl font-black text-white/10">FIN</span>
              </div>
              <div className="md:w-3/5 p-10">
                <h3 className="text-2xl font-bold mb-4">FinTech Cloud Migration</h3>
                <p className="text-gray-400 mb-6">Transitioning legacy SAP environments to Azure AI, enhancing reporting speed by 12x.</p>
                <div className="flex justify-between items-center border-t border-white/10 pt-6">
                  <div>
                    <div className="text-2xl font-bold text-orange-brand">12X</div>
                    <div className="text-[10px] uppercase tracking-tighter text-gray-500">Performance</div>
                  </div>
                  <Button variant="outline" className="!py-2 !px-4 !text-xs">Case Study</Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <Stats />

      {/* FAQ & Final CTA */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle subtitle="Common Questions" title="Enterprise Concerns Addressed" />
          <div className="space-y-6 mb-20">
            {[
              { q: "How secure is our data with your AI solutions?", a: "We implement SOC2-compliant architectures ensuring that your proprietary enterprise data never leaves your VPC unless explicitly desired." },
              { q: "Can you bridge legacy Sage X3 environments?", a: "Yes, our specialization is building API layers and intelligent agents that 'talk' to legacy ERP databases without requiring a full re-platform." }
            ].map((item, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-brand"></div>
                  {item.q}
                </h4>
                <p className="text-gray-400 pl-4">{item.a}</p>
              </div>
            ))}
          </div>

          <GlassCard className="bg-orange-brand/5 border-orange-brand/20 !p-12 text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Ready for your AI Readiness Audit?</h3>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">Join the forward-thinking African enterprises accelerating their digital transformation.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Button onClick={() => window.location.href='#/contact'}>Book Assessment Now</Button>
              <Link to="/about" className="flex items-center gap-2 text-white hover:text-orange-brand font-bold uppercase tracking-widest text-sm transition-all">
                Learn About Our History <ArrowRight size={18} />
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Home;
