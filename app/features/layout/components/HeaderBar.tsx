"use client";
import React from "react";
import { Unplug } from "lucide-react";
import UserButton from "../../authentication/components/User-Button";
import { UserProps } from "../types";
import SearchBar from "./SearchBar";
import InviteMember from "./invite-member";
import WorkSpace from "./workspace";
interface props {
  userData: UserProps;
}

const HeaderBar = ({ userData }: props) => {
  return (
    <header className="grid grid-cols-5 grid-rows-1 gap-2 overflow-x-auto overflow-hidden p-2 border">
      <div className="col-span-2 flex items-center justify-between space-x-2 hover:cursor-pointer hover:opacity-80 ml-4">
        <Unplug size={28} className="text-indigo-400" />
      </div>

      <div className="col-span-1 flex items-center justify-between space-x-2">
        <div
          className="border-animation relative p-[1px] rounded flex-1 self-stretch overflow-hidden flex items-center justify-center"
          aria-hidden="true">
          <SearchBar />
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-end space-x-2 hover:cursor-pointer hover:opacity-80">
        <InviteMember />
        <WorkSpace />
        <UserButton user={userData} size="sm" />
      </div>
    </header>
  );
};

export default HeaderBar;
