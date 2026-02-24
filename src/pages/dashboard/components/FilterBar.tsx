
import { useState, useRef, useEffect } from 'react';

interface FilterBarProps {
  filters: {
    packagingUnits: string[];
    priceBands: string[];
    showDiscountedOnly: boolean;
    categories: string[];
  };
  onFilterChange: (filters: any) => void;
  onClearAll: () => void;
}

export default function FilterBar({ filters, onFilterChange, onClearAll }: FilterBarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const packagingUnits = ['ml', 'tablets', 'gr', 'capsules', 'per pack'];
  const priceBands = ['Low (&lt; 50)', 'Medium (50-200)', 'High (&gt; 200)'];
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
        setActiveDropdown(null);
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

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Filter Icon and Title */}
          <div className="flex items-center gap-2 pr-4 border-r border-gray-200">
            <i className="ri-filter-3-line text-xl text-gray-700"></i>
            <span className="text-sm font-semibold text-gray-900">Filters</span>
            {activeFiltersCount > 0 && (
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </div>

          {/* Packaging Units Pills */}
          <div className="flex items-center gap-2">
            <i className="ri-box-3-line text-base text-gray-500"></i>
            <div className="flex items-center gap-2 flex-wrap">
              {packagingUnits.map((unit) => (
                <button
                  key={unit}
                  onClick={() => togglePackagingUnit(unit)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    filters.packagingUnits.includes(unit)
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200 scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>

          <div className="h-8 w-px bg-gray-200"></div>

          {/* Price Bands Pills */}
          <div className="flex items-center gap-2">
            <i className="ri-price-tag-3-line text-base text-gray-500"></i>
            <div className="flex items-center gap-2 flex-wrap">
              {priceBands.map((band) => (
                <button
                  key={band}
                  onClick={() => togglePriceBand(band)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    filters.priceBands.includes(band)
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-200 scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                  dangerouslySetInnerHTML={{ __html: band }}
                />
              ))}
            </div>
          </div>

          <div className="h-8 w-px bg-gray-200"></div>

          {/* Categories Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown('categories')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                filters.categories.length > 0
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className="ri-list-check text-base"></i>
              <span>Categories</span>
              {filters.categories.length > 0 && (
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold">
                  {filters.categories.length}
                </span>
              )}
              <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${activeDropdown === 'categories' ? 'rotate-180' : ''}`}></i>
            </button>

            {activeDropdown === 'categories' && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 min-w-[280px] max-h-80 overflow-y-auto">
                <div className="p-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-150 cursor-pointer group"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={filters.categories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
                        />
                        {filters.categories.includes(category) && (
                          <i className="ri-check-line absolute top-0 left-0 w-5 h-5 text-white pointer-events-none flex items-center justify-center"></i>
                        )}
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="h-8 w-px bg-gray-200"></div>

          {/* Discount Toggle */}
          <button
            onClick={() => onFilterChange({ showDiscountedOnly: !filters.showDiscountedOnly })}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
              filters.showDiscountedOnly
                ? 'bg-green-600 text-white shadow-md shadow-green-200 scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            <i className="ri-discount-percent-line text-base"></i>
            <span>Discounted Only</span>
            {filters.showDiscountedOnly && (
              <i className="ri-check-line text-base"></i>
            )}
          </button>

          {/* Clear All Button */}
          {activeFiltersCount > 0 && (
            <>
              <div className="h-8 w-px bg-gray-200"></div>
              <button
                onClick={onClearAll}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 transition-all duration-200 text-sm font-medium whitespace-nowrap cursor-pointer hover:scale-105"
              >
                <i className="ri-close-circle-line text-base"></i>
                Clear All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
