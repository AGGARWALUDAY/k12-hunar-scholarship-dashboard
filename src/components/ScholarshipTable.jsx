function ScholarshipTable({ scholarships, onStatusChange, onEdit, onPreview }) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-sm text-white">
            <tr>
              <th className="px-5 py-4">Scholarship</th>
              <th className="px-5 py-4">State</th>
              <th className="px-5 py-4">Class</th>
              <th className="px-5 py-4">Deadline</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {scholarships.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-5 py-12 text-center text-slate-500"
                >
                  No scholarships found for this state.
                </td>
              </tr>
            ) : (
              scholarships.map((scholarship) => (
                <tr
                  key={scholarship.id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-5 py-4 font-medium">{scholarship.name}</td>

                  <td className="px-5 py-4">{scholarship.state}</td>

                  <td className="px-5 py-4">{scholarship.applicableClass}</td>

                  <td className="px-5 py-4">{scholarship.deadline}</td>

                  <td className="px-5 py-4">
                    <select
                      value={scholarship.status}
                      onChange={(e) =>
                        onStatusChange(scholarship.id, e.target.value)
                      }
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                    >
                      <option value="Published">Published</option>
                      <option value="Draft">Draft</option>
                      <option value="Expired">Expired</option>
                    </select>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => onEdit(scholarship)}
                        className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => onPreview(scholarship)}
                        className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
                      >
                        Preview
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScholarshipTable;
