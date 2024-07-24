import { Search } from "lucide-react";

export default function PageHeader(props) {
  console.log(props.searchValue);
  return (
    <div className="mb-4 flex justify-between">
      <div className="flex-col">
        <p className="font-light">{props.path}</p>
        <p className="text-2xl font-bold text-slate-700">{props.header}</p>
      </div>
      <div className="items-center justify-center self-end">
        <div className="relative text-gray-400 focus-within:text-gray-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="focus:shadow-outline p-1 focus:outline-none"
            >
              <Search />
            </button>
          </span>
          <input
            type="text"
            name="q"
            value={props.searchValue}
            disabled={props.disabled}
            className="w-[400px] rounded-xl py-2 pl-10 align-bottom text-sm focus:border-purple-700"
            placeholder="Search..."
            autoComplete="off"
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}
