'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';


import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-custom-green">
            <div className="container mx-auto px-6 py-2">
                <div className="lg:flex">
                    <div className="w-full lg:w-1/3">
                        <h2 className="flex text-lg font-bold font-custom text-white mb-4 mt-5 justify-center">Contact Us</h2>
                        <p className="flex text-custom-yellow font-lora font-bold leading-loose mb-4 justify-center">
                        Northernnest Retreats</p>

                        
                        <div className="flex justify-center">
                        <p className="text-white font-lora leading-loose">
                         <FontAwesomeIcon icon={faLocationDot} style={{color: "#cbb26a",}} className="w-10 h-10 mr-2 " />
                         Norrskensvägen 235<br />
                            <br />
                        235 00 Åre, Sweden <br />
                            <br />
                            <FontAwesomeIcon icon={faPhone} style={{color: "#cbb26a",}} className="w-10 h-10 mr-2" />
                            +46 123 423 024<br />
                            <br />
                            <FontAwesomeIcon icon={faEnvelope} style={{color: "#cbb26a",}} className="w-10 h-10 mr-2" />
                            contact@northernnest.com
                        </p>
                        </div>

                    </div>

                    <div className="w-full lg:w-1/3">
                        <h2 className="flex text-lg font-bold font-custom text-white mb-4 mt-5 justify-center">Sign Up to Our Newsletter</h2>
                        <form className="flex">
                            <div className="flex mb-4 mr-2 h-full justify-center">
                                <input className="flex justify-center w-full px-3 py-2 text-gray-700 bg-gray-200 rounded h-full" id="email" type="email" placeholder="you@example.com" />
                            </div>
                            <button className="px-6 bg-custom-yellow text-white font-custom rounded-lg h-9">Sign Up</button>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h2 className=" flex text-lg font-bold font-custom text-white mb-4 mt-5 justify-center">Follow Us</h2>
                        <div className="flex justify-center">
                        <FontAwesomeIcon icon={faFacebook} style={{color: "#cbb26a",}} className="w-10 h-10 p-2" />
                        <FontAwesomeIcon icon={faTwitter} style={{color: "#cbb26a",}} className="w-10 h-10 p-2" />
                        <FontAwesomeIcon icon={faInstagram} style={{color: "#cbb26a",}} className="w-10 h-10 p-2" />
                       </div>
                    </div>
                </div>
               
                <div>
                    <div className="flex justify-center">
                        <div>
                            <img className="h-40" src="./imgs/logo-1.png" alt="Logo" />
                        </div>
                    </div>
                    <div className="flex justify-center text-custom-yellow text-sm mt-2">
                        &copy; 2023. NorthernNest Retreats. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
