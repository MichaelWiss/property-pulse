import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    console.log(process.env.MONGODB_URI);
    mongoose.set('strictQuery', true);

    // If the database is already connected, don't connect again
    if(connected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;