import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-primary-500 z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="w-16 h-16 border-t-4 border-primary-500 border-solid rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </motion.div>
    );
};

export default Loader;
