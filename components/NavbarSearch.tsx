 'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import DateRangeComp from './DateRangeComp';
import PackageSelector from './PackageSelector';
import React, { useState } from 'react';



const NavbarSearch = () => {
    const [selectedPackage, setSelectedPackage] = useState('all'); // Initialize with a default value
    const [packages, setPackages] = useState([]); // State to store fetched packages
  
    const handleSearch = async () => {
      try {
        const response = await fetch(`/api/package/route?selectedPackage=${selectedPackage}`);
        
        if (response.ok) {
          const packages = await response.json();
          // Update the state with the fetched packages
          setPackages(packages);
        } else {
          // Handle errors
          console.error('Error fetching packages:', response.status);
        }
      } catch (error) {
        // Handle any unexpected errors
        console.error('Error:', error);
      }
    };
  

    return (
        <nav className="navsearch relative flex flex-wrap items-start justify-between bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center">
                        <Image
                            src="/imgs/logo-1.png"
                            alt="Nothernnest Retreat Logo"
                            width={200} // This must be adjusted for mobile
                            height={200} // This must be adjusted for mobile
                        />
                    </div>
                </Link>
                
               

                    <ul className="lg:flex list-none ml-auto">
                        <li className="nav-item text-custom-yellow font-custom px-4 text-xl">
                            <Link href="/login">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item text-custom-yellow font-custom px-4 text-xl">
                            <Link href="/register">
                                Register
                            </Link>
                        </li>
                        <li className="nav-item px-4">
                            <Link href="/dashboard"> {/*Only navigate to if user is logged in}*/}
                                <FontAwesomeIcon icon={faUserCircle} style={{ color: "#cbb26a" , fontSize: "24px" }} />
                            </Link>
                        </li>
                    </ul>
                    
                </div>
               
                <div className="w-full lg:w-64 flex items-center justify-center">
          <DateRangeComp />
          <PackageSelector />
          <button 
          onClick={handleSearch}
          className="text-xl md-5 p-3 px-4 rounded-lg font-custom text-black btn-primary bg-custom-yellow md:ml-1">Search</button>
        </div>
             
        </nav>
    );
};

export default NavbarSearch;