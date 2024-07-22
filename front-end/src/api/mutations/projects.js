import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../client";

async function regenerateApiKeyAndSecret(projectId) {
  const { data: result } = await client.get(
    `/projects/${projectId}/keys/regenerate`,
  );
  return result.data;
}

async function updateProjectName({ projectId, projectName }) {
  const { data: result } = await client.patch(`/projects/${projectId}/name`, {
    name: projectName,
  });
  return result.data;
}

async function createProject(projectName) {
  const { data: result } = await client.post("/projects", {
    name: projectName,
  });
  return result.data;
}

async function deleteProject(projectId) {
  const { data: result } = await client.delete(`/projects/${projectId}`);
  return result.data;
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryClient: ["projects"],
      });
    },
  });
}
export function useCreateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });
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
