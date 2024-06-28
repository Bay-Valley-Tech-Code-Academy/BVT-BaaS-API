import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { usePagination } from "../hooks/usePagination";
import { useState } from "react";

export default function Projects() {
  const [input, setInput] = useState("");

  const dummyProjects = [
    { name: "Leaplist", apiKey: "2034304980395", secret: "23849359237509" },
    { name: "Mary's Pizza", apiKey: "375039752397", secret: "49793487082" },
    { name: "ValleyNews", apiKey: "23857928365", secret: "203958039572" },
    { name: "Tenzies", apiKey: "03257023975203", secret: "037509573597" },
    { name: "Car App", apiKey: "097523875035", secret: "57382752835" },
    {
      name: "Sentiment Analysis",
      apiKey: "98326982365",
      secret: "329520352235",
    },
    { name: "Example App", apiKey: "095203572359", secret: "879879387523" },
    { name: "App 1", apiKey: "07203875203857", secret: "08732983759285" },
    { name: "App 2", apiKey: "08759283759283", secret: "0977230597235" },
    { name: "App 3", apiKey: "09738723857234", secret: "0872398572395" },
    { name: "App 4", apiKey: "0237502937509", secret: "0709809835235" },
    { name: "App 5", apiKey: "07203875203857", secret: "08732983759285" },
    { name: "App 6", apiKey: "08759283759283", secret: "0977230597235" },
    { name: "App 7", apiKey: "09738723857234", secret: "0872398572395" },
    { name: "App 8", apiKey: "0237502937509", secret: "0709809835235" },
  ];

  // Filtering projects
  const filteredProjects = dummyProjects.filter((project) =>
    project.name.toLowerCase().includes(input),
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
    data: filteredProjects,
    itemsPerPage: 9,
  });

  return (
    <>
      <PageHeader
        path="Dashboard / Projects"
        header="Projects"
        handleChange={handleChange}
      />

      <div className="grid grid-cols-3 gap-6">
        {currPageItems.map((project) => {
          return (
            <ProjectCard
              name={project.name}
              apiKey={project.apiKey}
              secret={project.secret}
            />
          );
        })}
      </div>
      <div className="justify-self-end">
        <div className="flex w-full justify-between justify-self-end p-5">
          <div className="flex items-center">
            <p>
              Page {currPage} of {numPages}
            </p>
          </div>
          <div className="flex justify-around">
            <button
              onClick={prevPage}
              className={`flex w-[90px] justify-center rounded-lg bg-white p-1 align-middle font-medium shadow ${!hasPrev ? "disabled cursor-default bg-transparent shadow-transparent" : "hover:shadow active:bg-gray-200"}`}
            >
              Prev
            </button>
            <button
              onClick={nextPage}
              className={`ml-3 flex w-[90px] justify-center rounded-lg bg-white p-1 align-middle font-medium shadow ${!hasNext ? "disabled cursor-default bg-transparent shadow-transparent" : "hover:shadow active:bg-gray-200"}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
