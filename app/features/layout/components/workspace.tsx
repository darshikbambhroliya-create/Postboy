"use client";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { Loader, Plus, User } from "lucide-react";
import { useEffect, useState } from "react";

import useWorkspace from "../../workspace/hooks/workspace";
import { useWorkspaceStore } from "../store";
import CreateWorkspace from "./create-workspace";

const WorkSpace = () => {
  const { data: workspaces, isLoading } = useWorkspace();

  const { selectedWorkspace, setSelectWorkspace } = useWorkspaceStore();

  const [isOpenModel, setIsOpenModel] = useState(false);

  useEffect(() => {
    if (
      workspaces?.success &&
      workspaces.data.length > 0 &&
      !selectedWorkspace
    ) {
      setSelectWorkspace(workspaces.data[0]);
    }
  }, [workspaces, selectedWorkspace, setSelectWorkspace]);

  if (isLoading) {
    return <Loader className="size-4 animate-spin text-indigo-400" />;
  }

  if (!workspaces?.success) {
    return <p className="text-sm text-red-400">Failed to load workspaces</p>;
  }

  if (workspaces.data.length === 0) {
    return <p className="text-sm text-muted-foreground">No workspaces found</p>;
  }

  return (
    <>
      <Hint label="Change Workspace">
        <Select
          value={selectedWorkspace?.id ?? ""}
          onValueChange={(id) => {
            const ws = workspaces.data.find((w) => w.id === id);
            if (ws) setSelectWorkspace(ws);
          }}>
          <SelectTrigger
            className="
              h-10 w-55
              border border-indigo-400/40
              bg-indigo-500/10
              px-3
              text-indigo-100
              shadow-[0_0_12px_rgba(99,102,241,0.12)]
              transition-all
              hover:border-indigo-400/70
              hover:bg-indigo-500/15
              focus:ring-2
              focus:ring-indigo-400/30
              focus:ring-offset-0
              [&>svg]:text-indigo-400
            ">
            <User className="size-4 shrink-0 text-indigo-400" />

            <span className="truncate">
              {selectedWorkspace?.name ?? "Select Workspace"}
            </span>
          </SelectTrigger>

          <SelectContent
            className="
              w-55
              border border-indigo-400/30
              bg-[#111827]
              p-1.5
              shadow-2xl
              shadow-indigo-950/40
            ">
            <div className="px-2 py-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                My Workspaces
              </p>
            </div>

            {workspaces.data.map((ws) => (
              <SelectItem
                key={ws.id}
                value={ws.id}
                className="
                  cursor-pointer
                  rounded-md
                  px-3 py-2
                  text-sm
                  text-slate-300
                  outline-none
                  transition-colors
                  focus:bg-indigo-500/15
                  focus:text-indigo-300
                ">
                {ws.name}
              </SelectItem>
            ))}

            <Separator className="my-2 bg-indigo-400/20" />

            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-xs font-medium text-slate-400">
                Manage Workspaces
              </span>

              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={() => setIsOpenModel(true)}
                className="
                  size-7
                  rounded-md
                  text-indigo-400
                  transition-all
                  hover:bg-indigo-500/15
                  hover:text-indigo-300
                ">
                <Plus className="size-4" />
              </Button>
            </div>
          </SelectContent>
        </Select>
      </Hint>

      <CreateWorkspace
        isModelOpen={isOpenModel}
        setIsModelOpen={setIsOpenModel}
      />
    </>
  );
};

export default WorkSpace;
