'use client'


import { useState } from "react";

    function BookingInformation() {
    const [paymentOption, setPaymentOption] = useState("");

    const handlePaymentOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentOption(event.target.value);
    };

                       
    
    return (
            <div className="grid place-items-center h-screen">
        <div className="w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4 min-h-[50vh] bg-gray-200 shadow-lg rounded-lg border-t-12">
        <div className="w-full bg-custom-green rounded-t-lg flex py-6 -mt-3">
        <p className="text-white text-l font-bold font-lora text-left ml-3">Booking Information</p>
        </div>
        <div className="mt-6 font-lora pt-7">
        <h2 className="text-xl font-bold mt-12">Check-in Date</h2>
        <p className="text-lg mt-8">Date?</p> {/* This should be the check-in date*/}

        <h2 className="text-xl font-bold mt-12">Check-out Date</h2> {/* This should be the check-out date*/}
        <p className="text-center text-lg mt-8">Date?</p>

        <h2 className="text-xl font-bold mt-12">Chosen Cabin</h2>
        <p className="text-center text-lg mt-8">Cabin?</p> {/* This should be the cabin name*/}

        <h2 className="text-xl font-bold mt-12">Guests</h2>
        <p className="text-center text-lg mt-8">2</p>

        <h2 className="text-xl font-bold mt-12">Selected Package</h2>
        <p className="text-center text-lg mt-8">Package?</p> {/* This should be the selected package*/}

        <h2 className="text-xl font-bold mt-12">Included</h2>
        <p className="text-center text-lg mt-8">Included?</p> {/* This should be the included activities*/}

        <h2 className="text-xl font-bold mt-12">Price</h2>
        <p className="text-center text-lg mt-8">Price?</p> {/* This should be the price*/}

        <h2 className="text-xl font-bold mt-12">Cancellation Protection</h2>
        <p className="text-center text-lg mt-8">Cancellation Protection?</p> {/* This should be the cancellation protection*/}

        <h2 className="text-xl font-bold mt-12">Total Cost</h2>
        <p className="text-center text-lg mt-8">Summa?</p> {/* This should be the total amount*/}

        <hr className="w-full bg-black" />

        <form className="flex flex-col gap-3">
        <div>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required />
         </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
             </div>
            <div>
             <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
            </div>
        <div>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required />
            </div>
            <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required />
            </div>
                <div>
            <label htmlFor="zip">Zip Code</label>
            <input type="text" id="zip" name="zip" required />
             </div>

                        <div>
                         <label>Payment Options</label>
                            <div className="flex gap-4 mt-2">
                             <div>
                                <label htmlFor="credit-card">
                                <img src="/credit-card.png" alt="Credit Card" />
                                <input
                                type="radio"
                                 id="credit-card"
                               name="payment-option"
                                value="credit-card"
                             checked={paymentOption === "credit-card"}
                            onChange={handlePaymentOptionChange}
                            />
                        </label>
                    </div>
                         <div>
                            <label htmlFor="klarna">
                            <img src="/klarna.png" alt="Klarna" />
                            <input
                            type="radio"
                            id="klarna"
                            name="payment-option"
                            value="klarna"
                            checked={paymentOption === "klarna"}
                            onChange={handlePaymentOptionChange}
                            />
                            </label>
                            <div>
                             <label htmlFor="paypal">
                            <img src="/paypal.png" alt="PayPal" />
                            <input
                                type="radio"
                                id="paypal"
                                name="payment-option"
                                value="paypal"
                                checked={paymentOption === "paypal"}
                                onChange={handlePaymentOptionChange}
                                />
                                </label>
                                </div>
                                <div>
                                <label htmlFor="amex">
                                <img src="/amex.png" alt="Amex" />
                                 <input
                                    type="radio"
                                    id="amex"
                                    name="payment-option"
                                    value="amex"
                                    checked={paymentOption === "amex"}
                                    onChange={handlePaymentOptionChange}
                                    />
                                    </label>
                                 </div>
                                </div>
                                </div>
                             </div>

                                            <button type="submit" className="bg-custom-yellow text-black py-2 px-4 rounded-lg mt-6 font-lora">
                                                Confirm Booking
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        );
                    }

    export default BookingInformation;
