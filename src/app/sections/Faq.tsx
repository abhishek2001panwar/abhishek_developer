// FAQ.tsx
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What is the process for starting a project?',
      answer: 'We begin with a consultation to understand your needs, followed by a detailed proposal outlining the project scope, timeline, and cost.',
    },
    {
      question: 'How do I share feedback?',
      answer: 'You can share feedback through our project management tool, email, or scheduled meetings.',
    },
    {
      question: 'How will we communicate?',
      answer: 'We communicate primarily through email, video calls, and project management software.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on the scope and complexity. We provide estimated timelines in our proposals.',
    },
    {
      question: "What's your refund policy?",
      answer: "Our refund policy is outlined in our terms of service. Please review it for details.",
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer various pricing models, including fixed-price, hourly, and retainer-based, depending on the project.',
    },
    {
      question: 'What is your process for both design & development?',
      answer: 'Our process includes research, wireframing, design, development, testing, and deployment.',
    },
    {
      question: 'Can you help with website maintenance after launch?',
      answer: 'Yes, we offer website maintenance packages to ensure your site remains up-to-date and secure.',
    },
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <div className="container mx-auto px-2 flex flex-col justify-center mb-32 relative">
      {/* Decorative SVG curve line */}
    

      <h2 className="text-4xl font-bold mb-2 text-center dark:text-dark-accent text-primary-600">Got Any Questions?</h2>
      <p className="text-lg mb-6 text-center dark:text-dark-secondary text-gray-600">We&apos;ve Got Answers.</p>

      <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
      {/* Rest of your FAQ content remains the same */}
      <div className="space-y-2">
      {faqs.slice(0, 4).map((faq, index) => (
      /* Your existing FAQ items code */
      <div
        key={index}
        className="bg-white dark:bg-neutral-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-neutral-700 hover:scale-[1.02]"
      >
        <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleAnswer(index)}
        >
        <h3 className="text-md font-normal text-gray-800 dark:text-gray-100">{faq.question}</h3>
        <button className={`w-8 h-8 flex items-center justify-center text-lg rounded-md transition-all duration-300 ${
        openIndex === index 
        ? 'bg-light-accent dark:bg-dark-accent  text-dark-background' 
        : 'bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300'
        }`}>
        {openIndex === index ? '−' : '+'}
        </button>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="mt-4 text-gray-500 dark:text-gray-400">
        {faq.answer}
        </div>
        </div>
      </div>
      ))}
      </div>
      <div className="space-y-2">
      {faqs.slice(4, 8).map((faq, index) => (
      /* Your existing FAQ items code */
      <div
        key={index + 4}
        className="bg-white dark:bg-neutral-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-neutral-700 hover:scale-[1.02]"
      >
        <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleAnswer(index + 4)}
        >
        <h3 className="text-lg font-regular text-gray-800 dark:text-gray-100">{faq.question}</h3>
        <button className={`w-8 h-8 flex items-center justify-center text-lg rounded-md transition-all duration-300 ${
        openIndex === index + 4
        ? 'bg-light-accent dark:bg-dark-accent text-dark-background' 
        : 'bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300'
        }`}>
        {openIndex === index + 4 ? '−' : '+'}
        </button>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        openIndex === index + 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="mt-4 text-gray-500 dark:text-gray-400">
        {faq.answer}
        </div>
        </div>
      </div>
      ))}
      </div>
      </div>
    </div>
    
  );
};

export default Faq;