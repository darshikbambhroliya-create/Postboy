"use client";

import Model from "@/components/ui/model";
import { useCreateWorkspace } from "../../workspace/hooks/workspace";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CreateWorkspace = ({
  isModelOpen,
  setIsModelOpen,
}: {
  isModelOpen: boolean;
  setIsModelOpen: (open: boolean) => void;
}) => {
  const [name, setName] = useState("");
  const { mutateAsync, isPending } = useCreateWorkspace();

  async function handleSubmit() {
    if (!name.trim()) return null;
    try {
      await mutateAsync(name);
      toast.success("workspace created");
      setName("");
      setIsModelOpen(false);
    } catch (error) {
      toast.error("failed to create workspace");
    }
  }
  return (
    <Model
      title="Add new WorkSpace"
      description="create new workspace"
      isOpen={isModelOpen}
      onClose={() => setIsModelOpen(false)}
      onSubmit={handleSubmit}
      submitText={isPending ? "creating..." : "Created workspace"}
      submitVariant="default">
      <div>
        <Input
          placeholder="enter workspace name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </Model>
  );
};

export default CreateWorkspace;
