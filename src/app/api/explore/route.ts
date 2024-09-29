export async function GET() {
    const users = [
      {
        id: 'a01',
        name: "John Doe",
        age: 20,
        location: "Taipei",
        description: "Explore 1 description",
        hasLike: false
      },
      {
        id: 'a02',
        name: "Jennifer",
        age: 21,
        location: "Taipei",
        description: "Explore 2 description",
        hasLike: false
      },
      {
        id: 'a03',
        name: "Amy",
        age: 22,
        location: "Taipei",
        description: "Explore 3 description",
        hasLike: true
      },
      {
        id: 'a0444',
        name: "Amysqw",
        age: 222,
        location: "Taipei",
        description: "Explore 3 description",
        hasLike: true
      }
    ];
  
    const response =  {
      items: users,
      totalPages: 10,
      currentPage: 1,
      hasMore: true
  }
    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }