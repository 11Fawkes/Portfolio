import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import routes from './routes.jsx';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar.jsx';

/**
 * Main application layout.  It contains the top bar with search and page title,
 * the navigation menu and renders the active route below.  The search state
 * lives at this level so it can be passed down to pages such as Projects for
 * client‑side filtering.
 */
export default function App() {
  const [search, setSearch] = useState('');
  const location = useLocation();

  // Determine the current route for page title display.
  const currentRoute = routes.find((r) => r.path === location.pathname);
  const pageTitle = currentRoute?.title || '';

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Topbar stays at the top of the main content */}
        <Topbar title={pageTitle} search={search} onSearch={setSearch} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component search={search} />}
              />
            ))}
          </Routes>
        </main>
      </div>
    </div>
  );
}