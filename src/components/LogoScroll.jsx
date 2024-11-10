import { motion } from 'framer-motion';

const logos = [
    '/openai.png',
    '/anthropic.png',
    '/claude.png',
    '/digital-ocean.png',
    '/docker.png',
    '/gemini.png',
    '/google-ai.png',
    '/grok-ai.png',
    '/groq.png',
    '/mistral.png',
    '/n8n.png',
    '/ollama.webp',
];

const LogoScroll = () => {
    return (
        <div className="relative w-full overflow-hidden bg-gray-950/50 backdrop-blur-sm py-10">
            <div className="flex ">
                <motion.div
                    className="flex gap-4 min-w-full"
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
                            className="flex items-center justify-center w-[150px] h-[60px] grayscale hover:grayscale-0 transition-all"
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
                    className="flex gap-8 min-w-full"
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
                            className="flex items-center justify-center w-[150px] h-[60px] grayscale hover:grayscale-0 transition-all"
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