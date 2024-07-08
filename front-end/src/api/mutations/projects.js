import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../client";

async function regenerateApiKeyAndSecret(projectId) {
  const { data: result } = await client.get(
    `/projects/${projectId}/keys/regenerate`,
  );
  return result.data;
}

async function updateProjectName({ projectId, projectName }) {
  const { data: result } = await await client.patch(
    `/projects/${projectId}/name`,
    { name: projectName },
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

export function useUpdateProjectName() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProjectName,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });
}
