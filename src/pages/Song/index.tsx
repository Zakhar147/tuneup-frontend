import { FlexBox } from "@shared/ui/FlexBox";

import SongInfo from "@widgets/SongInfo/ui/SongInfo";

const Song = () => {
  return (
    <FlexBox
      direction="col"
      align="center"
      justify="start"
      className="gap-[30px] w-full min-h-screen py-[42px]"
    >
      <SongInfo
        img="https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg"
        title="Lost in the Echo"
        artist="Linkin Park"
        bpm={100}
        key="E"
      />
    </FlexBox>
  );
};

export default Song;
