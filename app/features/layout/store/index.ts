import { create } from "zustand";

type WorkSpace = {
  id: string;
  name: string;
};

interface WorkSpaceState {
  selectedWorkspace: WorkSpace | null;
  setSelectWorkspace: (workspace: WorkSpace) => void;
}

export const useWorkspaceStore = create<WorkSpaceState>((set) => ({
  selectedWorkspace: null,
  setSelectWorkspace: (workspace) => set({ selectedWorkspace: workspace }),
}));
