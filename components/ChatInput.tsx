import React, { useState } from 'react';
import { SendIcon } from './Icons';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 md:gap-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your question here..."
        disabled={isLoading}
        className="flex-1 w-full px-4 py-3 rounded-full bg-white text-stone-800 placeholder-stone-400 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        autoComplete="off"
      />
      <button
        type="submit"
        disabled={isLoading || !inputValue.trim()}
        className="bg-amber-700 text-white rounded-full p-3 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-100 focus:ring-amber-600 transition-transform duration-200 active:scale-95 disabled:bg-stone-400 disabled:cursor-not-allowed disabled:scale-100"
        aria-label="Send message"
      >
        <SendIcon />
      </button>
    </form>
  );
};

export default ChatInput;