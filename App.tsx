import React, { useState, useRef, useEffect } from 'react';
import type { Message, FAQ } from './types';
import { Sender } from './types';
import { FAQS } from './constants';
import { findBestMatch } from './services/nlpService';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { BotIcon, MessageSquareHeartIcon } from './components/Icons';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: Date.now(),
      sender: Sender.Bot,
      text: "Hello! I'm here to help. Ask me anything about our services.",
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: Sender.User,
      text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate bot thinking time and find the best answer
    setTimeout(() => {
      const answer = findBestMatch(text, FAQS as FAQ[]);
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: Sender.Bot,
        text: answer,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1200);
  };

  const handleFeedback = (messageId: number, feedback: 'helpful' | 'unhelpful') => {
    setMessages(prevMessages =>
        prevMessages.map(msg =>
            msg.id === messageId ? { ...msg, feedback } : msg
        )
    );
    console.log(`Feedback for message ID ${messageId}: ${feedback}`);
  };

  return (
    <div className="flex flex-col h-screen bg-stone-100 text-stone-800 font-sans">
      <header className="bg-amber-800/80 backdrop-blur-sm shadow-md p-4 flex items-center gap-4 border-b border-amber-900/20">
        <div className="p-2 bg-amber-500 rounded-full">
            <BotIcon />
        </div>
        <div>
          <h1 className="text-xl font-bold text-amber-50">FAQ Chatbot</h1>
          <p className="text-sm text-amber-200">Your friendly automated assistant</p>
        </div>
      </header>
      <main className="flex-1 overflow-hidden p-4 md:p-6 lg:p-8">
          <ChatWindow messages={messages} isLoading={isLoading} onFeedback={handleFeedback} />
      </main>
      <footer className="p-4 md:p-6 lg:p-8 pt-0">
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          <div className="text-center text-xs text-stone-500 mt-4 flex items-center justify-center gap-2">
            Built with React & NLP <MessageSquareHeartIcon />
          </div>
      </footer>
    </div>
  );
};

export default App;