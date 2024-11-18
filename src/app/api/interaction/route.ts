import dbConnect from '../../lib/mongo'
import User from '@/app/models/User';
import { NextResponse } from 'next/server';
import Interaction from '@/app/models/Interaction';


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
  export async function POST(request: Request) {
    await dbConnect();
    try {
      // 從請求中獲取用戶提交的互動資料
      const requestBody = await request.json();
      const { swiper, swipee, type } = requestBody;
  
      // 檢查必要的字段
      if (!swiper || !swipee || !type) {
        return new NextResponse(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
  
      // 創建新的互動
      const newInteraction = new Interaction({
        swiper,
        swipee,
        type,
      });
  
      // 保存到資料庫
      await newInteraction.save();
  
      // 返回成功的響應
      return new NextResponse(JSON.stringify({ success: true, data: newInteraction }), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error creating interaction:', error);
      return new NextResponse(JSON.stringify({ success: false, error: 'Internal server error' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    }