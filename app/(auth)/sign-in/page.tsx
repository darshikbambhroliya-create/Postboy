"use client";

import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
export default function SignIn() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-xl">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>

          <p className="text-sm text-muted-foreground">
            Sign in to your Postboy account
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <Button
            variant="outline"
            className="h-11 w-full gap-3"
            onClick={() =>
              signIn.social({
                provider: "github",
                callbackURL: "/",
              })
            }>
            <FaGithub size={20} />
            Continue with GitHub
          </Button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </main>
  );
}
