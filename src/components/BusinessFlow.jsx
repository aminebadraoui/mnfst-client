import React from 'react';
import { motion } from 'framer-motion';
import {
    FaBlog, FaLinkedinIn, FaTwitter, FaFacebookF,
    FaInstagram, FaRobot, FaMagnet, FaArrowDown,
    FaPhone, FaBook, FaShoppingCart
} from 'react-icons/fa';
import { PiArrowFatDownThin } from "react-icons/pi";

const BusinessFlow = () => {
    return (
        <div className="h-full m-8 py-20 flex flex-col items-center justify-center gap-12 bg-gray-950">
            {/* Content Section */}
            <motion.div className="w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Automate Your Content Marketing
                </h2>
                <div className="flex z-20 justify-between px-[10%] bg-white/5 backdrop-blur-sm rounded-xl p-8">
                    {[
                        { Icon: FaBlog, label: "Blog" },
                        { Icon: FaLinkedinIn, label: "LinkedIn" },
                        { Icon: FaTwitter, label: "Twitter" },
                        { Icon: FaFacebookF, label: "Facebook" },
                        { Icon: FaInstagram, label: "Instagram" }
                    ].map((platform, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center gap-3"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="p-4 bg-white rounded-lg shadow-lg">
                                <platform.Icon className="w-6 h-6 text-purple-500" />
                            </div>
                            <span className="text-gray-400">{platform.label}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="flex items-center gap-4">
                <PiArrowFatDownThin className="w-40 h-40 text-purple-500/80" />

            </div>

            {/* AI Tools Section */}
            <motion.div className="w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Direct Traffic to your AI-Powered Website
                </h2>
                <div className="flex justify-center gap-20 bg-white/5 backdrop-blur-sm rounded-xl p-8">
                    <motion.div
                        className="flex flex-col items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <FaMagnet className="w-6 h-6 text-purple-500" />
                        </div>
                        <span className="text-gray-400">AI-Powered Lead Magnet</span>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <FaRobot className="w-6 h-6 text-purple-500" />
                        </div>
                        <span className="text-gray-400">AI Chatbot</span>
                    </motion.div>
                </div>
            </motion.div>

            <div className="flex items-center gap-4">
                <PiArrowFatDownThin className="w-40 h-40 text-purple-500" />
            </div>

            {/* Funnel Section */}
            <motion.div className="w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Capture And Nurture Leads
                </h2>
                <div className="flex items-center justify-center  bg-white/5 backdrop-blur-sm rounded-xl p-8 gap-4  space-x-2">
                    <motion.div
                        className="flex flex-col items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <FaPhone className="w-6 h-6 text-purple-500" />
                        </div>
                        <span className="text-gray-400">Consultation Call</span>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <FaShoppingCart className="w-6 h-6 text-purple-500" />
                        </div>
                        <span className="text-gray-400">Low Ticket Offer</span>
                    </motion.div>

                </div>
            </motion.div>
        </div>
    );
};

export default BusinessFlow;