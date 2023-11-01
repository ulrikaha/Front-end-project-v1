import { Schema, models} from "mongoose";


const bookingSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        dateCheckIn: {
            type: Date,
            required: true,
        },
        dateCheckOut: {
            type: Date,
            required: true,
        },
        package: {
            type: Schema.Types.ObjectId,
            ref: "Package",
        },
        cabinName: {
            type: Schema.Types.ObjectId,
            ref: "Package",
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        status: {
        type: String,
        enum: ["active", "cancelled"],
        default: "active",
        },
        },
        { timestamps: true }
        );

        const Booking = models.Booking || mongoose.model("Booking", bookingSchema);
        export default Booking;