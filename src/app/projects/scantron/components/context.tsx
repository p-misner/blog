import { createContext } from "react";

export const TestContext = createContext<
  | {
      testType: "scantron" | "STAR" | "SAT";
      zoomAmount: number;
      selectMode: "hover" | "click";
      urlParams: any;
      setUrlParams: any;
    }
  | undefined
>(undefined);
