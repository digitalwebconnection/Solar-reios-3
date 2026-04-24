import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  X, Send, Zap, Sun, ShieldCheck, User } from "lucide-react";

export default function WhatsAppChatbot() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [chatHistory, setChatHistory] = useState([
        { role: "bot", text: "Ã°Å¸â€˜â€¹ Hi! I'm your Solar Assistant. How can I help you save on electricity today?" }
    ]);

    const phoneNumber = "+917447401177";

    // Auto-open logic
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 2000); // Opens automatically after 5 seconds
        return () => clearTimeout(timer);
    }, []);

    const quickQuestions = [
        { q: "Solar Subsidy?", icon: <ShieldCheck size={14} /> },
        { q: "Get a Free Quote", icon: <Sun size={14} /> },
        { q: "How much space needed?", icon: <Zap size={14} /> },
    ];

    const handleQuickQuestion = (q: string) => {
        setMessage(q);
        // Simulate bot thinking
        setChatHistory(prev => [...prev, { role: "user", text: q }]);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            setChatHistory(prev => [...prev, {
                role: "bot",
                text: `Great question! I can definitely help with "${q}". Click the button below to start a live WhatsApp chat with our engineer.`
            }]);
        }, 1000);
    };

    const sendMessage = () => {
        if (!message) return;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        setMessage("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="mb-4 w-87.5 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-[#000000] p-5 text-white flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                        <User size={20} />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-slate-900 rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Solar Reios Support</h3>
                                    <p className="text-[10px] text-green-400 font-medium uppercase tracking-widest">Online Now</p>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)} className="hover:rotate-90 transition-transform p-1">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="h-80 overflow-y-auto bg-slate-50 p-4 space-y-4 flex flex-col">
                            {chatHistory.map((chat, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: chat.role === "bot" ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={i}
                                    className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${chat.role === "bot"
                                            ? "bg-white text-slate-700 self-start rounded-tl-none border border-slate-100"
                                            : "bg-green-500 text-white self-end rounded-tr-none"
                                        }`}
                                >
                                    {chat.text}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="bg-white self-start p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
                                    <div className="flex gap-1">
                                        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-slate-400 rounded-full" />
                                        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-slate-400 rounded-full" />
                                        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-slate-400 rounded-full" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        <div className="p-3 bg-white flex flex-wrap gap-2 border-t border-slate-100">
                            {quickQuestions.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleQuickQuestion(item.q)}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-green-50 hover:text-green-600 border border-slate-200 rounded-full text-[10px] font-bold transition-colors"
                                >
                                    {item.icon} {item.q}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                placeholder="Type your question..."
                                className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={sendMessage}
                                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl shadow-lg shadow-green-500/20 transition-colors"
                            >
                                <Send size={16} />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Floating Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(!open)}
                className="relative bg-green-500 text-white p-2 rounded-full shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] group"
            >
                {open ? (
                    <X size={28} />
                ) : (
                    <svg
                        viewBox="0 0 24 24"
                        width="32"
                        height="32"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.417z" />
                    </svg>
                )}

                {/* Notification Ping */}
                {!open && (
                    <span className="absolute top-0 right-0 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                    </span>
                )}
            </motion.button>
        </div>
    );
}