
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle, Input, TextArea, Button, GlassCard } from '../components/UI';
import { Send, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', industry: '', currentSystem: '', goal: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep(s => s + 1);
  const handlePrev = () => setStep(s => s - 1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In real app, push to backend
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
        <motion.div initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} className="text-center max-w-lg">
          <div className="w-20 h-20 bg-orange-brand rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Audit Request Received</h2>
          <p className="text-gray-400 text-lg mb-8">An enterprise strategist from QONQAIT will review your profile and contact you within 24 hours.</p>
          <Button onClick={() => window.location.href='/'}>Return Home</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Let's Transform" title="Book Your AI Readiness Audit" />
        
        <GlassCard className="relative">
          <div className="mb-10 flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-orange-brand' : 'bg-white/10'}`} />
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Identity & Organization</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                      <Input placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Business Email</label>
                      <Input type="email" placeholder="john@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Company Name</label>
                    <Input placeholder="Enterprise Global SA" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div className="pt-6 flex justify-end">
                    <Button onClick={handleNext}>Next: Technical Context <ArrowRight size={18}/></Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Infrastructure Context</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Industry</label>
                      <Input placeholder="e.g. Logistics, Mining" value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Current System (ERP)</label>
                      <Input placeholder="e.g. SAP ECC, Sage X3" value={formData.currentSystem} onChange={e => setFormData({...formData, currentSystem: e.target.value})} />
                    </div>
                  </div>
                  <div className="pt-6 flex justify-between">
                    <Button variant="outline" onClick={handlePrev}><ArrowLeft size={18}/> Back</Button>
                    <Button onClick={handleNext}>Next: Objectives <ArrowRight size={18}/></Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Primary Objectives</h3>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">What is your #1 goal with AI transformation?</label>
                    <TextArea placeholder="e.g. Automating demand planning or improving customer content speed..." value={formData.goal} onChange={e => setFormData({...formData, goal: e.target.value})} />
                  </div>
                  <div className="pt-6 flex justify-between">
                    <Button variant="outline" onClick={handlePrev}><ArrowLeft size={18}/> Back</Button>
                    <Button type="submit">Submit Request <Send size={18}/></Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default Contact;
