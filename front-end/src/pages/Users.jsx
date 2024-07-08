import PageHeader from "../components/PageHeader";
import Inactive from "../components/Inactive";
import Active from "../components/Active";
import { Loader, Trash2 } from "lucide-react";
import { useState } from "react";
import { usePagination } from "../hooks/usePagination";

import { useUsers } from "../api/queries";
import moment from "moment/moment";
import { usetoggleDisableLoginFlag } from "../api/mutations";
import toast from "react-hot-toast";
import ToastMessage from "../components/ToastMessage";

export default function Users() {
  const [input, setInput] = useState("");
  const { data: users, isLoading } = useUsers();
  const { mutate, isPending } = usetoggleDisableLoginFlag();

  // Filtering users
  const filteredUsers = users
    ? users.filter((user) => user.email.toLowerCase().includes(input))
    : [];
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
    <div className="relative h-full flex-col">
      <PageHeader
        path="Dashboard / Users"
        header="Users"
        handleChange={handleChange}
      />
      {isLoading && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Loader className="animate-spin" size={48} />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="mt-10 w-full overflow-y-auto rounded-2xl border-[1px] bg-white">
            <table className="h-4/5 w-full table-auto">
              <thead>
                <tr className="rounded-xl bg-gray-100 text-left">
                  <th className="rounded-tl-xl p-2 pl-4 pr-5 font-medium text-gray-700">
                    Email Address
                  </th>
                  <th className="flex p-2 pl-4 pr-5 font-medium text-gray-700">
                    Status/Toggle
                  </th>
                  <th className="p-2 pl-4 pr-5 font-medium text-gray-700">
                    Last Signed In
                  </th>
                  <th className="p-2 pl-4 pr-5 font-medium text-gray-700">
                    Joined
                  </th>
                  <th className="rounded-tr-xl p-2 pl-4 pr-5 font-medium text-gray-700"></th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {currPageItems.map((obj) => {
                  return (
                    <tr
                      className="border-b border-gray-300 text-left"
                      key={obj.user_id}
                    >
                      <td className="p-4 text-base">{obj.email}</td>
                      <td className="p-4">
                        <button
                          onClick={() => {
                            mutate(
                              { projectId: 1, userId: obj.user_id },
                              {
                                onSuccess: () => {
                                  toast.custom((t) => (
                                    <ToastMessage
                                      t={t}
                                      message={`User has been successfully ${obj.disable_login_flag ? "enabled" : "disabled"}`}
                                      variant="success"
                                    />
                                  ));
                                },
                                onError: () => {
                                  toast((t) => (
                                    <ToastMessage
                                      t={t}
                                      message="Failed to disable user account. Please try again."
                                      variant="error"
                                    />
                                  ));
                                },
                              },
                            );
                          }}
                        >
                          {obj.disable_login_flag ? <Inactive /> : <Active />}
                        </button>
                      </td>
                      <td className="p-4 font-light">
                        <div className="flex flex-col gap-1 text-sm">
                          <span>
                            {obj.last_signed_in
                              ? moment(obj.last_signed_in).format("MM/DD/YYYY")
                              : moment(obj.created_at).format("MM/DD/YYYY")}
                          </span>
                          <span>
                            {obj.last_signed_in
                              ? moment(obj.last_signed_in).format("hh:mm:ss A")
                              : moment(obj.created_at).format(" hh:mm:ss A")}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm font-light">
                        {moment(obj.created_at).format("MM/DD/YYYY")}
                      </td>
                      <td className="p-4 font-light">
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
        </>
      )}
    </div>
  );
}
