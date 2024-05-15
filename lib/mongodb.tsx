import mongoose from "mongoose"

const connectDB = async (): Promise<void> => {
    try {
        if(mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI as string);
            console.log("Database Connected");
        }
    } catch (error: any) {
        console.log(error);
    }
};

export default connectDB;