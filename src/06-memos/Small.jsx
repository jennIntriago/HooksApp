// import { memo } from "react";
import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me volvi a dibujar :C");
  return <small>{value}</small>;
});
