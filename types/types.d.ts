type Package = {
    imgUrl: string,
    category: string,
    price: number,
    name: string,
    description: string,
    rating: number,
  }

  type Booking = {
    package: Package;
    checkInDate: Date;
    checkOutDate: Date;
  }