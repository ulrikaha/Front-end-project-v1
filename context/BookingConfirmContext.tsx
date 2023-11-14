'use client';

import React, { createContext, useContext, ReactNode, useState } from 'react';

interface BookingInfo {
  totalPrice: number;
  email: string;
  bookingReference: string;
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
    bookingReference: generateBookingReference(),
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

// Function to generate a random booking reference
const generateBookingReference = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const length = 8;
  let bookingReference = '';
  for (let i = 0; i < length; i++) {
    bookingReference += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return bookingReference;
};
