
import User from '@/app/models/User';
import { NextResponse } from 'next/server';

export async function POST() {
  console.log(`login`)
    return new Response(JSON.stringify({status:'ok'}), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
