// src/components/PrivacyPolicy.jsx
import React from 'react';
import Header from './Header';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="space-y-6 text-gray-600">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                        <p>
                            At MNFST AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
                        <h3 className="text-xl font-medium text-gray-700 mb-2">2.1 Personal Information</h3>
                        <p>We may collect the following personal information:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Name and contact information</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Business information</li>
                            <li>Payment information</li>
                        </ul>

                        <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2">2.2 Usage Data</h3>
                        <p>We automatically collect certain information when you use our services, including:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>Usage patterns and preferences</li>
                            <li>Interaction with our services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
                        <p>We use the collected information for various purposes:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Provide and maintain our services</li>
                            <li>Improve and personalize user experience</li>
                            <li>Process transactions</li>
                            <li>Send administrative information</li>
                            <li>Provide customer support</li>
                            <li>Send marketing and promotional communications</li>
                            <li>Ensure security and prevent fraud</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Information Sharing</h2>
                        <p>We may share your information with:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Service providers and business partners</li>
                            <li>Legal authorities when required by law</li>
                            <li>Third parties with your consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to processing of your data</li>
                            <li>Data portability</li>
                            <li>Withdraw consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies</h2>
                        <p>
                            We use cookies and similar tracking technologies to track activity on our services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
                        <p>
                            Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <div className="mt-2">
                            <p>Email: contactmnfstai.com</p>
                        </div>
                    </section>

                    <section className="border-t pt-6 mt-8">
                        <p className="text-sm text-gray-500">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;