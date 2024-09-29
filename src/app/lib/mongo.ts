// lib/mongodb.ts

import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://ch82831223:4FzcGHWnlXXv38KM@socialnextcluster.iux6g.mongodb.net/?retryWrites=true&w=majority&appName=socialNextCluster";

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // 在開發環境中使用全局變量，這樣熱重載時不會重複創建新的連接
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 在生產環境中，最好不使用全局變量
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;