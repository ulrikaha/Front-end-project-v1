'use client';
import { useSearchContext } from '../context/SearchContext';
import DateRangeComp from "./DateRangeComp";
import PackageSelector from "./PackageSelector";


export default function SearchBar() {
    const { startDate, endDate, selectedPackage, updateSearchCriteria } = useSearchContext();

    const handleSearchClick = () => {
        // Here, you can perform your search based on startDate, endDate, and selectedPackage.
        // You may want to navigate to a different page or fetch data from MongoDB.
        // For simplicity, we'll just log the criteria for now.
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Selected Package:', selectedPackage);
      };
    
  return (

<div className="searchbar bar w-full flex justify-center">
<div className="bg-gray-200 rounded-xl shadow-md p-6 m-4 w-1/2">
  <div className="flex items-center justify-center space-x-4">
    <DateRangeComp />
    <PackageSelector />
    <button
     className="text-xl md-5 p-3 px-5 rounded-lg font-custom text-black btn-primary bg-custom-yellow"
      onClick={handleSearchClick}
    >
      Search
    </button>
  </div>
</div>
</div>
  )
}