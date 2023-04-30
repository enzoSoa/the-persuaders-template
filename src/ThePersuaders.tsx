import {Sequence, useVideoConfig} from "remotion";
import {FoldersIntroScene} from "./scenes/FolderIntro";

export function ThePersuaders() {
  const {fps} = useVideoConfig();

  const leftPersona = {
    name: "persona 1"
  };

  const rightPersona = {
    name: "persona 2"
  };

  return <>
    <Sequence durationInFrames={fps * 4}>
      <FoldersIntroScene leftName={leftPersona.name} rightName={rightPersona.name} />
    </Sequence>
  </>;
}