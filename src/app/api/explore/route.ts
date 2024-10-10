import dbConnect from '../../lib/mongo'
import User from '@/app/models/User';
import Interaction from '@/app/models/Interaction';
import { NextRequest, NextResponse } from 'next/server';
import { ExploreItem } from '@/app/types';

export async function GET(request :NextRequest) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const currentUserId = searchParams.get('userId');
  const interactedUsers = await Interaction.find({ fromUser: currentUserId }).distinct('toUser');

  // 構建查詢條件
  let query = {
    _id: { $nin: interactedUsers }
  };

  //const userList = await User.find(query).limit(10);
  const userList = await User.find().limit(10);

  // 構建返回的用戶列表
  const recommandList: ExploreItem[] = userList.map((user) => ({
    id: user._id,
    name: user.profile.name,
    age: user.profile.age,
    gender: user.profile.gender,
    bio: user.profile.bio,
    photos: user.profile.photos,
    interests: user.profile.interests,
    location: user.profile.location
  }));

  // 構建返回的響應
  const response = {
    items: recommandList
  };

  return new Response(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}