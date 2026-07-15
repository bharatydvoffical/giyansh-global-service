export default function Benefits() {
  return (
    <section id="benefits" className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-xl">Career Growth</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Gain the skills employers want and move confidently into high-demand roles.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-xl">Practical Learning</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Learn through projects, not just theory.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-xl">Support</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Get help with admissions, training, and job placement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

