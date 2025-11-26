function Sidebar({ isOpen, onToggle }) {
  try {
    const [activeMenu, setActiveMenu] = React.useState('inicio');

    const menuItems = [
      { id: 'inicio', label: 'Inicio', icon: 'home' },
      { id: 'usuarios', label: 'Usuarios', icon: 'users' },
      { id: 'configuracion', label: 'Configuración', icon: 'settings' }
    ];

    return (
      <div className={`fixed left-0 top-16 bottom-0 bg-white border-r border-gray-200 transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`} data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-4">
          <nav className="space-y-2">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeMenu === item.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`icon-${item.icon} text-xl`}></div>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}