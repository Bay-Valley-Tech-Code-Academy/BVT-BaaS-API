import { Check } from "lucide-react";

export default function ToastMessage({ t, message, variant }) {
  return (
    <div
      className={`flex items-center gap-2 rounded border px-6 py-4 text-sm font-semibold shadow ${variant === "success" ? "border-green-500 bg-green-100 text-green-900" : "border-red-500 bg-red-100 text-red-900"} ${
        t.visible ? "animate-enter" : "animate-leave"
      }`}
    >
      <span
        className={`grid size-5 place-content-center rounded ${variant === "success" ? "bg-green-300" : "bg-red-300"}`}
      >
        <Check size={16} />
      </span>
      {message}
    </div>
  );
}
