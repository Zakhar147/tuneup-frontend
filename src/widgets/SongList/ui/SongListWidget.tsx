import React from "react";

import { FlexBox } from "@shared/ui/FlexBox";
import Hr from "@shared/ui/Hr";
import { SearchInput } from "@shared/ui/Input";
import { Typography } from "@shared/ui/Typography";
import SongListItemWidget from "./SongListItemWidget";

const songs = [
  {
    index: "1",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Lost in the Echo",
    artist: "Linkin Park",
  },
  {
    index: "2",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    index: "3",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Bohemian Rhapsody",
    artist: "Queen",
  },
  {
    index: "1",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Lost in the Echo",
    artist: "Linkin Park",
  },
  {
    index: "2",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    index: "3",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Bohemian Rhapsody",
    artist: "Queen",
  },
  {
    index: "1",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Lost in the Echo",
    artist: "Linkin Park",
  },
  {
    index: "2",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    index: "3",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Bohemian Rhapsody",
    artist: "Queen",
  },
  {
    index: "1",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Lost in the Echo",
    artist: "Linkin Park",
  },
  {
    index: "2",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    index: "3",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Bohemian Rhapsody",
    artist: "Queen",
  },
  {
    index: "1",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Lost in the Echo",
    artist: "Linkin Park",
  },
  {
    index: "2",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    index: "3",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Bohemian Rhapsody",
    artist: "Queen",
  },
  {
    index: "1",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Lost in the Echo",
    artist: "Linkin Park",
  },
  {
    index: "2",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    index: "3",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Bohemian Rhapsody",
    artist: "Queen",
  },
  {
    index: "1",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Lost in the Echo",
    artist: "Linkin Park",
  },
  {
    index: "2",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    index: "3",
    img: "https://thumbs.dreamstime.com/b/modern-simple-abstract-music-logo-concept-sound-wave-headset-vector-image-template-365703318.jpg",
    title: "Bohemian Rhapsody",
    artist: "Queen",
  },
];

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
