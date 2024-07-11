import { useMutation } from "@tanstack/react-query";
import client from "../client";

async function loginOrganization(body) {
  const { data: result } = await client.post(`/organizations/login`, body);
  return result.data;
}

export function useLoginOrganization() {
  return useMutation({
    mutationFn: loginOrganization,
    onSuccess: (data) => {
      config.headers.Authorization = data.accessToken;
    },
  });
}
