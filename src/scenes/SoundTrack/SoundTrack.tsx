import {Audio, staticFile} from "remotion";

export function SoundTrack() {
  return <Audio src={staticFile("persuaderOpening.mp3")}/>
}