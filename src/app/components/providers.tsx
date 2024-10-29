"use client";

import { createContext, useState } from "react";
import { ArrayRGBA } from "./utils";

export const ThemeContext = createContext<{
  colorPicked: ArrayRGBA;
  setColorPicked: unknown;
}>({
  colorPicked: [25, 149, 230, 1],
  setColorPicked: undefined,
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultColor: ArrayRGBA = [25, 149, 230, 1];

  // const defaultColor: ArrayRGBA = [0, 0, 0, 1];
  const [colorPicked, setColorPicked] = useState<ArrayRGBA>(defaultColor);

  return (
    <ThemeContext.Provider value={{ colorPicked, setColorPicked }}>
      {children}
    </ThemeContext.Provider>
  );
}
