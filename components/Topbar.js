function Topbar({ user }) {
  try {
    const [showProfile, setShowProfile] = React.useState(false);

    const handleLogout = () => {
      logout();
      window.location.href = 'index.html';
    };

    return (
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50" data-name="topbar" data-file="components/Topbar.js">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center space-x-8">
            <button className="text-gray-600 hover:text-gray-900">
              <div className="icon-home text-xl"></div>
            </button>
            <button className="text-gray-600 hover:text-gray-900 relative">
              <div className="icon-bell text-xl"></div>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
          </div>

          <div className="relative">
            <button onClick={() => setShowProfile(!showProfile)} className="flex items-center space-x-3">
              <img src="https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff" alt="Profile" className="w-10 h-10 rounded-full" />
              <span className="text-sm font-medium text-gray-700">{user.name}</span>
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Topbar component error:', error);
    return null;
  }
}