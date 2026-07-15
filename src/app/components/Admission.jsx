const steps = [
  {
    id: "01",
    title: "Fill the Admission Form",
    description: "Complete the online admission form with your basic details.",
  },
  {
    id: "02",
    title: "Document Verification",
    description: "Submit the required documents for verification.",
  },
  {
    id: "03",
    title: "Choose Payment Option",
    description: "Pay the course fee in full or choose the installment option.",
  },
  {
    id: "04",
    title: "Join Your Online Batch",
    description: "Receive your joining details and attend live online classes.",
  },
  {
    id: "05",
    title: "Start Your Banking Career Journey",
    description: "Begin your training and prepare for placement opportunities.",
  },
];

export default function Admission() {
  return (
    <section id="admission" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Admission Process
          </h2>
          <p className="mt-4 text-gray-600">
            Follow these simple steps to enroll in the Banking & Finance Career
            Launch Program.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-900 text-white text-xl font-bold">
                {step.id}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}