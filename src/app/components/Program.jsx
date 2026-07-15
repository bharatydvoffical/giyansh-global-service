
export default function Program() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900">
          Banking & Finance Career Launch Program
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          Our specially designed training program prepares students for
          successful careers in Banking, NBFCs, Financial Institutions,
          Insurance, and Sales.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-900">
              Duration
            </h3>
            <p className="mt-3 text-gray-600">
              3 Months Job Ready Program
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-900">
              Training Mode
            </h3>
            <p className="mt-3 text-gray-600">
              Online Live Interactive Classes
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-900">
              Course Fee
            </h3>
            <p className="mt-3 text-gray-600">
              ₹10,000 Only
            </p>
            <p className="text-green-600 font-semibold mt-2">
              ₹4,000 × 3 Installments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
