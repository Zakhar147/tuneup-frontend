import React from "react";

import { FlexBox } from "@shared/ui/FlexBox";

import { useSongMaterialStore } from "../model/useSongMaterialStore";
import { TabsView } from "./TabsView";

interface SongSwitcherProps {
  tabUrl: string;
}

export const SongSwitcher: React.FC<SongSwitcherProps> = ({ tabUrl }) => {
  const { view, setView } = useSongMaterialStore();

  return (
    <FlexBox direction="col" className="w-full gap-[30px]">
      {/* header */}
      {/* TODO: Добавить hover effect */}
      <FlexBox className="w-full gap-[90px]" justify="center" align="center">
        <button
          onClick={() => setView("text")}
          className={`text-[22px] font-medium ${
            view === "text"
              ? "text-accent"
              : "text-light-textSecond  dark:text-dark-textSecond"
          }`}
        >
          Chords
        </button>
        <button
          onClick={() => setView("tabs")}
          className={`text-[22px] font-medium ${
            view === "tabs"
              ? "text-accent"
              : "text-light-textSecond  dark:text-dark-textSecond"
          }`}
        >
          Tabs
        </button>
      </FlexBox>
      {/* Text or Tabs */}
      {view === "text" && "chords"}
      {view === "tabs" && <TabsView tabUrl={tabUrl} />}
    </FlexBox>
  );
};
