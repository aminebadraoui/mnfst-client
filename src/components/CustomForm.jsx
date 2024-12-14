// src/components/CustomForm.jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useFormStore from '../stores/formStore';
import { Link, useNavigate } from 'react-router-dom';
import { formSchema } from '../schemas/formSchema';

const CustomForm = () => {
    const { setIsFormOpen, setFormData } = useFormStore();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data) => {
        try {
            // Store form data in state
            setFormData(data);

            // Submit to n8n webhook
            const response = await fetch('https://mnfst-n8n.mnfstagency.com/webhook/270ae037-543f-4842-9e6c-d46d8740df0d', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    phone: data.phone,
                    industry: data.industry,
                    revenue: data.revenue,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Close form and navigate to thank you page
            setIsFormOpen(false);
            navigate('/thank-you');
        } catch (error) {
            console.error('Form submission error:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
                {/* Close button */}
                <button
                    onClick={() => setIsFormOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-6">
                    Make sure you have your phone nearby to experience the AI Agent in action!
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name *
                        </label>
                        <input
                            type="text"
                            {...register("firstName")}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            {...register("lastName")}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone *
                        </label>
                        <input
                            type="tel"
                            {...register("phone")}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Industry - Updated to free text */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            What industry are you in? *
                        </label>
                        <input
                            type="text"
                            {...register("industry")}
                            placeholder="Enter your industry"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.industry && (
                            <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
                        )}
                    </div>

                    {/* Revenue */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            What is your monthly business revenue? (Be Honest please) *
                        </label>
                        <select
                            {...register("revenue")}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Select revenue range</option>
                            <option value="0-5000">$0 - $5,000</option>
                            <option value="5000-10000">$5,000 - $10,000</option>
                            <option value="10000-25000">$10,000 - $25,000</option>
                            <option value="25000-50000">$25,000 - $50,000</option>
                            <option value="50000-100000">$50,000 - $100,000</option>
                            <option value="100000+">$100,000+</option>
                        </select>
                        {errors.revenue && (
                            <p className="text-red-500 text-sm mt-1">{errors.revenue.message}</p>
                        )}
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            {...register("terms")}
                            className="mt-1 mr-2"
                        />
                        <label className="text-sm text-gray-600">
                            I agree to the{' '}
                            <Link
                                to="/terms"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-purple-600 hover:underline"
                            >
                                Terms and Conditions
                            </Link>
                            {' '}and{' '}
                            <Link
                                to="/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-purple-600 hover:underline"
                            >
                                Privacy Policy
                            </Link>
                        </label>
                    </div>
                    {errors.terms && (
                        <p className="text-red-500 text-sm">{errors.terms.message}</p>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[rgb(159,88,246)] hover:bg-[rgb(169,98,256)] text-white font-bold py-3 px-4 rounded-md transition duration-200"
                    >
                        Get Free Access Now!
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CustomForm;