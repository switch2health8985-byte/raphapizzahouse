import { useState } from 'react';

interface ProductTableProps {
  filters: any;
}

interface Product {
  id: number;
  name: string;
  packaging: string;
  price: number;
  discountedPrice: number | null;
  discountPercent: number;
  savings: number;
}

export default function ProductTable({ filters }: ProductTableProps) {
  const [sortField, setSortField] = useState<keyof Product>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const products: Product[] = [
    { id: 1, name: 'Amoxicillin 500mg Capsules', packaging: 'capsules', price: 850, discountedPrice: 725, discountPercent: 15, savings: 125 },
    { id: 2, name: 'Metformin HCL 1000mg Extended Release', packaging: 'tablets', price: 720, discountedPrice: 612, discountPercent: 15, savings: 108 },
    { id: 3, name: 'Atorvastatin Calcium 40mg Tablets', packaging: 'tablets', price: 680, discountedPrice: 585, discountPercent: 14, savings: 95 },
    { id: 4, name: 'Lisinopril 20mg Tablets', packaging: 'tablets', price: 620, discountedPrice: 532, discountPercent: 14, savings: 88 },
    { id: 5, name: 'Omeprazole 40mg Delayed Release', packaging: 'capsules', price: 580, discountedPrice: 498, discountPercent: 14, savings: 82 },
    { id: 6, name: 'Levothyroxine Sodium 100mcg', packaging: 'tablets', price: 540, discountedPrice: 465, discountPercent: 14, savings: 75 },
    { id: 7, name: 'Amlodipine Besylate 10mg', packaging: 'tablets', price: 490, discountedPrice: 422, discountPercent: 14, savings: 68 },
    { id: 8, name: 'Simvastatin 40mg Tablets', packaging: 'tablets', price: 450, discountedPrice: 388, discountPercent: 14, savings: 62 },
    { id: 9, name: 'Losartan Potassium 100mg', packaging: 'tablets', price: 420, discountedPrice: 365, discountPercent: 13, savings: 55 },
    { id: 10, name: 'Gabapentin 300mg Capsules', packaging: 'capsules', price: 380, discountedPrice: 332, discountPercent: 13, savings: 48 },
    { id: 11, name: 'Sertraline HCL 100mg Tablets', packaging: 'tablets', price: 350, discountedPrice: null, discountPercent: 0, savings: 0 },
    { id: 12, name: 'Pantoprazole Sodium 40mg', packaging: 'tablets', price: 320, discountedPrice: 280, discountPercent: 13, savings: 40 },
    { id: 13, name: 'Clopidogrel 75mg Tablets', packaging: 'tablets', price: 295, discountedPrice: null, discountPercent: 0, savings: 0 },
    { id: 14, name: 'Montelukast Sodium 10mg', packaging: 'tablets', price: 275, discountedPrice: 242, discountPercent: 12, savings: 33 },
    { id: 15, name: 'Escitalopram 20mg Tablets', packaging: 'tablets', price: 250, discountedPrice: null, discountPercent: 0, savings: 0 },
    { id: 16, name: 'Rosuvastatin Calcium 20mg', packaging: 'tablets', price: 230, discountedPrice: 203, discountPercent: 12, savings: 27 },
    { id: 17, name: 'Tramadol HCL 50mg Capsules', packaging: 'capsules', price: 210, discountedPrice: null, discountPercent: 0, savings: 0 },
    { id: 18, name: 'Cetirizine HCL 10mg Tablets', packaging: 'tablets', price: 45, discountedPrice: 40, discountPercent: 11, savings: 5 },
    { id: 19, name: 'Ibuprofen 400mg Tablets', packaging: 'tablets', price: 35, discountedPrice: null, discountPercent: 0, savings: 0 },
    { id: 20, name: 'Paracetamol 500mg Tablets', packaging: 'tablets', price: 25, discountedPrice: 22, discountPercent: 12, savings: 3 }
  ];

  const handleSort = (field: keyof Product) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (aValue === null) return 1;
    if (bValue === null) return -1;
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    return sortDirection === 'asc'
      ? (aValue as number) - (bValue as number)
      : (bValue as number) - (aValue as number);
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const SortIcon = ({ field }: { field: keyof Product }) => {
    if (sortField !== field) {
      return <i className="ri-arrow-up-down-line text-gray-400"></i>;
    }
    return sortDirection === 'asc' 
      ? <i className="ri-arrow-up-line text-blue-600"></i>
      : <i className="ri-arrow-down-line text-blue-600"></i>;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <i className="ri-table-line text-xl text-blue-600"></i>
              Detailed Product Information
            </h3>
            <p className="text-sm text-gray-500 mt-1">Complete product catalog with pricing details</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150 text-sm font-medium text-gray-700 flex items-center gap-2 whitespace-nowrap cursor-pointer">
              <i className="ri-download-line text-base"></i>
              Export
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-150 text-sm font-medium flex items-center gap-2 whitespace-nowrap cursor-pointer">
              <i className="ri-filter-line text-base"></i>
              Advanced Filter
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th 
                className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-150"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  Product Name
                  <SortIcon field="name" />
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-150"
                onClick={() => handleSort('packaging')}
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  Packaging
                  <SortIcon field="packaging" />
                </div>
              </th>
              <th 
                className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-150"
                onClick={() => handleSort('price')}
              >
                <div className="flex items-center justify-end gap-2 whitespace-nowrap">
                  Price
                  <SortIcon field="price" />
                </div>
              </th>
              <th 
                className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-150"
                onClick={() => handleSort('discountedPrice')}
              >
                <div className="flex items-center justify-end gap-2 whitespace-nowrap">
                  Discounted Price
                  <SortIcon field="discountedPrice" />
                </div>
              </th>
              <th 
                className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-150"
                onClick={() => handleSort('discountPercent')}
              >
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                  Discount %
                  <SortIcon field="discountPercent" />
                </div>
              </th>
              <th 
                className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-150"
                onClick={() => handleSort('savings')}
              >
                <div className="flex items-center justify-end gap-2 whitespace-nowrap">
                  Savings
                  <SortIcon field="savings" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginatedProducts.map((product, index) => (
              <tr 
                key={product.id}
                className={`hover:bg-blue-50/50 transition-colors duration-150 cursor-pointer ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                }`}
              >
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {product.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium whitespace-nowrap">
                    {product.packaging}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right font-semibold whitespace-nowrap">
                  QAR {product.price}
                </td>
                <td className="px-6 py-4 text-sm text-right whitespace-nowrap">
                  {product.discountedPrice ? (
                    <span className="text-green-600 font-semibold">QAR {product.discountedPrice}</span>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                  {product.discountPercent > 0 ? (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                      {product.discountPercent}%
                    </span>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-right whitespace-nowrap">
                  {product.savings > 0 ? (
                    <span className="text-green-600 font-bold">QAR {product.savings}</span>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{startIndex + 1}</span> to{' '}
            <span className="font-semibold text-gray-900">
              {Math.min(startIndex + itemsPerPage, sortedProducts.length)}
            </span>{' '}
            of <span className="font-semibold text-gray-900">{sortedProducts.length}</span> products
          </p>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-lg text-gray-600"></i>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-colors duration-150 text-sm font-medium whitespace-nowrap cursor-pointer ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-right-s-line text-lg text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
