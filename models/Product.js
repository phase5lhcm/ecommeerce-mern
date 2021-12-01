import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

// remove name length validation
const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
            maxlength: 25,
        },
        price: {
            type: Number,
            trim: true,
            required: true,
        },
        category: {
            type: String,
            ref: 'Category',
            required: true,
        },
        quantity: {
            type: Number,
        },
        shipping: {
            required: false,
            type: Boolean,
        },
        file: {
            type: String,
        },
        cloudinary_id: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Product', ProductSchema);
