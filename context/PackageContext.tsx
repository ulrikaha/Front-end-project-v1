'use client';

import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';
 


interface PackageContextValue {
    selectedPackage: Package | null;
    setSelectedPackage: Dispatch<SetStateAction<null | Package>>;
}

export const PackageContext = createContext<PackageContextValue>({
    selectedPackage: null,
    setSelectedPackage: () => {},
});

export function usePackage() {
    return useContext(PackageContext);
}

export function PackageProvider({ children }: { children: React.ReactNode }) {
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

    const value: PackageContextValue = {
        selectedPackage,
        setSelectedPackage,
    };

    return (
        <PackageContext.Provider value={value}>
            {children}
        </PackageContext.Provider>
    );
}







