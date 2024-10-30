import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

function HeroVanta({
    title,
    subtitle,
    buttonTitle,
    secondaryButtonTitle,
    mainAction,
    secondaryAction,

}) {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        console.log(window.VANTA)
        if (!vantaEffect.current) {
            vantaEffect.current = window.VANTA.TOPOLOGY({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3fa9f5,
                backgroundColor: 0x111827
            });
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
            }
        };
    }, []);

    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.snap-section:nth-child(3)');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={vantaRef} className="relative inset-0 w-screen h-screen bg-primary-500 text-white flex items-center justify-center">
            {/* We don't need a background image or overlay anymore */}
            <motion.div
                className="relative z-20 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-6xl font-bold mb-4">{title}</h1>
                <p className="text-2xl mb-8">{subtitle}</p>
                <motion.button
                    onClick={mainAction}
                    className="bg-primary-500 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-block hover:bg-yellow-700 mr-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {buttonTitle}
                </motion.button>
                <motion.button
                    onClick={secondaryAction}
                    className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-block hover:bg-white hover:text-slate-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {secondaryButtonTitle}
                </motion.button>
            </motion.div>
            {/* <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 text-2xl md:text-3xl cursor-pointer z-20"
                onClick={scrollToNextSection}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <FaChevronDown />
            </motion.div> */}
        </section>
    );
}

export default HeroVanta;