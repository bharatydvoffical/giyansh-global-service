import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold">
          GIYANSH GLOBAL SERVICES
        </h2>

        <p className="mt-2 text-blue-100">
          Empowering Careers. Building Futures.
        </p>

        <div className="mt-6 space-y-3">

          <div className="flex justify-center items-center gap-2">
            <Phone size={18} />
            <span>+91 7877349895</span>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Mail size={18} />
            <span>info@giyanshglobalservices.com</span>
          </div>

          <div className="flex justify-center items-center gap-2">
            <MapPin size={18} />
            <span>India</span>
          </div>

        </div>

        <hr className="my-6 border-blue-700" />

        <p className="text-sm text-blue-200">
          © {new Date().getFullYear()} GIYANSH GLOBAL SERVICES. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}