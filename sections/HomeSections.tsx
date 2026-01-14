
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Cpu, ShieldCheck } from 'lucide-react';
import { Button, SectionTitle, GlassCard } from '../components/UI';
import { SERVICES, METHOD_STEPS } from '../constants';
import * as Icons from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-brand/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-brand/20 border border-orange-brand/30 text-orange-brand text-xs font-bold uppercase tracking-widest mb-6">
              Level 1 B-BBEE Certified • AI Transformation Leaders
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.95] font-sora">
              DRIVE <span className="text-orange-brand">90-DAY</span> AI ROI AT ENTERPRISE SCALE.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              We bridge the gap between legacy ERP (SAP/Sage) and autonomous intelligence to unlock 40-60% efficiency gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button onClick={() => window.location.href='#/contact'}>
                Book AI Readiness Audit <ArrowRight size={18} />
              </Button>
              <Button variant="outline" onClick={() => window.location.href='#/services'}>
                View Enterprise Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const TrustBar: React.FC = () => (
  <section className="py-12 border-y border-white/5 bg-black/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        <h3 className="text-white/50 text-sm font-bold tracking-widest uppercase">Trusted By Leaders</h3>
        {/* Placeholder Logos */}
        {['SAP Gold Partner', 'Sage X3 Network', 'AWS Consulting', 'Microsoft Solutions'].map((partner, i) => (
          <span key={i} className="text-xl font-bold font-sora text-white">{partner}</span>
        ))}
      </div>
    </div>
  </section>
);

export const Pillars: React.FC = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle subtitle="Core Pillars" title="Our Foundation for Success" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'AI Intelligence', icon: TrendingUp, text: 'Advanced predictive modeling and generative agents that evolve with your business data.' },
          { title: 'Strategic Execution', icon: Users, text: 'Bridging technical gaps with cultural alignment and change management for high adoption.' },
          { title: 'Robust Foundation', icon: ShieldCheck, text: 'Enterprise-grade ICT infrastructure ensuring security, scalability, and 99.9% uptime.' }
        ].map((pillar, i) => (
          <GlassCard key={i}>
            <div className="w-14 h-14 bg-orange-brand/10 rounded-lg flex items-center justify-center text-orange-brand mb-6">
              <pillar.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
            <p className="text-gray-400 leading-relaxed">{pillar.text}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export const MethodSection: React.FC = () => (
  <section className="py-24 bg-charcoal/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <SectionTitle centered subtitle="The QONQAIT Method" title="A Structured Path to Autonomy" />
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {METHOD_STEPS.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative group p-8 border border-white/5 rounded-2xl hover:border-orange-brand/50 transition-all"
          >
            <span className="absolute top-6 right-6 text-5xl font-black text-white/5 group-hover:text-orange-brand/20 transition-all">{i + 1}</span>
            <h4 className="text-2xl font-bold text-orange-brand mb-4">{step.title}</h4>
            <p className="text-gray-400">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Stats: React.FC = () => (
  <section className="py-24 bg-orange-brand">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 text-center">
        {[
          { val: '60%', label: 'Manual Time Reduction' },
          { val: '3X', label: 'Content Velocity' },
          { val: '10+', label: 'Years Experience' },
          { val: 'L1', label: 'B-BBEE Status' }
        ].map((stat, i) => (
          <div key={i} className="text-black">
            <div className="text-6xl font-black mb-2">{stat.val}</div>
            <div className="text-sm font-bold uppercase tracking-widest opacity-70">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
