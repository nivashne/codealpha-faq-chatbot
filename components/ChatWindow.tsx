import React, { useRef, useEffect } from 'react';
import type { Message } from '../types';
import ChatMessage from './ChatMessage';
import LoadingIndicator from './LoadingIndicator';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  onFeedback: (messageId: number, feedback: 'helpful' | 'unhelpful') => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading, onFeedback }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="h-full bg-white/50 rounded-lg p-4 md:p-6 shadow-inner overflow-y-auto">
      <div className="flex flex-col space-y-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} onFeedback={onFeedback} />
        ))}
        {isLoading && <LoadingIndicator />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatWindow;