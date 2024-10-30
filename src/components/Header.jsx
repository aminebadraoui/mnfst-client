import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import Logo from './Logo';

const Header = () => {
    return (
        <header className=" fixed top-0 left-0 w-full bg-primary/80  z-50 backdrop-blur-sm border-b border-gray-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-full">
                    <div className="flex items-center">


                        <div className="w-10 h-10 m-8">
                            <Logo className="w-full h-full" size={20} />
                        </div>
                        <span className=" text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                            MNFST
                        </span>
                    </div>
                    <motion.a
                        href="#contact"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Us
                    </motion.a>
                </div>
            </div>
        </header>
    );
};

export default Header;