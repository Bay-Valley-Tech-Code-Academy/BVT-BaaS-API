import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../client";

async function toggleDisableLoginFlag({ projectId, userId }) {
  const { data: result } = await client.patch(
    `/projects/${projectId}/users/${userId}/toggle-disable-login`,
  );
  return result.data;
}

async function deleteUser({ userId, projectId }) {
  const { data: result } = await client.delete(
    `/users/${userId}/projects/${projectId}`,
  );
  return result.data;
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryClient: ["users"],
      });
    },
  });
}
``;
export function usetoggleDisableLoginFlag() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: toggleDisableLoginFlag,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryClient: ["users"],
      });
    },
  });
}
