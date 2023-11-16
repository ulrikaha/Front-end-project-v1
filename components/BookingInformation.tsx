'use client'

import { useSearchContext } from "@/context/SearchContext";
import { useBookingDetailsContext } from "@/context/BookingDetailsContext"; 
import { useBookingContext } from "@/context/BookingConfirmContext";
import { useState , useEffect } from "react";


    interface BookingInformationProps {
        onSubmit: () => void;
    }

    function BookingInformation({ onSubmit }: BookingInformationProps) {
    const { startDate, endDate, selectedPackage } = useSearchContext();
    const { bookingDetails } = useBookingDetailsContext()
    const [isCancellationProtectionChecked, setIsCancellationProtectionChecked] = useState(false);
    const [formData, setFormData] = useState({
        checkInDate: "",
        checkOutDate: "",
        guests: 0,
        included: [],
        price: 0,
        totalPrice: 0,
        cabinName: "",
        location: "",
        selectedPackage: "",
        cancellationProtection: false,
        name: "",
        email: "",
        phone: "",
        address: "",
        zip: "",
        city: "",
        paymentOption: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        zip: "",
        city: "",
        paymentOption: "",
    });
    

    const { updateBookingInfo } = useBookingContext();


    // UseEffect added so that the booking page updates the total price when the cancellation protection is checked
    useEffect(() => {
        const totalCost = calculateTotalCost();
        updateBookingInfo({ totalPrice: totalCost });
      }, [isCancellationProtectionChecked, bookingDetails.price]);


    // Calculate the total cost of the booking
      const calculateTotalCost = () => {
        const basePrice = bookingDetails.price;
        const cancellationProtectionCost = isCancellationProtectionChecked ? 500 : 0;
        return basePrice + cancellationProtectionCost;
      };
    
    // Handle the cancellation protection checkbox
    const handleCancellationProtectionChange = () => {
        setIsCancellationProtectionChecked((prevValue) => !prevValue);
    };

    
  // Handle form input changes
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
};


  // Handle form submission
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   

    // Reset form errors
    setFormErrors({
        name: "",
        email: "",
        phone: "",
        address: "",
        zip: "",
        city: "",
        paymentOption: "",
    });

    

    const {  name, email, phone, address, zip, city, paymentOption } = formData;

    if (!name) {
        setFormErrors((prevErrors) => ({ ...prevErrors, name: "Please enter your name." }));
        return;
    }

    if (!email) {
        setFormErrors((prevErrors) => ({ ...prevErrors, email: "Please enter your email address." }));
        return;
    }

    if (!phone) {
        setFormErrors((prevErrors) => ({ ...prevErrors, phone: "Please enter your phone number." }));
        return;

      } else if (!/^\d{10}$/.test(phone)) {
        setFormErrors((prevErrors) => ({ ...prevErrors, phone: "Please enter a valid phone number." }));
        return;
      }

    if (!address) {
        setFormErrors((prevErrors) => ({ ...prevErrors, address: "Please enter your address." }));
        return;
    }

    if (!zip) {
        setFormErrors((prevErrors) => ({ ...prevErrors, zip: "Please enter your zip code." }));
        return;
    }

    if (!city) {
        setFormErrors((prevErrors) => ({ ...prevErrors, city: "Please enter your city." }));
        return;
    }

    if (!document.querySelector('input[name="payment-option"]:checked')) {
        setFormErrors((prevErrors) => ({ ...prevErrors, paymentOption: "Please select a payment option." }));
        return;
      }
    
      console.log(formData) 
  // Call the onSubmit function passed from the parent component
  onSubmit(formData);
};

    

                       
    
    return (
        <div className="grid place-items-center mt-10 mb-10">
        <div className="w-3/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 min-h-[50vh] bg-gray-200 shadow-lg rounded-lg border-t-12">
          <div className="w-full bg-custom-green rounded-t-lg flex py-6 -mt-3">
            <p className="text-white text-l font-bold font-lora text-left ml-3">Booking Information</p>
          </div>
  
          <div className="flex">
            <div className="w-1/2 px-4">
              <h2 className="text-lg font-bold mt-12">Check-in Date</h2>
            <p className="text-lg mt-6">{startDate.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}</p>
  
              <h2 className="text-lg font-bold mt-12">Chosen Cabin</h2>
              <p className="text-lg mt-6">{bookingDetails.cabinName}</p>
  
              <h2 className="text-lg font-bold mt-12">Location</h2>
              <p className="text-lg mt-6">Åre</p>
  
              <h2 className="text-lg font-bold mt-12">Selected Package</h2>
              <p className="text-lg mt-6">{selectedPackage}</p>
  
              <h2 className="text-lg font-bold mt-12">Cancellation Protection</h2>
              <p className="text-lg mt-6">500 kr</p>
              <input 
              type="checkbox" 
              id="cancel-protection" 
              name="candel-protection" 
              checked={isCancellationProtectionChecked}
              onChange={handleCancellationProtectionChange}
              />
            </div>
  
            <div className="w-1/2 px-4">
              <h2 className="text-lg font-bold mt-12">Check-out Date</h2>
              <p className="text-lg mt-6">{endDate.toLocaleDateString('en-US' , { month: 'numeric' , day: 'numeric' , year: 'numeric' })}</p>
  
              <h2 className="text-lg font-bold mt-12">Guests</h2>
              <p className="text-lg mt-6">2</p>
  
              <h2 className="text-lg font-bold mt-12">Included</h2>
              <p className="text-lg mt-6">{bookingDetails.included.join(', ')}</p>
  
              <h2 className="text-lg font-bold mt-12">Price</h2>
              <p className="text-lg mt-6">{bookingDetails.price} Kr</p>
  
              <h2 className="text-lg font-bold mt-12">Total Price:</h2>
              <p className="text-lg mt-6">{calculateTotalCost()}  Kr</p>
            </div>
          </div>
  
          <div className="border-t border-black my-4 mt-5 mb-10"></div>
  
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 ml-6 mr-6">

        {/* Hidden input fields for additional data */}
    <input type="hidden" name="checkInDate" value={formData.checkInDate} />
    <input type="hidden" name="checkOutDate" value={formData.checkOutDate} />
    <input type="hidden" name="guests" value={formData.guests} />
    <input type="hidden" name="included" value={formData.included} />
    <input type="hidden" name="price" value={formData.price} />
    <input type="hidden" name="totalPrice" value={formData.totalPrice} />
    <input type="hidden" name="cabinName" value={formData.cabinName} />
    <input type="hidden" name="location" value={formData.location} />
    <input type="hidden" name="selectedPackage" value={formData.selectedPackage} />
    <input type="hidden" name="cancellationProtection" value={formData.cancellationProtection.toString()} />


            <div className="flex flex-col">
              <label htmlFor="name">Full Name</label>
              <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              required 
              className={`bg-gray-100 rounded-md p-2 ${formErrors.name && "border-red-500"}`}
              onChange={handleInputChange}
              />
              {formErrors.name && <span className="text-red-500">{formErrors.name}</span>}
            </div>
        
  
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              required 
              className={`bg-gray-100 rounded-md p-2 ${formErrors.email && "border-red-500"}`}
              onChange={handleInputChange}
            />
            {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
          </div>
  
            <div className="flex flex-col">
              <label htmlFor="phone">Phone Number</label>
              <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              required 
              className={`bg-gray-100 rounded-md p-2 ${formErrors.phone && "border-red-500"}`}
              onChange={handleInputChange}
              />
              {formErrors.phone && <span className="text-red-500">{formErrors.phone}</span>}
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="address">Address</label>
              <input 
              type="text" 
              id="address" 
              name="address" 
                value={formData.address}
              required 
              className={`bg-gray-100 rounded-md p-2 ${formErrors.address && "border-red-500"}`}
              onChange={handleInputChange}
              />
              {formErrors.address && <span className="text-red-500">{formErrors.address}</span>}
            </div>


            <div className="flex flex-col">
              <label htmlFor="zip">Zip Code</label>
              <input 
              type="text" 
              id="zip" 
              name="zip" 
              value={formData.zip}
              required 
              className={`bg-gray-100 rounded-md p-2 ${formErrors.zip && "border-red-500"}`}
              onChange={handleInputChange}
              />
              {formErrors.zip && <span className="text-red-500">{formErrors.zip}</span>}
            </div>


  
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input 
              type="text" 
              id="city" 
              name="city" 
              value={formData.city}
              required 
              className={`bg-gray-100 rounded-md p-2 ${formErrors.city && "border-red-500"}`}
              onChange={handleInputChange}
              />
              {formErrors.city && <span className="text-red-500">{formErrors.city}</span>}
            </div>
  
         
  
            <div className="flex flex-col mt-6">
  <label>Payment Options</label>
  <div className="flex gap-4 mt-2">
    <div className="flex items-center">
      <input
        type="radio"
        id="credit-card"
        name="payment-option"
        value="credit-card"
        required
        onChange={handleInputChange}
      />
      <label htmlFor="credit-card">
        <img src="/imgs/card.png" alt="Credit Card" />
      </label>
    </div>

    <div className="flex items-center">
      <input
        type="radio"
        id="klarna"
        name="payment-option"
        value="klarna"
        required
        onChange={handleInputChange}
      />
      <label htmlFor="klarna">
        <img src="/imgs/klarna.png" alt="Klarna" />
      </label>
    </div>

    <div className="flex items-center">
      <input
        type="radio"
        id="paypal"
        name="payment-option"
        value="paypal"
        required
        onChange={handleInputChange}
      />
      <label htmlFor="paypal">
        <img src="/imgs/paypal.png" alt="PayPal" />
      </label>
    </div>

    <div className="flex items-center">
      <input
        type="radio"
        id="amex"
        name="payment-option"
        value="amex"
        required
        onChange={handleInputChange}
      />
      <label htmlFor="amex">
        <img src="/imgs/amex.png" alt="Amex" />
      </label>
    </div>
  </div>
  {formErrors.paymentOption && <span className="text-red-500">{formErrors.paymentOption}</span>}
</div>


           
  
            <div className="flex justify-center mt-6 mb-5">
                
                <button 
                type="submit" 
                className="bg-custom-yellow font-bold text-black py-3 px-6 rounded-xl mt-6 font-lora mx-auto">
                    Confirm Booking
                </button>
               
              
                </div>
            </form>
        </div>
    </div>
           
    );
  }
  
  export default BookingInformation;