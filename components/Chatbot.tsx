"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Message {
    id: string;
    sender: 'user' | 'bot';
    text: string;
    isAction?: boolean;
}

const SUGGESTED_QUESTIONS = [
    "What is LiverCure?",
    "Book Consultation",
    "How does Ashwagandha help?",
    "Products for hair fall?"
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome-1',
            sender: 'bot',
            text: 'Namaste. I am Charak, your Ayurvedic AI guide. How can I assist you with Jammi Pharmaceuticals today?'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), sender: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Mock AI response delay
        setTimeout(() => {
            let botResponse = "I'm still learning the intricacies of our 128-year-old pharmacopoeia. Please consult our expert Vaidyas for profound medical advice.";
            let isAction = false;
            const lowerText = text.toLowerCase();

            if (lowerText.includes('livercure') || lowerText.includes('liver')) {
                botResponse = "LiverCure is our flagship formulation designed to protect and rejuvenate the liver. It's particularly effective for fatty liver and sluggish digestion.";
            } else if (lowerText.includes('consultation') || lowerText.includes('book')) {
                botResponse = "I can help you with that. You can book an online video consultation or an offline clinic visit.";
                isAction = true;
            } else if (lowerText.includes('ashwagandha')) {
                botResponse = "Ashwagandha is a powerful adaptogen that helps the body manage stress, improves cognitive function, and boosts overall vitality.";
            } else if (lowerText.includes('hair')) {
                botResponse = "For hair fall, we usually recommend our Neelibringadi Thailam for external application, along with internal tonics to balance Pitta dosha.";
            }

            setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: 'bot', text: botResponse, isAction }]);
            setIsTyping(false);
        }, 1200);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSend(inputValue);
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-secondary text-white shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105 ${isOpen ? 'rotate-90 scale-0 opacity-0 pointer-events-none' : 'rotate-0 scale-100 opacity-100'}`}
                aria-label="Open Chat"
            >
                <span className="material-symbols-outlined text-3xl">forum</span>
            </button>

            {/* Chat Window */}
            <div
                className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-[calc(100vw-3rem)] sm:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-75 opacity-0 pointer-events-none'}`}
            >
                {/* Header */}
                <div className="bg-secondary p-4 flex items-center justify-between text-white shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                            <span className="material-symbols-outlined text-primary text-xl">self_improvement</span>
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-lg leading-tight">Charak</h3>
                            <p className="text-xs text-white/70 font-medium tracking-wide">Ayurvedic AI Assistant</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 bg-background-light/50 space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${msg.sender === 'user'
                                        ? 'bg-primary text-white rounded-br-sm'
                                        : 'bg-white border border-slate-200 text-slate-700 rounded-bl-sm'
                                    }`}
                            >
                                <p className="text-sm leading-relaxed">{msg.text}</p>

                                {msg.isAction && msg.text.includes('consultation') && (
                                    <Link
                                        href="/consultation"
                                        onClick={() => setIsOpen(false)}
                                        className="mt-3 block text-center bg-secondary text-white text-xs font-bold uppercase tracking-widest py-2.5 rounded-lg hover:bg-black transition-colors"
                                    >
                                        Go to Booking
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm p-4 shadow-sm flex gap-1.5 items-center">
                                <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-slate-100 shrink-0">
                    {/* Suggested Pills */}
                    <div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar hide-scrollbar">
                        {SUGGESTED_QUESTIONS.map((q, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSend(q)}
                                className="shrink-0 bg-background-light border border-slate-200 text-slate-600 text-xs font-semibold px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
                            >
                                {q}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="relative flex items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask about Ayurveda..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-full pl-5 pr-12 py-3.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-50 disabled:bg-slate-300 transition-colors shadow-sm"
                        >
                            <span className="material-symbols-outlined text-[20px]">send</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
