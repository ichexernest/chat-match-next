import clientPromise from '../../lib/mongo'

export async function GET() {
  
  const client = await clientPromise;
  const db = client.db("social_next");

  // 使用數據庫進行操作
  const collection = db.collection("users");
  const results = await collection.find({}).limit(10).toArray();
console.log(results)
    const response =  {
  }
    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }