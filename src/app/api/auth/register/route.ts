
import User from '@/app/models/User';
import { NextResponse } from 'next/server';

export async function POST() {
  //用戶註冊
  console.log(`register`)
    return new Response(JSON.stringify({status:'ok'}), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
