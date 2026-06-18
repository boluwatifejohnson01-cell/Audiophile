import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);

    console.log(`✅MongoDB Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`💥MongoDB Connection Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;

// boluwatifejohnson01_db_user
// ms55ALdU8S0CBVJW

// mongodb+srv://boluwatifejohnson01_db_user:ms55ALdU8S0CBVJW@cluster0.7pxmacd.mongodb.net/?appName=Cluster0
