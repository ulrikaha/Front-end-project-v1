interface Package {
    category: string;
    price: number;
    name: string;
    description: string;
    rating: number;
  }

  interface Booking {
    package: Package;
    checkInDate: Date;
    checkOutDate: Date;
  }