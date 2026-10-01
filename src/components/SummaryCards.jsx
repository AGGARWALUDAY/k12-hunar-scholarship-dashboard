function SummaryCards({ total, published, draft, expired }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Total Scholarships</p>
        <p className="mt-2 text-3xl font-bold">{total}</p>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Published</p>
        <p className="mt-2 text-3xl font-bold text-green-600">
          {published}
        </p>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Draft</p>
        <p className="mt-2 text-3xl font-bold text-yellow-600">
          {draft}
        </p>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Expired</p>
        <p className="mt-2 text-3xl font-bold text-red-600">
          {expired}
        </p>
      </div>
    </div>
  );
}

export default SummaryCards;