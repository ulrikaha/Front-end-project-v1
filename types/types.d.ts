type Package = {
    imgUrl: string,
    category: string,
    price: number,
    description: string,
    cabinName: string,
    included: string[],
    info: string[],
    rating: number,
    cabinId: number, 
  }





  type Booking = {
    package: Package;
    checkInDate: Date;
    checkOutDate: Date;
  }