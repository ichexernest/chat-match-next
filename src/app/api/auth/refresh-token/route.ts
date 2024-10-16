
import User from '@/app/models/User';
import { NextResponse } from 'next/server';

export async function POST() {
  //刷新token
  console.log(`refresh-token`)
    return new Response(JSON.stringify({status:'ok'}), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
