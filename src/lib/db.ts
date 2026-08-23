import mongoose from "mongoose";

const getMongoUri = () => process.env.MONGO_URI || process.env.MONGODB_URI;

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    // eslint-disable-next-line no-var
    var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || {
    conn: null,
    promise: null,
};

global.mongoose = cached;

export async function connectDB() {
    const mongoUri = getMongoUri();

    if (!mongoUri) {
        throw new Error("Please define MONGO_URI or MONGODB_URI in your .env environment variables");
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(mongoUri as string).then((m) => {
            console.log("Successfully connected to MongoDB Atlas.");
            return m;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        console.error("MongoDB Connection Error:", error);
        throw error;
    }

    return cached.conn;
}

export default connectDB;