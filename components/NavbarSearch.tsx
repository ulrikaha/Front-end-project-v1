 'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import DateRangeComp from './DateRangeComp';
import PackageSelector from './PackageSelector';


const NavbarSearch = () => {
   

  

    return (
        <nav className="relative flex flex-wrap items-start justify-between bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center">
                        <Image
                            src="/imgs/logo-1.png"
                            alt="Nothernnest Retreat Logo"
                            width={350} // This must be adjusted for mobile
                            height={214} // This must be adjusted for mobile
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
          <button className="text-xl md-5 p-3 px-4 rounded-lg font-custom text-black btn-primary bg-custom-yellow">Search</button>
        </div>
             
        </nav>
    );
};

export default NavbarSearch;