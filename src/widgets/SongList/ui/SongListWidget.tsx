import React from "react";

import { FlexBox } from "@shared/ui/FlexBox";
import Hr from "@shared/ui/Hr";
import { SearchInput } from "@shared/ui/Input";
import { Typography } from "@shared/ui/Typography";

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
          <Typography>#</Typography>
          <Typography>Title</Typography>
        </FlexBox>
        <Hr />
        
      </FlexBox>
    </>
  );
};

export default SongListWidget;
