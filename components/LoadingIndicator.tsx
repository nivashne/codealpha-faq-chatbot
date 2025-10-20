import React from 'react';
import { BotIcon } from './Icons';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex items-end gap-3 justify-start">
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-amber-500">
            <BotIcon />
        </div>
      <div className="max-w-xs md:max-w-md lg:max-w-lg rounded-2xl p-3 bg-stone-200 rounded-bl-none text-stone-800 shadow-md">
        <div className="flex items-center space-x-1">
            <span className="text-sm text-stone-500">Thinking</span>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;