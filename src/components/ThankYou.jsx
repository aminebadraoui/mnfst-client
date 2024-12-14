// src/components/ThankYou.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { CheckCircle } from 'lucide-react'; // Install with: npm install lucide-react

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center">
                    <div className="flex justify-center mb-8">
                        <CheckCircle className="w-16 h-16 text-green-500" />
                    </div>

                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Thank You for Registering!
                    </h1>

                    <div className="space-y-4 text-gray-600 max-w-2xl mx-auto">
                        <p className="text-xl">
                            We're excited to have you join us! We'll send you an email as soon as the training is ready.
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-8">
                            <h2 className="text-lg font-semibold text-gray-800 mb-3">
                                Next Steps:
                            </h2>
                            <ul className="space-y-3 text-left">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Check your email inbox (including spam folder)
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Add contact@mnfstai.com to your contacts
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Keep your phone nearby to experience one of our AI agents in real time!
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                Haven't received our email? Check your spam folder or contact support at{' '}
                                <a href="mailto:contact@mnfstai.com" className="text-purple-600 hover:underline">
                                    contact@mnfstai.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/"
                        className="inline-block mt-8 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Return to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;