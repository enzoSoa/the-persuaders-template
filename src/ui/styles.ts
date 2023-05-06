import {CSSProperties} from "react";
import {colors} from "./values";

export const sideToSideBackground = (opacity: number | undefined) : CSSProperties => ({
  background: colors.primary,
  opacity: opacity ?? 1,
  justifyContent: "space-between",
  alignItems: "flex-end",
  flexDirection: "row"
})

export const verticalBackground = (opacity: number | undefined) : CSSProperties => ({
  background: colors.secondary,
  opacity: opacity ?? 1,
  zIndex: 1,
})

export const verticalBackgroundWindow = {
  background: colors.primary,
  height: "850px",
  width: "1100px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
  justifyContent: "center"
}

export const verticalBackgroundMedia = {
  width: "1060px",
  height: "calc(100% - 40px)",
  objectFit: "cover",
  border: "5px solid #000",
  filter: "saturate(2.5) contrast(0.4) blur(2px) contrast(2.5) sepia(0.4) saturate(1.3) blur(1px) grayscale(0.2)"
}

export const verticalBackgroundText = {
  margin: 0,
  color: colors.primaryLighter,
  textAlign: "center",
  fontSize: "130px",
  fontFamily: "Flames",
  letterSpacing: "5px"
}

export const verticalBackgroundTextBox = {
  width: "1060px",
  height: "calc(100% - 40px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
