'use client';

const PackageCard = ({ packageData }: { packageData: Package }) => {
    const { imgUrl, category, price, name, description, rating } = packageData;

    return (
        <div className="package-card w-1200 h-300 border-shadow-b font-lora text-black">
            <img src={imgUrl} alt={name} />
            <h2>{category}</h2>
           <h2>Price: Sek per night{price}</h2>
            <h2>{name}</h2>
            <p>{description}</p>
           <h2>{rating}</h2>
            
        </div>
    );
};

export default PackageCard;
