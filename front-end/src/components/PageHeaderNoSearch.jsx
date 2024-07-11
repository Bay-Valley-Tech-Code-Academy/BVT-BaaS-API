export default function PageHeaderNoSearch({ path, header }) {
  return (
    <div className="mb-4 flex justify-between">
      <div className="flex-col">
        <p className="font-light">{path}</p>
        <p className="text-2xl font-bold text-slate-700">{header}</p>
      </div>
    </div>
  );
}
