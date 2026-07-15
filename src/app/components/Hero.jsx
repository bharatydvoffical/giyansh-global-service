export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Banking & Finance Career Launch Program
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Build the skills needed to start a successful career in the
            Banking & Financial Services industry through practical training,
            live classes, and placement assistance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Enroll Now
            </a>

            <a
              href="tel:+917877349895"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917877349895"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white bg-white/10 px-6 py-3 rounded-lg font-semibold text-white transition hover:bg-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.671.149-.198.297-.765.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.058-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.671-1.612-.92-2.206-.242-.579-.488-.5-.671-.51l-.571-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.084 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347z" />
                <path d="M12.026 2.001C6.124 2.001 1.267 6.86 1.267 12.76c0 2.248.657 4.327 1.8 6.087L1 23l4.291-1.128c1.68.917 3.59 1.401 5.735 1.401 5.903 0 10.76-4.859 10.76-10.76S17.929 2.001 12.026 2.001zm5.901 15.222c-.224.628-1.295 1.198-1.788 1.283-.472.084-1.054.149-3.031-.717-2.773-1.18-4.56-4.02-4.699-4.203-.14-.186-1.147-1.506-1.147-2.873 0-1.367.72-2.034.977-2.312.252-.282.562-.352.75-.352.195 0 .384.002.553.011.181.01.426-.068.664.512.237.579.808 1.994.88 2.138.075.144.123.317.025.51-.099.198-.191.315-.347.49-.148.173-.298.385-.424.516-.125.133-.256.284-.112.56.146.276.646 1.064 1.386 1.725.956.861 1.761 1.136 2.003 1.262.248.124.393.104.54-.062.148-.169.61-.709.786-.953.174-.248.345-.208.57-.125.224.083 1.413.669 1.655.79.242.124.406.186.466.288.056.099.056.572-.168 1.2z" />
              </svg>
              WhatsApp
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div>✅ 3-Month Job Ready Program</div>
            <div>✅ Online Live Classes</div>
            <div>✅ Placement Assistance</div>
            <div>✅ Career Guidance</div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img
            src="/WhatsApp Image 2026-07-15 at 3.39.03 PM.jpeg"
            alt="WhatsApp contact"
            className="w-full h-[560px] max-w-[760px] rounded-3xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}