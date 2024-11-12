"use client";

import { SelectOptions, Selector } from "../style/globeStyle";
import { MapProjections } from "../utils/projectionTypes";

export function Dropdown({
  value,
  setValue,
}: {
  value: string;
  setValue: (...args: any[]) => void;
}) {
  return (
    <div>
      <Selector
        value={value}
        $labelLength={value.length}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {MapProjections.filter((x) => x.name != "Orthographic").map((x) => (
          <SelectOptions key={x.name} value={x.name}>
            {x.name} projection
          </SelectOptions>
        ))}
      </Selector>
    </div>
  );
}
