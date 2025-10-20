import React from 'react';
import type { Message } from '../types';
import { Sender } from '../types';
import { BotIcon, UserIcon, ThumbsUpIcon, ThumbsDownIcon } from './Icons';

interface ChatMessageProps {
  message: Message;
  onFeedback: (messageId: number, feedback: 'helpful' | 'unhelpful') => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onFeedback }) => {
  const isBot = message.sender === Sender.Bot;

  const messageClass = isBot
    ? 'bg-stone-200 text-stone-800'
    : 'bg-amber-600 text-white';
  const containerClass = isBot ? 'justify-start' : 'justify-end';
  const avatar = isBot ? <BotIcon /> : <UserIcon />;
  const avatarContainerClass = isBot ? 'bg-amber-500' : 'bg-stone-500';

  return (
    <div className={`flex flex-col gap-2 ${isBot ? 'items-start' : 'items-end'}`}>
        <div className={`flex items-end gap-3 ${containerClass}`}>
            {isBot && (
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${avatarContainerClass}`}>
                    {avatar}
                </div>
            )}
            <div
                className={`max-w-xs md:max-w-md lg:max-w-lg rounded-2xl p-3 shadow-md ${messageClass} ${
                isBot ? 'rounded-bl-none' : 'rounded-br-none'
                }`}
            >
                <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
            {!isBot && (
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${avatarContainerClass}`}>
                    {avatar}
                </div>
            )}
        </div>
        {isBot && !message.feedback && (
            <div className="flex items-center gap-2 ml-12 -mt-1">
                <span className="text-xs text-stone-500">Helpful?</span>
                <button 
                    onClick={() => onFeedback(message.id, 'helpful')} 
                    className="p-1 rounded-full text-stone-500 hover:bg-green-100 hover:text-green-600 transition-colors"
                    aria-label="Helpful"
                >
                    <ThumbsUpIcon />
                </button>
                 <button 
                    onClick={() => onFeedback(message.id, 'unhelpful')} 
                    className="p-1 rounded-full text-stone-500 hover:bg-red-100 hover:text-red-600 transition-colors"
                    aria-label="Not helpful"
                >
                    <ThumbsDownIcon />
                </button>
            </div>
        )}
    </div>
  );
};

export default ChatMessage;