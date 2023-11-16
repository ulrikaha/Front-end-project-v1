const bookingSchema = new Schema(
    {
        checkIn: {
            type: Date,
            required: true,
        },
        checkOut: {
            type: Date,
            required: true,
        },
        cabinName: {
            type: Schema.Types.ObjectId,
            ref: "Package",
        },
        guests: {
            type: Number,
            default: 2,
        },
        location: {
            type: String,
            default: "Åre",
        },
        included: {
            type: Schema.Types.ObjectId,
            ref: "Package",
        },

        package: {
            type: Schema.Types.ObjectId,
            ref: "Package",
        },
       
        price: {
            type: Schema.Types.ObjectId,
            ref: "Package",
        },
        cancellationProtection: {
            type: Boolean,
            default: false,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        adress: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        paymentOption: {
            type: String,
            enum: ["card", "klarna", "paypal", "american-express"],
            required: true,
        },
      
    },
    { timestamps: true }
);

const Booking = models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;