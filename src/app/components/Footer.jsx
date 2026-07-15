// components/Footer.jsx

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            GIYANSH GLOBAL SERVICES
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Empowering Careers. Building Futures.
            We help students build successful careers in the Banking &
            Financial Services industry through practical training,
            career guidance, and placement assistance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#program">Program</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>

          <div className="space-y-4 text-gray-300">

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-yellow-400" />
              <span>+91 7877349895</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-yellow-400" />
              <span>info@giyanshglobalservices.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-yellow-400 mt-1" />
              <span>India</span>
            </div>

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <Linkedin size={20} />
            </a>

          </div>

          <Link href="#contact">
            <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} GIYANSH GLOBAL SERVICES. All Rights Reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Professional Training • Career Guidance • Placement Assistance
          </p>

        </div>
      </div>
    </footer>
  );
}