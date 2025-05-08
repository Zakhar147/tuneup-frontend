import SongInfo from "@widgets/SongInfo/ui/SongInfo";

import { SongSwitcher } from "@features/switchSongMaterial";

import { FlexBox } from "@shared/ui/FlexBox";

const Song = () => {
  return (
    <FlexBox
      direction="col"
      align="center"
      justify="start"
      className="gap-[100px] w-full min-h-screen py-[42px]"
    >
      <SongInfo
        img="https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg"
        title="Lost in the Echo"
        artist="Linkin Park"
        bpm={100}
        key="E"
      />
      <SongSwitcher tabUrl="/tab/tab_1.gp5"/>
    </FlexBox>
  );
};

export default Song;
