"use client";

import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Dialog } from "@base-ui/react/dialog";
import { Combobox } from "@base-ui/react/combobox";

const searchItems = [
  "Pre-request Script",
  "Tests",
  "Variables",
  "Documentation",
];

export default function SearchBar() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((previous) => !previous);
      }
    };

    document.addEventListener("keydown", down);

    return () => {
      document.removeEventListener("keydown", down);
    };
  }, []);

  const handleSelect = (value: string | null) => {
    if (!value) return;

    console.log("Selected:", value);
    setOpen(false);
  };

  return (
    <>
      {/* Search Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative flex flex-1 cursor-text items-center justify-between self-stretch rounded bg-zinc-900 px-4 py-2 text-gray-500 transition hover:bg-zinc-800 hover:text-gray-200 focus-visible:bg-zinc-700 focus-visible:text-gray-200 overflow-hidden">
        <span className="inline-flex flex-1 items-center">
          <Search size={16} className="mr-2" />
          <span className="text-xs text-left">Search</span>
        </span>

        <span className="flex space-x-1">
          <kbd className="px-1 py-0.5 text-xs bg-zinc-700 rounded">Ctrl</kbd>
          <kbd className="px-1 py-0.5 text-xs bg-zinc-700 rounded">K</kbd>
        </span>
      </button>

      {/* Search Dialog */}
      <Dialog.Root open={isOpen} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />

          <Dialog.Viewport className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[15vh]">
            <Dialog.Popup className="w-full max-w-lg overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-2xl">
              <Dialog.Title className="sr-only">Search commands</Dialog.Title>

              <Dialog.Description className="sr-only">
                Search and select an available command.
              </Dialog.Description>

              <Combobox.Root
                items={searchItems}
                inline
                open={isOpen}
                onOpenChange={setOpen}
                onValueChange={handleSelect}>
                <div className="flex items-center border-b border-zinc-800 px-3">
                  <Search size={18} className="mr-2 shrink-0 text-gray-500" />

                  <Combobox.Input
                    aria-label="Search commands"
                    placeholder="Type a command or search..."
                    className="h-12 w-full bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-500"
                  />
                </div>

                <Combobox.List className="max-h-72 overflow-y-auto p-2">
                  {(item: string) => (
                    <Combobox.Item
                      key={item}
                      value={item}
                      className="cursor-pointer rounded px-3 py-2 text-sm text-gray-300 outline-none data-[highlighted]:bg-zinc-800 data-[highlighted]:text-white">
                      {item}
                    </Combobox.Item>
                  )}
                </Combobox.List>

                <Combobox.Empty className="py-6 text-center text-sm text-gray-500">
                  No results found.
                </Combobox.Empty>
              </Combobox.Root>

              {/* Bottom navigation hints */}
              <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-900 px-3 py-2">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 text-gray-400">
                      ↑
                    </kbd>
                    <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 text-gray-400">
                      ↓
                    </kbd>
                    <span>to navigate</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 text-gray-400">
                      ↵
                    </kbd>
                    <span>to select</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 text-gray-400">
                    ESC
                  </kbd>
                  <span>to close</span>
                </div>
              </div>
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
