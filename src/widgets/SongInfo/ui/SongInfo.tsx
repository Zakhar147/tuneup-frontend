import { FlexBox } from "@shared/ui/FlexBox";
import KeySelector from "@shared/ui/KeySelector";
import { Typography } from "@shared/ui/Typography";
import React from "react";

interface SongInfoProps {
  img: string;
  title: string;
  artist: string;
  bpm: number;
  key: string;
}

const SongInfo: React.FC<SongInfoProps> = ({ img, title, artist, bpm }) => {
  return (
    <FlexBox justify="between" align="center" className="w-full px-[20px]">
      <FlexBox justify="start" align="center" className="w-full">
        <div className="w-[215px] h-[215px] rounded-[7px] overflow-hidden flex-shrink-">
          <img
            src={img}
            alt="song icon"
            className="w-full h-full object-cover rounded-[7px]"
          />
        </div>
        <FlexBox direction="col" align="start" justify="center" className="w-[50%] pl-[30px]">
          <Typography className="text-[35px]" title>{title}</Typography>
          <Typography className="text-[22px]">{artist}</Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox className="gap-[10px]" direction="col" justify="center" align="center">
        <Typography title>BPM: {bpm}</Typography>
        <KeySelector originalKey="E"/>
      </FlexBox>
    </FlexBox>
  );
};

export default SongInfo;
