import React from 'react';
import { PlayCircle } from 'lucide-react';
import Header from './Header';
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Accordion from './Accordion'
import { useState, useEffect } from 'react'
import useFormStore from '../stores/formStore';
import CustomForm from './CustomForm';

const VideoLandingPage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const { isFormOpen, setIsFormOpen } = useFormStore();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 mb-8">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 pt-20 ">
          {/* Hero Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white text-center  max-w-4xl mx-auto leading-tight mb-8">
            Learn How Our Clients Use Our AI Framework To Book 15+ Sales Calls Per Day With Pre-Qualified Warm Leads
          </h1>



          {/* Video Container */}
          <div className="relative w-full max-w-3xl mx-auto aspect-video bg-black rounded-xl shadow-2xl overflow-hidden mb-8">
            <style>{`
    wistia-player[media-id='dv63lx5al3']:not(:defined) {
      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/dv63lx5al3/swatch');
      display: block;
      filter: blur(5px);
      padding-top: 56.25%;
    }
  `}</style>
            <wistia-player
              media-id="dv63lx5al3"
              className="w-full h-full"
              autoplay
              playsinline
              muted={isMuted}
            ></wistia-player>

            {isMuted && (
              <button
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-900 transition"
                onClick={() => {
                  setIsMuted(false);
                  if (window._wq && window._wq.push) {
                    window._wq.push({
                      id: 'dv63lx5al3',
                      onReady: (video) => {
                        video.unmute();
                        video.volume(1);
                      }
                    });
                  }
                }}
              >
                Click to unmute
              </button>
            )}
          </div>

          {/* CTA Section */}
          <div className="text-center ">
            <button
              className="bg-[rgb(159,88,246)] hover:bg-[rgb(169,98,256)] text-white text-xl font-bold px-12 py-4 rounded-md shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              onClick={() => setIsFormOpen(true)}
            >
              Access Training (100% Free)
            </button>
            <p className="text-gray-400 mt-4 text-sm">
              Instant access • No credit card required
            </p>
          </div>


        </div>
      </div>

      {/* Show CustomForm when isFormOpen is true */}
      {isFormOpen && <CustomForm />}

      {/* Wave SVG */}

      {/* Who is this for? Section */}
      <div className="relative z-10 bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(22,22,39)] text-center mb-16">
            Who is this for?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Coaches & Service Businesses */}
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-8 rounded-2xl shadow-lg  h-full hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[rgb(159,88,246)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[rgb(22,22,39)] mb-4 group-hover:text-[rgb(159,88,246)] transition-colors">
                  Coaches & Service-Based Businesses
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Perfect for professionals looking to automate their lead generation and scale their coaching or service business with qualified clients.
                </p>
              </div>
            </div>

            {/* Content Creators */}
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-8 rounded-2xl shadow-lg  h-full hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[rgb(159,88,246)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[rgb(22,22,39)] mb-4 group-hover:text-[rgb(159,88,246)] transition-colors">
                  Content Creators
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ideal for creators wanting to monetize their audience and generate consistent leads through their content platforms.
                </p>
              </div>
            </div>

            {/* Agencies */}
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[rgb(159,88,246)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[rgb(22,22,39)] mb-4 group-hover:text-[rgb(159,88,246)] transition-colors">
                  Agencies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Designed for agencies looking to streamline their client acquisition process and scale their operations with automated lead generation.
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Wave transition to FAQ */}
      {/* Wave SVG */}


      {/* FAQ Section */}
      <div className="relative z-10 bg-white">


        <div className="bg-[rgb(22,22,39)] p-4">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-gray-400 text-center mb-2 uppercase tracking-wider">FAQS</p>
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Have Questions?
            </h2>

            {/* FAQ Accordion */}
            <div className="space-y-2">
              <Accordion
                title="How can I use AI Agents in my business?"
              >
                We simply focus on bringing in more sales, and we place AI Agents to Take most of your Calls And messages.
              </Accordion>


              <Accordion
                title="What service do you specifically offer in automation?"
              >
                We offer comprehensive automation solutions including lead generation, customer service, and sales process automation using advanced AI technology.
              </Accordion>

              <Accordion
                title="Is this available for a monthly retainer or even a one time payment?"
              >
                We offer flexible payment options including both monthly retainers and one-time payment plans based on your specific needs and requirements.
              </Accordion>

              <Accordion
                title="Who are you and why should I trust you?"
              >
                We're a team of experienced AI and automation specialists with a proven track record of helping businesses scale their operations effectively.
              </Accordion>

              <Accordion
                title="What if I don't get results? do you give refunds?"
              >
                We stand behind our service quality and offer a satisfaction guarantee. We'll work with you to ensure you achieve the desired results.
              </Accordion>
            </div>
          </div>

        </div>

      </div>


      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: rgb(22,22,39);
        }
      `}</style>
    </div>
  );
};

export default VideoLandingPage;