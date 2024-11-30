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
  FaUser,
  FaChevronLeft,
  FaChevronRight,
  FaComments,
  FaBrain,
  FaTimes

} from 'react-icons/fa';

import LogoScroll from './components/LogoScroll'
import Accordion from './components/Accordion'

import Cal, { getCalApi } from "@calcom/embed-react";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-purple-500 hover:text-purple-400 transition-colors"
    >
      <FaChevronLeft className="w-12 h-12" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-purple-500 hover:text-purple-400 transition-colors"
    >
      <FaChevronRight className="w-12 h-12" />
    </button>
  );
};


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
  ]
};

const agents = [
  {
    icon: FaMagnet,
    title: "Client Acquisition Agent",
    description: "Converts website visitors into qualified leads 24/7.",
    features: [
      "Books meetings automatically",
      "Qualifies prospects instantly"
    ],
    perfectFor: [
      "Businesses wanting more qualified leads",
      "Sales teams needing automation",
      "Companies looking to scale sales"
    ],
    impact: [
      "3x more qualified leads",
      "70% faster lead response time",
      "24/7 lead capture"
    ]
  },
  {
    icon: FaHeadset,
    title: "Customer Service Agent",
    description: "Your tireless support representative.",
    features: [
      "Responds in seconds 24/7",
      "Resolves common issues instantly"
    ],
    perfectFor: [
      "Companies with high support volume",
      "Businesses wanting 24/7 support",
      "Teams needing to scale support"
    ],
    impact: [
      "90% faster response times",
      "75% reduction in support costs",
      "24/7 customer satisfaction"
    ]
  },
  {
    icon: FaPen,
    title: "Content Creator Agent",
    description: "Your automated content marketing team.",
    features: [
      "Creates engaging content daily",
      "Maintains consistent posting"
    ],
    perfectFor: [
      "Marketing teams needing content",
      "Businesses building authority",
      "Brands wanting consistency"
    ],
    impact: [
      "30 days of content in one sitting",
      "50% higher engagement rates",
      "90% time saved on content creation"
    ]
  },
  {
    icon: FaRobot,
    title: "Community Engagement Agent",
    description: "Keeps your community active and growing.",
    features: [
      "Moderates discussions 24/7",
      "Answers common questions"
    ],
    perfectFor: [
      "Online community managers",
      "Social media managers",
      "Membership site owners"
    ],
    impact: [
      "2x community engagement",
      "60% faster response times",
      "95% reduction in spam"
    ]
  },
  {
    icon: FaBook,
    title: "Company Knowledge Agent",
    description: "Your internal knowledge base come to life.",
    features: [
      "Answers company questions",
      "Shares best practices"
    ],
    perfectFor: [
      "Growing organizations",
      "Remote teams",
      "Companies scaling training"
    ],
    impact: [
      "50% faster employee onboarding",
      "75% fewer internal queries",
      "90% knowledge retention"
    ]
  },
  {
    icon: FaClock,
    title: "Personal Assistant Agent",
    description: "Handles your routine tasks automatically.",
    features: [
      "Manages emails & scheduling",
      "Organizes tasks & documents"
    ],
    perfectFor: [
      "Busy executives",
      "Small business owners",
      "Professionals needing more time"
    ],
    impact: [
      "Save 40+ hours monthly",
      "Zero missed follow-ups",
      "80% less email time"
    ]
  }
];

function App() {
  return (
    <>
      <div className='bg-transparent fixed top-0 left-0 bottom-0 right-0 pointer-events-none'>
        <TechLoader />
      </div>
      <div className="app  bg-gray-900 w-full h-full z-10">
        <Header />

        {/* Hero Section */}
        <div id="hero" className="min-h-screen bg-gray-900 flex flex-col items-center justify-between p-4 mb-8">
          <div className="mt-40 text-center max-w-5xl mx-auto">


            <h1 className="text-5xl md:text-7xl font-semibold mb-8">
              <span className="text-white">We Make </span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"> AI </span>
              <span className="text-white">Work For </span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                You
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
        {/* How It Works Section */}
        <div id="how-it-works" className="w-full bg-gray-900 p-4 mb-16 relative">
          {/* Background Image - Add a dark overlay */}


          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-left mb-8">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                HOW IT WORKS
              </span>
              <h2 className="text-5xl font-semibold text-white mt-6 mb-6">
                Simple Implementation Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl ">
                Get started quickly with our streamlined onboarding process
              </p>
            </div>

            <div className="w-full relative p-8">
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                  backgroundImage: 'url(/process-bg.jpg)',
                  opacity: 0.1
                }}
              />

              {/* Timeline Steps */}
              <div className="relative ">

                {/* Vertical Line */}
                <div className="absolute left-[25px] top-0 bottom-0 w-[2px] bg-purple-500/30" />

                {/* Step 1 */}
                <div className="relative pl-20 pb-16">
                  <div className="absolute left-0 w-[52px] h-[52px] rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-purple-500 mb-2">STEP 1</div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Onboarding</h3>
                    <p className="text-gray-400 text-lg">
                      Onboarding takes just 30 minutes and it's the only mandatory call in our service.
                      We can set one up as soon as tomorrow.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative pl-20 pb-16">
                  <div className="absolute left-0 w-[52px] h-[52px] rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-purple-500 mb-2">STEP 2</div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Add Projects</h3>
                    <p className="text-gray-400 text-lg">
                      We use a simple, self-directed ClickUp board to manage work. You can add projects,
                      leave comments, and view progress—or let us add tasks for you.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative pl-20">
                  <div className="absolute left-0 w-[52px] h-[52px] rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-purple-500 mb-2">STEP 3</div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Weekly Consultations</h3>
                    <p className="text-gray-400 text-lg">
                      Ops is an ongoing process. We provide (optional) weekly 45-minute consultations
                      for brainstorming & discussion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div id="faq" className="w-full bg-gray-900 p-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                FAQ
              </span>
            </div>

            <h2 className="text-5xl font-semibold text-white mb-8">
              Common Questions
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mb-8">
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
        </div> */}

        {/* Consultation Booking Section */}
        <div id="book-call" className="w-full bg-gray-900 p-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full">
                GET STARTED
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-5xl font-semibold text-white mb-6">
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
                      <h3 className="text-xl font-semibold text-white mb-2">30-Minute Deep Dive</h3>
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
                      <h3 className="text-xl font-semibold text-white mb-2">Strategic Planning</h3>
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
                      <h3 className="text-xl font-semibold text-white mb-2">Custom Quote</h3>
                      <p className="text-gray-400">
                        Receive a detailed quote tailored to your specific needs and implementation requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <Cal
                  calLink="mnfst-ai/discovery-call"
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "scroll"
                  }}
                  config={{
                    layout: "month_view",
                    hideEventTypeDetails: false,
                    styles: {
                      branding: {
                        brandColor: "#111827"

                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16 border-t border-gray-800 z-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">

                <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  MNFST
                </span>
              </div>
              <p className="text-gray-400">
                Transforming businesses with intelligent AI solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Consulting</li>
                <li>AI Development</li>
                <li>Automation</li>
                <li>Custom Solutions</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
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

      </div >
    </>
  );
}
export default App;