import EmptyStateImg from "../assets/empty-state.svg";
export default function EmptyState({ heading, text }) {
  return (
    <div className="absolute inset-0 left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-4 rounded bg-white shadow">
      <img src={EmptyStateImg} className="size-60" />
      <div className="space-y-1.5 text-center text-gray-700">
        <h3 className="text-lg font-semibold">{heading}</h3>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
}
