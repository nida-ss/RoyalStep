import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen = false, onClick }) => {
  return (
    <div className="border border-primary/40 shadow-md rounded-2xl bg-white overflow-hidden mb-4">
      <div 
        className="px-6 py-5 flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-primary">
          {question}
        </h3>
        <div className="w-8 h-8 flex items-center justify-center">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="font-montserrat font-medium text-lg text-black/50">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "How long a typical computer repair takes?",
      answer: "The repair time can vary depending on the complexity of the issue. Simple software fixes may be completed in a matter of hours, while more complex hardware repairs could take a few days."
    },
    {
      question: "Are pick up and delivery free?",
      answer: "Yes, we offer free pickup and delivery services for all repairs within Dubai. Our technicians will come to your location and collect your device, then return it once the repair is complete."
    },
    {
      question: "Is my data safe during the repair process?",
      answer: "We take data security very seriously. Our technicians follow strict protocols to ensure your personal and business information remains safe during the repair process. We can also provide data backup services if requested."
    },
    {
      question: "Do you provide on-site computer repair service?",
      answer: "Yes, we offer on-site repair services for businesses and individual customers. Our mobile technicians can diagnose and fix many issues directly at your location, minimizing downtime."
    },
    {
      question: "Are your technicians certified and experienced?",
      answer: "All our technicians are fully certified and have extensive experience in computer and device repairs. They undergo regular training to stay updated with the latest technologies and repair techniques."
    },
    {
      question: "How much does IT cost to repair your PC?",
      answer: "Repair costs depend on the specific issue with your PC. We provide transparent, no-obligation quotes after diagnosing your device. Our rates are competitive and we offer various service packages to suit different needs."
    },
    {
      question: "How much is laptop repair in Dubai?",
      answer: "Laptop repair costs in Dubai vary based on the brand, model, and the nature of the problem. We offer competitive pricing with transparent quotes after initial diagnosis. Contact us for a free assessment."
    },
    {
      question: "What should I do if I have a question or need support after my computer is repaired?",
      answer: "We provide excellent after-sales support. You can contact our customer service team via phone, email, or visit our service center if you have any questions or need assistance after your repair is complete. All our repairs come with a warranty period."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-24 relative">
      {/* Background effects */}
      <div className="absolute w-[414px] h-[408px] left-16 bottom-1/4 bg-[#23947F] rounded-full blur-[500px] -z-10 transform -rotate-90"></div>
      <div className="absolute w-[414px] h-[408px] right-1/3 top-1/4 bg-[#0022FF] rounded-full blur-[850px] -z-10 transform -rotate-90"></div>
      <div className="absolute w-[414px] h-[408px] right-1/4 bottom-0 bg-secondary rounded-full blur-[600px] -z-10 transform -rotate-[105deg]"></div>
      
      <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-[42px] text-primary text-center mb-16 leading-10 tracking-tight uppercase">
        Frequently asked questions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {faqs.slice(0, 4).map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
        <div className="space-y-4">
          {faqs.slice(4).map((faq, index) => (
            <FAQItem 
              key={index + 4}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index + 4}
              onClick={() => setOpenIndex(openIndex === index + 4 ? -1 : index + 4)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
