export default function Program() {
  return (
    <section id="program" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Program</h2>
        <p className="max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300">
          Our program combines live training, real projects, and mentorship. You learn industry-ready skills, practical tools, and how to present your work to employers.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Live Classes</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Interactive sessions with expert instructors and hands-on exercises.</p>
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Project Practice</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Build real-world projects that demonstrate your skills to employers.</p>
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Mentorship</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Get one-on-one guidance, feedback, and career planning support.</p>
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Placement Help</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Resume review, interview prep, and employer introductions.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

