export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
              Welcome to GIYANSH GLOBAL SERVICES
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              GIYANSH GLOBAL SERVICES is a professional training and
              career development organization dedicated to preparing
              students for successful careers in the Banking &
              Financial Services industry.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              Our mission is to bridge the gap between education and
              employment by providing practical knowledge,
              communication skills, interview preparation, sales
              techniques, and career guidance.
            </p>

            <p className="text-gray-600 leading-8">
              Whether you are a 12th Pass student, Graduate, Final
              Year student, or Fresher, our program is designed to
              make you job-ready with industry-relevant skills.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              Why Students Trust Us
            </h3>

            <div className="space-y-4">
              <div className="text-gray-800">✅ Industry-Oriented Curriculum</div>
              <div className="text-gray-800">✅ Live Interactive Classes</div>
              <div className="text-gray-800">✅ Experienced Trainers</div>
              <div className="text-gray-800">✅ Resume Building</div>
              <div className="text-gray-800">✅ Interview Preparation</div>
              <div className="text-gray-800">✅ Placement Assistance</div>
              <div className="text-gray-800">✅ Career Guidance</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

