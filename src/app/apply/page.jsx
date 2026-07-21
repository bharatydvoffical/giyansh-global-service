"use client";

import { useState } from "react";
import Link from "next/link";

export default function ApplyPage() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",
    education: "",
    address: "",
    aadhar: "",
    pan: "",
  });
  const [agreed, setAgreed] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please confirm all information is correct before submitting.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xldejbda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Submission failed. Please try again.");
        return;
      }

      alert("Application Submitted Successfully!");
      setData({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        mobile: "",
        email: "",
        education: "",
        address: "",
        aadhar: "",
        pan: "",
      });
      setAgreed(false);
    } catch (error) {
      console.error(error);
      alert("Unable to submit application. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold">🏦 Bank Career Portal</h1>
              <p className="mt-2 text-blue-100">Apply for your dream banking career.</p>
            </div>
            <Link
              href="/"
              className="inline-block rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-white transition hover:bg-white/20"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <form onSubmit={submitHandler} className="p-8 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-800">First Name</label>
            <input
              name="firstName"
              value={data.firstName}
              onChange={changeHandler}
              className="w-full mt-2 input-dark"
              placeholder="Enter details"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">Last Name</label>
            <input
              name="lastName"
              value={data.lastName}
              onChange={changeHandler}
              className="w-full mt-2 input-dark"
              placeholder="Enter details"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={data.dob}
              onChange={changeHandler}
              className="w-full mt-2 input-dark"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">Gender</label>
            <select
              name="gender"
              value={data.gender}
              onChange={changeHandler}
              className="w-full mt-2 input-dark"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">Mobile Number</label>
            <input
              name="mobile"
              value={data.mobile}
              onChange={changeHandler}
              placeholder="Enter details"
              className="w-full mt-2 input-dark"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">Email Address</label>
            <input
              name="email"
              type="email"
              value={data.email}
              onChange={changeHandler}
              placeholder="Enter details"
              className="w-full mt-2 input-dark"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">Highest Education</label>
            <select
              name="education"
              value={data.education}
              onChange={changeHandler}
              className="w-full mt-2 input-dark"
            >
              <option value="">Select Education</option>
              <option value="12th">12th</option>
              <option value="Diploma">Diploma</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MBA">MBA</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">Upload Resume</label>
            <input
              type="file"
              name="resume"
              className="w-full mt-2 text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-blue-100 file:px-4 file:py-2 file:text-blue-700"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">Passport Photo</label>
            <input
              type="file"
              name="photo"
              className="w-full mt-2 text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-blue-100 file:px-4 file:py-2 file:text-blue-700"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">Aadhar Number</label>
            <input
              name="aadhar"
              value={data.aadhar}
              onChange={changeHandler}
              placeholder="Enter details"
              className="w-full mt-2 input-dark"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">PAN Number</label>
            <input
              name="pan"
              value={data.pan}
              onChange={changeHandler}
              placeholder="Enter details"
              className="w-full mt-2 input-dark"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-800">Address</label>
            <textarea
              name="address"
              value={data.address}
              onChange={changeHandler}
              rows="4"
              className="w-full mt-2 input-dark"
              placeholder="Enter details"
            />
          </div>

          <div className="md:col-span-2 flex items-start gap-3">
            <input
              id="confirm"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-2 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="confirm" className="text-sm text-slate-700">
              I confirm all information is correct.
            </label>
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl text-lg font-bold hover:scale-105 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
