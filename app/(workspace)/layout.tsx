import React, { Suspense } from "react";
import HeaderBar from "../features/layout/components/HeaderBar";
import currentUser from "../features/authentication/actions";
import { initializeWorkspace } from "../features/workspace/action";
import Loading from "./loading";

async function HeaderWrapper() {
  const user = await currentUser();

  //@ts-ignore
  return <HeaderBar userData={user} />;
}
async function WorkspaceInitializer() {
  const workspace = await initializeWorkspace();

  if (!workspace.success) {
    console.error("Workspace initialization failed:");
  }
  return null;
}
const WorkSpaceLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }>
        <HeaderWrapper />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }>
        <WorkspaceInitializer />
      </Suspense>
      <main className="max-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] flex flex-1 overflow-hidden">
        <div className="flex h-full w-full">
          <div className="w-12 border-r border-zinc-800 bg-zinc-900">
            {/* <TabbedLeftPanel /> */}
          </div>
          <div className="flex-1 bg-zinc-950">{children}</div>
        </div>
      </main>
    </>
  );
};

export default WorkSpaceLayout;
