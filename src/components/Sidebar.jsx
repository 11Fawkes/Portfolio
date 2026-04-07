import { NavLink } from 'react-router-dom';
import profile from '../data/profile.js';

/**
 * Sidebar component containing the user's avatar, name and vertical
 * navigation links.  This component replaces the horizontal Nav bar and
 * persists across all pages.  The nav links highlight when active.
 */
export default function Sidebar() {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
    { to: '/hobbies', label: 'Hobbies' },
  ];
  return (
    <aside className="hidden md:flex md:flex-col w-56 min-w-[14rem] bg-card border-r border-gray-200 h-screen sticky top-0">
      <div className="flex flex-col items-center py-6 px-4">
        <img
          src={profile.photo}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover mb-3 border border-gray-300"
        />
        <h2 className="text-lg font-semibold text-gray-900 text-center">
          {profile.name}
        </h2>
        <p className="text-xs text-gray-500 text-center">
          {profile.title}
        </p>
      </div>
      <nav className="flex-1 flex flex-col mt-4 px-2 space-y-1">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}