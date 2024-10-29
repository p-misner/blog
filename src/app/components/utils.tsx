export type ArrayRGBA = [number, number, number, number];

type ColorMixerInputs = {
  bottomLayer: ArrayRGBA;
  topLayer: ArrayRGBA;
  returnFormat?: "rgba" | "array";
  opacity?: number;
};
export function ColorMixer({
  bottomLayer,
  topLayer,
  returnFormat,
  opacity,
}: ColorMixerInputs) {
  const mix = [];
  mix[3] = 1 - (1 - topLayer[3]) * (1 - bottomLayer[3]); // alpha
  mix[0] = Math.round(
    (topLayer[0] * topLayer[3]) / mix[3] +
      (bottomLayer[0] * bottomLayer[3] * (1 - topLayer[3])) / mix[3]
  ); // red
  mix[1] = Math.round(
    (topLayer[1] * topLayer[3]) / mix[3] +
      (bottomLayer[1] * bottomLayer[3] * (1 - topLayer[3])) / mix[3]
  ); // green
  mix[2] = Math.round(
    (topLayer[2] * topLayer[3]) / mix[3] +
      (bottomLayer[2] * bottomLayer[3] * (1 - topLayer[3])) / mix[3]
  ); // blue

  if (returnFormat == "rgba") {
    if (opacity) {
      return `rgba(${mix[0]},${mix[1]},${mix[2]},${opacity})`;
    }
    return `rgba(${mix[0]},${mix[1]},${mix[2]},${mix[3]})`;
  }
  return mix;
}
export const colorConverterService = {
  hslToHex: (h: number, s: number, l: number): string => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };

    return `#${f(0)}${f(8)}${f(4)}`;
  },

  hexToHSL: (hex: string): { h: number; s: number; l: number } | undefined => {
    const ex = /^#([\da-f]{3}){1,2}$/i;
    if (ex.test(hex)) {
      let r: any = 0,
        g: any | number = 0,
        b: any | number = 0;
      if (hex.length === 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
      } else if (hex.length === 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
      }

      r /= 255;
      g /= 255;
      b /= 255;
      const cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin;
      let h = 0,
        s = 0,
        l = 0;

      if (delta === 0) h = 0;
      else if (cmax === r) h = ((g - b) / delta) % 6;
      else if (cmax === g) h = (b - r) / delta + 2;
      else h = (r - g) / delta + 4;

      h = h * 60;

      if (h < 0) h += 360;

      l = (cmax + cmin) / 2;
      s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      s = +(s * 100).toFixed(1);
      l = +(l * 100).toFixed(1);

      return { h, s, l };
    } else {
      return undefined;
    }
  },

  hexToRGB(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
  },

  RGBToHSV(r: number, g: number, b: number) {
    let v = Math.max(r, g, b),
      c = v - Math.min(r, g, b);
    let h =
      c &&
      (v === r ? (g - b) / c : v === g ? 2 + (b - r) / c : 4 + (r - g) / c);
    return {
      h: 60 * (h < 0 ? h + 6 : h),
      s: v && (c / v) * 100,
      v: (v / 255) * 100,
    };
  },
};
