import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaArrowRight, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const formSchema = z.object({
    industry: z.string().min(1, "Please select an industry"),
    businessSize: z.string().min(1, "Please select your business size"),
    primaryGoal: z.string().min(1, "Please select your primary goal"),
    website: z.string().url().optional().or(z.literal("")),
    socialMediaActivity: z.string().min(1, "Please select your social media activity"),
    contentFrequency: z.string().min(1, "Please select your content frequency"),
    leadGeneration: z.array(z.string()).min(1, "Select at least one method"),
    automatedTools: z.string().min(1, "Please select your automation level"),
    contentTypes: z.array(z.string()).min(1, "Select at least one content type"),
    contentPlanning: z.string().min(1, "Please select your content planning approach"),

});

const formOptions = {
    industries: [
        "E-commerce", "Healthcare", "Professional Services",
        "Education", "Hospitality", "Real Estate", "Manufacturing"
    ],
    businessSizes: [
        "Micro (1-10)", "Small (11-50)", "Medium (51-200)", "Large (200+)"
    ],
    primaryGoals: [
        "Increase sales", "Generate leads", "Build brand awareness",
        "Improve customer experience"
    ],
    socialMediaActivity: [
        "Active on all major platforms", "Only 1-2 platforms", "None"
    ],
    contentFrequency: [
        "Daily", "Weekly", "Monthly", "Rarely/Never"
    ],
    leadGeneration: [
        "Email campaigns", "Social media ads", "SEO",
        "Content marketing", "Paid search"
    ],
    automatedTools: [
        "Fully automated", "Partially automated", "No automation"
    ],
    contentTypes: [
        "Blogs", "Social media posts", "Product updates", "Newsletters"
    ],
    contentPlanning: [
        "Data-driven strategy", "Planned but not data-driven", "No clear strategy"
    ]
};

const formStructure = {
    "Basic Information": {
        intro: "Let's start with a little bit about your business to personalize your results.",
        questions: [
            {
                name: "industry",
                label: "What industry are you in?",
                type: "text",
                required: true
            },
            { name: "businessSize", label: "What's your business size?", options: formOptions.businessSizes },
            { name: "primaryGoal", label: "What's your primary business goal?", options: formOptions.primaryGoals }
        ]
    },
    "Digital Presence": {
        intro: "How strong is your online presence? Our AI analysis will assess your digital footprint.",
        questions: [
            { name: "website", label: "What's your website URL?", type: "url" },
            { name: "socialMediaActivity", label: "How active are you on social media?", options: formOptions.socialMediaActivity },
            { name: "contentFrequency", label: "How often do you create content?", options: formOptions.contentFrequency }
        ]
    },
    "Marketing and Engagement": {
        intro: "Tell us about your approach to customer engagement and marketing. Our AI tool will evaluate your strategies.",
        questions: [
            { name: "leadGeneration", label: "Which lead generation methods do you use?", options: formOptions.leadGeneration, type: "checkbox" },
            { name: "automatedTools", label: "What's your level of automation?", options: formOptions.automatedTools }
        ]
    },
    "Content Strategy": {
        intro: "How often do you create and update content? Let our AI engine assess your content strategy effectiveness.",
        questions: [
            { name: "contentTypes", label: "What types of content do you create?", options: formOptions.contentTypes, type: "checkbox" },
            { name: "contentPlanning", label: "How do you plan your content?", options: formOptions.contentPlanning },

        ]
    }
};

const inputStyles = {
    select: "w-full  border border-gray-700 rounded-lg px-4 py-3 text-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSA3LjVMMTAgMTIuNUwxNSA3LjUiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:20px] ",
    input: "w-full  border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ",
    checkbox: "h-5 w-5 rounded border-slate-50/50 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-0",
    label: "block text-slate-50 font-medium mb-2",
    error: "text-red-400 text-sm mt-1",
    checkboxLabel: "text-slate-50 select-none",
};

const FormStep = ({ children, isActive }) => (
    <motion.div
        className={`${isActive ? 'block' : 'hidden'} w-full`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
    >
        {children}
    </motion.div>
);

const FormInput = ({ label, error, children }) => (
    <div className="mb-6">
        <label className={inputStyles.label}>{label}</label>
        {children}
        {error && (
            <span className={inputStyles.error}>{error}</span>
        )}
    </div>
);

const SelectionGroup = ({ options, register, name, value }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {options.map((option) => (
            <label
                key={option}
                className={`
            flex items-center justify-between p-4 rounded-lg border cursor-pointer
            transition-all duration-200 
            ${value === option
                        ? 'border-slate-50 bg-transparent/10 text-slate-50'
                        : 'border-slate-50/50  text-slate-50 hover:border-slate-50 hover:bg-transparent/10'}
          `}
            >
                <span>{option}</span>
                <input
                    type="radio"
                    value={option}
                    {...register(name)}
                    className="hidden"
                />
                {value === option && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 rounded-full bg-transparent"
                    />
                )}
            </label>
        ))}
    </div>
);

const StepIndicator = ({ currentStep, totalSteps }) => {
    // Calculate which section we're in
    const sections = Object.keys(formStructure);
    const currentSection = Object.entries(formStructure).find(([_, section]) => {
        const sectionStart = Object.values(formStructure)
            .slice(0, sections.indexOf(_))
            .reduce((acc, curr) => acc + curr.questions.length, 0) + 1;
        const sectionEnd = sectionStart + section.questions.length - 1;
        return currentStep >= sectionStart && currentStep <= sectionEnd;
    })?.[0];

    return (
        <div className="mb-8 ">
            {/* Section Progress */}
            <div className="flex justify-between mb-4">
                {sections.map((section) => (
                    <div
                        key={section}
                        className={`text-sm font-medium transition-colors duration-200 ${section === currentSection
                            ? 'text-slate-50'
                            : 'text-slate-50/50'
                            }`}
                    >
                        {section}
                    </div>
                ))}
            </div>

            {/* Question Progress */}
            <div className="relative">
                <div className="h-2  rounded-full">
                    <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
                <div className="mt-2 text-right text-sm text-slate-50">
                    Question {currentStep} of {totalSteps}
                </div>
            </div>
        </div>
    );
};


const AssessmentForm = () => {
    const [formData, setFormData] = useState({});
    const [step, setStep] = useState(1);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [email, setEmail] = useState('');
    const [showPresentation, setShowPresentation] = useState(true);

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: zodResolver(formSchema),
        mode: "onChange"
    });

    const onSubmit = async (data) => {
        setFormData(data);
        const finalScore = calculateScore(data);
        setScore(finalScore);
        setShowResults(true);
    };

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        try {
            const templateParams = {
                email: email,
                scoreData: {
                    score: score,
                    category: getCategory(),
                    focusArea: getFocusArea(),
                    recommendation: getRecommendation(),
                },
                formData: formData
            }

            const body = JSON.stringify(templateParams);

            console.log(body);

            const response = await fetch('https://n8n.mnfstagency.com/webhook-test/assessment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body
            });

            if (response.ok) {
                console.log('form sent successfully to n8n');
            } else {
                console.error('Failed to send form');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const renderStep = () => {
        const totalSteps = Object.values(formStructure).flatMap(section => section.questions).length;
        const currentSection = Object.entries(formStructure).find(([_, section]) => {
            const sectionStart = Object.values(formStructure)
                .slice(0, Object.keys(formStructure).indexOf(_))
                .flatMap(s => s.questions)
                .length + 1;
            const sectionEnd = sectionStart + section.questions.length - 1;
            return step >= sectionStart && step <= sectionEnd;
        });

        if (!currentSection) return null;

        const [sectionTitle, section] = currentSection;
        const questionIndex = step - Object.values(formStructure)
            .slice(0, Object.keys(formStructure).indexOf(sectionTitle))
            .flatMap(s => s.questions)
            .length - 1;
        const question = section.questions[questionIndex];

        return (
            <FormStep isActive={true}>
                <h3 className="text-2xl font-bold mb-4 text-slate-50">
                    {sectionTitle}
                </h3>
                <p className="text-slate-50 mb-6">
                    {section.intro}
                </p>

                <FormInput label={question.label} error={errors[question.name]?.message}>
                    {question.type === "checkbox" ? (
                        <div className="space-y-2">
                            {question.options.map(option => (
                                <label key={option} className="flex items-center space-x-3 p-3 rounded-lg border border-slate-50/50 hover:border-slate-50">
                                    <input
                                        type="checkbox"
                                        value={option}
                                        {...register(question.name)}
                                        className={inputStyles.checkbox}
                                    />
                                    <span className={inputStyles.checkboxLabel}>{option}</span>
                                </label>
                            ))}
                        </div>
                    ) : question.type === "text" ? (
                        <input
                            type="text"
                            {...register(question.name)}
                            className={inputStyles.input}
                            placeholder="Enter your industry"
                        />
                    ) : question.type === "url" || question.type === "email" ? (
                        <input
                            type={question.type}
                            {...register(question.name)}
                            placeholder={question.type === "url" ? "https://your-website.com" : "your@email.com"}
                            className={inputStyles.input}
                        />
                    ) : (
                        <SelectionGroup
                            options={question.options}
                            register={register}
                            name={question.name}
                            value={watch(question.name)}
                        />
                    )}
                </FormInput>
            </FormStep>
        );
    };

    const PresentationScreen = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-left  rounded-xl p-8 flex flex-col items-center justify-center"
        >

            <div className="">
                <div className="flex items-center justify-center space-x-2">
                    <h2 className="text-[2.5rem] bg-gray-950 w-full font-bold  bg-clip-text text-slate-50 ">
                        Are you AI-Ready?
                    </h2>
                    <div className="flex flex-col items-left justify-center">
                        <p className="text-slate-50 text-lg">
                            Take our AI-Readiness Assessment to discover how AI can amplify your business and maximize results—no guesswork, just a customized roadmap.
                        </p>
                        <br />

                        <ul className="text-slate-50  mb-8">
                            <li className="flex items-start gap-2 justify-start text-lg">
                                <FaCheck />
                                <span>Takes less than 2 minutes</span>
                            </li>
                            <li className="flex items-start gap-2 justify-start">
                                <FaCheck />
                                <span>Get instant AI-powered recommendations</span>
                            </li>
                            <li className="flex items-start gap-2 justify-start">
                                <FaCheck />
                                <span>Free personalized action plan</span>
                            </li>
                        </ul>

                        <motion.button
                            onClick={() => setShowPresentation(false)}
                            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.button>
                    </div>


                </div>

            </div>

        </motion.div>
    );

    const canProceedToNext = () => {
        const currentSection = Object.entries(formStructure).find(([_, section]) => {
            const sectionStart = Object.values(formStructure)
                .slice(0, Object.keys(formStructure).indexOf(_))
                .reduce((acc, curr) => acc + curr.questions.length, 0) + 1;
            const sectionEnd = sectionStart + section.questions.length - 1;
            return step >= sectionStart && step <= sectionEnd;
        });

        if (!currentSection) return false;

        const [sectionTitle, section] = currentSection;
        const questionIndex = step - Object.values(formStructure)
            .slice(0, Object.keys(formStructure).indexOf(sectionTitle))
            .reduce((acc, curr) => acc + curr.questions.length, 0) - 1;
        const question = section.questions[questionIndex];

        const fieldError = errors[question.name];
        const fieldValue = watch(question.name);

        if (question.type === "checkbox") {
            return Array.isArray(fieldValue) && fieldValue.length > 0;
        }

        if (question.name === "website") {
            return true;
        }

        return fieldValue && !fieldError;
    };

    const calculateScore = (data) => {
        let totalScore = 0;

        if (data.website) totalScore += 20;

        switch (data.socialMediaActivity) {
            case 'Active on all major platforms':
                totalScore += 10;
                break;
            case 'Only 1-2 platforms':
                totalScore += 5;
                break;
            default:
                break;
        }

        const contentScores = {
            'Daily': 20,
            'Weekly': 15,
            'Monthly': 10,
            'Rarely/Never': 0
        };
        totalScore += contentScores[data.contentFrequency] || 0;

        totalScore += Math.min(data.leadGeneration.length * 5, 20);

        const automationScores = {
            'Fully automated': 20,
            'Partially automated': 10,
            'No automation': 0
        };
        totalScore += automationScores[data.automatedTools] || 0;

        totalScore += Math.min(data.contentTypes.length * 5, 20);

        const planningScores = {
            'Data-driven strategy': 20,
            'Planned but not data-driven': 10,
            'No clear strategy': 0
        };
        totalScore += planningScores[data.contentPlanning] || 0;

        return Math.min(totalScore, 150);
    };

    const getCategory = () => {
        if (score <= 50) return "Beginner";
        if (score <= 100) return "Intermediate";
        return "Advanced";
    };

    const getFocusArea = () => {
        switch (getCategory()) {
            case "Beginner":
                return "Build Online Foundation";
            case "Intermediate":
                return "Grow and Streamline Engagement";
            case "Advanced":
                return "Optimize and Personalize";
            default:
                return "";
        }
    };

    const getRecommendation = () => {
        const recommendations = [];

        // Website presence
        if (!formData.website) {
            recommendations.push("Establish a responsive, SEO-optimized website.");
        }

        // formData Media Activity
        if (formData.socialMediaActivity === 'Only 1-2 platforms' || formData.socialMediaActivity === 'None') {
            recommendations.push("Expand your reach by becoming active on more social platforms.");
        }

        // Content Frequency
        if (formData.contentFrequency === 'Rarely/Never' || formData.contentFrequency === 'Monthly') {
            recommendations.push("Increase content frequency to engage your audience consistently.");
        }

        // Lead Generation
        if (formData.leadGeneration.length < 2) {
            recommendations.push("Diversify lead generation strategies for better outreach.");
        }

        // Automation Level
        if (formData.automatedTools !== 'Fully automated') {
            recommendations.push("Consider full automation to streamline workflows.");
        }

        // Content Types
        if (formData.contentTypes.length < 2) {
            recommendations.push("Expand content types to reach a broader audience.");
        }

        // Content Planning
        if (formData.contentPlanning !== 'Data-driven strategy') {
            recommendations.push("Adopt a data-driven strategy for more effective content planning.");
        }

        return recommendations;
    };

    const getBenefits = () => [
        "Expanded Action Plan with detailed steps",
        "AI-powered tool recommendations tailored to your business",
        "Bonus checklist for tracking your growth",
        "Access to a free consultation or demo of our AI-driven tools"
    ];

    const ResultsDisplay = () => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-left"
            >
                <div className="mb-8">
                    <h3 className="text-3xl text-center font-bold bg-clip-text text-slate-50">
                        Your Digital Readiness Score: {score}/150
                    </h3>
                </div>

                <div className="rounded-xl">
                    <h4 className="text-xl text-center font-bold text-purple-50 mb-8">Your Focus Area: {getFocusArea()}</h4>
                    <p className="text-lg font-bold text-left text-slate-50 mb-2">AI-Generated Recommendation:</p>
                    <ul className="text-slate-50 space-y-2">
                        {getRecommendation().map((rec, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <FaExclamationTriangle className="text-slate-50 flex-shrink-0" />
                                <span>{rec}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 rounded-xl mb-8">
                    <h4 className="text-xl font-bold text-slate-50 mb-4">Your Blueprint Includes:</h4>
                    <ul className="text-slate-50 space-y-3">
                        {getBenefits().map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <FaCheck className="text-slate-50 flex-shrink-0" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>


                <form onSubmit={handleEmailSubmit} className=" flex flex-col items-center justify-center w-full mt-8">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email to receive the full plan"
                        className={inputStyles.input}
                        required
                    />
                    <motion.button
                        type="submit"
                        className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Me the Plan
                    </motion.button>
                </form>
            </motion.div>
        );
    };

    const totalSteps = Object.values(formStructure)
        .reduce((acc, section) => acc + section.questions.length, 0);

    return (
        <motion.div
            className="w-full bg-white/5  rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >

            {
                showPresentation ? (
                    <PresentationScreen />
                ) : !showResults && !showPresentation ? (
                    <>
                        <StepIndicator
                            currentStep={step}
                            totalSteps={totalSteps}
                        />

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <AnimatePresence mode="wait">
                                {renderStep()}
                            </AnimatePresence>

                            <div className="flex justify-between mt-8">
                                {step > 1 && (
                                    <motion.button
                                        type="button"
                                        onClick={() => setStep(step - 1)}
                                        className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-slate-50 hover:border-slate-500"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Back
                                    </motion.button>
                                )}

                                <motion.button
                                    type={step === totalSteps ? 'submit' : 'button'}
                                    onClick={() => {
                                        if (step < totalSteps && canProceedToNext()) {
                                            setStep(step + 1);
                                        }
                                    }}
                                    className={`px-6 py-2 rounded-lg ${canProceedToNext()
                                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                                        : ' bg-purple-900/50 text-slate-50 cursor-not-allowed'
                                        } ml-auto`}
                                    whileHover={canProceedToNext() ? { scale: 1.05 } : {}}
                                    whileTap={canProceedToNext() ? { scale: 0.95 } : {}}
                                    disabled={!canProceedToNext()}
                                >
                                    {step === totalSteps ? 'Get Your Results' : 'Next'}
                                </motion.button>
                            </div>
                        </form>
                    </>
                ) : (
                    <ResultsDisplay score={score} />
                )}
        </motion.div>
    );
};

export default AssessmentForm;