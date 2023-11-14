'use client'

import { useSearchContext } from "@/context/SearchContext";
import { useBookingDetailsContext } from "@/context/BookingDetailsContext"; 
import { useBookingContext } from "@/context/BookingConfirmContext";
import { useState } from "react";

    function BookingInformation() {
    const { startDate, endDate, selectedPackage } = useSearchContext();
    const { bookingDetails } = useBookingDetailsContext()
    const [paymentOption, setPaymentOption] = useState("");
    const [isCancellationProtectionChecked, setIsCancellationProtectionChecked] = useState(false);

    const { updateBookingInfo } = useBookingContext();
   
const calculateTotalCost = () => {
    const basePrice = bookingDetails.price;
    const cancellationProtectionCost = isCancellationProtectionChecked ? 500 : 0;
    const totalPrice = basePrice + cancellationProtectionCost;
    updateBookingInfo({ totalPrice });
    return totalPrice;
}
                       
    
    return (
        <div className="grid place-items-center mt-10 mb-10">
        <div className="w-3/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 min-h-[50vh] bg-gray-200 shadow-lg rounded-lg border-t-12">
          <div className="w-full bg-custom-green rounded-t-lg flex py-6 -mt-3">
            <p className="text-white text-l font-bold font-lora text-left ml-3">Booking Information</p>
          </div>
  
          <div className="flex">
            <div className="w-1/2 px-4">
              <h2 className="text-lg font-bold mt-12">Check-in Date</h2>
              <p className="text-lg mt-6">{startDate.toLocaleDateString()}</p>
  
              <h2 className="text-lg font-bold mt-12">Chosen Cabin</h2>
              <p className="text-lg mt-6">{bookingDetails.cabinName}</p>
  
              <h2 className="text-lg font-bold mt-12">Location</h2>
              <p className="text-lg mt-6">Åre</p>
  
              <h2 className="text-lg font-bold mt-12">Selected Package</h2>
              <p className="text-lg mt-6">{selectedPackage}</p>
  
              <h2 className="text-lg font-bold mt-12">Cancellation Protection</h2>
              <p className="text-lg mt-6">500 kr</p>
              <input type="radio" id="cancel-protection" name="candel-protection" value="cancel-protection" />
            </div>
  
            <div className="w-1/2 px-4">
              <h2 className="text-lg font-bold mt-12">Check-out Date</h2>
              <p className="text-lg mt-6">{endDate.toLocaleDateString()}</p>
  
              <h2 className="text-lg font-bold mt-12">Guests</h2>
              <p className="text-lg mt-6">2</p>
  
              <h2 className="text-lg font-bold mt-12">Included</h2>
              <p className="text-lg mt-6">{bookingDetails.included.join(', ')}</p>
  
              <h2 className="text-lg font-bold mt-12">Price</h2>
              <p className="text-lg mt-6">{bookingDetails.price} Kr</p>
  
              <h2 className="text-lg font-bold mt-12">Total Cost:</h2>
              <p className="text-lg mt-6"> Kr</p>
            </div>
          </div>
  
          <div className="border-t border-black my-4 mt-5 mb-10"></div>
  
          <form className="flex flex-col gap-3 ml-6 mr-6">
            <div className="flex flex-col">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required className="bg-gray-100 rounded-md p-2" />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required className="bg-gray-100 rounded-md p-2" />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required className="bg-gray-100 rounded-md p-2" />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" required className="bg-gray-100 rounded-md p-2" />
            </div>


            <div className="flex flex-col">
              <label htmlFor="zip">Zip Code</label>
              <input type="text" id="zip" name="zip" required className="bg-gray-100 rounded-md p-2" />
            </div>


  
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required className="bg-gray-100 rounded-md p-2" />
            </div>
  
         
  
           
                <div className="flex flex-col mt-6">
                    <label>Payment Options</label>
                    <div className="flex gap-4 mt-2">
                    <div className="flex items-center">
                        <label htmlFor="credit-card">
                            <img src="/imgs/card.png" alt="Credit Card" />
                            <input
                                type="radio"
                                id="credit-card"
                                name="payment-option"
                                value="credit-card"
                                required
                            />
                        </label>
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="klarna">
                            <img src="/imgs/klarna.png" alt="Klarna" />
                            <input
                                type="radio"
                                id="klarna"
                                name="payment-option"
                                value="klarna"
                                required
                                />
                        </label>
                    </div>
                
        
               <div className="flex items-center">
                  <label htmlFor="paypal">
                    <img src="/imgs/paypal.png" alt="PayPal" />
                    <input
                      type="radio"
                      id="paypal"
                      name="payment-option"
                      value="paypal"
                      required
                    />
                  </label>
                </div>
  
                <div className="flex items-center">
                  <label htmlFor="amex">
                    <img src="/imgs/amex.png" alt="Amex" />
                    <input
                      type="radio"
                      id="amex"
                      name="payment-option"
                      value="amex"
                      required
                     />
                  </label>
                </div>
              </div>
            </div>
           
  
            <div className="flex justify-center mt-6 mb-5">
              <button type="submit" className="bg-custom-yellow font-bold text-black py-3 px-6 rounded-xl mt-6 font-lora mx-auto">
                Confirm Booking
              </button>
                </div>
            </form>
        </div>
    </div>
           
    );
  }
  
  export default BookingInformation;