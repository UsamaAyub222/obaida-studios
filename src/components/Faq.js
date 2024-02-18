import React, { useState } from 'react';

const FAQSection = () => {
  const faqData = [
    {
      question: 'What is a subscription-based design studio?',
      answer: 'A subscription-based design studio is where design services are offered to clients through a subscription model. Instead of charging clients on a per-project basis, clients pay a recurring monthly fee in exchange for access to design services.',
    },
    {
      question: 'What services are included in the subscription package?',
      answer: 'Logo design, branding, print design, digital graphics, web design (development offered seperately), infographics, icon design, social media graphics, motion graphics (offered with permium subsription), Event branding, T-shirt and merchandise, book and magazine layout, photo editing and manipulation, vector illiustration, illustration (offered with premium subscription)',
    },
    {
        question: 'Do you work with international clients?',
        answer: 'Absolutely! I have had the pleasure of working with clients from all over the world.',
      },
    // Add more FAQ data as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };


  
  return (
    <div className="faq-container">
<h2>FAQs</h2>
      {faqData.map((faq, index) => (
        <div className={`faq-box ${expandedIndex === index ? 'activeq' : ''}`} key={index}>
          <div className="question" onClick={() => toggleAccordion(index)}>
            {faq.question}
            <span className={`arrow-icon ${expandedIndex === index ? 'expanded' : ''}`}> &#9662;</span>
          </div>
          {expandedIndex === index && <div className="answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;