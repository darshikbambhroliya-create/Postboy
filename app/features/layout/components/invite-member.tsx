import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import { UserPlus } from "lucide-react";

export default function InviteMember() {
  return (
    <Hint label="Invite Member">
      <Button
        className="
          h-9 w-9
          rounded-lg
          border border-cyan-400/40
          bg-zinc-900
          text-cyan-400
          shadow-[0_0_12px_rgba(34,211,238,0.15)]
          hover:border-cyan-300
          hover:bg-cyan-400/10
          hover:text-cyan-300
          hover:shadow-[0_0_18px_rgba(34,211,238,0.3)]
          active:scale-95
          transition-all
        "
      >
        <UserPlus className="size-4" />
      </Button>
    </Hint>
  );
}