import mongoose from "mongoose"
export const connectDB =async () => {
    try {
        const {connection} = await mongoose.connect("mongodb+srv://jitendra:Jitendra6323@cluster0.2iiqqvj.mongodb.net/");
        console.log(`Database connected to ${connection.host}`);
    } catch (error) {
        console.log("database not connected",error);
    }
}