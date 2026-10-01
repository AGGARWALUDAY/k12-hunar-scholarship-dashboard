function PreviewModal({ scholarship, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Scholarship Preview
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Preview scholarship details
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Scholarship Name
            </p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {scholarship.name}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-slate-500">State</p>
              <p className="mt-1 text-slate-900">{scholarship.state}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Applicable Class
              </p>
              <p className="mt-1 text-slate-900">
                {scholarship.applicableClass}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">
              Provider Name
            </p>
            <p className="mt-1 text-slate-900">
              {scholarship.provider}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">
              Eligibility Criteria
            </p>
            <p className="mt-1 text-slate-900">
              {scholarship.eligibility}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">
              Scholarship Amount / Benefit
            </p>
            <p className="mt-1 text-slate-900">
              {scholarship.benefit}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Application Deadline
              </p>
              <p className="mt-1 text-slate-900">
                {scholarship.deadline}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Status
              </p>
              <p className="mt-1 text-slate-900">
                {scholarship.status}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">
              Official Application Link
            </p>

            <a
              href={scholarship.applicationLink}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-blue-600 hover:underline"
            >
              Visit Application Link
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-5 py-2.5 font-medium text-white hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewModal;