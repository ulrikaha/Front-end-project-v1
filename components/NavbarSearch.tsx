 'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import DatePickerPackage from './DatePickerPackage';

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
                            <Link href="/">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item text-custom-yellow font-custom px-4 text-xl">
                            <Link href="/about">
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
               
           <DatePickerPackage /> {/* Datepicker*/}
             
        </nav>
    );
};

export default NavbarSearch;