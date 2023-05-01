import {Img, staticFile} from "remotion";
import {colors} from "../../ui";

interface Props {
  imgPath: string;
}

export function SideToSideResumePortrait({imgPath}: Props) {
  return <div style={{position: "absolute", zIndex:1, left: "50%", transform: "translate(-50%, -60%)", height: "350px", width: "300px", background: "white", outline: `20px solid ${colors.primaryLighter}`}}>
    <Img src={staticFile(imgPath)} style={{height: "100%", width: "100%", objectFit: "cover", filter: "blur(2px) contrast(1.5) sepia(1)", mixBlendMode: "luminosity"}}/>
  </div>;
}