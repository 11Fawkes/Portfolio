import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import Hobbies from './pages/Hobbies.jsx';

/**
 * Central definition of application routes.  Each route object contains the
 * path, a React component to render and a human‑friendly title used by the
 * top bar.  When adding new pages ensure they are declared here and imported
 * above.
 */
const routes = [
  { path: '/', component: Home, title: 'Home' },
  { path: '/experience', component: Experience, title: 'Experience' },
  { path: '/projects', component: Projects, title: 'Projects' },
  { path: '/skills', component: Skills, title: 'Skills' },
  { path: '/resume', component: Resume, title: 'Resume' },
  { path: '/contact', component: Contact, title: 'Contact' },
  { path: '/hobbies', component: Hobbies, title: 'Hobbies' },
];

export default routes;