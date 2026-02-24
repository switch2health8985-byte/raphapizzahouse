
import { useState } from 'react';

interface TopProductsByPriceProps {
  selectedKPI: string | null;
}

export default function TopProductsByPrice({ selectedKPI }: TopProductsByPriceProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    { name: 'Amoxicillin 500mg Capsules', price: 850 },
    { name: 'Metformin HCL 1000mg Extended Release', price: 720 },
    { name: 'Atorvastatin Calcium 40mg Tablets', price: 680 },
    { name: 'Lisinopril 20mg Tablets', price: 620 },
    { name: 'Omeprazole 40mg Delayed Release', price: 580 },
    { name: 'Levothyroxine Sodium 100mcg', price: 540 },
    { name: 'Amlodipine Besylate 10mg', price: 490 },
    { name: 'Simvastatin 40mg Tablets', price: 450 },
    { name: 'Losartan Potassium 100mg', price: 420 },
    { name: 'Gabapentin 300mg Capsules', price: 380 }
  ];

  const maxPrice = Math.max(...products.map(p => p.price));
  const isHighlighted = selectedKPI === 'avg-price' || selectedKPI === 'total-revenue';

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 ${isHighlighted ? 'shadow-xl' : ''}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <i className="ri-bar-chart-horizontal-line text-xl text-blue-600"></i>
            Top 10 Products by Price
          </h3>
          <p className="text-sm text-gray-500 mt-1">Highest priced pharmaceutical products</p>
        </div>
        <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-150 text-xs font-medium flex items-center gap-1 whitespace-nowrap cursor-pointer">
          <i className="ri-download-line text-sm"></i>
          Export
        </button>
      </div>

      <div className="space-y-3">
        {products.map((product, index) => {
          const widthPercent = (product.price / maxPrice) * 100;
          const isHovered = hoveredIndex === index;
          
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-sm text-gray-700 font-medium transition-colors duration-150 ${isHovered ? 'text-blue-600' : ''}`}>
                  {product.name}
                </span>
                <span className={`text-sm font-bold transition-all duration-150 ${isHovered ? 'text-blue-600 scale-110' : 'text-gray-900'}`}>
                  QAR {product.price}
                </span>
              </div>
              <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg transition-all duration-500 flex items-center justify-end pr-3 ${
                    isHovered ? 'shadow-lg shadow-blue-200' : ''
                  }`}
                  style={{ 
                    width: `${widthPercent}%`,
                    transform: isHovered ? 'scaleY(1.1)' : 'scaleY(1)'
                  }}
                >
                  {isHovered && (
                    <span className="text-white text-xs font-bold animate-fade-in">
                      #{index + 1}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
