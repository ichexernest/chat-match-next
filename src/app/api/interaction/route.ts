import dbConnect from '../../lib/mongo'
import User from '@/app/models/User';
import { NextResponse } from 'next/server';


  //獲取用戶的互動歷史
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

  //發起互動(喜歡不喜歡)
  export async function POST() {
  
    await dbConnect()
    const response = await User.find({})
    console.log(response)
      return new Response(JSON.stringify(response), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }