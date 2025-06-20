import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'Form2Email',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Database Connected Successfully");
    } catch (error) {
        console.error("MongoDB connection error", error);
        process.exit(1);
    }
};

export default connectDB;
