import { forwardRef, useEffect, useRef, useState } from "react";
import {
  ButtonWrapper,
  CanvasTitle,
  CanvasWrapper,
  DrawingCanvas,
  PauseOverlay,
  PauseOverlayText,
} from "../style/canvasStyle";
import { useInterval } from "./useInterval";
import { ArrayRGBA } from "@/app/components/utils";

export const CreativeCodeCanvasRefless = ({
  draw,
  setup,
  title,
  interval,
  color,
}: {
  draw: any;
  setup: any;
  title: string;
  interval: number;
  color: ArrayRGBA;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef<HTMLCanvasElement | null>(null);

  // initial setup of canvas
  useEffect(() => {
    if (ref.current) {
      let context = ref.current.getContext("2d");
      ref.current.setAttribute(
        "height",
        `${ref.current.getBoundingClientRect().height}`
      );
      ref.current.setAttribute(
        "width",
        `${ref.current.getBoundingClientRect().width}`
      );
      setup({ canvas: ref.current, ctx: context });
    }
  }, []);

  //track if canvas in viewpoert
  const observerCallback = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (!entry.isIntersecting && ref.current) {
      setIsPaused(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  //create and track timer
  useInterval(() => {
    if (ref.current && !isPaused) draw({ ctx: ref.current.getContext("2d") });
  }, interval);
  return (
    <CanvasWrapper color={color}>
      <CanvasTitle>{title}</CanvasTitle>
      {isPaused && (
        <PauseOverlay
          color={color}
          onClick={() => {
            isPaused ? setIsPaused(false) : setIsPaused(true);
          }}
        >
          <PauseOverlayText color={color}>press to resume</PauseOverlayText>
        </PauseOverlay>
      )}
      <DrawingCanvas
        $isVisible={isVisible}
        ref={ref}
        color={color}
      ></DrawingCanvas>
      <ButtonWrapper>
        <button
          typeof="button"
          onClick={() => {
            if (ref.current) {
              ref.current.setAttribute(
                "height",
                `${ref.current.getBoundingClientRect().height - 28}` //idk why I have to subtract 28 to prevent canvas from growing on reset
              );
              ref.current.setAttribute(
                "width",
                `${ref.current.getBoundingClientRect().width}`
              );
              setup({ canvas: ref.current, ctx: ref.current.getContext("2d") });
            }
            setIsPaused(false);

            // timer = 0;
          }}
        >
          {" "}
          reset
        </button>
        <button
          typeof="button"
          onClick={() => {
            isPaused ? setIsPaused(false) : setIsPaused(true);
          }}
        >
          {isPaused ? "play" : "pause"}
        </button>
      </ButtonWrapper>
    </CanvasWrapper>
  );
};
