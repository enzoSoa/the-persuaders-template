import {Sequence, useVideoConfig} from "remotion";
import {FoldersIntroScene} from "./scenes/FolderIntro";
import {FirstPicturesScene} from "./scenes/FirstPictures";
import {SideToSideResumeScene} from "./scenes/SideToSideResume/SideToSideResume.scene";

export type Persona = {
  name: string;
  portraits: string[];
  memories: string[];
}

export function ThePersuaders() {
  const {fps} = useVideoConfig();

  const leftPersona: Persona = {
    name: "Lucy Leon",
    portraits: [
      "lucy1.jpeg",
      "lucy2.jpeg",
      "lucy3.jpeg",
      "lucy4.jpeg",
      "lucy5.jpeg",
      "lucy6.jpeg"
    ],
    memories: [
      "lucy_memory1.jpeg",
      "lucy_memory2.png",
      "lucy_memory3.png",
      "lucy_memory4.png",
      "lucy_memory5.png",
      "lucy_memory6.png",
      "lucy_memory7.png"
    ]
  };

  const rightPersona: Persona = {
    name: "Rose Red",
    portraits: [
      "rose1.jpeg",
      "rose2.jpeg",
      "rose3.jpeg",
      "rose4.jpeg",
      "rose5.jpeg",
      "rose6.jpeg"
    ],
    memories: [
      "rose_memory1.png",
      "rose_memory2.png",
      "rose_memory3.png",
      "rose_memory4.png",
      "rose_memory5.png",
      "rose_memory6.png",
      "rose_memory7.png"
    ]
  };

  return <>
    <Sequence durationInFrames={fps * 5}>
      <FoldersIntroScene leftName={leftPersona.name} rightName={rightPersona.name} />
    </Sequence>
    <Sequence from={fps * 5 - fps} durationInFrames={fps * 3}>
      <FirstPicturesScene leftPath={leftPersona.portraits[0]} rightPath={rightPersona.portraits[0]}/>
    </Sequence>
    <Sequence from={fps * 6} durationInFrames={fps * 16}>
      <SideToSideResumeScene leftPersona={leftPersona} rightPersona={rightPersona}/>
    </Sequence>
  </>;
}