import {CSSProperties} from "react";

export const sideToSideBackground = (opacity: number | undefined) : CSSProperties => ({
  background: "#9d00a6",
  opacity: opacity ?? 1,
  justifyContent: "space-between",
  alignItems: "flex-end",
  flexDirection: "row"
})