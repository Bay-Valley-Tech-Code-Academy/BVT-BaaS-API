import { Check } from "lucide-react";

export default function ToastMessage({ t, message }) {
  return (
    <div
      className={`flex items-center gap-2 rounded border border-purple-500 bg-purple-100 px-6 py-4 text-sm font-semibold text-purple-900 shadow ${
        t.visible ? "animate-enter" : "animate-leave"
      }`}
    >
      <span className="grid size-5 place-content-center rounded bg-purple-300">
        <Check size={16} />
      </span>
      {message}
    </div>
  );
}
