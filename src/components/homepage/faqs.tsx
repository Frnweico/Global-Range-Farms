"use client";

import { useState } from 'react';
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
        answer: "You can order online, via WhatsApp, or by visiting our farm."
    },
    {
        question: "Can I reserve livestock for a later date?",
        answer: "Yes. Our Buy and Keep service lets you secure your livestock until slaughter day. Terms and conditions apply."
    },
    {
        question: "Do you deliver livestock?",
        answer: "Yes. We deliver free only on bulk orders within Lagos, Abeokuta, and Ibadan metropolises. Delivery to other areas can be arranged upon request."
    },
    {
        question: "Are your animals vet-checked?",
        answer: "Yes. All our livestock are raised under clean, healthy conditions and regularly inspected by certified veterinarians."
    },
    {
        question: "Do you sell in bulk or to businesses?",
        answer: "Yes. We supply livestock to caterers, restaurants, event planners, and corporate buyers. Contact us to discuss your needs."
    },
]

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white pb-20 px-6 md:px-12 lg:px-20 w-full">
      
      <div className="text-center mb-8 font-barlow">
        <p className="text-[#0E0E0E] font-medium text-sm md:text-[18px] lg:text-[20px]  tracking-wide uppercase mb-3 ">
            // FAQS
        </p>
        <h3 className="text-3xl md:text-[36px] lg:text-[42px] leading-[124%] tracking-[-4%] text-[#0E0E0E] ">
            Questions About Our <br className="hidden md:block" /> Farm & Products
        </h3>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div 
                key={index} 
                className="bg-white rounded-lg  border border-gray-100 overflow-hidden cursor-pointer shadow-[0px_12px_24px_-4px_#E5E5E5] hover:shadow-[0px_16px_32px_-4px_#E5E5E5] transition-shadow duration-300"
                onClick={() => toggleFAQ(index)}
            >
                <div className="flex justify-between items-center p-6 md:p-8">
                    <h4 className="text-[20px] md:text-[24px] lg:text-[28px] font-medium text-[#0E0E0E] leading-[100%] tracking-[-1%] font-geist">
                        {item.question}
                    </h4>

                    <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#0E0E0E] flex items-center justify-center shrink-0">
                        <motion.span 
                            initial={false}
                            animate={{ rotate: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }}
                            className="absolute"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </motion.span>
                        
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

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="px-6 md:px-8 pb-8 pt-0">
                                <p className="text-[#0E0E0E] text-sm leading-[145%] font-medium font-geist">
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