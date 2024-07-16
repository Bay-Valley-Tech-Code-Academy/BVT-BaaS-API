import { useQuery } from "@tanstack/react-query";
import client from "../client";

const getUsers = async () => {
  const { data: result } = await client.get("/projects/users");

  return result.data;
};

export const useUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
};
