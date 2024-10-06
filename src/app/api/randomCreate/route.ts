import dbConnect from '../../lib/mongo';
import User from '@/app/models/User';
import { faker } from '@faker-js/faker';

export async function GET() {
  await dbConnect();

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  try {
      // 隨機產生 30 筆使用者資料並存入資料庫
  const randomUsers = Array.from({ length: 30 }).map(() => ({
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    profile: {
      name: faker.person.fullName(),
      age: randomNumber(18, 65),
      gender: faker.helpers.arrayElement(['male', 'female', 'other']),
      bio: faker.lorem.sentence(),
      photos: [faker.image.avatar(), faker.image.avatar()],
      interests: faker.helpers.arrayElements(['music', 'sports', 'movies', 'travel', 'reading']),
      location: {
        type: 'Point',
        coordinates: [faker.location.longitude(), faker.location.latitude()]
      }
    },
    preferences: {
      preferredGenders: faker.helpers.arrayElement(['male', 'female', 'other']),
      ageRange: {
        min: randomNumber(18, 25),
        max: randomNumber(26, 65),
      },
      maxDistance: randomNumber(10, 100),
    },
    createdAt: faker.date.past(),
    lastActiveAt: faker.date.recent(),
  }));
    // 將隨機產生的使用者資料批量插入到資料庫中
    await User.insertMany(randomUsers);
    const response = await User.find({});
    console.log(response);

    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating users:', error);
    return new Response(JSON.stringify({ error: 'Failed to create users' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}