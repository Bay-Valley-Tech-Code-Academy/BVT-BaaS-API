import { RefreshCw, Pencil } from "lucide-react";

export default function ProjectCard(props) {
  return (
    <div className="min-w-[280px] flex-col rounded-lg bg-white p-6 shadow">
      <div className="mb-4 flex justify-between">
        <h1 className="text-xl font-bold text-slate-700">{props.name}</h1>
        <div className="flex items-center">
          <button className="ml-3">
            <Pencil className="size-6 hover:text-purple-700" />
          </button>
        </div>
      </div>
      <hr className="mb-6"></hr>

      <div className="mb-8 flex justify-between">
        <div className="flex">
          <h1 className="w-20 text-slate-700">api-key:</h1>
          <p className="ml-2 font-light">{props.apiKey}</p>
        </div>
        <button>
          <RefreshCw className="hover:text-red-500" />
        </button>
      </div>

      <div className="mb-2 flex justify-between">
        <div className="flex">
          <h1 className="w-20 text-slate-700">secret:</h1>
          <p className="ml-2 font-light">{props.secret}</p>
        </div>
        <button>
          <RefreshCw className="hover:text-red-500" />
        </button>
      </div>
    </div>
  );
}
