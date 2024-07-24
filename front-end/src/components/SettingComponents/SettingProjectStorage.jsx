import { Flag } from "lucide-react";

export default function SettingsProjectStorage({ projects, maxProjects }) {
  const progress = Math.round((projects / maxProjects) * 100);
  return (
    <div>
      <div
        id="user-storage"
        className="mr-6 flex h-96 w-96 flex-col items-center justify-between rounded-2xl bg-white p-4"
      >
        <div className="flex flex-col items-center">
          <div
            id="cloud-check"
            className="relative mb-2 flex h-28 w-28 items-center justify-center rounded-full bg-dashboard-gray-100"
          >
            <Flag className="text-dashboard-purple-300" size={48} />
          </div>
          <h1 className="text-xl font-bold">Project Storage</h1>
          <p className="text-dashboard-gray-50">Supervise your project limit</p>
        </div>

        <div id="progress-bar" className="w-full">
          <div className="flex justify-between">
            <div>{projects}</div> <div>{maxProjects}</div>
          </div>
          <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-2.5 rounded-full bg-blue-600"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
