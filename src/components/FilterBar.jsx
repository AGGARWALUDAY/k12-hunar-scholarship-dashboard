function FilterBar({ selectedState, onStateChange }) {
  return (
    <div className="mt-8 rounded-xl bg-white p-4 shadow-sm">
      <label className="text-sm font-medium text-slate-700">
        Filter by State
      </label>

      <select
        value={selectedState}
        onChange={(e) => onStateChange(e.target.value)}
        className="mt-2 rounded-lg border border-slate-300 px-4 py-2"
      >
        <option value="All">All States</option>
        <option value="Bihar">Bihar</option>
        <option value="Haryana">Haryana</option>
        <option value="Jharkhand">Jharkhand</option>
      </select>
    </div>
  );
}

export default FilterBar;
