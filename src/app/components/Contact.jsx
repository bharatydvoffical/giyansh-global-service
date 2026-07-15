export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-400">
            Contact Us
          </h2>
          <p className="text-gray-300 mt-3">
            We'd love to hear from you. Get in touch with us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Details */}
          <div className="bg-slate-900 rounded-2xl p-8 shadow-xl border border-blue-600">

            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              GIYANSH GLOBAL SERVICES
            </h3>

            <div className="space-y-5">

              <div>
                <h4 className="font-semibold text-gray-300">📱 Mobile</h4>
                <p className="text-lg">+91 9799906095</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-300">📧 Email</h4>
                <p>info@giyanshglobalservice.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-300">🕒 Working Hours</h4>
                <p>Monday – Friday</p>
                <p>8:00 AM – 6:00 PM</p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 rounded-2xl p-8 shadow-xl border border-blue-600">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-700 focus:border-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-700 focus:border-blue-500 outline-none"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-700 focus:border-blue-500 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-700 focus:border-blue-500 outline-none"
              ></textarea>

              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition">
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}