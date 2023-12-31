'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSearchContext } from "@/context/SearchContext";
import { useBookingDetailsContext } from "@/context/BookingDetailsContext";
import { useRouter } from 'next/navigation';



function Reserve({ selectedPackage }: ReserveProps) {
    const { startDate, endDate, updateSearchCriteria } = useSearchContext();
    const router = useRouter();
    const { setBookingDetails } = useBookingDetailsContext();
   

    const handleReserveClick = () => {
        // Save reservation details in the context
    updateSearchCriteria(startDate, endDate, selectedPackage.category);

       // Set the booking details in the BookingDetailsContext
       setBookingDetails({
        price: selectedPackage.price,
        included: selectedPackage.included,
        cabinName: selectedPackage.cabinName,
      });
        // Navigate to the booking page
    router.push('/booking');
};
       

    return (
        <div className="sticky-mobile grid place-items-center mt-12 font-lora">
        <div className="shadow-lg p-5 rounded-lg border-t-12 border-custom-green -mt-4 p-4">
              <div className="flex items-center font-bold mb-2 mt-4">
                <h2 className="mr-2">2 x</h2>
                    <FontAwesomeIcon icon={faUser} style={{ color: "#000000" }} />
                    </div>
             <h2 className="font-bold mb-3">Check in: {startDate.toLocaleDateString()}</h2>
            <h2 className="font-bold mb-3">Check out: {endDate.toLocaleDateString()}</h2>
            <h2 className="font-bold mb-3">Chosen Package: {selectedPackage.category}</h2>
            <h2 className="font-bold mb-3">Cabin Name: {selectedPackage.cabinName}</h2>
            <h2 className="font-bold mb-3">Included: {selectedPackage.included.join( ', ')}</h2>
           
            <h2 className="font-bold text-xl mb-2 mt-5">Price: {selectedPackage.price} Kr</h2>

           <div className="flex justify-center">
            <button
          className="bg-custom-yellow font-lora font-bold rounded-lg shadow-lg py-2 px-6 mt-6"
          onClick={handleReserveClick}
        >
          Reserve
        </button>
        </div>
        </div>
    </div>
    );
}

    export default Reserve;
