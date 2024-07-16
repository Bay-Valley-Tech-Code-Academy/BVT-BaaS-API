import { Loader } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="flex h-full items-center justify-center">
      <Loader size={48} className="animate-spin text-gray-700" />
    </div>
  );
}
