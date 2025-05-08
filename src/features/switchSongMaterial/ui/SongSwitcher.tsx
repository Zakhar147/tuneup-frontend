import React from "react";

import Hr from "@shared/ui/Hr";
import { FlexBox } from "@shared/ui/FlexBox";

import { useSongMaterialStore } from "../model/useSongMaterialStore";
import { TabsView } from "./TabsView";

export const SongSwitcher: React.FC = () => {
  const { view, setView } = useSongMaterialStore();

  return (
    <FlexBox direction="col" className="w-full gap-[30px]">
      {/* header */}
      {/* TODO: Добавить hover effect */}
      <FlexBox direction="col" className="w-full gap-[10px]">
        <FlexBox className="w-full" justify="around" align="center">
          <button
            onClick={() => setView("text")}
            className={`text-[25px] font-medium ${
              view === "text" ? "text-accent" : "text-light-textSecond  dark:text-dark-textSecond"
            }`}
          >
            Chords
          </button>
          <button
            onClick={() => setView("tabs")}
            className={`text-[25px] font-medium ${
              view === "tabs" ? "text-accent" : "text-light-textSecond  dark:text-dark-textSecond"
            }`}
          >
            Tabs
          </button>
        </FlexBox>
        <Hr />
      </FlexBox>
      {/* Text or Tabs */}
      {view === "text" &&  "chords"}
      {view === "tabs" && <TabsView/>}
    </FlexBox>
  );
};
