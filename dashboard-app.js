const ChartJS = window.Chart;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-4 text-center">Algo salió mal</div>;
    }
    return this.props.children;
  }
}

function DashboardApp() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
      const user = getCurrentUser();
      if (!user) {
        window.location.href = 'index.html';
        return;
      }
      setCurrentUser(user);
    }, []);

    if (!currentUser) return null;

    return (
      <div className="min-h-screen bg-gray-50" data-name="dashboard-app" data-file="dashboard-app.js">
        <Topbar user={currentUser} />
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} pt-16`}>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <StatsCard title="Total Usuarios" value="1,245" icon="users" color="blue" trend="+12%" />
              <StatsCard title="Ventas Hoy" value="$8,432" icon="dollar-sign" color="green" trend="+8%" />
              <StatsCard title="Pedidos" value="342" icon="shopping-cart" color="purple" trend="+23%" />
              <StatsCard title="Ingresos" value="$52,420" icon="trending-up" color="orange" trend="+15%" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="Ventas Mensuales" type="line" />
              <ChartCard title="Categorías" type="bar" />
              <ChartCard title="Distribución" type="doughnut" />
              <ChartCard title="Rendimiento" type="radar" />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);