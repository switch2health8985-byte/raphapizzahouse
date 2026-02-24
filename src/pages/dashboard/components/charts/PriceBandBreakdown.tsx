
import { useState } from 'react';

interface PriceBandBreakdownProps {
  selectedKPI: string | null;
}

export default function PriceBandBreakdown({ selectedKPI }: PriceBandBreakdownProps) {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const data = [
    { label: 'Low (&lt; 50)', value: 15, color: 'from-blue-400 to-blue-500', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
    { label: 'Medium (50-200)', value: 45, color: 'from-teal-400 to-teal-500', bgColor: 'bg-teal-100', textColor: 'text-teal-700' },
    { label: 'High (&gt; 200)', value: 40, color: 'from-purple-400 to-purple-500', bgColor: 'bg-purple-100', textColor: 'text-purple-700' }
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const isHighlighted = selectedKPI === 'avg-price';

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 ${isHighlighted ? 'shadow-xl' : ''}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <i className="ri-donut-chart-line text-xl text-teal-600"></i>
            Price Band Breakdown
          </h3>
          <p className="text-sm text-gray-500 mt-1">Distribution across price ranges</p>
        </div>
        <button className="px-3 py-1.5 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-100 transition-colors duration-150 text-xs font-medium flex items-center gap-1 whitespace-nowrap cursor-pointer">
          <i className="ri-download-line text-sm"></i>
          Export
        </button>
      </div>

      <div className="flex items-center justify-center gap-8">
        {/* Donut Chart */}
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 100 100" className="transform -rotate-90">
            {data.map((item, index) => {
              const prevTotal = data.slice(0, index).reduce((sum, d) => sum + d.value, 0);
              const startAngle = (prevTotal / total) * 360;
              const endAngle = ((prevTotal + item.value) / total) * 360;
              const largeArc = item.value / total > 0.5 ? 1 : 0;
              
              const startRad = (startAngle * Math.PI) / 180;
              const endRad = (endAngle * Math.PI) / 180;
              
              const innerRadius = 30;
              const outerRadius = hoveredSegment === index ? 48 : 45;
              
              const x1 = 50 + outerRadius * Math.cos(startRad);
              const y1 = 50 + outerRadius * Math.sin(startRad);
              const x2 = 50 + outerRadius * Math.cos(endRad);
              const y2 = 50 + outerRadius * Math.sin(endRad);
              const x3 = 50 + innerRadius * Math.cos(endRad);
              const y3 = 50 + innerRadius * Math.sin(endRad);
              const x4 = 50 + innerRadius * Math.cos(startRad);
              const y4 = 50 + innerRadius * Math.sin(startRad);
              
              const pathData = [
                `M ${x1} ${y1}`,
                `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2}`,
                `L ${x3} ${y3}`,
                `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4}`,
                'Z'
              ].join(' ');
              
              return (
                <path
                  key={index}
                  d={pathData}
                  className={`fill-current transition-all duration-300 cursor-pointer ${
                    hoveredSegment === index ? item.textColor : 'text-gray-300'
                  }`}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  style={{
                    filter: hoveredSegment === index ? 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' : 'none'
                  }}
                />
              );
            })}
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-xs text-gray-500 mt-1">Total</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {data.map((item, index) => {
            const isHovered = hoveredSegment === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                  isHovered ? `${item.bgColor} scale-105` : 'hover:bg-gray-50'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} transition-transform duration-200 ${isHovered ? 'scale-125' : ''}`}></div>
                <div className="flex-1">
                  <p className={`text-sm font-medium transition-colors duration-200 ${isHovered ? item.textColor : 'text-gray-700'}`} dangerouslySetInnerHTML={{ __html: item.label }}></p>
                  <p className="text-xs text-gray-500">{((item.value / total) * 100).toFixed(1)}% of products</p>
                </div>
                <p className={`text-lg font-bold transition-all duration-200 ${isHovered ? `${item.textColor} scale-110` : 'text-gray-900'}`}>
                  {item.value}%
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
