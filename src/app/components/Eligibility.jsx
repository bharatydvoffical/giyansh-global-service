import { CheckCircle } from "lucide-react";

const eligibilityList = [
  "12th Pass Students",
  "Graduate Students",
  "Final Year Students",
  "Freshers",
  "Job Seekers",
  "Anyone interested in building a career in Banking & Financial Services",
];

export default function Eligibility() {
  return (
    <section id="eligibility" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-900">
            Eligibility
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            This program is suitable for students, graduates, freshers, and
            anyone looking to build a successful career in the Banking &
            Financial Services industry.
          </p>
        </div>

        {/* Eligibility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eligibilityList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 bg-blue-900 text-white rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold">
            No Prior Banking Experience Required
          </h3>
          <p className="mt-2 text-blue-100">
            Our training program is specially designed for beginners. We start
            from the fundamentals and help you become job-ready through
            practical learning and expert guidance.
          </p>
        </div>
      </div>
    </section>
  );
}