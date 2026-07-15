export default function Career() {
  const careers = [
    {
      title: "Banking Sales Executive",
      description:
        "Help customers with banking products and achieve sales targets.",
    },
    {
      title: "Relationship Officer",
      description:
        "Build strong customer relationships and provide financial solutions.",
    },
    {
      title: "Business Development Executive (BDE)",
      description:
        "Generate new business opportunities and acquire customers.",
    },
    {
      title: "Business Relationship Executive (BRE)",
      description:
        "Manage client relationships and improve customer satisfaction.",
    },
    {
      title: "Customer Service Executive",
      description:
        "Assist customers with banking services and resolve their queries.",
    },
    {
      title: "Loan Sales Executive",
      description:
        "Promote and sell personal, home, and business loan products.",
    },
    {
      title: "Credit Card Sales Executive",
      description:
        "Market credit card products and acquire new customers.",
    },
    {
      title: "Financial Service Associate",
      description:
        "Support customers with financial products and investment solutions.",
    },
    {
      title: "Banking Operations Executive",
      description:
        "Handle daily banking operations and customer documentation.",
    },
    {
      title: "Tele Sales Executive",
      description:
        "Generate leads and sell banking products through phone calls.",
    },
  ];

  return (
    <section
      id="career"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Career Opportunities
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            After completing the Banking & Finance Career Launch Program,
            students can apply for various entry-level roles in Banking,
            Financial Services, NBFCs, Insurance, and Sales.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careers.map((career, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-4">
                💼
              </div>

              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {career.title}
              </h3>

              <p className="text-gray-600">
                {career.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}