'use client';
import { useSearchContext } from '../context/SearchContext'

function PackageSelector() {
  const { selectedPackage, setSelectedPackage } = useSearchContext();

  return (
   
 <div className="inputBox border rounded-xl p-2 w-full font-custom text-xl text-center bg-gray-200 mb-7 h-20 flex flex-col justify-start">
      <label className="mb-2">Choose your package</label>
      <select 
      className="w-full"
      onChange={(e) => {
        const newSelectedPackage = e.target.value;
       
        // Update the context state here
        setSelectedPackage(newSelectedPackage);
      }}
      value={selectedPackage}
    >
    
        <option value="All">All</option>
        <option value="Deluxe">Deluxe</option>
        <option value="Standard">Standard</option>
        <option value="Budget">Budget</option>
      </select>
    </div>
    
  );
  
}

export default PackageSelector;
