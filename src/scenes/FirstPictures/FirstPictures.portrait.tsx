import {Img, staticFile} from "remotion";

interface Props {
  imgPath: string;
  color: string;
}

export function FirstPicturesPortrait({imgPath, color}: Props) {
  return <div style={{height: "750px", width: "950px", background: color}}>
    <Img src={staticFile(`/${imgPath}`)} style={{height: "100%", width: "100%", filter: "sepia(100%) contrast(70%)", mixBlendMode: "luminosity", objectFit: "cover"}}/>
  </div>;
}