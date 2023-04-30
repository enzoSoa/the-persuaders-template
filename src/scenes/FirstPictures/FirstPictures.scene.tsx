import {AbsoluteFill, useCurrentFrame, useVideoConfig} from "remotion";
import {FirstPicturesPortrait} from "./FirstPictures.portrait";

interface Props {
  leftPath: string;
  rightPath: string;
}

export function FirstPicturesScene({leftPath, rightPath}: Props) {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const multiplier = frame / (durationInFrames * 0.33);

  return <AbsoluteFill style={{background: "#9d00a6", opacity: multiplier, justifyContent: "space-between", alignItems: "flex-end", flexDirection: "row"}}>
    <FirstPicturesPortrait imgPath={leftPath} color={"#ff2100"}/>
    <FirstPicturesPortrait imgPath={rightPath} color={"#0088ff"}/>
  </AbsoluteFill>
}