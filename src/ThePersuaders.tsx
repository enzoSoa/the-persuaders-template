import {Sequence, useVideoConfig} from "remotion";
import {FoldersIntroScene} from "./scenes/FolderIntro";
import {FirstPicturesScene} from "./scenes/FirstPictures";
import {SideToSideResumeScene} from "./scenes/SideToSideResume/SideToSideResume.scene";
import {VerticalParts, VerticalScenePart} from "./scenes/VerticalPictures/VerticalPictures";
import {SoundTrack} from "./scenes/SoundTrack/SoundTrack";

export type Persona = {
  name: string;
  portraits: string[];
  memories: string[];
}

interface Props{
  leftPersona: Persona;
  rightPersona: Persona;
  parts: VerticalScenePart[];
}

export function ThePersuaders({leftPersona, rightPersona, parts}: Props) {
  const {fps} = useVideoConfig();

  return <>
    <Sequence>
      <SoundTrack/>
    </Sequence>
    <Sequence durationInFrames={fps * 5}>
      <FoldersIntroScene leftName={leftPersona.name} rightName={rightPersona.name} />
    </Sequence>
    <Sequence from={fps * 5 - fps} durationInFrames={fps * 3}>
      <FirstPicturesScene leftPath={leftPersona.portraits[0]} rightPath={rightPersona.portraits[0]}/>
    </Sequence>
    <Sequence from={fps * 6} durationInFrames={fps * 16}>
      <SideToSideResumeScene leftPersona={leftPersona} rightPersona={rightPersona}/>
    </Sequence>
    <Sequence from={fps * 21}>
      <VerticalParts parts={parts}/>
    </Sequence>
  </>;
}