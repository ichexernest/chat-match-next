import dbConnect from '../../../lib/mongo'
import User from '@/app/models/User';
import { NextResponse } from 'next/server';


  //獲取圖片
export async function GET() {
  
  await dbConnect()
  const response = await User.find({})
  console.log(response)
    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

    //刪除圖片
export async function DELETE() {
  
  await dbConnect()
  const response = await User.find({})
  console.log(response)
    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

