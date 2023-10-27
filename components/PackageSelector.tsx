'use client';


import React, { useContext } from 'react';
import { usePackage } from '../context/PackageContext';




function PackageSelector() {
const { selectedPackage, setSelectedPackage } = usePackage();

const handlePackageChange = (selectedPackage: string) => {
    setSelectedPackage(selectedPackage as unknown as Package);
};

  return (
    <div className="inputBox border rounded-xl p-2 h-20 w-100 font-custom text-xl text-center bg-gray-200">
    <label>Choose your package</label>
    <br></br>
    <select>
        <option value="all">All</option>
        <option value="deluxe">Deluxe</option>
        <option value="standard">Standard</option>
        <option value="basic">Budget</option>
    </select>
</div>

  );
}

export default PackageSelector;
