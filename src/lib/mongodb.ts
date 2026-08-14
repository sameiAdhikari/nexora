import { MongoClient } from "mongodb";

const mongodbURL = process.env.MONGODB_URL;
if (!mongodbURL) throw new Error("MONGODB URL IS MISSING");

// this is to create a instance of mongoclient/client
const client = new MongoClient(mongodbURL);

// Starts connecting to MongoDB once and stores the Promise<MongoClient>
const clientPromise = client.connect().then((client) => {
  console.log("Database is connected");
  return client;
});

export async function connectDb() {
  try {
    // this waits untill the database is fully connected
    const connectedClient = await clientPromise;
    return connectedClient.db("nexora");
  } catch (error) {
    console.error("Error while connecting to mongodb database", error);
    throw error;
  }
}
