import {Img, staticFile} from "remotion";
import {useMemo} from "react";

interface Props {
  imgPath: string;
  color: string;
  objectContain?: string;
}

export function BigColoredPicture({imgPath, color, objectContain}: Props) {
  const picture = useMemo(() => staticFile(`/${imgPath}`), [imgPath])

  return <div style={{height: "750px", width: "950px", background: color}}>
    <Img src={picture} style={{height: "100%", width: "100%", objectFit: "cover", filter: "contrast(0.6) blur(2px) contrast(1.25) sepia(1)", mixBlendMode: "luminosity", objectPosition: objectContain ?? "", transition: "object-position 0.2s"}}/>
  </div>;
}
