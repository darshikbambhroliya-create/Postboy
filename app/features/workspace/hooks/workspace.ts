import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateWorkSpace, getWorkspace, getWorkspaceById } from "../action";

export default function useWorkspace() {
  return useQuery({
    queryKey: ["workspace"],
    queryFn: async () => getWorkspace(),
  });
}
export function useCreateWorkspace() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (name: string) => await CreateWorkSpace(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
    },
  });
}
export function useGetWorkspace(id: string) {
  return useQuery({
    queryKey: ["workspace", id],
    queryFn: async () => await getWorkspaceById(id),
    enabled: Boolean(id),
  });
}
