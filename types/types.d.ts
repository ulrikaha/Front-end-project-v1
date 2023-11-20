type Package = {
    imgUrl: string,
    category: string,
    price: number,
    description: string,
    cabinName: string,
    included: string[],
    info: string[],
    rating: number,
    cabinId: string, 
    imgs: string[],
  }

  type Booking = {
    package: Package;
    checkInDate: Date;
    checkOutDate: Date;
  }

//Used in CabinCard.tsx and CabinCardMobile.tsx
  type PackageCardProps = {
    selectedPackage: {
    imgUrl: string;
    cabinName: string;
    description: string;
    name: string;
    price: number;
    info: string;
    rating: number;
    category: string;
    cabinId: string;
};
 
}