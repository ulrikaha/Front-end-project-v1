'use client';

import { useRouter } from 'next/navigation';
import { useSearchContext } from '../context/SearchContext';
import DateRangeComp from "./DateRangeComp";
import PackageSelector from "./PackageSelector";


import { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const { startDate, endDate, selectedPackage, updateSearchCriteria } = useSearchContext();
  //const [packages, setPackages] = useState([]);

  const handleSearchClick = async () => {
    try {
      //const response = await fetch('/api/packages');
      //const data = await response.json();
      //setPackages(data);
      //console.log(packages);
      
      const listingPageUrl = `/listings?selectedPackage=${selectedPackage}`;
      router.push(listingPageUrl);
    } catch (error) {
      console.error(error);
    }
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
  );
}