import {Sequence, useVideoConfig} from "remotion";
import {FoldersIntroScene} from "./scenes/FolderIntro";
import {FirstPicturesScene} from "./scenes/FirstPictures";

export function ThePersuaders() {
  const {fps} = useVideoConfig();

  const leftPersona = {
    name: "Lucy Leon",
    portraits: {
      child: "lucy_child.jpeg"
    }
  };

  const rightPersona = {
    name: "Rose Red",
    portraits: {
      child: "rose_child.jpeg"
    }
  };

  return <>
    <Sequence durationInFrames={fps * 5}>
      <FoldersIntroScene leftName={leftPersona.name} rightName={rightPersona.name} />
    </Sequence>
    <Sequence from={fps * 5 - fps} durationInFrames={fps * 3}>
      <FirstPicturesScene leftPath={leftPersona.portraits.child} rightPath={rightPersona.portraits.child}/>
    </Sequence>
  </>;
}