import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongo';
import User from '@/app/models/User';


// get 單個配對資訊
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const user = await User.findById(params.id);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Error retrieving user' }, { status: 500 });
  }
}

// 更變配對狀態
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();

    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
  }
}
