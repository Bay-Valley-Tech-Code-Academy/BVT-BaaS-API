import PageHeader from "../components/PageHeader";
import Inactive from "../components/Inactive";
import Active from "../components/Active";
import { Loader, Trash2 } from "lucide-react";
import { useState } from "react";
import { usePagination } from "../hooks/usePagination";

import { useProjectUsers } from "../api/queries";
import moment from "moment/moment";
import { useDeleteUser, usetoggleDisableLoginFlag } from "../api/mutations";
import toast from "react-hot-toast";
import ToastMessage from "../components/ToastMessage";

import EmptyState from "../components/EmptyState";

export default function Users() {
  const [searchValue, setSearchValue] = useState("");
  const { data: projectUsers, isLoading } = useProjectUsers();

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleChange = (e) => {
    const newSearchValue = e.target.value;
    setSearchValue(newSearchValue.toLowerCase());
  };

  function handleProjectChange(nextProjectId) {
    setSelectedProjectId(+nextProjectId);
    setSearchValue("");
  }

  return (
    <div className="relative h-full flex-col">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <PageHeader
            searchValue={searchValue}
            path="Dashboard / Users"
            header="Users"
            handleChange={handleChange}
          />
        </div>
        <ProjectDropdown
          onProjectChange={handleProjectChange}
          projects={projectUsers || []}
        />
      </div>

      {isLoading && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Loader className="animate-spin" size={48} />
        </div>
      )}
      {!isLoading && projectUsers.length > 0 ? (
        <UsersTable
          projectUsers={projectUsers}
          selectedProjectId={selectedProjectId}
          searchValue={searchValue}
        />
      ) : (
        <EmptyState heading="No Users" text="No users to show you right now" />
      )}
    </div>
  );
}

function UsersTable({ projectUsers, selectedProjectId, searchValue }) {
  const { mutate: deleteUser, isPending: deleteUserPending } = useDeleteUser();
  const { mutate, isPending } = usetoggleDisableLoginFlag();

  const selectedUsers = (
    selectedProjectId
      ? projectUsers.filter(
          (project) => project.project_id === selectedProjectId,
        )
      : projectUsers
  ).reduce(
    (acc, project) =>
      acc.concat(
        project.users.map((user) => ({
          ...user,
          projectName: project.name,
          projectId: project.project_id,
        })),
      ),
    [],
  );

  const filteredUsers = searchValue
    ? selectedUsers.filter((user) =>
        user.email.toLowerCase().includes(searchValue),
      )
    : selectedUsers;

  const {
    currPageItems,
    nextPage,
    prevPage,
    currPage,
    hasNext,
    hasPrev,
    numPages,
  } = usePagination({
    data: filteredUsers,
    itemsPerPage: 9,
  });

  function handleUserDelete({ projectId, userId }) {
    deleteUser(
      { projectId, userId },
      {
        onSuccess: () => {
          toast.custom((t) => (
            <ToastMessage
              t={t}
              message={`User has been successfully deleted.`}
              variant="success"
            />
          ));
        },
        onError: () => {
          toast((t) => (
            <ToastMessage
              t={t}
              message="Failed to delete user. Please try again."
              variant="error"
            />
          ));
        },
      },
    );
  }
  function handleUserDisableToggle({ projectId, userId, loginStatus }) {
    mutate(
      { projectId, userId },
      {
        onSuccess: () => {
          toast.custom((t) => (
            <ToastMessage
              t={t}
              message={`User has been successfully ${loginStatus ? "enabled" : "disabled"}`}
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
  }
  return (
    <>
      <div className="mt-10 w-full overflow-y-auto rounded-2xl border-[1px] bg-white">
        <table className="h-4/5 w-full table-auto">
          <thead>
            <tr className="rounded-xl bg-gray-100 text-left">
              <th className="rounded-tl-xl p-2 pl-4 pr-5 font-medium text-gray-700">
                Project
              </th>
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
            {currPageItems.map((user) => {
              return (
                <tr
                  className="border-b border-gray-300 text-left"
                  key={user.user_id}
                >
                  <td className="p-4 text-base">{user.projectName}</td>
                  <td className="p-4 text-base">{user.email}</td>
                  <td className="p-4">
                    <button
                      disabled={isPending || deleteUserPending}
                      onClick={() =>
                        handleUserDisableToggle({
                          loginStatus: user.disable_login_flag,
                          userId: user.user_id,
                          projectId: user.projectId,
                        })
                      }
                    >
                      {user.disable_login_flag ? <Inactive /> : <Active />}
                    </button>
                  </td>
                  <td className="p-4 font-light">
                    <div className="flex flex-col gap-1 text-sm">
                      <span>
                        {user.last_signed_in
                          ? moment(user.last_signed_in).format("MM/DD/YYYY")
                          : moment(user.created_at).format("MM/DD/YYYY")}
                      </span>
                      <span>
                        {user.last_signed_in
                          ? moment(user.last_signed_in).format("hh:mm:ss A")
                          : moment(user.created_at).format(" hh:mm:ss A")}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-light">
                    {moment(user.created_at).format("MM/DD/YYYY")}
                  </td>
                  <td className="p-4 font-light">
                    <button
                      onClick={() =>
                        handleUserDelete({
                          userId: user.user_id,
                          projectId: user.projectId,
                        })
                      }
                      disabled={isPending || deleteUserPending}
                      className="hover:text-red-500"
                    >
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
  );
}

function ProjectDropdown({ projects, onProjectChange }) {
  return (
    <form className="max-w-sm">
      <select
        onChange={(e) => onProjectChange(e.target.value)}
        id="projects"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option value={null} defaultChecked>
          Select Project{" "}
        </option>
        {projects.map((project) => (
          <option key={project.project_id} value={project.project_id}>
            {project.name}
          </option>
        ))}
      </select>
    </form>
  );
}
