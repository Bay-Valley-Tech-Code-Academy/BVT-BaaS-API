import { useQuery } from "@tanstack/react-query";
import client from "../client";

const getProjectUsers = async () => {
  const { data: result } = await client.get("/projects/users");

  return result.data;
};

const getProjects = async () => {
  const { data: result } = await client.get("/projects");

  return result.data;
};

export const useProjects = () => {
  return useQuery({ queryKey: ["projects"], queryFn: getProjects });
};

export const useProjectUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: getProjectUsers });
};
