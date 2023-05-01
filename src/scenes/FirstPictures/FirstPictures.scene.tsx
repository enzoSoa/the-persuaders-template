import {AbsoluteFill, useCurrentFrame, useVideoConfig} from "remotion";
import {BigColoredPicture, colors, sideToSideBackground, useFadeInMultiplier} from "../../ui";

interface Props {
  leftPath: string;
  rightPath: string;
}

export function FirstPicturesScene({leftPath, rightPath}: Props) {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const multiplier = useFadeInMultiplier(frame, durationInFrames, 0.33);

  return <AbsoluteFill style={sideToSideBackground(multiplier)}>
    <BigColoredPicture imgPath={leftPath} color={colors.left}/>
    <BigColoredPicture imgPath={rightPath} color={colors.right}/>
  </AbsoluteFill>
}