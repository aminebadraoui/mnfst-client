import React, { useState, useEffect } from 'react';
import './TechLoader.css';

import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';



const TechLoader = () => {
    const messages = [
        // "WE ARE MNFST",
        // "CHANNELING POSITIVE ENERGY",
        // "VISUALIZING INTENTIONS",
        // "MATERIALIZING THOUGHTS",
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log("Current message:", messages[currentMessageIndex]);

    //         setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);

    //     }, 1800);

    //     return () => clearTimeout(timer);
    // }, [currentMessageIndex, messages.length]);

    return (
        <div className="tech-loader">
            <div className="tesseract-container">
                <div className="tesseract">
                    <div className="cube outer-cube">
                        <div className="face front"></div>
                        <div className="face back"></div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                    </div>
                    <div className="cube inner-cube">
                        <div className="face front"></div>
                        <div className="face back"></div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                    </div>
                    <div className="connectors">
                        <div className="connector c1"></div>
                        <div className="connector c2"></div>
                        <div className="connector c3"></div>
                        <div className="connector c4"></div>
                        <div className="connector c5"></div>
                        <div className="connector c6"></div>
                        <div className="connector c7"></div>
                        <div className="connector c8"></div>
                    </div>
                </div>
            </div>

            {/* <div key={currentMessageIndex} className="message-container">
                {messages[currentMessageIndex].split(' ').map((word, wordIndex) => (
                    <span key={wordIndex} className="word-wrapper">
                        {word.split('').map((char, charIndex) => (
                            <span
                                key={charIndex}
                                className="typing-animation"
                                style={{ animationDelay: `${(wordIndex * word.length + charIndex) * 0.05}s` }}
                            >
                                {char}
                            </span>
                        ))}
                        {wordIndex !== messages[currentMessageIndex].split(' ').length - 1 && ' '}
                    </span>
                ))}
            </div> */}


        </div>
    );
};

export default TechLoader;