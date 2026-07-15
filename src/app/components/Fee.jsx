export default function Fees() {
  return (
    <section id="fees" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Course Fee Structure
          </h2>
          <p className="text-gray-600 mt-3">
            Affordable fee with easy installment options.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 border">

          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Banking & Finance Career Launch Program
            </h3>

            <h1 className="text-5xl font-bold text-blue-700 mt-4">
              ₹10,000
            </h1>

            <p className="text-gray-500 mt-2">
              Total Course Fee
            </p>
          </div>

          <div className="mt-10">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Installment Option
            </h4>

            <div className="space-y-4">

              <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg">
                <span className="font-medium">1st Installment</span>
                <span className="font-bold text-blue-700">
                  ₹4,000
                </span>
              </div>

              <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg">
                <span className="font-medium">2nd Installment</span>
                <span className="font-bold text-blue-700">
                  ₹4,000
                </span>
              </div>

              <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg">
                <span className="font-medium">3rd Installment</span>
                <span className="font-bold text-blue-700">
                  ₹4,000
                </span>
              </div>

            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Enroll Now
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}