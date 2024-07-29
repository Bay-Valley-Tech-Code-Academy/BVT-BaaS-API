import { useQuery } from "@tanstack/react-query";
import client from "../client";

const getAudit = async () => {
  const { data: result } = await client.get("/audits");

  return result.data;
};

export const useAudit = () => {
  return useQuery({ queryKey: ["audits"], queryFn: getAudit });
};
