import { useState } from "react";
function ScholarshipForm({ scholarship, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    id: scholarship?.id || null,
    name: scholarship?.name || "",
    state: scholarship?.state || "",
    provider: scholarship?.provider || "",
    applicableClass: scholarship?.applicableClass || "",
    eligibility: scholarship?.eligibility || "",
    benefit: scholarship?.benefit || "",
    deadline: scholarship?.deadline || "",
    applicationLink: scholarship?.applicationLink || "",
    status: scholarship?.status || "Draft",
  });
  return (
    <div className="fixed inset-0 z-50 flex iems-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {scholarship ? "Edit Scholarship" : "Add Scholarship"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Enter scholarship details below.
            </p>
          </div>

          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (
              !formData.name ||
              !formData.state ||
              !formData.provider ||
              !formData.applicableClass ||
              !formData.eligibility ||
              !formData.benefit ||
              !formData.deadline ||
              !formData.applicationLink
            ) {
              alert("Please fill in all required fields.");
              return;
            }
            {/* Validate the application link */}
            try {
              const url = new URL(formData.applicationLink);

              if (url.protocol !== "http:" && url.protocol !== "https:") {
                throw new Error("Invalid protocol");
              }

              if (!url.hostname.includes(".")) {
                throw new Error("Invalid domain");
              }

              const domainParts = url.hostname.split(".");
              const extension = domainParts[domainParts.length - 1];

              if (extension.length < 2 || extension.length > 10) {
                throw new Error("Invalid domain extension");
              }
            } catch {
              alert("Please enter a valid application URL.");
              return;
            }

            onSave(formData);
          }}
          className="space-y-5"
        >
          {/* Scholarship Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Scholarship Name
            </label>

            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              placeholder="Enter scholarship name"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-slate-500"
            />
          </div>

          {/* State */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              State
            </label>

            <select
              value={formData.state}
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  state: e.target.value,
                })
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-slate-500"
            >
              <option value="">Select state</option>
              <option value="Bihar">Bihar</option>
              <option value="Haryana">Haryana</option>
              <option value="Jharkhand">Jharkhand</option>
            </select>
          </div>

          {/* Provider */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Provider Name
            </label>

            <input
              type="text"
              required
              value={formData.provider}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  provider: e.target.value,
                })
              }
              placeholder="Enter provider name"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-slate-500"
            />
          </div>

          {/* Applicable Class */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Applicable Class
            </label>

            <select
              value={formData.applicableClass}
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  applicableClass: e.target.value,
                })
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-slate-500"
            >
              {" "}
              <option value="">Select class</option>
              <option value="Class 1-10">Class 1-10</option>
              <option value="Class 9-10">Class 9-10</option>
              <option value="Class 11-12">Class 11-12</option>
            </select>
          </div>

          {/* Eligibility */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Eligibility Criteria
            </label>

            <textarea
              rows="3"
              required
              value={formData.eligibility}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  eligibility: e.target.value,
                })
              }
              placeholder="Enter eligibility criteria"
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-slate-500"
            />
          </div>

          {/* Benefit */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Scholarship Amount / Benefit
            </label>

            <input
              type="text"
              required
              value={formData.benefit}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  benefit: e.target.value,
                })
              }
              placeholder="Example: ₹10,000 financial assistance"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-slate-500"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Application Deadline
            </label>
            <input
              type="text"
              required
              value={formData.deadline}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  deadline: e.target.value,
                })
              }
              placeholder="Example: 30 Sep 2026"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-slate-500"
            />{" "}
          </div>

          {/* Application Link */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Official Application Link
            </label>

            <input
              type="url"
              required
              value={formData.applicationLink}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  applicationLink: e.target.value,
                })
              }
              placeholder="https://example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-slate-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Status
            </label>

            <select
              value={formData.status}
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value,
                })
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-slate-500"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
              <option value="Expired">Expired</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg border border-slate-300 px-5 py-2.5 font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-slate-900 px-5 py-2.5 font-medium text-white hover:bg-slate-800"
            >
              {scholarship ? "Update Scholarship" : "Add Scholarship"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScholarshipForm;
