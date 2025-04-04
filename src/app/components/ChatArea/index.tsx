"use client";
import { useLayoutEffect, useRef, useState } from "react";
import {  FaImage, FaMessage, FaSeedling } from "react-icons/fa6";
import { FaPlus, FaSmile, FaTimes } from "react-icons/fa";
import { MatchedRecordFromZod, MatchPhase} from "../../types";
import MatchedAvatar from "../MatchedAvatar";
import { IoSend } from "react-icons/io5";

// ---------- 型別 ----------
type Message = {
  id: string;
  senderId: string;
  type: "text" | "image" | "gif";
  content: string;
  timestamp: string;
};

const CURRENT_USER_ID = "me";

// ---------- 假 Emoji / GIF 選擇器 ----------
const EmojiPicker = ({ onSelect }: { onSelect: (emoji: string) => void }) => (
  <button onClick={() => onSelect("😄")}>
    <FaSmile className="text-xl" />
  </button>
);

const GifPicker = ({ onSelect }: { onSelect: (gifUrl: string) => void }) => (
  <button onClick={() => onSelect("https://media.giphy.com/media/l0HlQ7LRalNbsna3q/giphy.gif")}>
    <FaImage className="text-xl" />
  </button>
);

// ---------- 單一訊息 ----------
const MessageItem = ({ message, isMine }: { message: Message; isMine: boolean }) => {
  const isImage = message.type === "image";
  const isGif = message.type === "gif";

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`
          rounded-xl p-2 
          max-w-[75%] 
          ${isMine ? "bg-gradient-to-r from-[#0EBDE5] to-[#0095FF] text-white" : "bg-white bg-opacity-75"} 
          break-words whitespace-pre-wrap
        `}
      >
        {isImage || isGif ? (
          <img src={message.content} className="rounded max-w-full" />
        ) : (
          <span>{message.content}</span>
        )}
        <div className="text-xs text-right text-gray-400 mt-1">
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};


// ---------- 訊息輸入欄 ----------
const ChatInputBar = ({ onSend, phase, name }: { onSend: (msg: string | { type: "gif" | "image"; url: string }) => void , phase:MatchPhase, name:string}) => {
  const [input, setInput] = useState("");
  const [showFunctions, setShowFunctions] = useState(false)

  if(phase === MatchPhase.Waiting){
    return (
      // <div className="w-full text-center border-t p-4 gap-2">
      // <p>Waiting for her response</p>
      // </div>
            <div className=" border-t  w-full flex flex-col justify-center items-center text-center border-t p-4 gap-2">
            <p>Did you have fun with {name}?</p>
            <p>11:20</p>
            <div className="flex gap-2">
              <button className=" rounded-full w-[60px] h-[60px] bg-white shadow-lg bg-opacity-75">
                Y
              </button>
              <button className=" rounded-full w-[60px] h-[60px] bg-white shadow-lg bg-opacity-75">
                N
              </button>
            </div>
            </div>
    )
  }

  return (
    <div className="flex items-center border-t p-4 gap-2 text-blue-500">
      {showFunctions ? <FaTimes onClick={()=>setShowFunctions(!showFunctions)} className="text-xl" /> : <FaPlus onClick={()=>setShowFunctions(!showFunctions)} className="text-xl" />}
      {showFunctions && (
        <div className="flex gap-2">
          <EmojiPicker onSelect={(emoji) => setInput(input + emoji)} />
          <GifPicker onSelect={(gifUrl) => onSend({ type: "gif", url: gifUrl })} />
        </div>
      )}
      <input
        className="flex-1 shadow-lg rounded-full px-3 py-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="輸入訊息..."
      />
      <button
        onClick={() => {
          if (input.trim() !== "") {
            onSend(input);
            setInput("");
          }
        }}
        className="text-blue-500 text-xl px-3 py-1 "
      >
        <IoSend />
      </button>
    </div>
  );
};

// ---------- 主畫面 ChatArea ----------
export default function ChatArea({ item }: { item: MatchedRecordFromZod | null }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>(generateInitialMessages());
  const [hasMore, setHasMore] = useState(true);

  // ✅ 初次/訊息更新 → 滾到底
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  // ✅ 向上滾動 → 載入更多
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || el.scrollTop !== 0 || !hasMore) return;

    const oldScrollHeight = el.scrollHeight;
    const older = generateOlderMessages();

    setMessages((prev) => [...older, ...prev]);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (el) {
          const newScrollHeight = el.scrollHeight;
          el.scrollTop = newScrollHeight - oldScrollHeight;
        }
      });
    });
  };

  // ✅ 傳送訊息
  const handleSend = (msg: string | { type: "gif" | "image"; url: string }) => {
    const newMsg: Message =
      typeof msg === "string"
        ? {
            id: Date.now().toString(),
            senderId: CURRENT_USER_ID,
            type: "text",
            content: msg,
            timestamp: new Date().toISOString(),
          }
        : {
            id: Date.now().toString(),
            senderId: CURRENT_USER_ID,
            type: msg.type,
            content: msg.url,
            timestamp: new Date().toISOString(),
          };

    setMessages((prev) => [...prev, newMsg]);
  };

  if (!item) {
    return (
      <div className="flex flex-col justify-center items-center h-full text-gray-400">
        <FaMessage className="text-4xl" />
        <p>選擇好友開始聊天</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex justify-start items-center border-b p-2">
      <MatchedAvatar item={item} />
      <div className="p-3 font-semibold">{item.matcheeName}</div>

      </div>

      {/* 訊息區 */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-3 space-y-1"
      >
        {messages.map((msg) => (
          <MessageItem key={msg.id} message={msg} isMine={msg.senderId === CURRENT_USER_ID} />
        ))}
      </div>

      {/* 輸入欄 */}
      <ChatInputBar onSend={handleSend} phase={item.phase} name={item.matcheeName} />
    </div>
  );
}

// ---------- 假資料產生 ----------
function generateInitialMessages(): Message[] {
  return Array.from({ length: 20 }).map((_, i) => ({
    id: `init-${i}`,
    senderId: i % 2 === 0 ? "friend" : "me",
    type: "text",
    content: `這是初始訊息 ${i + 1}`,
    timestamp: new Date(Date.now() - (20 - i) * 1000).toISOString(),
  }));
}

function generateOlderMessages(): Message[] {
  return Array.from({ length: 10 }).map((_, i) => ({
    id: `old-${Date.now()}-${i}`,
    senderId: i % 2 === 0 ? "friend" : "me",
    type: "text",
    content: `（更舊訊息）第 ${i + 1} 筆`,
    timestamp: new Date().toISOString(),
  }));
}
