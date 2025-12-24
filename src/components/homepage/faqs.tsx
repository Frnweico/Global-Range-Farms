"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQSProps {
    question: string;
    answer: string;
}

const FAQ_DATA: FAQSProps[] = [
    {
        question: "Do you provide slaughter services?",
        answer: "No. We only sell live animals. However, we can provide contacts of trusted professionals who handle slaughtering on request."
    },
    {
        question: "How do I place an order?",
        answer: "Simply navigate to our products page, select the livestock you want, and proceed to checkout. You can also contact us directly via WhatsApp for bulk orders."
    },
    {
        question: "Can I reserve livestock for a later date?",
        answer: "Yes, with our 'Buy & Keep' service, you can pay for livestock now, and we will raise and care for them until you are ready for pickup or delivery."
    },
    {
        question: "Do you offer home delivery?",
        answer: "Yes, we offer delivery services across Lagos, Ogun, and Southwest Nigeria. Free delivery is available for bulk orders."
    },
    {
        question: "Are your animals vet-checked?",
        answer: "Absolutely. All our animals undergo regular veterinary checks to ensure they are healthy, disease-free, and safe for consumption."
    },
    {
        question: "Do you sell in bulk or to businesses?",
        answer: "Yes, we supply restaurants, event planners, and retailers. We offer special pricing models for consistent bulk purchases."
    },
]

const FAQS = () => {
  // State to track which question is open. Default is 0 (the first one).
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    // If clicking the one already open, close it (null). Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 w-full">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-16">
        <p className="text-gray-500 font-medium text-sm tracking-wide uppercase mb-3">
            // FAQS
        </p>
        <h3 className="text-3xl md:text-5xl font-bold leading-tight text-black">
            Questions About Our <br className="hidden md:block" /> Farm & Products
        </h3>
      </div>

      {/* --- ACCORDION LIST --- */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
                onClick={() => toggleFAQ(index)}
            >
                {/* QUESTION ROW */}
                <div className="flex justify-between items-center p-6 md:p-8">
                    <h4 className="text-lg md:text-xl font-medium text-black">
                        {item.question}
                    </h4>

                    {/* TOGGLE ICON (Circle with +/-) */}
                    <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                        {/* Minus Icon (Shows when Open) */}
                        <motion.span 
                            initial={false}
                            animate={{ rotate: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }}
                            className="absolute"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </motion.span>
                        
                        {/* Plus Icon (Shows when Closed) */}
                        <motion.span 
                            initial={false}
                            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                            className="absolute"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </motion.span>
                    </div>
                </div>

                {/* ANSWER ROW (Animated Slide Down) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="px-6 md:px-8 pb-8 pt-0">
                                <p className="text-gray-600 text-base leading-relaxed font-medium">
                                    {item.answer}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
          );
        })}
      </div>

    </section>
  )
}

export default FAQS;