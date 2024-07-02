import { useQuery } from "@tanstack/react-query";
import client from "../client";

const getProjects = async () => {
  const result = await client.get("/projects");
  const projects = result.data;

  return projects.data;
};

export const useProjects = () => {
  return useQuery({ queryKey: ["projects"], queryFn: getProjects });
};
