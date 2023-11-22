'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
  startDate: Date;
  endDate: Date;
  selectedPackage: string;
  setSelectedPackage: (selectedPackage: string) => void;
  updateSearchCriteria: (startDate: Date, endDate: Date, selectedPackage: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedPackage, setSelectedPackage] = useState('all');

  const updateSearchCriteria = (
    newStartDate: Date,
    newEndDate: Date,
    newSelectedPackage: string
  ) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    setSelectedPackage(newSelectedPackage);
  };

  return (
    <SearchContext.Provider value={{ startDate, endDate, selectedPackage, setSelectedPackage, updateSearchCriteria }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
}