
'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useBookingContext } from "@/context/BookingConfirmContext";

const PaymentConfirmation = () => {
    const { bookingInfo } = useBookingContext();
    //console.log('Booking Info:', bookingInfo);
    const { bookingReference } = bookingInfo;

     // Access total price and email from the context
  const { totalPrice, email } = bookingInfo;

  

    return (
        <div className="grid place-items-center h-screen">
            <div className="w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4 min-h-[50vh] bg-gray-200 shadow-lg rounded-lg border-t-12">
              <div className="w-full bg-custom-green rounded-t-lg flex justify-center items-center py-4 -mt-3">
            <FontAwesomeIcon icon={faSquareCheck} style={{color: "#cba86a", fontSize: "3rem"}} />
            </div>  
            <div className="mt-6 font-lora pt-7">
                <h2 className="text-center text-2xl font-bold mt-12">Thank you for your payment!</h2>
                <p className="text-center text-lg mt-8 mb-2">Total payment amount </p>
                <p className="text-center text-lg font-bold">{totalPrice} SEK</p> 
                <p className="text-center text-lg mt-8 mb-2">Your booking reference:</p>
                <p className="text-center text-lg font-bold">{bookingReference}</p>
                <p className="text-center text-lg mt-8 mb-2">A receipt and booking reference for this transaction has been sent to this email:</p>
                <p className="text-center text-lg font-bold">{email}</p> {/** email from context not working!!!! */}
            </div>
        </div>
        </div>
    );
};
 export default PaymentConfirmation;




    