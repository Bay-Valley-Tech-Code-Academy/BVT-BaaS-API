import { Eye, EyeOff } from "lucide-react";
import { DeleteModal, RefreshModal, EditModal } from "./Modals";
import { useState } from "react";

export default function ProjectCard(props) {
  console.log(props);
  const [showAPI, setShowAPI] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  function toggleShowAPI() {
    setShowAPI(!showAPI);
  }

  function toggleShowSecret() {
    setShowSecret(!showSecret);
  }

  function generateStars(string) {
    string = toString(string);
    let stars = "";
    for (let i = 0; i < string.length; i++) {
      stars = stars.concat("*");
    }
    return stars;
  }

  return (
    <div className="min-w-[280px] flex-col rounded-lg bg-white p-6 shadow">
      <div className="mb-4 flex justify-between">
        <div className="flex">
          <h1 className="text-xl font-bold text-slate-700">{props.name}</h1>
        </div>
        <div className="flex items-center">
          <EditModal projectName={props.name} />
          <RefreshModal projectName={props.name} />
          <DeleteModal projectName={props.name} />
        </div>
      </div>
      <hr className="mb-6"></hr>

      <div className="mb-8 flex justify-between">
        <div className="flex">
          <h1 className="w-20 text-slate-700">api-key:</h1>
          <p className="ml-2 font-light">
            {showAPI ? props.apiKey : generateStars(props.apiKey.length)}
          </p>
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

      <div className="mb-2 flex justify-between">
        <div className="flex">
          <h1 className="w-20 text-slate-700">secret:</h1>
          <p className="ml-2 font-light">
            {showSecret ? props.secret : generateStars(props.secret.length)}
          </p>
        </div>
        <button
          className="ml-3"
          title={showSecret ? "Hide" : "Show"}
          onClick={toggleShowSecret}
        >
          {showSecret ? (
            <EyeOff className="size-5 hover:text-purple-700" />
          ) : (
            <Eye className="size-5 hover:text-purple-700" />
          )}
        </button>
      </div>
    </div>
  );
}
