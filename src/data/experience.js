const experience = [
  {
    role: 'Independent Consultant – Business & AI Strategy',
    company: 'Self-employed',
    dates: 'Sep 2025 – Present',
    context: 'Worked with SME clients in logistics and finance facing vague "we want AI" briefs.',
    responsibilities:
      'Ran requirements workshops and AS-IS process mapping; designed evaluation frameworks; conducted variance and root cause analysis.',
    impact: [
      'Consistently scoped vague digital transformation briefs into 2–3 prioritised, actionable opportunities using structured decision frameworks.',
      'Designed a build-vs-buy evaluation framework for a forecasting use case; delivered a logistics cost dashboard eliminating weekly manual reporting and preventing unnecessary development spend.',
      'Restructured a finance client\'s exception-tracking process, cutting review meetings from 3 to 1 and freeing 8hrs/month for higher-value analytical work.',
    ],
    tools: ['Python', 'Excel', 'Decision Frameworks', 'Process Mapping'],
    themes: 'Requirements engineering, process optimisation, AI consulting',
    impactSummary: 'Turned vague digital transformation briefs into structured, scoped action plans — saving clients time and unnecessary dev spend.',
  },
  {
    role: 'Thesis: XAI Stock Prediction Dashboard',
    company: 'University of Europe for Applied Sciences | Berlin',
    dates: 'Sep 2024 – Feb 2025',
    context: 'M.Sc. Data Science thesis — designed as a decision-support tool, not just a technical exercise.',
    responsibilities:
      'Built an end-to-end explainable AI system using LSTM and SHAP DeepExplainer, deployed as a configurable Streamlit app.',
    impact: [
      'Surfaced three layers of SHAP-based reasoning per prediction (global feature importance, per-instance waterfall, heatmap) so non-technical stakeholders could interrogate, not just trust, the model.',
      'Implemented a rigorous 70/15/15 chronological train-val-test split and test-set-only RMSE/MAE evaluation — ensuring honest, reproducible results across different stocks and time periods.',
    ],
    tools: ['Python', 'TensorFlow', 'SHAP', 'Streamlit', 'scikit-learn'],
    themes: 'Explainable AI, decision support, financial forecasting',
    impactSummary: 'Built an XAI investment tool where non-technical stakeholders can understand and interrogate every prediction — not just accept a black box.',
  },
  {
    role: 'Associate Consultant – Functional Business Analyst',
    company: 'CES Ltd (NTT Global) | India',
    dates: 'Mar 2022 – Mar 2024',
    context: 'Embedded with NTT Global finance and procurement teams on Oracle Fusion Cloud data automation and reporting.',
    responsibilities:
      'Automated Oracle Fusion data extraction; standardised cross-team metrics; led UAT across 3 Agile delivery cycles.',
    impact: [
      'Automated Oracle Fusion Cloud (R13) data extraction across AR, AP, and FA modules — consolidating 15 siloed Excel files into 3 executive dashboards and cutting reporting turnaround by 20%.',
      'Standardised 12 core metrics across Finance and IT reporting by authoring functional specifications that resolved conflicting definitions, ending recurring reconciliation disputes.',
      'Diagnosed 18% Q2 cost overrun as a timing artefact from delayed Q1 invoices — presented root cause findings to senior management, preventing a misattributed budget breach and enabling accurate reforecasting.',
      'Led UAT sign-off across 3 Agile delivery cycles, ensuring zero post-deployment data discrepancies across reporting go-lives.',
    ],
    tools: ['Oracle Fusion Cloud R13', 'SQL', 'Power BI', 'Python', 'JIRA', 'Agile'],
    themes: 'Data automation, executive reporting, finance analytics, ERP',
    impactSummary: 'Automated Oracle Fusion reporting for NTT Global — cutting planning cycles 20%, eliminating reconciliation overhead, and preventing a misattributed budget breach.',
  },
  {
    role: 'Trainee – Functional Business Analyst',
    company: 'CES Ltd (Herber Aircraft Services) | India',
    dates: 'Jun 2021 – Mar 2022',
    context: 'Supported Oracle EBS and Fusion Cloud rollout for finance and accounting teams.',
    responsibilities:
      'Built SQL validation scripts; documented AS-IS/TO-BE workflows; supported user adoption.',
    impact: [
      'Built SQL validation scripts catching configuration errors pre-deployment, reducing post-go-live failures by 10%.',
      'Produced process documentation adopted into monthly planning cycles across business units.',
    ],
    tools: ['Oracle EBS', 'Oracle Fusion', 'SQL', 'Excel'],
    themes: 'ERP implementation, validation, documentation',
    impactSummary: 'Improved data validation during Oracle Fusion rollout, contributing to on-time deployment with reduced post-go-live failures.',
  },
  {
    role: 'Early Growth Intern – Strategy & Operations',
    company: 'XPRS Techno Logistics | India',
    dates: 'Jul 2020 – Mar 2021',
    context: 'Assisted early-stage logistics startup with marketing, sales, and operations planning.',
    responsibilities:
      'Built campaign performance dashboards; ran cross-functional data analysis for expansion decisions.',
    impact: [
      'Built a cross-functional performance tracker linking marketing spend, sign-ups, and delivery cost — giving founders direct ROI visibility by channel for the first time.',
      'Analysis across marketing, sales, and operations directly informed two new market launch decisions.',
    ],
    tools: ['Google Sheets', 'Data Analysis'],
    themes: 'Dashboarding, ROI tracking, market expansion',
    impactSummary: 'Improved ROI visibility and directly informed two market expansion decisions with unified cross-functional analytics.',
  },
];

export default experience;
