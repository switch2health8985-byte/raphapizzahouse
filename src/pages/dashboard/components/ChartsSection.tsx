
import TopProductsByPrice from './charts/TopProductsByPrice';
import TopProductsBySavings from './charts/TopProductsBySavings';
import PriceBandBreakdown from './charts/PriceBandBreakdown';
import PackagingDistribution from './charts/PackagingDistribution';

interface ChartsSectionProps {
  filters: any;
  selectedKPI: string | null;
}

export default function ChartsSection({ filters, selectedKPI }: ChartsSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className={`transition-all duration-300 ${selectedKPI === 'avg-price' || selectedKPI === 'total-revenue' ? 'ring-4 ring-blue-100 rounded-2xl' : ''}`}>
        <TopProductsByPrice selectedKPI={selectedKPI} />
      </div>
      <div className={`transition-all duration-300 ${selectedKPI === 'total-savings' ? 'ring-4 ring-green-100 rounded-2xl' : ''}`}>
        <TopProductsBySavings selectedKPI={selectedKPI} />
      </div>
      <div className={`transition-all duration-300 ${selectedKPI === 'avg-price' ? 'ring-4 ring-teal-100 rounded-2xl' : ''}`}>
        <PriceBandBreakdown selectedKPI={selectedKPI} />
      </div>
      <div className={`transition-all duration-300 ${selectedKPI === 'total-products' ? 'ring-4 ring-purple-100 rounded-2xl' : ''}`}>
        <PackagingDistribution selectedKPI={selectedKPI} />
      </div>
    </div>
  );
}
