import {Img, staticFile, Video} from "remotion";
import {CSSProperties} from "react";

interface Props {
  path: string;
  style?: CSSProperties
}

export function MediaLoader({path, style}: Props) {
  const media = /^http(s)?:\/\//.test(path) ? path : staticFile(path);

  return /.mp4$/.test(path) ? <Video src={media} style={style} volume={0} startFrom={0}/> : <Img src={media} style={style}/>;
}