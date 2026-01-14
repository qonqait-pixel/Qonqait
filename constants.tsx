
import React from 'react';
import { Cpu, Rocket, Shield, Layers, Workflow, Cloud, Code, GraduationCap, BarChart } from 'lucide-react';
import { Service, BlogPost, LeadStatus } from './types';

export const BRAND = {
  name: 'QONQAIT',
  tagline: 'Bridging Legacy ERP to AI Intelligence',
  colors: {
    black: '#0A0A0A',
    orange: '#FF6600',
    charcoal: '#1A1A1A'
  }
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'AI Strategy & Advisory',
    slug: 'ai-strategy',
    description: 'Bespoke roadmaps to integrate AI into existing enterprise architectures for measurable ROI.',
    icon: 'Cpu'
  },
  {
    id: '2',
    title: 'Intelligent Automation',
    slug: 'automation',
    description: 'Transforming manual workflows into autonomous operations using RPA and LLMs.',
    icon: 'Workflow'
  },
  {
    id: '3',
    title: 'ERP Modernization',
    slug: 'erp-cloud',
    description: 'Bridging SAP, Sage X3, and Oracle environments with modern cloud-native capabilities.',
    icon: 'Cloud'
  },
  {
    id: '4',
    title: 'AI-Driven Marketing',
    slug: 'ai-marketing',
    description: 'Leveraging data-driven insights to accelerate content velocity and lead generation.',
    icon: 'Rocket'
  },
  {
    id: '5',
    title: 'Enterprise AI Training',
    slug: 'ai-training',
    description: 'Upskilling executive teams and workforce on prompt engineering and AI governance.',
    icon: 'GraduationCap'
  },
  {
    id: '6',
    title: 'Web & App Development',
    slug: 'dev',
    description: 'Building high-performance, AI-integrated software solutions for the African market.',
    icon: 'Code'
  }
];

export const INITIAL_LEADS = [
  {
    id: 'L1',
    name: 'Sarah Mokoena',
    email: 'sarah@enterprise-sa.co.za',
    company: 'Logistics Group SA',
    industry: 'Logistics',
    currentSystem: 'SAP ECC',
    goal: 'Automate inventory forecasting',
    status: LeadStatus.NEW,
    date: '2024-05-15'
  },
  {
    id: 'L2',
    name: 'Thabo Ndlovu',
    email: 'thabo.n@gov-dept.gov.za',
    company: 'Department of Public Works',
    industry: 'Government',
    currentSystem: 'Legacy Oracle',
    goal: 'Service delivery optimization',
    status: LeadStatus.CONTACTED,
    date: '2024-05-14'
  }
];

export const METHOD_STEPS = [
  { title: 'Assess', desc: 'Holistic audit of current ICT infrastructure and data readiness.' },
  { title: 'Architect', desc: 'Designing custom AI-bridging solutions aligned with ERP stacks.' },
  { title: 'Automate', desc: 'Deploying autonomous agents and intelligent workflows.' },
  { title: 'Advance', desc: 'Continuous optimization and scaling of digital capabilities.' }
];
