import SongInfo from "@widgets/SongInfo/ui/SongInfo";

import { SongSwitcher } from "@features/switchSongMaterial";

import { FlexBox } from "@shared/ui/FlexBox";
import { textAndChords } from "@entities/Song/model/chordsAndText";
import YouTubePlayer from "@widgets/YouTubePlayer";

const Song = () => {
  return (
    <FlexBox
      direction="col"
      align="center"
      justify="start"
      className="gap-[65px] w-full min-h-screen py-[42px]"
    >
      <SongInfo
        img="https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg"
        title="Lost in the Echo"
        artist="Linkin Park"
        bpm={100}
        songKey="E"
      />
      <SongSwitcher 
        tabUrl="/tab/tab_1.gp5" 
        chords={textAndChords} 
      />
      <YouTubePlayer 
        url="https://www.youtube.com/watch?v=Dz38yetbT7M"
       />
    </FlexBox>
  );
};

export default Song;
