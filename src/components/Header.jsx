
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
    const navItems = [
        { label: 'Solutions', sectionId: 'solutions' },
        { label: 'How It Works', sectionId: 'how-it-works' },
        { label: 'Pricing', sectionId: 'pricing' },
        { label: 'FAQ', sectionId: 'faq' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">

                    <div className="flex items-center space-x-8">
                        <div className="w-16 h-16 m-4">
                            <Logo className="w-full h-full" size={20} />
                        </div>
                        <span className=" text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                            MNFST
                        </span>
                    </div>


                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.sectionId}
                                onClick={() => scrollToSection(item.sectionId)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <motion.a
                        onClick={() => scrollToSection('book-call')}

                        className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book intro call →
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Header;