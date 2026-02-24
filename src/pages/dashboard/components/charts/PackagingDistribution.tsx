
import { useState } from 'react';

interface PackagingDistributionProps {
  selectedKPI: string | null;
}

export default function PackagingDistribution({ selectedKPI }: PackagingDistributionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data = [
    { label: 'Tablets', value: 45, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { label: 'Capsules', value: 25, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
    { label: 'ml (Liquid)', value: 15, color: 'from-teal-500 to-teal-600', bgColor: 'bg-teal-50', textColor: 'text-teal-600' },
    { label: 'gr (Powder)', value: 10, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50', textColor: 'text-orange-600' },
    { label: 'Per Pack', value: 5, color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-50', textColor: 'text-pink-600' }
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const isHighlighted = selectedKPI === 'total-products';

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 ${isHighlighted ? 'shadow-xl' : ''}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <i className="ri-stack-line text-xl text-purple-600"></i>
            Packaging Unit Distribution
          </h3>
          <p className="text-sm text-gray-500 mt-1">Product distribution by packaging type</p>
        </div>
        <button className="px-3 py-1.5 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors duration-150 text-xs font-medium flex items-center gap-1 whitespace-nowrap cursor-pointer">
          <i className="ri-download-line text-sm"></i>
          Export
        </button>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => {
          const widthPercent = (item.value / total) * 100;
          const isHovered = hoveredIndex === index;
          
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-4 rounded-xl transition-all duration-200 cursor-pointer ${
                isHovered ? `${item.bgColor} scale-102` : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${item.color} transition-transform duration-200 ${isHovered ? 'scale-150' : ''}`}></div>
                  <span className={`text-sm font-semibold transition-colors duration-200 ${isHovered ? item.textColor : 'text-gray-700'}`}>
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-medium transition-colors duration-200 ${isHovered ? item.textColor : 'text-gray-600'}`}>
                    {item.value}%
                  </span>
                  <span className={`text-lg font-bold transition-all duration-200 ${isHovered ? `${item.textColor} scale-110` : 'text-gray-900'}`}>
                    {Math.round((item.value / 100) * 911)} products
                  </span>
                </div>
              </div>
              
              <div className="relative h-3 bg-white rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 ${
                    isHovered ? 'shadow-lg' : ''
                  }`}
                  style={{ 
                    width: `${widthPercent}%`,
                    transform: isHovered ? 'scaleY(1.3)' : 'scaleY(1)'
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Total Products</span>
          <span className="text-2xl font-bold text-gray-900">911</span>
        </div>
      </div>
    </div>
  );
}
