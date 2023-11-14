'use client';

import { createContext, useContext, ReactNode, useState } from 'react';

interface BookingInfo {
  totalPrice: number;
  email: string;
}

interface BookingContextType {
  bookingInfo: BookingInfo;
  updateBookingInfo: (newBookingInfo: Partial<BookingInfo>) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [bookingInfo, setBookingInfo] = useState<BookingInfo>({
    totalPrice: 0,
    email: '',
  });

  const updateBookingInfo = (newBookingInfo: Partial<BookingInfo>) => {
    setBookingInfo((prevInfo) => ({ ...prevInfo, ...newBookingInfo }));
  };

  const contextValue: BookingContextType = { bookingInfo, updateBookingInfo };

  return <BookingContext.Provider value={contextValue}>{children}</BookingContext.Provider>;
};

export const useBookingContext = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
};
