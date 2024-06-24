export default function PageHeaderNoSearch(props) {
  return (
    <div className="mb-4 flex justify-between">
      <div className="flex-col">
        <p className="font-light">{props.path}</p>
        <p className="text-2xl font-bold">{props.header}</p>
      </div>
    </div>
  );
}
