import mongoose, { Schema , models } from "mongoose";


const bookingSchema = new Schema(
    {
        checkInDate: {
            type: Schema.Types.Date,
            required: true,
        },
        checkOutDate: {
            type: Schema.Types.Date,
            required: true,
        },
        cabinName: {
            type: Schema.Types.String,
            required: true
        },
        guests: {
            type: Schema.Types.Number,
            default: 2,
        },
        location: {
            type: String,
            default: "Åre",
        },
        included: {
            type: [Schema.Types.String],
            default: []
        },

        package: {
            type: Schema.Types.ObjectId,
            ref: "Package",
        },
       
        price: {
            type: Schema.Types.Number,
            required: true
        },
        cancellationProtection: {
            type: Schema.Types.Boolean,
            default: false,
        },
        totalPrice: {
            type: Schema.Types.Number,
            required: true,
        },
        name: {
            type: Schema.Types.String,
            required: true,
        },
        email: {
            type: Schema.Types.String,
            required: true,
        },
        phone: {
            type: Schema.Types.String,
            required: true,
        },
        address: {
            type: Schema.Types.String,
            required: true,
        },
        zipCode: {
            type: Schema.Types.String,
            required: true,
        },
        city: {
            type: Schema.Types.String,
            required: true,
        },
        paymentOptions: {
            type: Schema.Types.String,
            enum: ["credit-card", "klarna", "paypal", "amex"],
            required: true,
        },
      
    },
    { timestamps: true }
);

const Booking = models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;