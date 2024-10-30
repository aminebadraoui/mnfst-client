import React from 'react';

const FlowChart = () => {
    return (
        <div className="w-[90vw] h-[90vh] mx-auto bg-transparent relative">
            {/* Social Media Row */}
            <div className="absolute top-0 left-0 w-full">
                <div className="flex justify-between px-[10%]">
                    <div className="connector-box border bg-white z-[2] border-gray-300 rounded px-[1vw] py-[0.5vh] text-[1.2vw] text-gray-400">Blog</div>
                    <div className="connector-box border bg-white z-[2] border-gray-300 rounded px-[1vw] py-[0.5vh] text-[1.2vw] text-gray-400">LinkedIn</div>
                    <div className="connector-box border bg-white z-[2] border-gray-300 rounded px-[1vw] py-[0.5vh] text-[1.2vw] text-gray-400">Twitter</div>
                    <div className="connector-box border bg-white z-[2] border-gray-300 rounded px-[1vw] py-[0.5vh] text-[1.2vw] text-gray-400">Facebook</div>
                    <div className="connector-box border bg-white z-[2] border-gray-300 rounded px-[1vw] py-[0.5vh] text-[1.2vw] text-gray-400">Instagram</div>
                </div>
            </div>

            {/* Website */}
            <div className="connector-node absolute top-[35vh] left-1/2 -translate-x-1/2">
                <div className="border bg-white z-[2] border-gray-300 rounded-full w-[15vw] h-[15vw] flex items-center justify-center text-[1.5vw] text-gray-400">
                    Your website
                </div>
            </div>


            {/* Rest of the elements remain the same */}
            {/* Social Media Row */}
            <div className="absolute top-[5vh] left-0 w-full">
                <div className="flex justify-between px-[10%]">
                    <div className="border bg-white z-[2] border-gray-300 rounded px-[1vw] py-[0.5vh] text-[1.2vw] text-gray-400">Blog</div>
                    <div className="border bg-white z-[2] border-gray-300 rounded px-[1vw] py-[0.5vh] text-[1.2vw] text-gray-400">LinkedIn</div>
                    <div className="border bg-white z-[2] border-gray-300 rounded px-[1vw] py-[0.5vh] text-[1.2vw] text-gray-400">Twitter</div>
                    <div className="border bg-white z-[2] border-gray-300 rounded px-[1vw] py-[0.5vh] text-[1.2vw] text-gray-400">Facebook</div>
                    <div className="border bg-white z-[2] border-gray-300 rounded px-[1vw] py-[0.5vh] text-[1.2vw] text-gray-400">Instagram</div>
                </div>
            </div>

            {/* Website */}
            <div className="absolute top-[50vh] left-1/2 -translate-x-1/2">
                <div className="border bg-white z-[2] border-gray-300 rounded-full w-[15vw] h-[15vw] flex items-center justify-center text-[1.5vw] text-gray-400">
                    Your website
                </div>
            </div>

            {/* Lead Magnet and Chatbot */}
            <div className="absolute top-[65vh] left-0 w-full">
                <div className="flex justify-between px-[25%]">
                    <div className="border bg-white z-[2] border-gray-300 rounded px-[1.5vw] py-[1vh] text-[1.2vw] text-gray-400">
                        Your lead magnet
                    </div>
                    <div className="border bg-white z-[2] border-gray-300 rounded px-[1.5vw] py-[1vh] text-[1.2vw] text-gray-400">
                        Your chatbot
                    </div>
                </div>
            </div>

            {/* Business Funnel */}
            <div className="absolute top-[85vh] left-1/2 -translate-x-1/2">
                <div className="border bg-white z-[2] border-gray-300 rounded px-[1.5vw] py-[1vh] text-[1.2vw] text-gray-400">
                    Your business funnel
                </div>
            </div>
        </div>
    );
};

export default FlowChart;