import PageHeader from "../components/PageHeader";
import Inactive from "../components/Inactive";
import Active from "../components/Active";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { usePagination } from "../hooks/usePagination";
import dummyData from "../assets/dummyData";

export default function Users() {
  const [input, setInput] = useState("");

  // Filtering users
  const filteredUsers = dummyData.filter((user) =>
    user.email.toLowerCase().includes(input),
  );
  const handleChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput.toLowerCase());
  };

  // Setting up pagination with Alan's custom pagination hook
  const {
    currPageItems,
    nextPage,
    prevPage,
    currPage,
    countPerPage,
    hasNext,
    hasPrev,
    numPages,
  } = usePagination({
    data: filteredUsers,
    itemsPerPage: 9,
  });

  return (
    <div className="flex-col">
      <PageHeader
        path="Dashboard / Users"
        header="Users"
        handleChange={handleChange}
      />

      <div className="mt-10 w-full overflow-y-auto rounded-2xl border-[1px] bg-white">
        <table className="h-4/5 w-full table-auto">
          <thead>
            <tr className="rounded-xl bg-gray-100 text-left">
              <th className="rounded-tl-xl p-2 pl-5 pr-5 font-medium text-gray-700">
                Email Address
              </th>
              <th className="flex p-2 pl-5 pr-5 font-medium text-gray-700">
                Status/Toggle
              </th>
              <th className="p-2 pl-5 pr-5 font-medium text-gray-700">
                Last Signed In
              </th>
              <th className="p-2 pl-5 pr-5 font-medium text-gray-700">
                Joined
              </th>
              <th className="rounded-tr-xl p-2 pl-5 pr-5 font-medium text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {currPageItems.map((obj, index) => {
              return (
                <tr className="border-b border-gray-300 text-left" key={index}>
                  <td className="p-5">{obj.email}</td>
                  <td className="flex p-5">
                    <button>{obj.status ? <Active /> : <Inactive />}</button>
                  </td>
                  <td className="p-5 font-light">{obj.lastSignedIn}</td>
                  <td className="p-5 font-light">{obj.joined}</td>
                  <td className="p-5 font-light">
                    <button className="hover:text-red-500">
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between justify-self-end p-5">
        <div>
          <p>
            Page {currPage} of {numPages}
          </p>
        </div>
        <div className="flex justify-around">
          <button
            onClick={prevPage}
            className={`flex w-[90px] justify-center rounded-lg p-1 align-middle font-medium shadow ${!hasPrev ? "disabled cursor-default bg-transparent shadow-transparent" : "bg-white hover:shadow active:bg-gray-200"}`}
          >
            Prev
          </button>
          <button
            onClick={nextPage}
            className={`ml-3 flex w-[90px] justify-center rounded-lg p-1 align-middle font-medium shadow ${!hasNext ? "disabled cursor-default bg-transparent shadow-transparent" : "bg-white hover:shadow active:bg-gray-200"}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
