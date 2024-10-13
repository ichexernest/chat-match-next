import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongo';
import User from '@/app/models/User';


// get users profile
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const user = await User.findById(params.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Error retrieving user' }, { status: 500 });
  }
}

// update users profile
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const updatedUser = await User.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
    if (!updatedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
  }
}

// delete user
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const deletedUser = await User.findByIdAndDelete(params.id);
    if (!deletedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
  }
}
