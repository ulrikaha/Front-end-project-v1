'use client';
import { useSearchContext } from '../context/SearchContext'

function PackageSelector() {
  const { selectedPackage, updateSearchCriteria } = useSearchContext();

  return (
   
 <div className="inputBox border rounded-xl p-2 w-full font-custom text-xl text-center bg-gray-200 mb-7 h-20 flex flex-col justify-start">
      <label className="mb-2">Choose your package</label>
      <select 
      className="w-full"
      onChange={(e) => {
        const newSelectedPackage = e.target.value;
        // Declare the variables before using them
        const startDate = new Date();
        const endDate = new Date();
        // Update the context state here
        updateSearchCriteria(startDate, endDate, newSelectedPackage);
      }}
      value={selectedPackage}
    >
    
        <option value="all">All</option>
        <option value="deluxe">Deluxe</option>
        <option value="standard">Standard</option>
        <option value="budget">Budget</option>
      </select>
    </div>
    
  );
  
}

export default PackageSelector;
