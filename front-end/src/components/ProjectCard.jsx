import { Eye, EyeOff, User } from "lucide-react";
import { DeleteModal, RefreshModal, EditModal } from "./Modals";
import { Asterisk } from "lucide-react";
import { useState } from "react";

export default function ProjectCard(props) {
  const [showAPI, setShowAPI] = useState(false);

  function toggleShowAPI() {
    setShowAPI(!showAPI);
  }

  return (
    <div className="min-w-[280px] flex-col rounded-lg bg-white p-6 shadow">
      <div className="mb-4 flex justify-between">
        <div className="flex">
          <h1 className="text-xl font-bold text-slate-700">{props.name}</h1>
        </div>
        <div className="flex items-center">
          <EditModal projectId={props.id} projectName={props.name} />
          <RefreshModal projectId={props.id} projectName={props.name} />
          <DeleteModal projectId={props.id} projectName={props.name} />
        </div>
      </div>
      <hr className="mb-4"></hr>
      <div className="mb-4 flex justify-between">
        <div className="flex items-center">
          <h1 className="w-20 text-slate-700">api-key:</h1>
          <div className="ml-2 font-light">
            {showAPI ? props.apiKey : <Asteriks count={props.apiKey.length} />}
          </div>
        </div>
        <button
          className="ml-3"
          title={showAPI ? "Hide" : "Show"}
          onClick={toggleShowAPI}
        >
          {showAPI ? (
            <EyeOff className="size-5 hover:text-purple-700" />
          ) : (
            <Eye className="size-5 hover:text-purple-700" />
          )}
        </button>
      </div>
      <UserProgress users={props.users} maxUsers={props.maxUsers} />
    </div>
  );
}

function Asteriks({ count }) {
  return (
    <div className="flex translate-y-[2px]">
      {new Array(count).fill().map((_, idx) => (
        <Asterisk key={idx} className="size-2 text-gray-400" />
      ))}
    </div>
  );
}

function UserProgress({ users, maxUsers }) {
  const progress = Math.round((users / maxUsers) * 100);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-purple-700">
          <User className="size-4 text-gray-700" />
        </span>
        <span className="text-sm font-medium text-gray-700">
          {users} out of {maxUsers}
        </span>
      </div>
      <div className="w-full rounded-full bg-gray-200">
        <div
          className="rounded-full bg-purple-600 p-0.5 text-center text-xs font-medium leading-none text-purple-100"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
