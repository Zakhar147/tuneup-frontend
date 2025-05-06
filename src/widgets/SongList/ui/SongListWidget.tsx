import React from "react";

import { FlexBox } from "@shared/ui/FlexBox";
import Hr from "@shared/ui/Hr";
import { SearchInput } from "@shared/ui/Input";
import { Typography } from "@shared/ui/Typography";

import SongListItemWidget from "@entities/Song/ui/SongListItem";
import { songs } from "@entities/Song/model/songs"; 

const SongListWidget: React.FC = () => {
  return (
    <>
      <FlexBox justify="center" align="center" className="w-full py-[55px]">
        <SearchInput placeholder="Find song" />
      </FlexBox>

      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="w-full"
      >
        {/* header */}
        <FlexBox
          justify="start"
          align="center"
          className="gap-[35px] py-[10px] px-[25px] w-full"
        >
          <Typography className="text-[#111111] dark:text-[#AAAAAA]">#</Typography>
          <Typography className="text-[#111111] dark:text-[#AAAAAA]">Title</Typography>
        </FlexBox>
        <Hr />

        {songs.map((song) => (
          <SongListItemWidget
            key={song.index}
            index={song.index}
            img={song.img}
            title={song.title}
            artist={song.artist}
          />
        ))}
      </FlexBox>
    </>
  );
};

export default SongListWidget;
