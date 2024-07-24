import { useQuery } from "@tanstack/react-query";
import client from "../client";

const getAccount = async () => {
  const { data: result } = await client.get("/account");

  return result.data;
};

export const useAccount = () => {
  return useQuery({ queryKey: ["account"], queryFn: getAccount });
};
