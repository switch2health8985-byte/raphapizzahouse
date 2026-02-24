import { useState, useRef, useEffect } from 'react';

interface FilterPanelProps {
  filters: {
    packagingUnits: string[];
    priceBands: string[];
    showDiscountedOnly: boolean;
    categories: string[];
  };
  onFilterChange: (filters: any) => void;
  onClearAll: () => void;
}

export default function FilterPanel({ filters, onFilterChange, onClearAll }: FilterPanelProps) {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const packagingUnits = ['ml', 'tablets', 'gr', 'capsules', 'per pack'];
  const priceBands = ['Low (< 50)', 'Medium (50-200)', 'High (> 200)'];
  const categories = [
    'Pain Relief',
    'Antibiotics',
    'Vitamins & Supplements',
    'Cardiovascular',
    'Respiratory',
    'Digestive Health',
    'Dermatology',
    'Diabetes Care'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const togglePackagingUnit = (unit: string) => {
    const newUnits = filters.packagingUnits.includes(unit)
      ? filters.packagingUnits.filter(u => u !== unit)
      : [...filters.packagingUnits, unit];
    onFilterChange({ packagingUnits: newUnits });
  };

  const togglePriceBand = (band: string) => {
    const newBands = filters.priceBands.includes(band)
      ? filters.priceBands.filter(b => b !== band)
      : [...filters.priceBands, band];
    onFilterChange({ priceBands: newBands });
  };

  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onFilterChange({ categories: newCategories });
  };

  const activeFiltersCount = 
    filters.packagingUnits.length + 
    filters.priceBands.length + 
    filters.categories.length + 
    (filters.showDiscountedOnly ? 1 : 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <i className="ri-filter-3-line text-xl text-gray-700"></i>
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          {activeFiltersCount > 0 && (
            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <i className="ri-box-3-line text-base"></i>
            Packaging Unit
          </h4>
          <div className="space-y-2">
            {packagingUnits.map((unit) => (
              <label
                key={unit}
                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors duration-150 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.packagingUnits.includes(unit)}
                  onChange={() => togglePackagingUnit(unit)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-150">
                  {unit}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <i className="ri-price-tag-3-line text-base"></i>
            Price Band
          </h4>
          <div className="space-y-2">
            {priceBands.map((band) => (
              <label
                key={band}
                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors duration-150 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.priceBands.includes(band)}
                  onChange={() => togglePriceBand(band)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-150">
                  {band}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <label className="flex items-center justify-between p-3 rounded-lg bg-purple-50 border border-purple-100 cursor-pointer hover:bg-purple-100 transition-colors duration-150">
            <div className="flex items-center gap-2">
              <i className="ri-discount-percent-line text-lg text-purple-600"></i>
              <span className="text-sm font-medium text-purple-900">Show Discounted Only</span>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                checked={filters.showDiscountedOnly}
                onChange={(e) => onFilterChange({ showDiscountedOnly: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition-colors duration-200"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-5"></div>
            </div>
          </label>
        </div>

        <div className="pt-4 border-t border-gray-100 relative" ref={dropdownRef}>
          <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <i className="ri-list-check text-base"></i>
            Product Categories
          </h4>
          <button
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            className="w-full flex items-center justify-between p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            <span className="text-sm text-gray-700">
              {filters.categories.length > 0 
                ? `${filters.categories.length} selected` 
                : 'Select categories'}
            </span>
            <i className={`ri-arrow-down-s-line text-lg text-gray-600 transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180' : ''}`}></i>
          </button>
          
          {isCategoryDropdownOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {activeFiltersCount > 0 && (
          <button
            onClick={onClearAll}
            className="w-full mt-4 px-4 py-2.5 bg-white border-2 border-red-200 text-red-600 rounded-lg hover:bg-red-50 hover:border-red-300 transition-all duration-200 font-medium text-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-close-circle-line text-base"></i>
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
}
