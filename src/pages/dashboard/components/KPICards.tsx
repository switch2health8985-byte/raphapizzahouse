
interface KPICardsProps {
  onKPIClick: (kpiType: string) => void;
  selectedKPI: string | null;
}

export default function KPICards({ onKPIClick, selectedKPI }: KPICardsProps) {
  const kpis = [
    {
      id: 'total-products',
      title: 'Total Products',
      value: '911',
      change: '+12.5%',
      trend: 'up',
      icon: 'ri-medicine-bottle-line',
      color: 'blue',
      gradient: 'from-blue-500/10 to-blue-600/5',
      sparkline: [65, 72, 68, 75, 82, 78, 85, 91]
    },
    {
      id: 'avg-price',
      title: 'Average Price',
      value: 'QAR 295',
      change: '+5.2%',
      trend: 'up',
      icon: 'ri-money-dollar-circle-line',
      color: 'teal',
      gradient: 'from-teal-500/10 to-teal-600/5',
      sparkline: [280, 285, 275, 290, 295, 288, 292, 295]
    },
    {
      id: 'total-revenue',
      title: 'Total Revenue',
      value: 'QAR 268,381',
      change: '+18.7%',
      trend: 'up',
      icon: 'ri-line-chart-line',
      color: 'green',
      gradient: 'from-green-500/10 to-green-600/5',
      sparkline: [220000, 235000, 228000, 245000, 258000, 252000, 265000, 268381]
    },
    {
      id: 'discounted-products',
      title: 'Discounted Products',
      value: '15.4%',
      change: '+2.1%',
      trend: 'up',
      icon: 'ri-percent-line',
      color: 'purple',
      gradient: 'from-purple-500/10 to-purple-600/5',
      sparkline: [12, 13, 12.5, 14, 15, 14.5, 15.2, 15.4]
    },
    {
      id: 'total-savings',
      title: 'Total Savings',
      value: 'QAR 71',
      change: '+8.3%',
      trend: 'up',
      icon: 'ri-wallet-3-line',
      color: 'orange',
      gradient: 'from-orange-500/10 to-orange-600/5',
      sparkline: [55, 58, 62, 65, 68, 66, 69, 71]
    }
  ];

  const getColorClasses = (color: string, isSelected: boolean) => {
    const colors = {
      blue: {
        icon: 'text-blue-600',
        change: 'text-blue-600 bg-blue-50',
        border: isSelected ? 'border-blue-500 shadow-lg shadow-blue-200' : 'border-gray-100',
        ring: isSelected ? 'ring-4 ring-blue-100' : ''
      },
      teal: {
        icon: 'text-teal-600',
        change: 'text-teal-600 bg-teal-50',
        border: isSelected ? 'border-teal-500 shadow-lg shadow-teal-200' : 'border-gray-100',
        ring: isSelected ? 'ring-4 ring-teal-100' : ''
      },
      green: {
        icon: 'text-green-600',
        change: 'text-green-600 bg-green-50',
        border: isSelected ? 'border-green-500 shadow-lg shadow-green-200' : 'border-gray-100',
        ring: isSelected ? 'ring-4 ring-green-100' : ''
      },
      purple: {
        icon: 'text-purple-600',
        change: 'text-purple-600 bg-purple-50',
        border: isSelected ? 'border-purple-500 shadow-lg shadow-purple-200' : 'border-gray-100',
        ring: isSelected ? 'ring-4 ring-purple-100' : ''
      },
      orange: {
        icon: 'text-orange-600',
        change: 'text-orange-600 bg-orange-50',
        border: isSelected ? 'border-orange-500 shadow-lg shadow-orange-200' : 'border-gray-100',
        ring: isSelected ? 'ring-4 ring-orange-100' : ''
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="grid grid-cols-5 gap-6">
      {kpis.map((kpi) => {
        const isSelected = selectedKPI === kpi.id;
        const colorClasses = getColorClasses(kpi.color, isSelected);
        
        return (
          <div
            key={kpi.id}
            onClick={() => onKPIClick(kpi.id)}
            className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer transform ${
              colorClasses.border
            } ${colorClasses.ring} ${
              isSelected ? 'scale-105 -translate-y-1' : 'hover:scale-102 hover:-translate-y-0.5 hover:shadow-lg'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.gradient} flex items-center justify-center transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>
                <i className={`${kpi.icon} text-2xl ${colorClasses.icon}`}></i>
              </div>
              <div className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${colorClasses.change}`}>
                <i className={`ri-arrow-${kpi.trend}-line text-sm`}></i>
                {kpi.change}
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm text-gray-600 mb-1 font-medium">{kpi.title}</p>
              <p className={`text-3xl font-bold text-gray-900 transition-all duration-300 ${isSelected ? 'text-4xl' : ''}`}>
                {kpi.value}
              </p>
            </div>

            {/* Sparkline */}
            <div className="h-12 flex items-end gap-1">
              {kpi.sparkline.map((value, index) => {
                const maxValue = Math.max(...kpi.sparkline);
                const height = (value / maxValue) * 100;
                return (
                  <div
                    key={index}
                    className={`flex-1 bg-gradient-to-t ${kpi.gradient} rounded-t transition-all duration-500`}
                    style={{ 
                      height: `${height}%`,
                      transitionDelay: `${index * 50}ms`
                    }}
                  ></div>
                );
              })}
            </div>

            {isSelected && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <i className="ri-information-line"></i>
                  Click to filter dashboard
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
