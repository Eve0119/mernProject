import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mytesting2233:V7k8HPoVIlOD0ne9@cluster0.r4davnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MongoDB connected successfully");
    }catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
}