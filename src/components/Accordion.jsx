import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Accordion = ({ faq, title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="mb-4 overflow-hidden border border-gray-800 rounded-xl"
            initial={false}
        >
            <button
                className="flex items-center justify-between w-full p-6 text-left bg-gray-900/50 hover:bg-gray-800/50 transition-colors z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xl font-semibold text-white">
                    {faq ? faq.question : title}
                </span>
                <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-purple-500 flex-shrink-0 ml-4"
                >
                    <FaChevronDown />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="p-6 text-gray-400 bg-gray-900/25 border-t border-gray-800">
                            {faq ? faq.answer : children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Accordion;