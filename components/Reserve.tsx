'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Reserve() {
  return (
    <div className="grid place-items-center mt-12">
    <div className="shadow-lg p-5 rounded-lg border-t-12 border-custom-green -mt-4">
        <h2>2 x</h2>
        <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} />
        {/* <h2>{selected category}</h2> */}
        {/* <h2>check in</h2> */}
        {/* <h2>check out</h2> */}
        {/* <h2>{selectedPackage.price}</h2> */}
        
        <button className="bg-custom-yellow font-lora font-bold rounded-lg shadow-lg py-2 px-4 mt-5">Reserve</button>
</div>
</div>
  )
}

export default Reserve