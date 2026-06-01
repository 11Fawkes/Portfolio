const base = import.meta.env.BASE_URL;

const profile = {
  name: 'Dhruv Kumar Boothu',
  title: 'Business Analyst · Data Analytics · Decision Intelligence',
  location: 'Berlin, Germany',
  intro:
    'BA and decision analytics professional with 3+ years embedding with enterprise clients (NTT Global) on Oracle Fusion — translating messy operational data into Power BI dashboards, automation scripts, and planning tools that finance and procurement teams actually use. M.Sc. in Data Science. Based in Berlin, German B1 → B2. Building toward something bigger.',
  valueStatement:
    'I want to build things that touch more people than I\'ll ever meet — tools, systems, ideas that create ripple effects on real problems.',
  videoUrl: '',
  videoDescription:
    'A 60-second overview of my background, the type of problems I solve, and what I\'m looking for in Berlin.',
  links: {
    email: 'dhruvvkumar98@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dhruv-kumar-a54a2916b/',
    github: 'https://github.com/11Fawkes',
  },
  resumeUrl: `${base}resume.pdf`,
  workAuth: 'Based in Berlin. Authorized to work in Germany (job-seeker visa). German B1, advancing to B2.',
  tagline: 'Business Analyst · Data Analytics · Decision Intelligence',
  photo: `${base}Profile.JPG`,
  resumeImages: [`${base}resume_page-1.jpg`, `${base}resume_page-2.jpg`],
};

export default profile;
