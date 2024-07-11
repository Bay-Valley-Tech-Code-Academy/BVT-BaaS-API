import { useQuery } from "@tanstack/react-query";
import client from "../client";

const checkAuth = async () => {
  const { data: result } = await client.get("/organizations/auth/self");
  return result.data;
};

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: checkAuth,
    retry: false,
  });
};
