import {AbsoluteFill, useCurrentFrame, useVideoConfig} from "remotion";
import {BigColoredPicture, colors, sideToSideBackground, useFadeInMultiplier} from "../../ui";
import {Persona} from "../../ThePersuaders";
import {SideToSideResumePresentation} from "./SideToSideResume.presentation";

interface Props {
  leftPersona: Persona;
  rightPersona: Persona;
}

export function SideToSideResumeScene({leftPersona, rightPersona}: Props) {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const opacityMultiplier = useFadeInMultiplier(frame, durationInFrames, 0.0625);

  return <AbsoluteFill style={sideToSideBackground(opacityMultiplier)}>
    <SideToSideResumePresentation persona={leftPersona} color={colors.left}/>
    <SideToSideResumePresentation persona={rightPersona} color={colors.right}/>
  </AbsoluteFill>
}