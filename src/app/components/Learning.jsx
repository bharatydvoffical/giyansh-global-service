// components/Learning.jsx

"use client";

import {
  FaUniversity,
  FaMoneyCheckAlt,
  FaCreditCard,
  FaUsers,
  FaHandshake,
  FaComments,
  FaUserTie,
  FaEnvelope,
  FaFileAlt,
  FaBriefcase,
} from "react-icons/fa";

const learningData = [
  {
    icon: <FaUniversity />,
    title: "Banking Fundamentals",
    desc: "Learn the basics of banking operations and financial services.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Retail Banking",
    desc: "Understand savings, current accounts, deposits, and customer services.",
  },
  {
    icon: <FaCreditCard />,
    title: "Banking Products",
    desc: "Explore loans, insurance, investments, and credit cards.",
  },
  {
    icon: <FaHandshake />,
    title: "Sales & Cross Selling",
    desc: "Develop sales strategies and customer conversion techniques.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Relationship",
    desc: "Build strong customer relationships using CRM practices.",
  },
  {
    icon: <FaComments />,
    title: "Communication Skills",
    desc: "Improve spoken English, confidence, and professional communication.",
  },
  {
    icon: <FaUserTie />,
    title: "Personality Development",
    desc: "Enhance your personality and workplace etiquette.",
  },
  {
    icon: <FaEnvelope />,
    title: "Professional Email Writing",
    desc: "Write clear, professional emails for business communication.",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Building",
    desc: "Create an ATS-friendly resume that stands out.",
  },
  {
    icon: <FaBriefcase />,
    title: "Interview Preparation",
    desc: "Practice HR & Banking interviews with mock sessions.",
  },
];

export default function Learning() {
  return (
    <section className="py-5 bg-light" id="learning">
      <div className="container">

        <div className="text-center mb-5">
          <span className="badge bg-primary px-3 py-2 fs-6">
            What You'll Learn
          </span>

          <h2 className="fw-bold mt-3">
            Skills That Make You Job Ready
          </h2>

          <p className="text-muted col-lg-8 mx-auto">
            Our Banking & Finance Career Launch Program is designed to provide
            practical knowledge, professional skills, and interview confidence
            required to start a successful career.
          </p>
        </div>

        <div className="row g-4">
          {learningData.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="card h-100 border-0 shadow-sm rounded-4 p-4"
                style={{
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "28px",
                  }}
                >
                  {item.icon}
                </div>

                <h5 className="fw-bold">{item.title}</h5>

                <p className="text-muted mb-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}