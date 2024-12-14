// src/components/TermsAndConditions.jsx
import React from 'react';
import Header from './Header';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

                <div className="space-y-6 text-gray-600">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                        <p>
                            These Terms and Conditions govern your use of MNFST AI's services and website. By accessing or using our services, you agree to be bound by these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services Description</h2>
                        <p>
                            MNFST AI provides AI-powered lead generation and automation services. Our services include but are not limited to:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>AI-powered lead generation</li>
                            <li>Sales automation tools</li>
                            <li>Customer relationship management</li>
                            <li>Training and educational content</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Obligations</h2>
                        <p>
                            Users of our services agree to:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Provide accurate and complete information</li>
                            <li>Maintain the confidentiality of their account credentials</li>
                            <li>Use the services in compliance with applicable laws and regulations</li>
                            <li>Not engage in any unauthorized or harmful activities</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Privacy and Data Protection</h2>
                        <p>
                            We are committed to protecting your privacy and handling your data in accordance with applicable data protection laws. Our privacy practices are detailed in our Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
                        <p>
                            All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by MNFST AI and protected by intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
                        <p>
                            MNFST AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Information</h2>
                        <p>
                            If you have any questions about these Terms and Conditions, please contact us at:
                        </p>
                        <div className="mt-2">
                            <p>Email: contact@mnfstai.com</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                        </p>
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

export default TermsAndConditions;