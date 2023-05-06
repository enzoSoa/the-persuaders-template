interface Props{
  colors: string;
  name: string;
  transform?: string;
}

const folderStyle = (colors: string, transform: string | undefined) => ({
  height: "750px",
  width: "550px",
  background: `${colors}`,
  display: "flex",
  justifyContent: "center",
  transform: transform,
  borderTop: "2px solid white",
  borderRight: "2px solid white"
})

const nameTagStyle = {
  height: "fit-content",
  width: "fit-content",
  background: "white",
  marginTop: "125px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
  paddingInline: "30px"
}

const textStyle = {
  fontFamily: "Arial",
  fontSize: "48px",
  margin: 0,
  textTransform: "uppercase"
}

export function FoldersIntroFolder({colors, name, transform}: Props) {
  const renderName = (name: string) => <p style={textStyle}>{name}</p>

  return <div style={folderStyle(colors, transform)}>
    <div style={nameTagStyle}>
      {name.split(" ").map(renderName)}
    </div>
  </div>
}