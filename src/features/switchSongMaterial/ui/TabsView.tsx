import React from "react";

import { useEffect, useRef, useState } from "react";

import { AlphaTabApi, Settings } from "@coderline/alphatab";
import Spinner from "@shared/ui/Spinner";

import '../styles/tabCss.css';

interface TabsViewProps {
  tabUrl: string;
}

export const TabsView: React.FC<TabsViewProps> = ({tabUrl}) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<AlphaTabApi>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndInit = async () => {
      try {
        const fileUrl = tabUrl;

        const settings = {
          core: {
            file: fileUrl,
            fontDirectory: "/font/",
          },
          player: {
            enablePlayer: false,
            enableCursor: true,
            enableUserInteraction: true,
            soundFont: "/soundfont/sonivox.sf2",
          },
          display: {
            staveProfile: "Tab",
          },
          notation: {
            elements: {
              scoreTitle: false,
              scoreSubTitle: false,
              scoreArtist: false,
              scoreAlbum: false,
              scoreWords: false,
              scoreMusic: false,
              scoreWordsAndMusic: false,
              scoreCopyright: false,
              guitarTuning: false,
              trackNames: false,
              chordDiagrams: false,
              effectCapo: false,
              effectChordNames: false,
              effectDynamics: false,
              effectLyrics: false,
              effectMarker: false,
              effectTempo: false,
              effectText: false,
            }
          },
        };

        const alphaTab = new AlphaTabApi(
          mainRef.current!,
          settings as unknown as Settings
        );
        alphaTab.renderStarted.on(() => {
          setIsLoading(true);
        });
        alphaTab.renderFinished.on(() => {
          setIsLoading(false);
        });

        setApi(alphaTab);

        return () => {
          alphaTab.destroy();
        };
      } catch (error) {
        console.error("Ошибка при загрузке песни или файла:", error);
        setIsLoading(false);
      }
    };

    fetchAndInit();
  }, []);

  return (
    <div className="relative w-full h-[600px]">
      <div ref={mainRef} className="alphaTab w-full h-full bg-transparent overflow-auto"></div>

      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm ">
          <Spinner colorClass="bg-transparent" />
        </div>
      )}
    </div>
  );
};
