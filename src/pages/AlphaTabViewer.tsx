import { useEffect, useRef, useState } from 'react';

import { AlphaTabApi, Settings } from '@coderline/alphatab';


export const AlphaTabViewer = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<AlphaTabApi>();


  useEffect(() => {
    const fetchAndInit = async () => {
      try {
        const fileUrl = `http://localhost:8080/api/songs/352/tab`;

        const settings = {
          core: {
            file: fileUrl,
            fontDirectory: "/font/"
          },
          player: {
            enablePlayer: true,
            enableCursor: true,
            enableUserInteraction: true,
            soundFont: '/soundfont/sonivox.sf2'
          }
        };

        const alphaTab = new AlphaTabApi(mainRef.current!, settings as Settings);
        setApi(alphaTab);

        return () => {
          alphaTab.destroy();
        };

      } catch (error) {
        console.error("Ошибка при загрузке песни или файла:", error);
      }
    };

    fetchAndInit();
  }, []);

  const playPause = () => {
    api?.playPause();
  } 

  return (
    <>
      Hello AlphaTab!

      <button onClick={() => playPause()}>Play/Pause</button>
      <div ref={mainRef}></div>
  </>
  );
};

export default AlphaTabViewer;