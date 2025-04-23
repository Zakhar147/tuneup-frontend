import React from "react";

import { ActionCard } from "@widgets/ActionCard/ui/ActionCard";

import { BassGuitarIcon } from "@shared/assets/Components/BassGuitarIcon";
import { NoteIcon } from "@shared/assets/Components/NoteIcon";
import { CreateAccountButton } from "@shared/ui/Button";
import { FlexBox } from "@shared/ui/FlexBox";
import { Typography } from "@shared/ui/Typography";
import { BenefitList } from "@shared/ui/Benefits";

const Home: React.FC = () => {
  return (
    <FlexBox
      direction="col"
      justify="center"
      align="center"
      className="w-full h-full gap-[115px] py-[141px] "
    >
      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="gap-[15px]"
      >
        <Typography title className="text-[48px] font-bold">
          Play and Grow up with TuneUp!
        </Typography>
        <Typography className="w-full text-center md:max-w-[500px] mx-auto break-words text-[20px] font-medium">
          TuneUp helps you learn to play bass with tabs and chords for all your
          favorite songs.
        </Typography>
        <CreateAccountButton />
      </FlexBox>

      <FlexBox direction="col" className="max-w-[600px] mx-auto gap-[70px]">
        <ActionCard
          Icon={BassGuitarIcon}
          title="Start Playing"
          href="#"
          hrefText="Get started"
        />
        <ActionCard
          Icon={NoteIcon}
          title="Explore Songs"
          href="#"
          hrefText="View songs"
        />
      </FlexBox>

      <FlexBox direction="col" justify="between" align="center">
        <BenefitList/>
      </FlexBox>
    </FlexBox>
  );
};

export default Home;
