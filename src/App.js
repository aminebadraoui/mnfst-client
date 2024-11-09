import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechLoader from './components/TechLoader';

import Header from './components/Header';

import './App.css';

import {
  FaHandshake,
  FaGlobe,
  FaRobot,
  FaCogs,
  FaTimes,
  FaCheck,
  FaCalendar,
  FaLinkedin,
  FaTwitter,
  FaGithub
} from 'react-icons/fa';

import BusinessFlow from './components/BusinessFlow';

import Logo from './components/Logo'
import Accordion from './components/Accordion'
import CalendlyInline from './components/CalendlyInline'
import { InlineWidget } from "react-calendly";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <>
      <div className='bg-transparent fixed top-0 left-0 bottom-0 right-0 pointer-events-none'>
        <TechLoader />
      </div>
      <div className="app bg-gray-950 w-full h-full z-10">
        <Header />

        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center max-w-5xl mx-auto">


            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">We turn your business into an </span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                automated powerhouse
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              From AI-powered websites to intelligent automation, we help businesses scale with
              ready-to-deploy AI solutions that deliver immediate value.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                onClick={() => scrollToSection('book-call')}
                className="px-8 py-4 hover:cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book intro call →
              </motion.a>

              <motion.button
                className="px-8 py-4 hover:cursor-pointer border border-gray-700 text-white font-semibold rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('pricing')}
              >
                View pricing
              </motion.button>
            </div>
          </div>
        </div>

        {/* AI Services Overview Section */}
        <div id="solutions" className="w-full bg-gray-950 py-24 px-4 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                AI SOLUTIONS AS A SERVICE
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              A better way to implement AI
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-20">
              Building AI solutions in-house is complex, time-consuming, and requires specialized expertise.
              We take a different approach: ready-to-deploy AI solutions on a simple monthly subscription
              to give you enterprise-level AI capabilities for less.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 font-bold mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Rapid Implementation
                </h3>
                <p className="text-gray-400">
                  Why spend months building from scratch? Our pre-built AI components
                  and frameworks mean you can have a custom solution up and running in days.
                  Start with what you need and scale as you grow.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 font-bold mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Seamless Integration
                </h3>
                <p className="text-gray-400">
                  We handle all the complex AI infrastructure while integrating smoothly
                  with your existing systems. Regular updates and monitoring ensure your
                  AI solutions stay cutting-edge and reliable.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 font-bold mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Flexible & Future-Proof
                </h3>
                <p className="text-gray-400">
                  From AI-powered websites to custom chatbots and workflow automation,
                  our solutions evolve with your needs. We continuously update and optimize
                  your AI systems to leverage the latest technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="how-it-works" className="w-full bg-gray-950 py-24 px-4 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                OUR SOLUTIONS
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              Transform your business with AI
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-20">
              From intelligent websites to automated workflows, we provide end-to-end AI solutions
              that help businesses scale and operate more efficiently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 font-bold mb-6">
                  <FaGlobe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  AI-Powered Websites
                </h3>
                <p className="text-gray-400">
                  Modern websites with integrated AI features that engage visitors,
                  personalize experiences, and convert better than traditional sites.
                  Built with the latest AI technologies.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 font-bold mb-6">
                  <FaRobot className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Custom Chatbots
                </h3>
                <p className="text-gray-400">
                  Intelligent chatbots that understand context and provide meaningful
                  responses. Available 24/7 to handle customer inquiries, qualify leads,
                  and streamline support.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 font-bold mb-6">
                  <FaCogs className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Workflow Automation
                </h3>
                <p className="text-gray-400">
                  Streamline your business processes with intelligent automation.
                  From data entry to complex decision-making workflows, we help you
                  eliminate repetitive tasks.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Overlapping Your Business At Peak Performance Section */}
        {/* <motion.div
          className="relative -mt-16 z-10 w-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className=" max-w-2xl w-full p-8 backdrop-blur-sm border border-gray-700/50 bg-purple-500/80"
            whileHover={{ boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center  text-white ">
              Your Business At Peak Performance
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full bg-gray-950 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <BusinessFlow />
        </motion.div> */}

        {/* Comparison Section */}
        <div id="comparison" className="w-full bg-gray-950 py-24 px-4 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                COMPETITIVE EDGE
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              How do we compare?
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-20">
              See why businesses choose MNFST for their AI implementation needs.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 text-gray-400"></th>
                    {['FREELANCE', 'IN-HOUSE', 'OTHER AGENCIES', 'MNFST'].map((header, i) => (
                      <th key={i} className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-white font-bold">{header}</span>
                          {i === 3 ?
                            <FaCheck className="text-emerald-500" /> :
                            <FaTimes className="text-red-500" />
                          }
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      metric: 'Monthly cost',
                      values: ['$7,000+', '$10,000+', '$10,000+', '$4,900/mo!']
                    },
                    {
                      metric: 'Time to start',
                      values: ['Days/weeks', 'Weeks/months', 'Weeks/months', '24 hours!']
                    },
                    {
                      metric: 'Expertise level',
                      values: ['Varies widely', 'Good (hopefully)', 'Rolling the dice', 'AI Experts!']
                    },
                    {
                      metric: 'First delivery',
                      values: ['Several weeks', 'Several weeks', 'Several weeks', '2-3 days!']
                    },
                    {
                      metric: 'Cancellation',
                      values: ['Significant', 'Severance + hassle', 'Significant', 'One click!']
                    }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-800">
                      <td className="py-6 text-gray-400">{row.metric}</td>
                      {row.values.map((value, j) => (
                        <td key={j} className={`px-6 py-6 text-center ${j === 3 ? 'text-purple-400 font-bold' : 'text-gray-300'}`}>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="w-full bg-gray-950 py-24 px-4 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                PRICING & PLANS
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              Your investment
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-20">
              Simple, transparent pricing with no hidden fees. Choose the plan that best fits your needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Standard Plan */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Standard</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">$4,900</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mb-8">Billed monthly</p>
                <motion.button
                  className="w-full py-3 px-6 rounded-xl border border-gray-700 text-white font-semibold mb-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get started
                </motion.button>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2" />
                    Unlimited requests
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2" />
                    Unlimited users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2" />
                    Pause or cancel anytime
                  </li>
                </ul>
              </motion.div>

              {/* Quarterly Plan */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    POPULAR
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Quarterly</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">$3,900</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mb-8">Commit to 3 months & save $3,000</p>
                <motion.button
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold mb-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign up now →
                </motion.button>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2" />
                    Unlimited requests
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2" />
                    Unlimited users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2" />
                    Pause or cancel anytime
                  </li>
                </ul>
              </motion.div>

              {/* Ad-hoc Plan */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ad-hoc</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">Custom</span>
                </div>
                <p className="text-gray-400 mb-8">For one-off needs, contact sales.</p>
                <motion.button
                  className="w-full py-3 px-6 rounded-xl border border-gray-700 text-white font-semibold mb-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact sales
                </motion.button>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2" />
                    Documentation with every project
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2" />
                    45-minute project consultation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2" />
                    Discounted subscription transition
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Consultation Section */}
        <div id="consultation" className="w-full bg-gray-950 py-24 px-4 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                EXPERT GUIDANCE
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              Build it yourself
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-20">
              Need expert guidance to implement AI solutions in-house? Our consultation services provide you with the expertise you need.
            </p>

            <div className="max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-lg p-3">
                    <FaHandshake className="w-full h-full text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Expert Consultation</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">$199</span>
                      <span className="text-gray-400">/hour</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-8">
                  Want to build your own AI solution? Get expert guidance on both technical implementation
                  and strategic planning. Our consultation sessions are tailored to your specific needs.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2 flex-shrink-0" />
                    Technical architecture & implementation guidance
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2 flex-shrink-0" />
                    Strategic planning & roadmapping
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2 flex-shrink-0" />
                    Best practices & potential pitfalls
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-emerald-500 mr-2 flex-shrink-0" />
                    Resource & timeline planning
                  </li>
                </ul>

                <motion.button
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Consultation
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        <div id="book-call" className="w-full min-h-screen bg-gray-950 flex items-center justify-center">
          <div className="w-full max-w-7xl px-4 py-24">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                BOOK A CALL
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              Schedule your free consultation
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-12">
              Book a 30-minute call to discuss your needs and see how we can help automate your business.
            </p>

            <div className="w-full h-[800px] bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <InlineWidget
                url="https://calendly.com/contact-mnfstagency/30min"
                styles={{
                  height: '100%',
                  width: '100%',
                  overflow: 'visible'
                }}
                pageSettings={{
                  backgroundColor: '111827',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '8B5CF6',
                  textColor: 'FFFFFF'
                }}
                prefill={{
                  email: "",
                  firstName: "",
                  lastName: "",
                  name: "",
                }}
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="w-full bg-gray-950 py-24 px-4 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                QUICK ANSWERS
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              Common questions
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-20">
              Everything you need to know about our AI solutions and how we work.
            </p>

            <div className="max-w-3xl">
              {[
                {
                  question: "How long does it take to implement AI solutions?",
                  answer: "Implementation time varies based on the complexity of your needs. Simple automations can be ready in 2-4 weeks, while complex custom solutions might take 2-3 months."
                },
                {
                  question: "What kind of ROI can I expect?",
                  answer: "Our clients typically see ROI within 3-6 months. This includes cost savings from automation and revenue increases from improved efficiency."
                },
                {
                  question: "Do I need technical expertise to use your solutions?",
                  answer: "No, we design our solutions to be user-friendly and provide full training and support for your team."
                },
                {
                  question: "How do you ensure data security?",
                  answer: "We implement enterprise-grade security measures and comply with industry standards like GDPR and SOC 2."
                }
              ].map((faq, index) => (
                <Accordion key={index} faq={faq} />
              ))}
            </div>
          </div>
        </div>



        {/* Footer */}
        <footer className="bg-gray-950 text-white py-16 border-t border-gray-800 z-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">

                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  MNFST
                </span>
              </div>
              <p className="text-gray-400">
                Transforming businesses with intelligent AI solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Consulting</li>
                <li>AI Development</li>
                <li>Automation</li>
                <li>Custom Solutions</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <FaLinkedin className="text-2xl text-gray-400 hover:text-purple-500 cursor-pointer" />
                <FaTwitter className="text-2xl text-gray-400 hover:text-purple-500 cursor-pointer" />
                <FaGithub className="text-2xl text-gray-400 hover:text-purple-500 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© 2024 MNFST. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-purple-500">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-purple-500">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
export default App;