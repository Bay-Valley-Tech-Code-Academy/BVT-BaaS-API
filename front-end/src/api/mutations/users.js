import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../client";

async function toggleDisableLoginFlag({ projectId, userId }) {
  const { data: result } = await client.patch(
    `/projects/${projectId}/users/${userId}/toggle-disable-login`,
  );
  return result.data;
}

export function usetoggleDisableLoginFlag() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: toggleDisableLoginFlag,
    onMutate: async ({ userId }) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });
      const snapshot = queryClient.getQueryData(["users"]);
      queryClient.setQueryData(["users"], (previousUsers) =>
        previousUsers.map((user) => {
          if (user.user_id === userId) {
            return { ...user, disable_login_flag: !user.disable_login_flag };
          }
          return user;
        }),
      );

      return { snapshot };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["users"], context.snapshot);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });
}
