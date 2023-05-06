import {Persona} from "../../ThePersuaders";
import {useMemo} from "react";
import {useCurrentFrame, useVideoConfig} from "remotion";
import {BigColoredPicture} from "../../ui";
import {SideToSideResumePortrait} from "./SideToSideResume.portrait";

interface Props {
  persona: Persona;
  color: string;
}

export function SideToSideResumePresentation({persona: {memories, portraits}, color}: Props) {
  const {durationInFrames} = useVideoConfig();
  const frame = useCurrentFrame();

  const memoriesDuration = useMemo(() => durationInFrames / memories.length, [memories]);
  const currentMemoriesFrame = useMemo(() => Math.floor(frame/memoriesDuration), [frame, memoriesDuration]);

  const portraitsDuration = useMemo(() => durationInFrames / portraits.length, [memories]);
  const currentPortraitFrames = useMemo(() => Math.floor(frame/portraitsDuration), [frame, portraitsDuration])

  return <div style={{position: "relative"}}>
    <SideToSideResumePortrait imgPath={portraits[currentPortraitFrames]} />
    <BigColoredPicture imgPath={memories[currentMemoriesFrame]} color={color}/>
  </div>;
}