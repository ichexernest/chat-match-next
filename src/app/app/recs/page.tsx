'use client'

export default function Recs() {
    const chatroomlist = [
        {id:1, name: "John", message: "Hello"},
        {id:2, name: "Jane", message: "Hi"},
        {id:3, name: "Doe", message: "What's up?"},
    ];
  return (
        <div className="container mx-auto">
    <h1 className="text-2xl font-bold">Chatroom</h1>
    <ul>
        {chatroomlist.map((chat) => (
            <li key={chat.id} className="mt-3"><div>
                <div className="card bg-white rounded-md shadow-md text-slate-700 p-3">
                    <div className="card-body">
                        <h2 className="card-title text-xl">{chat.name}</h2>
                        <p className="card-content">{chat.message}</p>
                    </div>
                </div>
                </div>
            </li>
        ))}
    </ul>
  </div>
)
}