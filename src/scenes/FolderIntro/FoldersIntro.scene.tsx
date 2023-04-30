import {AbsoluteFill, useCurrentFrame, useVideoConfig} from "remotion";
import {FoldersIntroFolder} from "./FoldersIntro.folder";

interface Props {
  leftName: string,
  rightName: string
}

export function FoldersIntroScene({leftName, rightName}: Props) {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const multiplier = Math.min(1, frame / (fps * 3));
  const reversedMultiplier = 1 - multiplier;

  const leftFolderTransform = `translate(-${300 * reversedMultiplier}px, ${400 * reversedMultiplier}px) rotate(${30 * reversedMultiplier}deg) scale(${1 + reversedMultiplier})`;
  const rightFolderTransform = `translate(${300 * reversedMultiplier}px, -${50 * reversedMultiplier}px) rotate(-${40 * reversedMultiplier}deg) scale(${1 + reversedMultiplier})`;

  return <AbsoluteFill style={{background: "black", flexDirection: "row", alignItems: "flex-end", justifyContent: "center", gap: "40px"}}>
    <FoldersIntroFolder colors={"#ff2100"} name={leftName} transform={leftFolderTransform}/>
    <FoldersIntroFolder colors={"rgba(0,128,255,0.63)"} name={rightName} transform={rightFolderTransform}/>
  </AbsoluteFill>;
}