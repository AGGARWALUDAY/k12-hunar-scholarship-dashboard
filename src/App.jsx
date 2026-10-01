import { useState } from "react";
import { initialScholarships } from "./data/scholarships";
import ScholarshipForm from "./components/ScholarshipForm";
import PreviewModal from "./components/PreviewModal";
import SummaryCards from "./components/SummaryCards";
import ScholarshipTable from "./components/ScholarshipTable";
import FilterBar from "./components/FilterBar";
function App() {
  const [scholarships, setScholarships] = useState(initialScholarships);
  const [selectedState, setSelectedState] = useState("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingScholarship, setEditingScholarship] = useState(null);
  const [previewScholarship, setPreviewScholarship] = useState(null);
  const total = scholarships.length;
  const handleAddScholarship = (formData) => {
    const newScholarship = {
      id: Date.now(),
      ...formData,
    };

    setScholarships((currentScholarships) => [
      ...currentScholarships,
      newScholarship,
    ]);

    setIsFormOpen(false);
    setEditingScholarship(null);
  };

  const handleEditScholarship = (formData) => {
    setScholarships((currentScholarships) =>
      currentScholarships.map((scholarship) =>
        scholarship.id === formData.id ? formData : scholarship,
      ),
    );

    setEditingScholarship(null);
    setIsFormOpen(false);
  };

  const published = scholarships.filter(
    (scholarship) => scholarship.status === "Published",
  ).length;

  const draft = scholarships.filter(
    (scholarship) => scholarship.status === "Draft",
  ).length;

  const expired = scholarships.filter(
    (scholarship) => scholarship.status === "Expired",
  ).length;

  const filteredScholarships =
    selectedState === "All"
      ? scholarships
      : scholarships.filter(
          (scholarship) => scholarship.state === selectedState,
        );
  const handleStatusChange = (id, newStatus) => {
    setScholarships((currentScholarships) =>
      currentScholarships.map((scholarship) =>
        scholarship.id === id
          ? { ...scholarship, status: newStatus }
          : scholarship,
      ),
    );
  };
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Scholarship Dashboard
            </h1>
          </div>

          <button
            onClick={() => setIsFormOpen(true)}
            className="rounded-lg bg-slate-900 px-5 py-2.5 font-medium text-white hover:bg-slate-800"
          >
            + Add Scholarship
          </button>
        </div>

        <p className="mt-1 text-slate-500">Manage scholarship opportunities</p>
        {/* Summary cards */}
        <SummaryCards
          total={total}
          published={published}
          draft={draft}
          expired={expired}
        />
        {/* Filter */}
        <FilterBar
          selectedState={selectedState}
          onStateChange={setSelectedState}
        />
        {/* Table */}
        <ScholarshipTable
          scholarships={filteredScholarships}
          onStatusChange={handleStatusChange}
          onEdit={(scholarship) => {
            setEditingScholarship(scholarship);
            setIsFormOpen(true);
          }}
          onPreview={(scholarship) => setPreviewScholarship(scholarship)}
        />
      </div>
      {isFormOpen && (
        <ScholarshipForm
          scholarship={editingScholarship}
          onSave={
            editingScholarship ? handleEditScholarship : handleAddScholarship
          }
          onCancel={() => {
            setIsFormOpen(false);
            setEditingScholarship(null);
          }}
        />
      )}
      {previewScholarship && (
        <PreviewModal
          scholarship={previewScholarship}
          onClose={() => setPreviewScholarship(null)}
        />
      )}
    </div>
  );
}

export default App;
