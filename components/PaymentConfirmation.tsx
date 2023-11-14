import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useBookingContext } from "@/context/BookingConfirmContext";

const PaymentConfirmation = () => {
    const { bookingInfo } = useBookingContext();

     // Access total price and user email from the context
  const { totalPrice, email } = bookingInfo;

    return (
        <div className="grid place-items-center h-screen">
            <div className="w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4 min-h-[50vh] bg-gray-200 shadow-lg rounded-lg border-t-12">
              <div className="w-full bg-custom-green rounded-t-lg flex justify-center items-center py-4 -mt-3">
            <FontAwesomeIcon icon={faSquareCheck} style={{color: "#cba86a", fontSize: "3rem"}} />
            </div>  
            <div className="mt-6 font-lora pt-7">
                <h2 className="text-center text-2xl font-bold mt-12">Thank you for your payment!</h2>
                <p className="text-center text-lg mt-8">{totalPrice}</p>
                <p className="text-center text-lg font-bold"></p> 
                <p className="text-center text-lg mt-8">Your booking reference</p>
                <p className="text-center text-lg font-bold">XXXXXX?</p>
                <p className="text-center text-lg mt-8">A receipt for this transaction has been sent to</p>
                <p className="text-center text-lg font-bold">{email}</p> 
            </div>
        </div>
        </div>
    );
};
 export default PaymentConfirmation;




    