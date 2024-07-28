import { Loader, Plus } from "lucide-react";
import { useProjects } from "../api/queries";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { usePagination } from "../hooks/usePagination";
import { useState } from "react";
import { CreateProjectModal } from "../components/Modals";
import { useCreateProject } from "../api/mutations";
import EmptyState from "../components/EmptyState";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();
  const [input, setInput] = useState("");
  const { mutate, isPending } = useCreateProject();
  const [openModal, setOpenModal] = useState(false);

  // Filtering projects
  const filteredProjects = projects
    ? projects.filter((project) => project.name.toLowerCase().includes(input))
    : [];
  const handleChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput.toLowerCase());
  };

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
    data: filteredProjects,
    itemsPerPage: 9,
  });

  function handleOpenChange() {
    setOpenModal(!openModal);
  }

  function handleCreateProject(projectName) {
    mutate(projectName, {
      onSuccess: handleOpenChange,
    });
  }

  return (
    <div className="relative h-full">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <PageHeader
            path="Dashboard / Projects"
            header="Projects"
            handleChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <button
          onClick={handleOpenChange}
          className="flex items-center gap-1 rounded bg-purple-500 p-2 text-white hover:bg-purple-600"
        >
          <Plus className="size-4" />
          Create Project
        </button>
      </div>
      <CreateProjectModal
        isPending={isPending}
        onCreateProject={handleCreateProject}
        onOpenChange={handleOpenChange}
        open={openModal}
      />
      {isLoading && <LoadingSpinner />}
      {!isLoading && projects.length > 0 ? (
        <ProjectView
          projects={currPageItems}
          currPage={currPage}
          numPages={numPages}
          hasPrev={hasPrev}
          hasNext={hasNext}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      ) : (
        <EmptyState
          heading="No Projects"
          text="No projects to show you right now"
        />
      )}
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Loader className="animate-spin" size={48} />
    </div>
  );
}

function ProjectView({
  projects,
  currPage,
  numPages,
  hasPrev,
  prevPage,
  nextPage,
  hasNext,
}) {
  return (
    <>
      <div className="relative mt-10 grid grid-cols-3 gap-6">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.project_id}
              id={project.project_id}
              name={project.name}
              apiKey={project.api_key}
              users={project.users}
              maxUsers={project.max_users}
            />
          );
        })}
      </div>
      <div className="flex justify-between p-5">
        <div className="flex items-center">
          <p>
            Page {currPage} of {numPages}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            disabled={!hasPrev}
            onClick={prevPage}
            className={`flex w-[90px] justify-center rounded-lg p-1 align-middle font-medium shadow ${!hasPrev ? "disabled cursor-default bg-transparent shadow-transparent" : "bg-white hover:shadow active:bg-gray-200"}`}
          >
            Prev
          </button>
          <button
            disabled={!hasNext}
            onClick={nextPage}
            className={`flex w-[90px] justify-center rounded-lg p-1 align-middle font-medium shadow ${!hasNext ? "disabled cursor-default bg-transparent shadow-transparent" : "bg-white hover:shadow active:bg-gray-200"}`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
