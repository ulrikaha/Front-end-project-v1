'use client';

import { createContext, useContext, ReactNode, useState } from 'react';

interface BookingDetailsContextProps {
  children: ReactNode;
}

interface BookingDetails {
  price: number;
  included: string[];
  cabinName: string;
}

interface BookingDetailsContextValue {
  bookingDetails: BookingDetails;
  setBookingDetails: (details: BookingDetails) => void;
}

const BookingDetailsContext = createContext<BookingDetailsContextValue | undefined>(undefined);

export const useBookingDetailsContext = () => {
  const context = useContext(BookingDetailsContext);
  if (!context) {
    throw new Error('useBookingDetailsContext must be used within a BookingDetailsContextProvider');
  }
  return context;
};

export const BookingDetailsContextProvider = ({ children }: BookingDetailsContextProps) => {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    price: 0,
    included: [],
    cabinName: '',
  });

  const value: BookingDetailsContextValue = {
    bookingDetails,
    setBookingDetails,
  };

  return <BookingDetailsContext.Provider value={value}>{children}</BookingDetailsContext.Provider>;
};
