import React, { useState } from "react";

import { FlexBox } from "@shared/ui/FlexBox";
import Hr from "@shared/ui/Hr";
import { SearchInput } from "@shared/ui/Input";
import { Typography } from "@shared/ui/Typography";

import { SongListItemWidget } from "@entities/Song";
import { usePaginatedSongs } from "@entities/Song";
import Spinner from "@shared/ui/Spinner";
import clsx from "clsx";

const SongListWidget: React.FC = () => {
  const [page, setPage] = useState(0);
  const { songs, totalPages, loading } = usePaginatedSongs(page);

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
          <Typography className="text-[#111111] dark:text-[#AAAAAA]">
            #
          </Typography>
          <Typography className="text-[#111111] dark:text-[#AAAAAA]">
            Title
          </Typography>
        </FlexBox>
        <Hr />

        {loading ? (
          <FlexBox justify="center" className="w-full h-full ">
            <Spinner className="w-[30px] h-[30px]" />
          </FlexBox>
        ) : (
          songs?.map((song) => (
            <SongListItemWidget
              key={song.id}
              index={song.id}
              img="https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg"
              title={song.title}
              artist={song.artist}
            />
          ))
        )}

        <FlexBox justify="center" className="mt-6 gap-2 flex-wrap">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={clsx(
                "px-4 py-1 rounded-lg text-sm transition",
                i === page
                  ? "bg-accent text-white shadow-md"
                  : "text-black hover:bg-hoverBg dark:text-white dark:hover:bg-hoverBg"
              )}
            >
              {i + 1}
            </button>
          ))}
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default SongListWidget;
