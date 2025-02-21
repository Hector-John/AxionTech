import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const faqs = [
    {
      question: 'What services does AxionTech offer?',
      answer: 'AxionTech specializes in web and app development, software solutions, and digital marketing. We provide tailored solutions for businesses looking to enhance their digital presence, improve user experience, and optimize efficiency through technology.'
    },
    {
      question: 'How can AxionTech help my business?',
      answer: 'We analyze your business needs and implement cutting-edge tech solutions that streamline operations, increase customer engagement, and drive growth. Our expertise ensures that your digital assets are efficient, scalable, and future-proof.'
    },
    {
      question: 'What technologies does AxionTech use?',
      answer: 'We leverage modern frameworks such as React, Next.js, and Node.js, along with cloud computing and AI-powered tools to build scalable, high-performance applications that meet industry standards and exceed user expectations.'
    },
    {
      question: 'Does AxionTech offer ongoing support?',
      answer: 'Absolutely! We offer maintenance, performance optimization, security updates, and feature enhancements to ensure that your digital products run seamlessly and remain competitive in an ever-evolving market.'
    },
    {
      question: 'How can I get started with AxionTech?',
      answer: 'Getting started is simple! Reach out to us through our website, and we will schedule a consultation to understand your goals and provide a customized strategy tailored to your needs.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-blue-600 font-semibold pb-2">What People Ask Us</p>
        <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <details 
            key={index} 
            className="group [&_summary::-webkit-details-marker]:hidden bg-gray-50 p-6 rounded-lg shadow-md"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <summary className="flex cursor-pointer items-center justify-between text-gray-900 font-medium hover:text-blue-600 transition">
              <h3>{faq.question}</h3>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
