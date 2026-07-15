export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Contact Us</h2>
        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Have questions or want to enroll? Reach out and we will help you get started with the right program.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Phone</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">+91 78773 49895</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">WhatsApp</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Chat with us at +91 78773 49895 anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

