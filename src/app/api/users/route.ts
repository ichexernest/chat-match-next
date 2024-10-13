import dbConnect from '../../lib/mongo'
import User from '@/app/models/User';
import { NextResponse } from 'next/server';

//get all users
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

  //create a new user
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