import { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  dateRange: string;
  onDateRangeChange: (range: string) => void;
}

export default function Header({ dateRange, onDateRangeChange }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dateRanges = [
    'Last 7 Days',
    'Last 30 Days',
    'Last 90 Days',
    'Last 6 Months',
    'Last Year',
    'All Time'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1920px] mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
              Pharmacy Product Insights Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
              <i className="ri-database-2-line text-base"></i>
              Dataset: Kaggle – Pharmacy Products
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-sm whitespace-nowrap cursor-pointer"
              >
                <i className="ri-calendar-line text-lg text-gray-600"></i>
                <span className="text-sm font-medium text-gray-700">{dateRange}</span>
                <i className={`ri-arrow-down-s-line text-lg text-gray-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                  {dateRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => {
                        onDateRangeChange(range);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                        dateRange === range ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Dr. Ahmed Al-Mansoori</p>
                <p className="text-xs text-gray-500">Healthcare Analyst</p>
              </div>
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-semibold text-base shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200">
                AA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
