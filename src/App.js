import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechLoader from './components/TechLoader';
import { Timeline } from './components/Timeline';
import emailjs from '@emailjs/browser';
import ChatBot from './components/ChatBot';
import AssessmentForm from './components/AssessmentForm';
import Header from './components/Header';
import FlowChart from './components/FlowChart';

import './App.css';

import {
  FaLock,
  FaRocket,
  FaMoneyBillWave,
  FaHandshake,
  FaSearch,
  FaTools,
  FaPaintBrush,
  FaGlobe,
  FaPencilAlt,
  FaBullseye,
  FaRobot,
  FaMobileAlt,
  FaComments,
  FaBook,
  FaCogs,
  FaChevronDown
} from 'react-icons/fa';
import BusinessFlow from './components/BusinessFlow';


function App() {
  // Reusable ServiceCard component
  const ServiceCard = ({ service, index }) => (
    <motion.div
      className="bg-white rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-slate-500/50 transition-all group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)" }}
    >
      <div className="mb-4">
        <service.icon className="w-12 h-12 text-purple-500 group-hover:text-blue-500 transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        {service.title}
      </h3>
      <p className="text-slate-500 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="text-slate-500 flex items-center">
            <span className="w-2 h-2 bg-transparent rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [showTechLoader, setShowTechLoader] = useState(true);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const form = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsHeaderVisible(!entry.isIntersecting);
        if (!entry.isIntersecting) {
          // When we've scrolled past the TechLoader, set showTechLoader to false
          setShowTechLoader(false);
        }

      });
    }, options);

    const techLoaderElement = document.querySelector('.tech-loader-container');
    if (techLoaderElement) {
      observer.observe(techLoaderElement);
    }

    return () => {
      if (techLoaderElement) {
        observer.unobserve(techLoaderElement);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.main-content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setSubmissionStatus('submitting');

    emailjs.sendForm('service_s2hc0vi', 'template_ajbzxee', form.current, {
      publicKey: 'mBk6w-CEod73FbERq',
    })
      .then((result) => {
        console.log('EmailJS success:', result.text);
        setSubmissionStatus('success');
        e.target.reset();
      }, (error) => {
        console.error('EmailJS error:', error.text);
        setSubmissionStatus('error');
      });
  };


  const containerRef = useRef(null);
  const [isContainerReady, setIsContainerReady] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setIsContainerReady(true);
    }
  }, []);

  return (
    <>
      <div className='bg-transparent fixed top-0 left-0 w-full h-full z-10'>
        <TechLoader />
      </div>

      <div ref={containerRef} className="app w-full h-full">
        <Header />

        <div className="pt-8  md:pt-0 relative h-full w-full my-16 m-auto z-20">
          <div className="min-h-screen flex flex-col lg:flex-row">
            <div className='flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 text-center w-full'>
              <h1 className='m-4 lg:m-8 text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500'>
                We turn your business into an automated powerhouse
              </h1>
              <AssessmentForm />
            </div>
          </div>
        </div>

        {/* Overlapping Save Time Section */}
        <motion.div
          className="relative -mb-16 z-10 w-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className=" max-w-2xl w-full p-8 backdrop-blur-sm border border-gray-700/50 bg-purple-500/80"
            whileHover={{ boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center  text-white ">
              Save Time and Resources
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
        </motion.div>

        {/* Overlapping Tech Stack Section */}
        <motion.div
          className="relative -mt-16 z-10 w-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="max-w-2xl w-full p-8 backdrop-blur-sm border border-gray-700/50 bg-purple-500/80"
            whileHover={{ boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
              Our Tech Stack
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full m-auto flex items-center justify-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="max-w-2xl  m-8 w-full rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50"
            whileHover={{ boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Transform Your Business with AI
            </h2>
            <p className="text-slate-500 text-center mb-8">
              Book a free consultation to discover how our AI solutions can automate and enhance your digital presence.
            </p>
            <motion.a
              href="https://cal.com/your-calendar"
              className="block w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-4 px-8 rounded-xl text-center text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </>
  );
}
export default App;