'use client';

import NavbarGreen from "@/components/NavbarGreen";
import BookingInformation from "@/components/BookingInformation"
import { useRouter } from "next/navigation"



  function BookingPage() {
    const router = useRouter();

    type _FormData = {
      checkIn: string;
      checkOut: string;
      cabinName: string;
      guests: number;
      location: string;
      included: string[];
      selectedPackage: string;
      price: number;
      cancellationProtection: boolean;
      totalPrice: number;
      name: string;
      email: string;
      phone: string;
      address: string;
      zipCode: string;
      city: string;
      paymentOptions: string [];
      onSubmit: (formData: _FormData) => Promise<void>; 
};


const handleConfirmBooking = async (formData: _FormData) => {
  try {
    // Post data to the booking API route
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        contentType: "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error("Failed to confirm booking");
    }

    const data = await response.json();
  

    console.log("Booking data successfully posted:", data);

    // Navigate to the confirmation page
    router.push("/confirmation");
    
  } catch (error) {
    console.error("Error confirming booking:", error);
   
  }
};

    
    
return (
  <div>
    <NavbarGreen />
    {/* Pass the handleConfirmBooking function to BookingInformation */}
    <BookingInformation onSubmit={handleConfirmBooking} />
  </div>
);
}

export default BookingPage;