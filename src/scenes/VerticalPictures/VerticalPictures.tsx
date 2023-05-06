import {AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig} from "remotion";
import {
  MediaLoader,
  useFadeInMultiplier,
  verticalBackground, verticalBackgroundMedia, verticalBackgroundText, verticalBackgroundTextBox,
  verticalBackgroundWindow
} from "../../ui";
import {useMemo} from "react";

type ScenePartType = "text" | "media"

type ScenePart = {
  type: ScenePartType;
  data: string;
}

export type VerticalScenePart = [ScenePart, ScenePart] | [ScenePart]

interface Props {
  parts: VerticalScenePart[]
}

export function VerticalPart({part}: {part: ScenePart}) {
  return part.type === "media" ? <MediaLoader path={part.data} style={verticalBackgroundMedia}/> : <div style={verticalBackgroundTextBox}><p style={verticalBackgroundText}>{part.data}</p></div>;
}

function VerticalPartsSequence({part, duration, index} : {part: VerticalScenePart, duration: number, index: number}) {
  const startingPoint = duration * index
  return <Sequence from={startingPoint} durationInFrames={duration}>
    <section style={verticalBackgroundWindow}>
      {part.map(part => <VerticalPart part={part}/>)}
    </section>
  </Sequence>
}

export function VerticalParts({parts}: Props) {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const opacityMultiplier = useFadeInMultiplier(frame, durationInFrames, 0.0126);

  const segmentDuration = useMemo(() => durationInFrames / parts.length, [durationInFrames, parts]);

  return <AbsoluteFill style={verticalBackground(opacityMultiplier)}>
    {parts.map((part, index) => <VerticalPartsSequence part={part} duration={segmentDuration} index={index}/>)}
  </AbsoluteFill>
}