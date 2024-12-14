// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
const Header = () => {
    const [showBookingModal, setShowBookingModal] = useState(false);

    return (
        <>
            <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo with home link */}
                        <Link
                            to="/"
                            className="flex items-center cursor-pointer hover:opacity-90 transition-opacity"
                        >
                            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 hover:cursor-pointer">
                                MNFST AI
                            </span>
                        </Link>

                        {/* Book Intro Call button */}
                        <button
                            onClick={() => setShowBookingModal(true)}
                            className="bg-gradient-to-r from-[rgb(159,88,246)] to-[rgb(169,98,256)] 
                                     text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity 
                                     cursor-pointer"
                        >
                            Book intro call →
                        </button>
                    </div>
                </div>
            </header>

            {/* Booking Modal */}
            {showBookingModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-transparent rounded-lg p-4 w-full max-w-4xl h-[80vh] relative">
                        {/* Close button */}
                        <button
                            onClick={() => setShowBookingModal(false)}
                            className="absolute top-0 left-4 text-white hover:text-white/70 cursor-pointer"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>

                        {/* Cal.com iframe */}
                        <iframe
                            src="https://cal.com/mnfst-ai/discovery-call"
                            className="w-full h-full"
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;