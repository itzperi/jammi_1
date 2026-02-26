import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';

interface Message {
    role: 'user' | 'bot';
    text: string;
    product?: any;
}

const AyurvedaChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', text: "Namaste! I am your Jammi Ayurveda Guide. How can I assist your wellness journey today?" }
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const getRecommendation = (query: string) => {
        if (query.includes('digestion') || query.includes('stomach') || query.includes('constipation')) {
            return { text: "For digestive support, I highly recommend our Triphala Churna or Trip Caps.", productId: 'triphala-churna' };
        } else if (query.includes('skin') || query.includes('glow') || query.includes('face')) {
            return { text: "For skin radiance, our Daily Dew Moisturizer and Kumkumadi Serum are excellent choices.", productId: 'daily-dew' };
        } else if (query.includes('hair') || query.includes('fall')) {
            return { text: "Our KeshPro Oil is specifically formulated to strengthen roots and reduce hair fall.", productId: 'keshpro-oil' };
        } else if (query.includes('liver') || query.includes('detox')) {
            return { text: "Jammi is world-renowned for liver care. Hepableen Syrup provides deep restoration.", productId: 'hepableen-syrup' };
        } else if (query.includes('joint') || query.includes('pain') || query.includes('muscle')) {
            return { text: "OrthoRaksha Oil uses ancient Taila Paka Vidhi for deep-penetrating relief.", productId: 'orthoraksha' };
        } else if (query.includes('diabetes') || query.includes('sugar')) {
            return { text: "Madhuchari Churna and D-Tabs support healthy metabolism naturally.", productId: 'madhuchari-churna' };
        }
        return { text: "That's a great question. For targeted relief, check out our Triphala Churna.", productId: 'triphala-churna' };
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setInput('');

        setTimeout(() => {
            const rec = getRecommendation(userMessage.toLowerCase());
            const product = MOCK_PRODUCTS.find(p => p.id === rec.productId);

            setMessages(prev => [...prev, {
                role: 'bot',
                text: rec.text,
                product: product
            }]);
        }, 800);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] font-jost">
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-brand-red rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95"
            >
                <span className="material-symbols-outlined text-3xl">
                    {isOpen ? 'close' : 'chat_bubble'}
                </span>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[400px] h-[600px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-warm-gold/10 flex flex-col overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="bg-brand-red p-6 text-white flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shadow-inner">
                            <span className="material-symbols-outlined">psychology</span>
                        </div>
                        <div>
                            <h4 className="font-heading text-xl font-bold">Jammi Guide</h4>
                            <p className="text-[10px] uppercase tracking-widest opacity-70">Heritage Wisdom AI</p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50/30">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} gap-3`}>
                                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-brand-red text-white rounded-tr-none shadow-lg shadow-brand-red/10'
                                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm'
                                    }`}>
                                    {msg.text}
                                </div>

                                {msg.product && (
                                    <Link
                                        to={`/product/${msg.product.id}`}
                                        className="w-[85%] bg-white border border-warm-gold/20 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className="flex items-center gap-4 p-3 font-subheading">
                                            <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center p-1 overflow-hidden">
                                                <img src={msg.product.image} alt={msg.product.name} className="w-full h-full object-contain mix-blend-multiply transition-transform group-hover:scale-110" />
                                            </div>
                                            <div className="flex-grow">
                                                <h5 className="text-[10px] font-bold text-brand-red uppercase tracking-wider">{msg.product.category}</h5>
                                                <p className="text-xs font-bold text-charcoal">{msg.product.name}</p>
                                                <div className="mt-1 flex items-center text-[10px] text-warm-gold font-bold">
                                                    VIEW PRODUCT <span className="material-symbols-outlined text-[12px] ml-1">arrow_forward</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask about Ayurveda or Products..."
                            className="flex-grow bg-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all font-body"
                        />
                        <button
                            onClick={handleSend}
                            className="w-12 h-12 bg-brand-red text-white rounded-xl flex items-center justify-center hover:brightness-110 transition-all font-subheading"
                        >
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AyurvedaChatbot;
