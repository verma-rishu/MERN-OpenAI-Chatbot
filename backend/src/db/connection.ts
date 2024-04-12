import mongoose from "mongoose";

async function connectToDatabase() {
    try {
        if (!process.env.MONGODB_URL) {
            throw new Error('MONGODB_URL is not defined in the environment variables');
        }
        await mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("Cannot connect to MongoDB!");
    }
}

async function disconnectFromDatabase() {
    try {
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Cannot disconnect to MongoDB!");
    }
}

export{connectToDatabase, disconnectFromDatabase};