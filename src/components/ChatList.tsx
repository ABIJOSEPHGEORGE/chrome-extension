import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TimeAgo from 'react-timeago';

export default function ChatList() {
  const { chatList } = useSelector((state: RootState) => state.chatSlice);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chatList]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full p-3 flex flex-col place-content-center place-items-center gap-5 overflow-y-scroll no-scrollbar"
    >
      {chatList.map((chat) => (
        <div
          key={chat.message}
          className={`w-full flex place-content-center flex-col ${
            chat.isUser ? 'place-items-end' : 'place-items-start'
          } gap-3`}
        >
          <h3
            className={`bg-blue-600 text-white p-4 rounded-3xl ${
              chat.isUser ? 'rounded-tr-none' : 'rounded-tl-none'
            }`}
          >
            {chat.message}
          </h3>
          <TimeAgo date={chat.currentTime} />
        </div>
      ))}
    </div>
  );
}
