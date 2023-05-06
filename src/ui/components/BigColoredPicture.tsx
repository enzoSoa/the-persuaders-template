import {MediaLoader} from "./MediaLoader";

interface Props {
  imgPath: string;
  color: string;
}

export function BigColoredPicture({imgPath, color}: Props) {
  return <div style={{height: "750px", width: "950px", background: color}}>
    <MediaLoader path={imgPath}  style={{height: "100%", width: "100%", objectFit: "cover", filter: "contrast(0.6) blur(2px) contrast(1.25) sepia(1)", mixBlendMode: "luminosity"}}/>
  </div>;
}
