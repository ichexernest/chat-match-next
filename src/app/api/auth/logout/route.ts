
import User from '@/app/models/User';
import { NextResponse } from 'next/server';

export async function POST() {
  console.log(`logout`)
    return new Response(JSON.stringify({status:'ok'}), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
