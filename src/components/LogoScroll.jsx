import { motion } from 'framer-motion';

const logos = [
    '/openai.png',
    '/anthropic.png',
    '/digital-ocean.png',

    '/gemini.png',
    '/grok-ai.png',
    '/n8n.png',
];

const LogoScroll = () => {
    return (
        <div className="relative w-full overflow-hidden bg-transparent backdrop-blur-sm py-10 ">
            <div className="flex">


                <motion.div
                    className="flex min-w-full "
                    animate={{
                        x: ['0%', '-100%']
                    }}
                    transition={{
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity
                    }}
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-[20%] h-[100px] mx-4 grayscale hover:grayscale-0 transition-all"
                        >
                            <img
                                src={logo}
                                alt={`Partner Logo ${index + 1}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex min-w-full "
                    animate={{
                        x: ['0%', '-100%']
                    }}
                    transition={{
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity
                    }}
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-[20%] h-[100px] mx-4 grayscale hover:grayscale-0 transition-all"
                        >
                            <img
                                src={logo}
                                alt={`Partner Logo ${index + 1}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex min-w-full "
                    animate={{
                        x: ['0%', '-100%']
                    }}
                    transition={{
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity
                    }}
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-[20%] h-[100px] mx-4 grayscale hover:grayscale-0 transition-all"
                        >
                            <img
                                src={logo}
                                alt={`Partner Logo ${index + 1}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>







            </div>
        </div>
    );
};

export default LogoScroll;