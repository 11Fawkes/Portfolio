import profile from '../data/profile.js';
import Card from '../components/Card.jsx';

/**
 * Contact page: lists ways to get in touch via email, LinkedIn and GitHub.  The
 * email field includes a button to copy the address to the clipboard using
 * the modern clipboard API.  Each contact method uses a Card for a clean
 * presentation.
 */
export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard
      .writeText(profile.links.email || '')
      .catch(() => {});
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 space-y-4">
      {/* Email */}
      <Card className="bg-primary/5">
        <div className="flex items-center space-x-4">
          <div className="text-3xl">📧</div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-sm text-gray-700 mb-2">{profile.links.email}</p>
            <div className="flex space-x-3">
              <a
                href={`mailto:${profile.links.email}`}
                className="text-primary text-sm hover:underline"
              >
                Send Email
              </a>
              <button
                onClick={copyEmail}
                className="text-sm text-gray-600 hover:text-primary"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </Card>
      {/* LinkedIn */}
      <Card className="bg-primary/5">
        <div className="flex items-center space-x-4">
          <div className="text-3xl">🔗</div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">LinkedIn</h3>
            <a
              href={profile.links.linkedin || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm hover:underline"
            >
              {profile.links.linkedin || 'LinkedIn Profile'}
            </a>
          </div>
        </div>
      </Card>
      {/* GitHub */}
      <Card className="bg-primary/5">
        <div className="flex items-center space-x-4">
          <div className="text-3xl">💻</div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">GitHub</h3>
            <a
              href={profile.links.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm hover:underline"
            >
              {profile.links.github || 'GitHub Profile'}
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}