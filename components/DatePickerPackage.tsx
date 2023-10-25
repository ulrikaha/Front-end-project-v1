'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';


const DatePickerPackage: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null); // Check-in date
    const [endDate, setEndDate] = useState<Date | null>(null);     // Checkout date
    const [selectedPackage, setSelectedPackage] = useState('all'); // Initial package selection
  
    // Function to handle package selection
    const handlePackageSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedPackage(event.target.value);
    };
  
    return (
        <div className="bg-gray-200 p-4" >
            <div className="flex flex-wrap items-center">

                <div className="w-1/2 p-2 flex-wrap">
                    <label className="block text-gray-700 font-bold mb-2">
                        Check-in Date
                    </label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="w-full border rounded py-2 px-3"
                    />
                 </div>

                <div className="w-1/2 p-2 flex-wrap">
                    <label className="block text-gray-700 font-bold mb-2">
                        Checkout Date
                    </label>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="w-full border rounded py-2 px-3"
                    />
                </div>

                <div className="w-1/2 p-2 flex-wrap">
                    <label className="block text-gray-700 font-bold mb-2">
                        Package
                    </label>
                    <select
                        value={selectedPackage}
                        onChange={handlePackageSelection}
                        className="w-full border rounded py-2 px-3"
                    >
                        <option value="all">All</option>
                        <option value="deluxe">Deluxe</option>
                        <option value="standard">Standard</option>
                        <option value="budget">Budget</option>
                    </select>
                </div>

            </div>
        </div>
    
    );
 };
    

export default DatePickerPackage;