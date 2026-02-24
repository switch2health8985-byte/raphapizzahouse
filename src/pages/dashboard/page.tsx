import { useState } from 'react';
import Header from './components/Header';
import KPICards from './components/KPICards';
import FilterBar from './components/FilterBar';
import ChartsSection from './components/ChartsSection';
import ProductTable from './components/ProductTable';

export default function Dashboard() {
  const [filters, setFilters] = useState({
    packagingUnits: [] as string[],
    priceBands: [] as string[],
    showDiscountedOnly: false,
    categories: [] as string[],
    dateRange: 'Last 30 Days'
  });

  const [selectedKPI, setSelectedKPI] = useState<string | null>(null);

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearAllFilters = () => {
    setFilters({
      packagingUnits: [],
      priceBands: [],
      showDiscountedOnly: false,
      categories: [],
      dateRange: 'Last 30 Days'
    });
    setSelectedKPI(null);
  };

  const handleKPIClick = (kpiType: string) => {
    setSelectedKPI(selectedKPI === kpiType ? null : kpiType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/20">
      <Header 
        dateRange={filters.dateRange}
        onDateRangeChange={(range) => handleFilterChange({ dateRange: range })}
      />
      
      <div className="max-w-[1920px] mx-auto px-6 py-6">
        <KPICards onKPIClick={handleKPIClick} selectedKPI={selectedKPI} />
        
        <div className="mt-6">
          <FilterBar 
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearAll={clearAllFilters}
          />
        </div>
        
        <div className="mt-6">
          <ChartsSection filters={filters} selectedKPI={selectedKPI} />
          <div className="mt-6">
            <ProductTable filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}
