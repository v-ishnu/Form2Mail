// models/pendingSubmission.js
import mongoose from "mongoose";

const pendingSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    formData: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 900
    } // expires after 15 mins
});

export default mongoose.model("PendingSubmission", pendingSchema);
