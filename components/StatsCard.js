function StatsCard({ title, value, icon, color, trend }) {
  try {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600' }
    };

    return (
      <div className="card" data-name="stats-card" data-file="components/StatsCard.js">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            <p className="text-sm text-green-600 mt-2">{trend}</p>
          </div>
          <div className={`w-12 h-12 ${colors[color].bg} rounded-lg flex items-center justify-center`}>
            <div className={`icon-${icon} text-xl ${colors[color].text}`}></div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StatsCard component error:', error);
    return null;
  }
}