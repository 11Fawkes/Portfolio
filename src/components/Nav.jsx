import { NavLink } from 'react-router-dom';

/**
 * Navigation bar containing links to each section of the site.  The current
 * section is highlighted via NavLink's active state.  The order of items
 * follows the specification: Home, Experience, Projects, Skills, Resume, Contact.
 */
export default function Nav() {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 overflow-x-auto">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `py-3 px-2 whitespace-nowrap text-sm font-medium ${
                  isActive
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}