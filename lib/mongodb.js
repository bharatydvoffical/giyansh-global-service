import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  // Do not throw during module import — CI/builds import this file when
  // collecting pages which causes the build to fail if env vars are missing.
  // Export a rejected promise so runtime attempts to connect will fail
  // with a clear error, but the import itself won't crash the build.
  const err = new Error("Please define the MONGODB_URI environment variable inside .env.local");
  console.warn(err.message);
  clientPromise = Promise.reject(err);
} else {

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }

}
export default clientPromise;
