export const songs = [
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

import { api } from "@shared/api";
import { Song } from "../types/Songs";

export const getAllSongs = async (): Promise<Song[]> => {
  const response = await api.get<Song[]>("/songs");
  return response.data;
};

export const getPaginatedSongs = async (page: number, size = 10) => {
  const res = await api.get(`/songs/paged?page=${page}&size=${size}`);
  return res.data;
};
