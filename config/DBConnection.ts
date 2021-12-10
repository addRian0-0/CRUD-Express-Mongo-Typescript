import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {

    try {

        const mongo_uri = process.env.MONGO_URI || 'mongodb://localhost/example';
        await mongoose.connect(mongo_uri);
        console.log(`Base de datos conectada :D`);

    } catch (error) {
        console.log(error);
    }

}

export default connectDB;