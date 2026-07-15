"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is this course online?",
    answer:
      "Yes. All classes are conducted through live online sessions with expert trainers.",
  },
  {
    question: "Who can join this course?",
    answer:
      "12th Pass students, Graduates, Final Year students, Freshers, and Job Seekers can join.",
  },
  {
    question: "Do I need banking experience?",
    answer:
      "No. This course is specially designed for beginners with no prior banking experience.",
  },
  {
    question: "Will I get interview preparation?",
    answer:
      "Yes. Resume building, mock interviews, communication skills, and interview preparation are included.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes. You can pay the course fee in easy installments of ₹4,000.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
            Everything you need to know about our Banking & Finance Career
            Launch Program.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg text-gray-800">
                  {faq.question}
                </span>

                {active === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-blue-600" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ${
                  active === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}