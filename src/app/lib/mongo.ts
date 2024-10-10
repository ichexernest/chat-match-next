import mongoose from "mongoose";

const connection : {isConnect? : number} = {}

async function dbConnect (){
  if(connection.isConnect){
    return
  }
  const db = await mongoose.connect(process.env.MONGODB_URI!)
  connection.isConnect = db.connections[0].readyState
}

export default dbConnect