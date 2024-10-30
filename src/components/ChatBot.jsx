import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';

const ChatBot = () => {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi! I'm your AI consultant. Ask me anything about how we can help transform your business with AI."
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            className="w-full max-w-2xl mx-auto bg-primary-500 rounded-xl backdrop-blur-sm border border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="h-[400px] overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                    <motion.div
                        key={index}
                        className={`flex items-start gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className={`p-2 rounded-full ${message.role === 'user' ? 'bg-transparent' : 'bg-blue-500'}`}>
                            {message.role === 'user' ? <FaUser /> : <FaRobot />}
                        </div>
                        <div className={`flex-1 p-4 rounded-xl ${message.role === 'user' ? 'bg-transparent/20' : 'bg-blue-500/20'}`}>
                            {message.content}
                        </div>
                    </motion.div>
                ))}
                {isLoading && (
                    <div className="flex items-center justify-center space-x-2">
                        <div className="animate-bounce">●</div>
                        <div className="animate-bounce delay-100">●</div>
                        <div className="animate-bounce delay-200">●</div>
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700/50">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-primary-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Ask about our AI solutions..."
                    />
                    <motion.button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isLoading}
                    >
                        <FaPaperPlane />
                    </motion.button>
                </div>
            </form>
        </motion.div>
    );
};

export default ChatBot;