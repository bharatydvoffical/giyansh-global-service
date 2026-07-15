const learningItems = [
  "Banking Fundamentals",
  "Retail Banking",
  "Banking Products & Services",
  "Financial Products",
  "Loan Products",
  "Credit Card Sales",
  "Customer Relationship Management (CRM)",
  "Sales & Cross Selling Techniques",
  "Communication Skills",
  "Personality Development",
  "Business Etiquette",
  "Professional Email Writing",
  "Resume Building",
  "Interview Preparation",
  "Mock Interviews",
  "Job Readiness Skills",
];

export default function Learning() {
  return (
    <section id="learning" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            What You'll Learn
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Build practical banking, finance, communication, and interview
            skills to become industry-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 border-t-4 border-blue-700"
            >
              <div className="text-3xl mb-4">📘</div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}