import { Loader } from "lucide-react";
import { useProjects } from "../api/queries";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { usePagination } from "../hooks/usePagination";
import { useState } from "react";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();
  const [input, setInput] = useState("");

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

  return (
    <div className="relative h-full">
      <PageHeader
        path="Dashboard / Projects"
        header="Projects"
        handleChange={handleChange}
        disabled={isLoading}
      />
      {isLoading && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Loader className="animate-spin" size={48} />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="relative mt-10 grid grid-cols-3 gap-6">
            {currPageItems.map((project) => {
              return (
                <ProjectCard
                  key={project.project_id}
                  id={project.project_id}
                  name={project.name}
                  apiKey={project.api_key}
                  secret={project.secret}
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
      )}
    </div>
  );
}
