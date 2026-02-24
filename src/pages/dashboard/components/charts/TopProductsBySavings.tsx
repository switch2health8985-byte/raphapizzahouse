
import { useState } from 'react';

interface TopProductsBySavingsProps {
  selectedKPI: string | null;
}

export default function TopProductsBySavings({ selectedKPI }: TopProductsBySavingsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    { name: 'Amoxicillin 500mg', savings: 125 },
    { name: 'Metformin HCL 1000mg', savings: 108 },
    { name: 'Atorvastatin 40mg', savings: 95 },
    { name: 'Lisinopril 20mg', savings: 88 },
    { name: 'Omeprazole 40mg', savings: 82 },
    { name: 'Levothyroxine 100mcg', savings: 75 },
    { name: 'Amlodipine 10mg', savings: 68 },
    { name: 'Simvastatin 40mg', savings: 62 },
    { name: 'Losartan 100mg', savings: 55 },
    { name: 'Gabapentin 300mg', savings: 48 }
  ];

  const maxSavings = Math.max(...products.map(p => p.savings));
  const isHighlighted = selectedKPI === 'total-savings';

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 ${isHighlighted ? 'shadow-xl' : ''}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <i className="ri-bar-chart-line text-xl text-green-600"></i>
            Top 10 Products by Savings
          </h3>
          <p className="text-sm text-gray-500 mt-1">Maximum customer savings on discounts</p>
        </div>
        <button className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-150 text-xs font-medium flex items-center gap-1 whitespace-nowrap cursor-pointer">
          <i className="ri-download-line text-sm"></i>
          Export
        </button>
      </div>

      <div className="flex items-end justify-between gap-2 h-64">
        {products.map((product, index) => {
          const heightPercent = (product.savings / maxSavings) * 100;
          const isHovered = hoveredIndex === index;
          
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="relative w-full">
                {isHovered && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap z-10 shadow-lg">
                    QAR {product.savings}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                )}
                <div
                  className={`w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg transition-all duration-500 ${
                    isHovered ? 'shadow-lg shadow-green-200 scale-105' : ''
                  }`}
                  style={{ 
                    height: `${heightPercent * 2.4}px`,
                    minHeight: '20px'
                  }}
                ></div>
              </div>
              <span className={`text-xs text-gray-600 text-center transition-colors duration-150 ${isHovered ? 'text-green-600 font-semibold' : ''}`}>
                {product.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
