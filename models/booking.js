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
        cabinName: {
            type: Schema.Types.ObjectId,
            ref: "Package",
        },
        location: {
            type: String,
            default: "Åre",
        },
        guests: {
            type: Number,
            default: 2,
        },
        package: {
            type: Schema.Types.ObjectId,
            ref: "Package",
        },
        included: {
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
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        streetAdress: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        paymentOption: {
            type: String,
            enum: ["card", "klarna", "paypal", "american-express"],
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
