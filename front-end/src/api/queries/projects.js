import { useQuery } from "@tanstack/react-query";
import client from "../client";

const getProjects = async () => {
  const { data: result } = await client.get("/projects");

  return result.data;
};

export const useProjects = () => {
  return useQuery({ queryKey: ["projects"], queryFn: getProjects });
};
