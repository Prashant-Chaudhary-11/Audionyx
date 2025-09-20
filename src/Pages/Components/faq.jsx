import React, { useState } from "react";

export const Faq = () => {
  const faqs = [
    {
      question: "Do I need to know how to code?",
      answer:
        "No! You don’t need to code to use our music platform. We’ve built everything so you can focus on streaming and sharing music."
    },
    {
      question: "Can I use my own custom domain?",
      answer:
        "Yes, you can easily connect your custom domain to your music profile or artist page."
    },
    {
      question: "Is hosting included for my music?",
      answer:
        "Absolutely! All tracks, playlists, and artist pages are hosted on our secure cloud servers."
    },
    {
      question: "I’m new to this, will someone help me?",
      answer:
        "Of course! Our support team is here 24/7 to help you set up, upload tracks, or troubleshoot any issue."
    },
    {
      question: "Is the site mobile-ready?",
      answer:
        "Yes! Your music site and playlists look great on any device — phone, tablet, or desktop."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section mt-5 container">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="homePageHeading">FAQ’s</h2>
        <p className="homePageTagline">
          Everything you need to know about our music streaming service.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item p-4 mb-3 rounded-4 shadow-sm ${
              openIndex === index ? "active" : ""
            }`}
            onClick={() => toggleFaq(index)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">{faq.question}</h5>
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-muted">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
