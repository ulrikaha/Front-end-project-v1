'use client';


import React, { useContext } from 'react';





function PackageSelector() {


  return (
    <div className="inputBox border rounded-xl p-2 w-full font-custom text-xl text-center bg-gray-100">
      <label>Choose your package</label>
      <select className="w-full">
        <option value="all">All</option>
        <option value="deluxe">Deluxe</option>
        <option value="standard">Standard</option>
        <option value="basic">Budget</option>
      </select>
    </div>
  );
  
}

export default PackageSelector;
