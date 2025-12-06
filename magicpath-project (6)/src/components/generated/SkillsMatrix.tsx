import React, { useState } from 'react';
import { Info } from 'lucide-react';
type SkillLevel = 0 | 1 | 2 | 3;
type Skill = {
  name: string;
  TA: SkillLevel;
  OD: SkillLevel;
  LD: SkillLevel;
  EX: SkillLevel;
  EL: SkillLevel;
  BI: SkillLevel;
  DS: SkillLevel;
  EF: SkillLevel;
  AI: SkillLevel;
  PS: SkillLevel;
  HF: SkillLevel;
  EG: SkillLevel;
};
type SkillCategory = {
  title: string;
  skills: Skill[];
};
const skillsData: SkillCategory[] = [{
  title: 'Foundations & Domain',
  skills: [{
    name: 'I/O & OB theory (motivation, leadership, teams, attitudes)',
    TA: 2,
    OD: 3,
    LD: 2,
    EX: 3,
    EL: 3,
    BI: 1,
    DS: 3,
    EF: 1,
    AI: 2,
    PS: 1,
    HF: 1,
    EG: 2
  }, {
    name: 'HR domain knowledge (TA, performance, L&D, comp basics)',
    TA: 3,
    OD: 2,
    LD: 3,
    EX: 2,
    EL: 2,
    BI: 2,
    DS: 3,
    EF: 2,
    AI: 1,
    PS: 3,
    HF: 1,
    EG: 2
  }, {
    name: 'Business strategy & organizational structure (operating models, value chains)',
    TA: 2,
    OD: 3,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 2,
    DS: 2,
    EF: 3,
    AI: 1,
    PS: 3,
    HF: 2,
    EG: 2
  }, {
    name: 'Labor & employment law fundamentals (EEO/ADA, worker councils basics)',
    TA: 3,
    OD: 2,
    LD: 1,
    EX: 2,
    EL: 2,
    BI: 1,
    DS: 1,
    EF: 1,
    AI: 1,
    PS: 2,
    HF: 2,
    EG: 3
  }, {
    name: 'DEI / equitable systems fundamentals (bias, belonging, accessibility)',
    TA: 3,
    OD: 2,
    LD: 2,
    EX: 3,
    EL: 3,
    BI: 2,
    DS: 2,
    EF: 1,
    AI: 2,
    PS: 2,
    HF: 2,
    EG: 3
  }, {
    name: 'Well-being & occupational health psychology (stress, burnout, psychosocial risks)',
    TA: 1,
    OD: 2,
    LD: 1,
    EX: 3,
    EL: 3,
    BI: 1,
    DS: 3,
    EF: 1,
    AI: 0,
    PS: 2,
    HF: 3,
    EG: 2
  }, {
    name: 'Systems thinking (sociotechnical systems, unintended consequences)',
    TA: 2,
    OD: 3,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 2,
    DS: 3,
    EF: 2,
    AI: 2,
    PS: 2,
    HF: 3,
    EG: 3
  }, {
    name: 'Human factors / ergonomics fundamentals (work design, safety, usability)',
    TA: 0,
    OD: 1,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 1,
    EF: 1,
    AI: 0,
    PS: 0,
    HF: 3,
    EG: 1
  }]
}, {
  title: 'Research Design & Evidence',
  skills: [{
    name: 'Problem framing (research questions, hypotheses, success metrics)',
    TA: 2,
    OD: 3,
    LD: 2,
    EX: 3,
    EL: 3,
    BI: 2,
    DS: 3,
    EF: 2,
    AI: 1,
    PS: 3,
    HF: 2,
    EG: 2
  }, {
    name: 'Evidence synthesis (literature review, meta-analysis literacy)',
    TA: 2,
    OD: 2,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 1,
    DS: 3,
    EF: 1,
    AI: 0,
    PS: 2,
    HF: 2,
    EG: 2
  }, {
    name: 'Qualitative methods (interviews, focus groups, thematic analysis)',
    TA: 1,
    OD: 3,
    LD: 2,
    EX: 3,
    EL: 3,
    BI: 1,
    DS: 3,
    EF: 1,
    AI: 0,
    PS: 2,
    HF: 3,
    EG: 1
  }, {
    name: 'Survey design (questionnaire writing, cognitive testing, bias reduction)',
    TA: 2,
    OD: 2,
    LD: 1,
    EX: 3,
    EL: 3,
    BI: 2,
    DS: 3,
    EF: 1,
    AI: 1,
    PS: 2,
    HF: 1,
    EG: 2
  }, {
    name: 'Experimental design & A/B testing (randomization, power, analysis plan)',
    TA: 1,
    OD: 1,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 2,
    DS: 3,
    EF: 1,
    AI: 2,
    PS: 1,
    HF: 2,
    EG: 2
  }, {
    name: 'Quasi-experimental / causal evaluation basics (matching, DiD, confounding)',
    TA: 1,
    OD: 1,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 2,
    DS: 3,
    EF: 2,
    AI: 2,
    PS: 1,
    HF: 1,
    EG: 2
  }, {
    name: 'Program evaluation (logic models, Kirkpatrick/Phillips ROI, impact measurement)',
    TA: 1,
    OD: 2,
    LD: 3,
    EX: 2,
    EL: 2,
    BI: 2,
    DS: 3,
    EF: 1,
    AI: 1,
    PS: 2,
    HF: 1,
    EG: 2
  }, {
    name: 'Research ethics (informed consent, harm minimization, transparency)',
    TA: 2,
    OD: 2,
    LD: 2,
    EX: 2,
    EL: 3,
    BI: 2,
    DS: 3,
    EF: 1,
    AI: 2,
    PS: 2,
    HF: 2,
    EG: 3
  }]
}, {
  title: 'Statistics & Modeling',
  skills: [{
    name: 'Exploratory data analysis (EDA) & descriptive statistics',
    TA: 2,
    OD: 1,
    LD: 1,
    EX: 1,
    EL: 2,
    BI: 3,
    DS: 3,
    EF: 2,
    AI: 2,
    PS: 1,
    HF: 1,
    EG: 1
  }, {
    name: 'Inference basics (effect sizes, CIs, statistical power, hypothesis tests)',
    TA: 2,
    OD: 1,
    LD: 1,
    EX: 1,
    EL: 2,
    BI: 2,
    DS: 3,
    EF: 1,
    AI: 1,
    PS: 1,
    HF: 2,
    EG: 2
  }, {
    name: 'Regression / GLMs (linear, logistic; assumptions; diagnostics)',
    TA: 2,
    OD: 1,
    LD: 1,
    EX: 1,
    EL: 2,
    BI: 2,
    DS: 3,
    EF: 2,
    AI: 2,
    PS: 1,
    HF: 1,
    EG: 2
  }, {
    name: 'Multilevel & longitudinal modeling (repeated measures, growth curves)',
    TA: 1,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 1,
    BI: 1,
    DS: 3,
    EF: 1,
    AI: 1,
    PS: 0,
    HF: 1,
    EG: 1
  }, {
    name: 'Structural equation modeling (SEM) / mediation & moderation analysis',
    TA: 1,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 1,
    BI: 0,
    DS: 3,
    EF: 0,
    AI: 0,
    PS: 0,
    HF: 0,
    EG: 1
  }, {
    name: 'Survival / event-history analysis (attrition, time-to-event)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 3,
    EF: 2,
    AI: 1,
    PS: 0,
    HF: 0,
    EG: 1
  }, {
    name: 'Forecasting (time series, scenario planning, uncertainty)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 3,
    EF: 3,
    AI: 1,
    PS: 1,
    HF: 0,
    EG: 1
  }, {
    name: 'Optimization & simulation (capacity planning, scheduling, Monte Carlo)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 0,
    DS: 3,
    EF: 3,
    AI: 1,
    PS: 0,
    HF: 1,
    EG: 1
  }]
}, {
  title: 'Psychometrics & Assessment',
  skills: [{
    name: 'Reliability (alpha/omega, test–retest, inter-rater) & quality control',
    TA: 3,
    OD: 0,
    LD: 1,
    EX: 2,
    EL: 2,
    BI: 1,
    DS: 3,
    EF: 0,
    AI: 1,
    PS: 1,
    HF: 1,
    EG: 2
  }, {
    name: 'Validity (content/construct/criterion) & defensible validation strategy',
    TA: 3,
    OD: 0,
    LD: 1,
    EX: 1,
    EL: 2,
    BI: 1,
    DS: 3,
    EF: 0,
    AI: 1,
    PS: 1,
    HF: 0,
    EG: 3
  }, {
    name: 'Factor analysis (EFA/CFA) & measurement invariance basics',
    TA: 3,
    OD: 0,
    LD: 0,
    EX: 2,
    EL: 2,
    BI: 1,
    DS: 3,
    EF: 0,
    AI: 1,
    PS: 0,
    HF: 0,
    EG: 2
  }, {
    name: 'Scale/test development (item writing, pilot testing, norms)',
    TA: 3,
    OD: 0,
    LD: 1,
    EX: 2,
    EL: 3,
    BI: 1,
    DS: 3,
    EF: 0,
    AI: 1,
    PS: 1,
    HF: 0,
    EG: 2
  }, {
    name: 'Item Response Theory (IRT) / Computerized adaptive testing (CAT)',
    TA: 3,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 1,
    BI: 0,
    DS: 3,
    EF: 0,
    AI: 0,
    PS: 0,
    HF: 0,
    EG: 1
  }, {
    name: 'Measurement invariance & DIF (group fairness in measurement)',
    TA: 3,
    OD: 0,
    LD: 0,
    EX: 1,
    EL: 2,
    BI: 1,
    DS: 3,
    EF: 0,
    AI: 1,
    PS: 0,
    HF: 0,
    EG: 3
  }, {
    name: 'Job analysis (task & KSAO analysis) + competency modeling',
    TA: 3,
    OD: 2,
    LD: 2,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 3,
    EF: 1,
    AI: 0,
    PS: 2,
    HF: 2,
    EG: 2
  }, {
    name: 'Structured interviews (question design, scoring, interviewer training)',
    TA: 3,
    OD: 1,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 3,
    EF: 0,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 2
  }, {
    name: 'Assessment methods (work samples, SJTs, assessment centers) & operations',
    TA: 3,
    OD: 1,
    LD: 1,
    EX: 0,
    EL: 0,
    BI: 0,
    DS: 3,
    EF: 0,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 2
  }, {
    name: 'Adverse impact analysis, selection fairness, documentation & audit trail',
    TA: 3,
    OD: 0,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 3,
    EF: 0,
    AI: 2,
    PS: 1,
    HF: 0,
    EG: 3
  }]
}, {
  title: 'Talent Systems (TA, Performance, Talent Mgmt, L&D)',
  skills: [{
    name: 'Talent acquisition process design (structured hiring, competency-based profiling)',
    TA: 3,
    OD: 1,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 2,
    EF: 1,
    AI: 0,
    PS: 3,
    HF: 0,
    EG: 2
  }, {
    name: 'Selection system design & validation (batteries, cut scores, utility analysis)',
    TA: 3,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 1,
    PS: 2,
    HF: 0,
    EG: 3
  }, {
    name: 'Candidate experience & assessment operations (communications, accommodations)',
    TA: 2,
    OD: 0,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 3
  }, {
    name: 'Onboarding & socialization design (first-90-days, manager enablement)',
    TA: 1,
    OD: 1,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 1,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 1
  }, {
    name: 'Performance management system design (goals, ratings, calibration, fairness)',
    TA: 1,
    OD: 2,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 2,
    EF: 1,
    AI: 0,
    PS: 3,
    HF: 0,
    EG: 2
  }, {
    name: 'Career architecture & leveling (job families, progression, skills frameworks)',
    TA: 1,
    OD: 2,
    LD: 2,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 2,
    EF: 2,
    AI: 0,
    PS: 3,
    HF: 1,
    EG: 1
  }, {
    name: 'Succession planning & talent reviews (HiPo, potential models, bias mitigation)',
    TA: 1,
    OD: 2,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 2,
    EF: 1,
    AI: 0,
    PS: 3,
    HF: 0,
    EG: 2
  }, {
    name: 'Retention & engagement drivers (stay interviews, risk indicators, interventions)',
    TA: 0,
    OD: 2,
    LD: 1,
    EX: 3,
    EL: 3,
    BI: 2,
    DS: 2,
    EF: 1,
    AI: 1,
    PS: 2,
    HF: 0,
    EG: 2
  }, {
    name: 'Learning needs analysis (TNA) & performance gap diagnosis',
    TA: 0,
    OD: 1,
    LD: 3,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 2,
    HF: 1,
    EG: 0
  }, {
    name: 'Instructional design (adult learning, design principles, content development)',
    TA: 0,
    OD: 1,
    LD: 3,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 2,
    HF: 1,
    EG: 0
  }, {
    name: 'Facilitation / training delivery (ILT, virtual, blended)',
    TA: 0,
    OD: 2,
    LD: 3,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 1,
    HF: 0,
    EG: 0
  }, {
    name: 'Learning tech literacy (LMS/LXP, xAPI, content ops, accessibility)',
    TA: 0,
    OD: 0,
    LD: 2,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 2,
    EF: 0,
    AI: 1,
    PS: 1,
    HF: 0,
    EG: 1
  }, {
    name: 'Coaching & mentoring program design (manager coaching, peer learning)',
    TA: 0,
    OD: 1,
    LD: 2,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 1,
    HF: 0,
    EG: 0
  }, {
    name: 'Learning evaluation (Kirkpatrick/impact studies, learning analytics)',
    TA: 0,
    OD: 0,
    LD: 3,
    EX: 0,
    EL: 1,
    BI: 1,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 1,
    HF: 0,
    EG: 1
  }, {
    name: 'Skills taxonomy & capability frameworks (definitions, proficiency levels)',
    TA: 1,
    OD: 1,
    LD: 2,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 2,
    EF: 1,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 0
  }, {
    name: 'Learning product management (roadmap, adoption, stakeholder goals)',
    TA: 0,
    OD: 0,
    LD: 2,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 1,
    HF: 0,
    EG: 0
  }]
}, {
  title: 'Org Development, Culture & EX',
  skills: [{
    name: 'Organizational diagnosis (culture/climate, focus groups, sensemaking)',
    TA: 0,
    OD: 3,
    LD: 1,
    EX: 3,
    EL: 3,
    BI: 1,
    DS: 2,
    EF: 1,
    AI: 0,
    PS: 2,
    HF: 1,
    EG: 1
  }, {
    name: 'Change management (stakeholder analysis, change plan, comms, adoption)',
    TA: 0,
    OD: 3,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 0,
    DS: 2,
    EF: 1,
    AI: 0,
    PS: 2,
    HF: 1,
    EG: 1
  }, {
    name: 'Facilitation & group process (workshops, retros, decision hygiene)',
    TA: 0,
    OD: 3,
    LD: 3,
    EX: 2,
    EL: 2,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 2,
    HF: 1,
    EG: 0
  }, {
    name: 'Team effectiveness (diagnosis, team charters, norms, conflict)',
    TA: 0,
    OD: 3,
    LD: 2,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 1,
    HF: 1,
    EG: 0
  }, {
    name: 'Leadership & culture levers (role modeling, manager capability, rituals)',
    TA: 0,
    OD: 2,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 0
  }, {
    name: 'Employee experience design (journey mapping, service design, moments that matter)',
    TA: 0,
    OD: 2,
    LD: 1,
    EX: 3,
    EL: 3,
    BI: 1,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 2,
    HF: 2,
    EG: 1
  }, {
    name: 'Conflict resolution & mediation (difficult conversations, facilitation)',
    TA: 0,
    OD: 2,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 2,
    HF: 1,
    EG: 0
  }, {
    name: 'Well-being / psychosocial risk management (workload, burnout, interventions)',
    TA: 0,
    OD: 1,
    LD: 1,
    EX: 3,
    EL: 3,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 0,
    PS: 1,
    HF: 3,
    EG: 2
  }]
}, {
  title: 'Workforce Planning & Org Design',
  skills: [{
    name: 'Headcount planning & budgeting (FTE, cost, hiring plans, constraint trade-offs)',
    TA: 0,
    OD: 1,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 2,
    EF: 3,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 1
  }, {
    name: 'Demand–supply modeling (role demand, hiring capacity, attrition, mobility)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 2,
    EF: 3,
    AI: 1,
    PS: 2,
    HF: 0,
    EG: 1
  }, {
    name: 'Scenario planning (best/base/worst cases; sensitivity; assumptions)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 2,
    EF: 3,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 1
  }, {
    name: 'Organizational design (spans & layers, roles, decision rights)',
    TA: 0,
    OD: 2,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 0,
    DS: 2,
    EF: 3,
    AI: 0,
    PS: 2,
    HF: 1,
    EG: 1
  }, {
    name: 'Skills-based workforce planning (skills taxonomy, gap analysis, build/buy/borrow)',
    TA: 0,
    OD: 0,
    LD: 1,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 2,
    EF: 3,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 0
  }, {
    name: 'Labor market analytics (benchmarks, supply, wages, location strategy)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 2,
    EF: 2,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 0
  }]
}, {
  title: 'Business Intelligence and Report',
  skills: [{
    name: 'Metrics & KPI design (definitions, leading/lagging indicators, governance)',
    TA: 1,
    OD: 2,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 3,
    DS: 3,
    EF: 3,
    AI: 2,
    PS: 3,
    HF: 1,
    EG: 3
  }, {
    name: 'SQL (joins, window functions, data validation queries)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 3,
    DS: 3,
    EF: 2,
    AI: 3,
    PS: 1,
    HF: 0,
    EG: 1
  }, {
    name: 'Data visualization (Tableau/Power BI/Looker) & dashboard design',
    TA: 0,
    OD: 1,
    LD: 1,
    EX: 2,
    EL: 2,
    BI: 3,
    DS: 3,
    EF: 2,
    AI: 1,
    PS: 2,
    HF: 1,
    EG: 1
  }, {
    name: 'Spreadsheet modeling (Excel/Sheets; pivots, scenario models)',
    TA: 1,
    OD: 1,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 2,
    DS: 3,
    EF: 3,
    AI: 0,
    PS: 2,
    HF: 1,
    EG: 1
  }, {
    name: 'Data wrangling (cleaning, joins, missing data, documentation)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 3,
    DS: 3,
    EF: 2,
    AI: 3,
    PS: 1,
    HF: 0,
    EG: 2
  }, {
    name: 'HR systems literacy (HRIS/ATS/LMS data models; Workday/SuccessFactors basics)',
    TA: 1,
    OD: 1,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 3,
    DS: 3,
    EF: 2,
    AI: 2,
    PS: 2,
    HF: 0,
    EG: 2
  }, {
    name: 'Insight writing & data storytelling (narratives, visuals, actions)',
    TA: 1,
    OD: 3,
    LD: 2,
    EX: 3,
    EL: 3,
    BI: 2,
    DS: 3,
    EF: 2,
    AI: 1,
    PS: 3,
    HF: 2,
    EG: 3
  }, {
    name: 'Reproducible reporting (versioned notebooks, automated refresh, QA checks)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 1,
    BI: 2,
    DS: 3,
    EF: 1,
    AI: 2,
    PS: 0,
    HF: 0,
    EG: 1
  }]
}, {
  title: 'Advanced People Analytics',
  skills: [{
    name: 'Experimentation (A/B, multivariate) for people programs & product changes',
    TA: 0,
    OD: 0,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 2,
    DS: 3,
    EF: 1,
    AI: 2,
    PS: 1,
    HF: 1,
    EG: 2
  }, {
    name: 'Causal inference toolkit (propensity scores, DiD, sensitivity checks)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 1,
    BI: 2,
    DS: 3,
    EF: 2,
    AI: 2,
    PS: 0,
    HF: 0,
    EG: 2
  }, {
    name: 'Predictive modeling (attrition, hiring yield, performance risk) & evaluation',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 1,
    BI: 1,
    DS: 3,
    EF: 2,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 2
  }, {
    name: 'Text analytics (open-ended survey, reviews, notes) + NLP basics',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 1,
    EL: 2,
    BI: 1,
    DS: 3,
    EF: 0,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 2
  }, {
    name: 'Organizational network analysis (ONA) & collaboration analytics',
    TA: 0,
    OD: 1,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 3,
    EF: 1,
    AI: 1,
    PS: 0,
    HF: 0,
    EG: 2
  }, {
    name: 'Pay equity & compensation analytics (regression, cohorts, remediation)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 3,
    EF: 1,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 3
  }, {
    name: 'Segmentation & clustering (personas, needs-based groups, risk tiers)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 1,
    EL: 2,
    BI: 2,
    DS: 3,
    EF: 2,
    AI: 2,
    PS: 1,
    HF: 0,
    EG: 1
  }, {
    name: 'Data product metrics (adoption, engagement, outcomes) & instrumentation',
    TA: 0,
    OD: 0,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 2,
    DS: 3,
    EF: 1,
    AI: 2,
    PS: 1,
    HF: 0,
    EG: 2
  }]
}, {
  title: 'People AI / Machine Learning',
  skills: [{
    name: 'ML fundamentals (supervised learning, metrics, cross-validation)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 3,
    EF: 1,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 1
  }, {
    name: 'Programming for modeling (Python/R; packages; reproducible pipelines)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 2,
    DS: 3,
    EF: 2,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 1
  }, {
    name: 'NLP for people data (survey text, notes, resume parsing) & evaluation',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 1,
    EL: 2,
    BI: 1,
    DS: 2,
    EF: 0,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 2
  }, {
    name: 'Fairness, bias & disparate impact in algorithms (metrics, mitigation)',
    TA: 2,
    OD: 0,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 2,
    EF: 0,
    AI: 3,
    PS: 1,
    HF: 0,
    EG: 3
  }, {
    name: 'Model interpretability (SHAP/LIME, counterfactuals, transparency)',
    TA: 1,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 0,
    DS: 3,
    EF: 0,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 2
  }, {
    name: 'GenAI for HR (LLM prompting, RAG, evaluation, guardrails, policy)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 0,
    DS: 1,
    EF: 0,
    AI: 2,
    PS: 1,
    HF: 0,
    EG: 3
  }, {
    name: 'MLOps basics (deployment, monitoring, drift, retraining triggers)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 0,
    DS: 1,
    EF: 0,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 2
  }, {
    name: 'Privacy-preserving analytics (anonymization limits, DP basics, secure access)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 1,
    BI: 1,
    DS: 3,
    EF: 0,
    AI: 2,
    PS: 1,
    HF: 1,
    EG: 3
  }]
}, {
  title: 'Data Engineering, Tech & People Tech (Workday, Greenhouse, etc.)',
  skills: [{
    name: 'Data warehousing concepts (star schema, dimensions, semantic layer)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 2,
    DS: 3,
    EF: 2,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 1
  }, {
    name: 'ETL/ELT & orchestration (dbt/Airflow/Fivetran; scheduled pipelines)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 2,
    DS: 3,
    EF: 1,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 1
  }, {
    name: 'APIs & system integrations (HRIS/ATS/LMS, identity, webhooks)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 1,
    EF: 1,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 1
  }, {
    name: 'Version control (Git) + code reviews + reproducibility practices',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 2,
    EF: 1,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 1
  }, {
    name: 'Cloud basics (AWS/GCP/Azure) relevant to data/analytics',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 1,
    EF: 1,
    AI: 2,
    PS: 0,
    HF: 0,
    EG: 1
  }, {
    name: 'Data security (RBAC, least privilege, secure handling, PII)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 1,
    BI: 2,
    DS: 2,
    EF: 1,
    AI: 2,
    PS: 1,
    HF: 1,
    EG: 3
  }, {
    name: 'People data tool ecosystem (Workday/SuccessFactors, Visier, CultureAmp, Qualtrics)',
    TA: 0,
    OD: 0,
    LD: 1,
    EX: 1,
    EL: 2,
    BI: 2,
    DS: 1,
    EF: 1,
    AI: 1,
    PS: 1,
    HF: 0,
    EG: 1
  }, {
    name: 'Data documentation & governance artifacts (data dictionary, lineage, definitions)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 2,
    DS: 3,
    EF: 1,
    AI: 2,
    PS: 1,
    HF: 0,
    EG: 3
  }]
}, {
  title: 'Ethics, Risk & Governance',
  skills: [{
    name: 'Employee data privacy (GDPR/CCPA concepts, minimization, DPIAs basics)',
    TA: 1,
    OD: 1,
    LD: 1,
    EX: 2,
    EL: 2,
    BI: 2,
    DS: 2,
    EF: 1,
    AI: 2,
    PS: 2,
    HF: 2,
    EG: 3
  }, {
    name: 'Data ethics & transparency (purpose, consent norms, avoiding surveillance harms)',
    TA: 1,
    OD: 2,
    LD: 1,
    EX: 2,
    EL: 3,
    BI: 2,
    DS: 2,
    EF: 1,
    AI: 2,
    PS: 2,
    HF: 2,
    EG: 3
  }, {
    name: 'Selection compliance (EEO/adverse impact, accommodations, recordkeeping)',
    TA: 3,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 1,
    DS: 1,
    EF: 0,
    AI: 2,
    PS: 1,
    HF: 0,
    EG: 3
  }, {
    name: 'Algorithmic accountability (fairness audits, model cards, monitoring)',
    TA: 1,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 1,
    BI: 1,
    DS: 2,
    EF: 0,
    AI: 3,
    PS: 0,
    HF: 0,
    EG: 3
  }, {
    name: 'Governance design (policies, committees, approvals, decision rights)',
    TA: 1,
    OD: 1,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 1,
    EF: 1,
    AI: 1,
    PS: 2,
    HF: 0,
    EG: 3
  }, {
    name: 'Vendor risk assessment (security/privacy, bias, reliability, contracts)',
    TA: 1,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 1,
    BI: 1,
    DS: 1,
    EF: 0,
    AI: 1,
    PS: 1,
    HF: 0,
    EG: 3
  }, {
    name: 'Audit readiness (documentation, reproducibility, defensibility narratives)',
    TA: 2,
    OD: 0,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 2,
    DS: 2,
    EF: 1,
    AI: 2,
    PS: 2,
    HF: 1,
    EG: 3
  }, {
    name: 'Ethical stakeholder communication (trade-offs, risks, explainers)',
    TA: 1,
    OD: 2,
    LD: 1,
    EX: 2,
    EL: 2,
    BI: 1,
    DS: 1,
    EF: 1,
    AI: 1,
    PS: 2,
    HF: 1,
    EG: 3
  }]
}, {
  title: 'Business, Consulting & Communication',
  skills: [{
    name: 'Stakeholder management (listen, align, manage expectations)',
    TA: 2,
    OD: 3,
    LD: 3,
    EX: 3,
    EL: 3,
    BI: 2,
    DS: 2,
    EF: 2,
    AI: 2,
    PS: 3,
    HF: 2,
    EG: 3
  }, {
    name: 'Executive storytelling (clear narrative, decision-ready recommendations)',
    TA: 2,
    OD: 3,
    LD: 2,
    EX: 3,
    EL: 3,
    BI: 2,
    DS: 2,
    EF: 2,
    AI: 1,
    PS: 3,
    HF: 2,
    EG: 3
  }, {
    name: 'Consulting skills (problem structuring, discovery, recommendations)',
    TA: 2,
    OD: 3,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 1,
    DS: 1,
    EF: 2,
    AI: 1,
    PS: 3,
    HF: 2,
    EG: 2
  }, {
    name: 'Facilitation & workshop design (alignment sessions, retros, co-creation)',
    TA: 1,
    OD: 3,
    LD: 3,
    EX: 2,
    EL: 2,
    BI: 0,
    DS: 1,
    EF: 1,
    AI: 0,
    PS: 2,
    HF: 1,
    EG: 1
  }, {
    name: 'Project/program management (scope, timeline, risks, dependency mgmt)',
    TA: 2,
    OD: 2,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 2,
    DS: 2,
    EF: 2,
    AI: 2,
    PS: 2,
    HF: 2,
    EG: 2
  }, {
    name: 'Product thinking (user needs, adoption, roadmap, iteration) for people tools',
    TA: 1,
    OD: 1,
    LD: 1,
    EX: 2,
    EL: 2,
    BI: 2,
    DS: 2,
    EF: 1,
    AI: 2,
    PS: 2,
    HF: 1,
    EG: 1
  }, {
    name: 'Financial & ROI thinking (cost-benefit, capacity, business cases)',
    TA: 1,
    OD: 1,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 1,
    EF: 2,
    AI: 0,
    PS: 3,
    HF: 1,
    EG: 1
  }, {
    name: 'Change communication (comms plans, messaging, manager toolkits)',
    TA: 0,
    OD: 3,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 0,
    DS: 1,
    EF: 0,
    AI: 0,
    PS: 2,
    HF: 0,
    EG: 1
  }, {
    name: 'Negotiation & conflict navigation (trade-offs, pushback, alignment)',
    TA: 1,
    OD: 2,
    LD: 1,
    EX: 1,
    EL: 1,
    BI: 1,
    DS: 1,
    EF: 1,
    AI: 1,
    PS: 3,
    HF: 1,
    EG: 2
  }, {
    name: 'Professional writing (reports, measurement plans, SOPs, policies)',
    TA: 2,
    OD: 2,
    LD: 2,
    EX: 2,
    EL: 2,
    BI: 2,
    DS: 2,
    EF: 2,
    AI: 1,
    PS: 2,
    HF: 2,
    EG: 3
  }]
}, {
  title: 'Work Design',
  skills: [{
    name: 'Task analysis & workflow mapping (observations, decomposition, bottlenecks)',
    TA: 0,
    OD: 1,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 1,
    EF: 1,
    AI: 0,
    PS: 0,
    HF: 3,
    EG: 1
  }, {
    name: 'Usability testing / HCI methods (prototypes, heuristics, user studies)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 1,
    EF: 0,
    AI: 1,
    PS: 0,
    HF: 3,
    EG: 1
  }, {
    name: 'Ergonomics & physical risk assessment (posture, tools, environment)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 0,
    DS: 1,
    EF: 0,
    AI: 0,
    PS: 0,
    HF: 3,
    EG: 1
  }, {
    name: 'Cognitive workload & human error analysis (attention, alarms, slips)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 0,
    DS: 2,
    EF: 0,
    AI: 1,
    PS: 0,
    HF: 3,
    EG: 1
  }, {
    name: 'Safety culture & incident learning (root cause, reporting systems)',
    TA: 0,
    OD: 1,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 1,
    EF: 1,
    AI: 0,
    PS: 0,
    HF: 3,
    EG: 1
  }, {
    name: 'Shiftwork, fatigue & workload management (scheduling, risk controls)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 0,
    DS: 1,
    EF: 0,
    AI: 2,
    PS: 0,
    HF: 3,
    EG: 1
  }, {
    name: 'Human–automation interaction (trust, calibration, decision support design)',
    TA: 0,
    OD: 0,
    LD: 0,
    EX: 0,
    EL: 0,
    BI: 0,
    DS: 1,
    EF: 0,
    AI: 2,
    PS: 0,
    HF: 3,
    EG: 2
  }, {
    name: 'Participatory design & co-creation (frontline involvement, iteration)',
    TA: 0,
    OD: 1,
    LD: 0,
    EX: 1,
    EL: 1,
    BI: 0,
    DS: 1,
    EF: 0,
    AI: 0,
    PS: 0,
    HF: 3,
    EG: 1
  }]
}];
const roleNames = ['TA', 'OD', 'LD', 'EX', 'EL', 'BI', 'DS', 'EF', 'AI', 'PS', 'HF', 'EG'];
const roleFullNames: Record<string, string> = {
  TA: 'Talent Assessment & Selection / Psychometrics',
  OD: 'Org Development, Culture & Change',
  LD: 'Learning & Development (evidence-based)',
  EX: 'Employee Experience, Engagement & Well-being',
  EL: 'Employee Listening (surveys, feedback, voice)',
  BI: 'Business Intelligence and Analyst',
  DS: 'People Research Scientist (advanced stats, experimentation)',
  EF: 'Org. Effectiveness and Org Design',
  AI: 'People AI / HRML Engineer (ML, NLP, automation)',
  PS: 'People Strategy / HRBP (strategic, business-aligned)',
  HF: 'Work Design',
  EG: 'Ethics, Risk & Governance (people data + AI)'
};
const getLevelColor = (level: SkillLevel): string => {
  switch (level) {
    case 3:
      return 'bg-black text-white';
    case 2:
      return 'bg-gray-400 text-white';
    case 1:
      return 'bg-gray-300 text-black';
    case 0:
      return 'bg-white border border-gray-200 text-gray-500';
  }
};
const getLevelLabel = (level: SkillLevel): string => {
  switch (level) {
    case 3:
      return 'Critical';
    case 2:
      return 'Important';
    case 1:
      return 'Nice to have';
    case 0:
      return 'Not core / awareness only';
  }
};
export const SkillsMatrix = () => {
  const [printMode, setPrintMode] = useState(false);
  return <div className={printMode ? "p-2 bg-white" : "min-h-screen bg-gradient-to-br from-white to-gray-50 p-4"}>
      <style>
        {`
          @media print {
            @page {
              size: landscape;
              margin: 0.3in;
            }
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>
      
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className={printMode ? "mb-2" : "mb-4"}>
          <div className="flex justify-between items-start">
            <div>
              <h1 className={printMode ? "text-lg font-bold text-black" : "text-3xl font-bold text-black"}>
                I/O & People Analytics Skills Matrix 2025
              </h1>
              <p className={printMode ? "text-xs text-gray-600" : "text-sm text-gray-600"}>
                Comprehensive skills framework across 12 specialized roles
              </p>
            </div>
            <button onClick={() => {
            setPrintMode(!printMode);
            if (!printMode) {
              setTimeout(() => window.print(), 100);
            }
          }} className="no-print px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm">
              {printMode ? 'Exit Print Mode' : 'Print Mode'}
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className={printMode ? "bg-gray-50 rounded p-2 mb-2 border border-black" : "bg-white rounded-lg shadow-md p-3 mb-3 border border-gray-200"}>
          <div className="flex items-center gap-2 mb-1">
            <Info className={printMode ? "w-3 h-3 text-black" : "w-4 h-4 text-black"} />
            <h2 className={printMode ? "text-xs font-semibold text-black" : "text-sm font-semibold text-black"}>Legend</h2>
          </div>
          
          {/* Skill Level Legend */}
          <div className="mb-2">
            <h3 className={printMode ? "text-sm font-semibold text-gray-700 mb-1" : "text-base font-semibold text-gray-700 mb-1"}>
              Skill Levels:
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {[3, 2, 1, 0].map(level => <div key={level} className="flex items-center gap-2">
                  <div className={`${printMode ? 'w-6 h-6 text-xs' : 'w-7 h-7 text-sm'} rounded ${getLevelColor(level as SkillLevel)} flex items-center justify-center font-bold`}>
                    {level}
                  </div>
                  <span className={printMode ? "text-sm text-gray-700" : "text-base text-gray-700"}>
                    {getLevelLabel(level as SkillLevel)}
                  </span>
                </div>)}
            </div>
          </div>

          {/* Role Legend */}
          <div className="border-t border-gray-300 pt-2 mt-2">
            <h3 className={printMode ? "text-sm font-semibold text-gray-700 mb-1" : "text-base font-semibold text-gray-700 mb-1"}>
              Roles:
            </h3>
            <div className={printMode ? "grid grid-cols-2 gap-x-3 gap-y-0.5" : "grid grid-cols-2 gap-x-4 gap-y-1"}>
              {roleNames.map(role => <div key={role} className="flex items-start gap-1">
                  <span className={printMode ? "text-sm font-bold text-black min-w-[20px]" : "text-base font-bold text-black min-w-[28px]"}>
                    {role}:
                  </span>
                  <span className={printMode ? "text-sm text-gray-700" : "text-base text-gray-700"}>
                    {roleFullNames[role]}
                  </span>
                </div>)}
            </div>
          </div>
        </div>

        {/* Skills Matrix */}
        <div className={printMode ? "bg-white border border-black" : "bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{
            fontSize: printMode ? '12px' : '11px'
          }}>
              {/* Header */}
              <thead className="sticky top-0 z-30 shadow-md">
                <tr className="bg-black text-white">
                  <th className={printMode ? "p-1 text-left border border-gray-600 font-semibold w-[280px] bg-black" : "p-2 text-left border border-gray-600 font-semibold w-[300px] bg-black"}>
                    Skills
                  </th>
                  {roleNames.map(role => <th key={role} className={printMode ? "p-1 text-center border border-gray-600 font-bold w-[40px] bg-black" : "p-2 text-center border border-gray-600 font-bold w-[50px] bg-black"} title={roleFullNames[role]}>
                      {role}
                    </th>)}
                </tr>
              </thead>
              
              {/* Body */}
              <tbody>
                {skillsData.map(category => <React.Fragment key={category.title}>
                    {/* Category Header */}
                    <tr className="bg-gray-50 border-b-2 border-black">
                      <td colSpan={13} className={printMode ? "p-1 font-bold text-black border border-gray-300" : "p-2 font-bold text-black border border-gray-300"}>
                        {category.title}
                      </td>
                    </tr>

                    {/* Skills */}
                    {category.skills.map(skill => <tr key={skill.name} className="hover:bg-gray-50 border-b border-gray-200">
                        <td className={printMode ? "p-1 text-gray-700 border-r border-gray-200" : "p-2 text-gray-700 border-r border-gray-200"}>
                          {skill.name}
                        </td>
                        {roleNames.map(role => <td key={role} className="border-l border-gray-200 text-center p-0">
                            <div className="flex items-center justify-center h-full p-1">
                              <div className={`${printMode ? 'w-5 h-5 text-[9px]' : 'w-7 h-7 text-xs'} rounded ${getLevelColor(skill[role as keyof typeof skill] as SkillLevel)} flex items-center justify-center font-bold`}>
                                {skill[role as keyof typeof skill]}
                              </div>
                            </div>
                          </td>)}
                      </tr>)}
                  </React.Fragment>)}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className={printMode ? "mt-1 text-center text-[8px] text-gray-600" : "mt-3 text-center text-xs text-gray-600"}>
          <p>I/O & People Analytics Skills Matrix 2025</p>
          <p className={printMode ? "text-[8px] text-gray-600" : "text-xs text-gray-600"}>Felix George, Ph.D.</p>
        </div>
      </div>
    </div>;
};