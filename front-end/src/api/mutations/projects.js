import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../client";

async function regenerateApiKeyAndSecret(projectId) {
  console.log(projectId);
  const { data: result } = await client.get(
    `/projects/${projectId}/keys/regenerate`,
  );
  return result.data;
}

export function useRegenerateApiKeyAndSecret() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: regenerateApiKeyAndSecret,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });
}
