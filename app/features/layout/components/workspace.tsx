"use client";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import { Select, SelectTrigger } from "@/components/ui/select";
import { User } from "lucide-react";
import React from "react";

const WorkSpace = () => {
  return (
    <Hint label="Change Workspace">
      <Select>
        <Button className="border border-indigo-400 bg-indigo-400/10">
          <User className="size-4 text-indigo-400" />
          <span className="text-sm font-semibold text-indigo-400">
            personal workspace
          </span>
        </Button>
      </Select>
    </Hint>
  );
};

export default WorkSpace;
