import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechLoader from './components/TechLoader';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header';

import './App.css';

import {
  FaRobot,
  FaCheck,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaClock,
  FaChartLine,
  FaDollarSign,
  FaMagnet,
  FaUserCircle,
  FaPen,
  FaUsers,
  FaBook,
  FaTasks,
  FaArrowUp,
  FaHeadset,

} from 'react-icons/fa';

import LogoScroll from './components/LogoScroll'
import Accordion from './components/Accordion'
import { InlineWidget } from "react-calendly";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

function App() {
  return (
    <>
      <div className='bg-transparent fixed top-0 left-0 bottom-0 right-0 pointer-events-none'>
        <TechLoader />
      </div>
      <div className="app  w-full h-full z-10">
        <Header />

        {/* Hero Section */}
        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-between px-4">
          <div className="mt-40 text-center max-w-5xl mx-auto">


            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">Transform Your Business With </span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              We build custom AI solutions that automate your workflows, enhance customer engagement,
              and drive growth - all while seamlessly integrating with your existing systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={() => scrollToSection('solutions')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Solutions →
              </motion.button>

              <motion.button
                className="px-8 py-4 border border-gray-700 text-white font-semibold rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('pricing')}
              >
                View Pricing
              </motion.button>
            </div>
          </div>
          <LogoScroll />
        </div>

        {/* Our Agents Section */}
        <div className="w-full bg-gray-950 py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                MEET YOUR AI TEAM
              </span>
              <h2 className="text-5xl font-bold text-white mt-6 mb-6">
                AI Agents That Work For You 24/7
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Your tireless digital workforce that handles tasks while you focus on growth
              </p>
            </div>

            <div className="relative px-12">
              <Slider {...settings}>
                {/* Lead Generation Agent */}
                <div className="px-4">
                  <motion.div
                    className="p-8 bg-gray-900/50 rounded-xl border border-gray-800 h-[340px] flex flex-col"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-auto">
                      <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                        <FaMagnet className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Lead Generation Agent</h3>
                      <p className="text-gray-400 mb-6">Converts website visitors into qualified leads 24/7.</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500 flex-shrink-0 w-5 h-5" />
                        Books meetings automatically
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500 flex-shrink-0 w-5 h-5" />
                        Qualifies prospects instantly
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* Customer Service Agent */}
                <div className="px-4">
                  <motion.div
                    className="p-8 bg-gray-900/50 rounded-xl border border-gray-800 h-[340px] flex flex-col"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-auto">
                      <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                        <FaHeadset className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Customer Service Agent</h3>
                      <p className="text-gray-400 mb-6">Your tireless support representative.</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500 flex-shrink-0 w-5 h-5" />
                        Responds in seconds 24/7
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500 flex-shrink-0 w-5 h-5" />
                        Resolves common issues instantly
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* AI Twin Agent */}
                <div className="px-4">
                  <motion.div
                    className="p-8 bg-gray-900/50 rounded-xl border border-gray-800 h-[340px] flex flex-col"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-auto">
                      <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                        <FaUserCircle className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">AI Twin Agent</h3>
                      <p className="text-gray-400 mb-6">Scale your presence without scaling your time.</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500 flex-shrink-0 w-5 h-5" />
                        Engages with your audience
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500 flex-shrink-0 w-5 h-5" />
                        Provides personalized guidance
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* Content Creator Agent */}
                <div className="px-4">
                  <motion.div
                    className="p-8 bg-gray-900/50 rounded-xl border border-gray-800 h-[340px] flex flex-col"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-auto">
                      <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                        <FaPen className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Content Creator Agent</h3>
                      <p className="text-gray-400 mb-6">Your automated content marketing team.</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500 flex-shrink-0 w-5 h-5" />
                        Creates engaging content daily
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500 flex-shrink-0 w-5 h-5" />
                        Maintains consistent posting
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* Personal Assistant Agent */}
                <div className="px-4">
                  <motion.div
                    className="p-8 bg-gray-900/50 rounded-xl border border-gray-800 h-[340px] flex flex-col"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-auto">
                      <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                        <FaClock className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Personal Assistant Agent</h3>
                      <p className="text-gray-400 mb-6">Handles your routine tasks automatically.</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500 flex-shrink-0 w-5 h-5" />
                        Manages emails & scheduling
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500 flex-shrink-0 w-5 h-5" />
                        Organizes documents & tasks
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </Slider>
            </div>
          </div>
        </div>


        {/* Solutions Section */}
        <div id="solutions" className="w-full bg-gray-950 py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                OUR SOLUTIONS
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              AI Solutions Tailored to Your Business
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-20">
              Discover how our AI solutions can transform your business operations, enhance customer experience, and drive growth - all without requiring technical expertise.
            </p>

            {/* Customer Engagement Suite */}
            <div className="mb-32">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-white mb-6">Customer Engagement Suite</h3>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Never miss a customer inquiry again. Let AI handle your customer service 24/7.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Features */}
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <FaRobot className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Customer Service Chatbot Agent`</h4>
                      <p className="text-gray-400">Your 24/7 customer service representative, handling questions instantly.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <FaMagnet className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Smart Lead Capture Chatbot Agent</h4>
                      <p className="text-gray-400">Converts visitors into leads through natural conversation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <FaUsers className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Community Engagement Agent </h4>
                      <p className="text-gray-400">Keeps your community active by handling comments and FAQs.</p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gray-900/50 p-10 rounded-2xl border border-gray-800">
                  <div className="mb-10">
                    <h4 className="text-2xl font-semibold text-white mb-6">Perfect For:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaCheck className="text-purple-500 flex-shrink-0" />
                        Business owners tired of missing inquiries
                      </li>
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaCheck className="text-purple-500 flex-shrink-0" />
                        Companies wanting more website conversions
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-6">Business Impact:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaArrowUp className="text-green-500 flex-shrink-0" />
                        Response time: Hours → Seconds
                      </li>
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaArrowUp className="text-green-500 flex-shrink-0" />
                        3x more leads from your website
                      </li>
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaArrowUp className="text-green-500 flex-shrink-0" />
                        Save 40+ hours monthly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('book-call')}
                >
                  Learn More About Customer Engagement →
                </motion.button>
              </div>
            </div>

            {/* Creator & Coach Package */}
            <div className="mb-32">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-white mb-6">Creator & Coach Package</h3>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Scale your impact without scaling your time. Let AI be your digital twin.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Features */}
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <FaUserCircle className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Your AI Twin Agent</h4>
                      <p className="text-gray-400">An AI version of you that chats with followers and provides guidance - just like you would.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <FaPen className="w-5 h-5 text-purple-500" />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2"> Content Creator Agent</h4>
                      <p className="text-gray-400">Creates engaging content in your voice across all platforms.</p>
                    </div>

                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <FaUsers className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Community Engagement Agent </h4>
                      <p className="text-gray-400">Keeps your community active by handling comments and FAQs.</p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gray-900/50 p-10 rounded-2xl border border-gray-800">
                  <div className="mb-10">
                    <h4 className="text-2xl font-semibold text-white mb-6">Perfect For:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaCheck className="text-purple-500 flex-shrink-0" />
                        Coaches wanting to scale their impact
                      </li>
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaCheck className="text-purple-500 flex-shrink-0" />
                        Content creators seeking consistency
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-6">Business Impact:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaArrowUp className="text-green-500 flex-shrink-0" />
                        10x more follower engagement
                      </li>
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaArrowUp className="text-green-500 flex-shrink-0" />
                        30 days of content in one sitting
                      </li>
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaArrowUp className="text-green-500 flex-shrink-0" />
                        24/7 community management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('book-call')}
                >
                  Learn More About Creator Solutions →
                </motion.button>
              </div>
            </div>

            {/* Internal Efficiency Suite */}
            <div className="mb-32">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-white mb-6">Internal Efficiency Suite</h3>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Streamline operations and boost productivity with AI-powered automation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Features */}
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <FaBook className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Company Knowledge Chatbot Agent</h4>
                      <p className="text-gray-400">Your smart internal assistant for instant answers about processes and policies.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <FaTasks className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Personal Assistant Agent</h4>
                      <p className="text-gray-400">Automates routine tasks from emails to document organization.</p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gray-900/50 p-10 rounded-2xl border border-gray-800">
                  <div className="mb-10">
                    <h4 className="text-2xl font-semibold text-white mb-6">Perfect For:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaCheck className="text-purple-500 flex-shrink-0" />
                        Teams drowning in repetitive tasks
                      </li>
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaCheck className="text-purple-500 flex-shrink-0" />
                        Companies looking to scale efficiently
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-6">Business Impact:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaArrowUp className="text-green-500 flex-shrink-0" />
                        30+ hours saved per employee monthly
                      </li>
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaArrowUp className="text-green-500 flex-shrink-0" />
                        50% faster employee onboarding
                      </li>
                      <li className="flex items-center gap-4 text-lg text-gray-300">
                        <FaArrowUp className="text-green-500 flex-shrink-0" />
                        90% fewer internal support queries
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('book-call')}
                >
                  Learn More About Internal Efficiency →
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div id="how-it-works" className="w-full bg-gray-950 py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                OUR PROCESS
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              Simple Implementation, Powerful Results
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-20">
              We handle the complex AI infrastructure while you focus on growing your business.
              All solutions include strategy development and comprehensive training.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 font-bold mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Strategy & Planning
                </h3>
                <p className="text-gray-400">
                  We begin with a thorough assessment of your needs and develop a
                  customized implementation strategy for your chosen solutions.
                </p>
              </motion.div>

              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 font-bold mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Implementation & Integration
                </h3>
                <p className="text-gray-400">
                  Our team handles the technical setup and seamlessly integrates
                  the AI solutions with your existing systems and workflows.
                </p>
              </motion.div>

              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 font-bold mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Training & Support
                </h3>
                <p className="text-gray-400">
                  We provide comprehensive training for your team and ongoing support
                  to ensure you get the most out of your AI solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="w-full bg-gray-950 py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                PRICING
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              Transparent Pricing, Flexible Options
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-20">
              Choose between individual solutions or bundled packages. All prices include
              strategy development, implementation, and training.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Individual Solutions */}
              <motion.div
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Individual Solution</h3>
                <div className="text-4xl font-bold text-white mb-6">$799</div>
                <p className="text-gray-400 mb-6">Perfect for businesses looking to start with a single automation solution.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Instant Onboarding
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Strategy Development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Solution Delivery In Less Than 2 Weeks
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Team Training
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Weekly Sessions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    30 Days of Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Optional Hosting on our secure server ($99/mo)
                  </li>
                </ul>
                <motion.button
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('book-call')}
                >
                  Get Started
                </motion.button>
              </motion.div>

              {/* Solution Bundles */}
              <motion.div
                className="bg-gray-900/50 p-10 rounded-xl border border-gray-800 lg:scale-105 relative"
                whileHover={{ scale: 1.07 }}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-semibold text-white">
                  MOST POPULAR
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Solution Bundles</h3>
                <div className="text-4xl font-bold text-white mb-6">$1,999</div>
                <p className="text-gray-400 mb-8">Comprehensive packages designed for specific business needs.</p>

                <div className="space-y-8">
                  {/* Base Features */}
                  <div>

                    <div className="flex items-center text-gray-300 mb-2">
                      <FaCheck className="text-purple-500 mr-3 flex-shrink-0" />
                      Everything in the Individual Solution
                    </div>
                  </div>

                  {/* Suite Options */}
                  <div>

                    <div className="flex items-center text-gray-300 mb-2">
                      <FaCheck className="text-purple-500 mr-3 flex-shrink-0" />
                      <p className="text-gray-300 mb-2 font-semibold">Choose One Pre-made Suite:</p>
                    </div>
                    <div className="pl-6 space-y-6">
                      {/* Pre-made Suites */}

                      <div>

                        <ul className="space-y-2 pl-4 text-gray-400">
                          <li>• Engagement Suite</li>
                          <li>• Creator Solutions</li>
                          <li>• Internal Efficiency Suite</li>
                        </ul>
                      </div>

                      {/* Custom Suite */}
                      <div>
                        <p className="text-gray-300 mb-2 font-semibold">OR Create Your Custom Suite:</p>
                        <p className="text-gray-400 mb-2">Choose any 3 agents:</p>
                        <ul className="space-y-2 pl-4 text-gray-400">
                          <li>• Content Creator Agent</li>
                          <li>• Community Engagement Agent</li>
                          <li>• AI Twin Agent</li>
                          <li>• Personal Assistant Agent</li>
                          <li>• Company Knowledge Chatbot Agent</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 italic">
                    Not sure which option is best? We'll help you choose during your strategy session.
                  </p>
                </div>

                <motion.button
                  className="w-full py-4 px-6 mt-8 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('book-call')}
                >
                  Get Started
                </motion.button>
              </motion.div>

              {/* Enterprise Package */}
              <motion.div
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Package</h3>
                <div className="text-4xl font-bold text-white mb-6">$4,999</div>
                <p className="text-gray-400 mb-6">Complete IT infrastructure with custom website development.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Everything in the Individual Solution and Solution Bundles
                  </li>

                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Custom Website Development
                  </li>

                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Unlimited Number of Agents specific to your needs
                  </li>

                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Technical Planning
                  </li>
                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    60 Days Priority Support
                  </li>

                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Enhanced Training
                  </li>

                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Weekly Strategy Sessions
                  </li>

                  <li className="flex items-center text-gray-300">
                    <FaCheck className="text-purple-500 mr-2 flex-shrink-0" />
                    Comprehensive Integration
                  </li>
                </ul>
                <motion.button
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('book-call')}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="w-full bg-gray-950 py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                FAQ
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              Common Questions
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-20">
              Everything you need to know about our AI solutions and implementation process.
            </p>

            <div className="max-w-3xl">
              {[
                {
                  question: "What's included in the implementation process?",
                  answer: "Our implementation process includes strategy development, technical setup, system integration, comprehensive team training, and post-launch support. We ensure your team is fully equipped to leverage the AI solutions effectively."
                },
                {
                  question: "How long does implementation take?",
                  answer: "Individual solutions typically take 2-4 weeks to implement. Bundle implementations usually take 4-6 weeks. Enterprise packages with custom website development can take 8-12 weeks. Timelines may vary based on complexity and customization needs."
                },
                {
                  question: "Do I need technical expertise to use these solutions?",
                  answer: "No technical expertise is required. We design our solutions to be user-friendly and provide comprehensive training for your team. Our support team is always available to help with any questions."
                },
                {
                  question: "What are the hosting options?",
                  answer: "Solutions can be hosted on your own server or on MNFST's secure server for $100/month. Both options include maintenance and security updates. The choice of hosting doesn't affect functionality."
                },
                {
                  question: "Can I customize the solutions for my specific needs?",
                  answer: "Yes, all our solutions can be customized to match your specific business needs and workflows. We'll work with you during the strategy phase to ensure the implementation aligns with your requirements."
                },
                {
                  question: "What kind of support do you provide?",
                  answer: "We provide comprehensive support including implementation assistance, team training, technical support, and ongoing maintenance. Bundle and Enterprise customers receive priority support access."
                }
              ].map((faq, index) => (
                <Accordion key={index} faq={faq} />
              ))}
            </div>
          </div>
        </div>

        {/* Consultation Booking Section */}
        <div id="book-call" className="w-full bg-gray-950 py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                GET STARTED
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-5xl font-bold text-white mb-6">
                  Book Your Strategy Session
                </h2>

                <p className="text-xl text-gray-400 mb-8">
                  Schedule a consultation to discuss your needs and discover how our AI solutions
                  can transform your business operations.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaClock className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">30-Minute Deep Dive</h3>
                      <p className="text-gray-400">
                        A focused session to understand your needs and recommend the best solutions for your business.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaChartLine className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Strategic Planning</h3>
                      <p className="text-gray-400">
                        Get a clear implementation roadmap and understand how our solutions will impact your business.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaDollarSign className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Custom Quote</h3>
                      <p className="text-gray-400">
                        Receive a detailed quote tailored to your specific needs and implementation requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <InlineWidget
                  url="https://calendly.com/contact-mnfstagency/30min"
                  styles={{
                    height: '700px',
                    width: '100%',
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