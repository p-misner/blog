import { Canvas, useFrame } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef } from "react";
import glsl from "glslify";
import { Vector2, Color } from "three";
import defaultVertShader from "./vector.glsl";
import curvedVertShader from "./curvedsinewave.glsl";
import gradientFragShader from "./gradient.glsl";
import movingVertShader from "./movingsinewave.glsl";
import lygiaNoiseShader from "./lygianoised.glsl";
import lygiaCNoiseShader from "./lygiacnoise.glsl";
import lygiaSNoiseShader from "./lygiasnoise.glsl";
import lygiaSubtle from "./subtlenoise.glsl";
import { resolveLygia } from "resolve-lygia";

const Cube = () => {
  const mesh = useRef(null);
  const uniforms = useMemo(
    () => ({
      u_test: {
        value: 1.0,
      },
    }),
    []
  );

  return (
    <mesh ref={mesh}>
      {/* <boxGeometry args={[2, 4, 1]} />
      <meshBasicMaterial color={"orange"} /> */}
      <boxGeometry args={[20, 20, 1]} />
      <shaderMaterial
        fragmentShader={gradientFragShader}
        vertexShader={defaultVertShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};
const CurvePlane = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 4, 0, 0]} scale={4}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={gradientFragShader}
        vertexShader={curvedVertShader}
        wireframe
      />
    </mesh>
  );
};
const MovingPlane = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef(null);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 4, 0, 0]}
      scale={10}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={gradientFragShader}
        vertexShader={movingVertShader}
        uniforms={uniforms}
        wireframe
      />
    </mesh>
  );
};

const Noised = ({ paperMode }: { paperMode: string }) => {
  const mousePosition = useRef({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e: MouseEvent) => {
    // console.log(mousePosition.current.x);
    mousePosition.current = {
      x: e.pageX / window.innerWidth,
      y: e.pageY / window.innerHeight,
    };
  }, []);

  const mesh = useRef(null);
  const uniforms = useMemo(
    () => ({
      u_test: {
        value: 0.2,
      },
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new Vector2(0.0, 0.0) },
      u_noisedScaler: {
        value: 10.0,
      },
    }),
    []
  );
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  useEffect(() => {
    if (mesh.current) {
      if (paperMode == "watercolor") {
        mesh.current.material.uniforms.u_noisedScaler.value = 20.0;
      } else if (paperMode == "concrete") {
        mesh.current.material.uniforms.u_noisedScaler.value = 100.0;
      } else if (paperMode == "coloredblur") {
        mesh.current.material.uniforms.u_noisedScaler.value = 1000.0;
      } else if (paperMode == "whitenoise") {
        mesh.current.material.uniforms.u_noisedScaler.value = 20.0;
      }
    }
  }, [paperMode]);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();

      mesh.current.material.uniforms.u_mouse.value = new Vector2(
        mousePosition.current.x,
        mousePosition.current.y
      );
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[20, 20, 1]} />
      {["watercolor", "concrete", "coloredblur"].includes(paperMode) && (
        <shaderMaterial
          fragmentShader={resolveLygia(lygiaNoiseShader)}
          vertexShader={defaultVertShader}
          uniforms={uniforms}
        />
      )}
      {["whitenoise"].includes(paperMode) && (
        <shaderMaterial
          fragmentShader={resolveLygia(lygiaCNoiseShader)}
          vertexShader={defaultVertShader}
          uniforms={uniforms}
        />
      )}
      {["clouds"].includes(paperMode) && (
        <shaderMaterial
          fragmentShader={resolveLygia(lygiaSubtle)}
          vertexShader={defaultVertShader}
          uniforms={uniforms}
        />
      )}
      {["test1", "test2"].includes(paperMode) && (
        <shaderMaterial
          fragmentShader={resolveLygia(lygiaSNoiseShader)}
          vertexShader={defaultVertShader}
          uniforms={uniforms}
        />
      )}
    </mesh>
  );
};

export function Grid({ paperMode }: { paperMode: string }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        opacity: ["test1", "whitenoise"].includes(paperMode) ? 0.7 : 0.3,
      }}
    >
      <Canvas>
        <pointLight position={[10, 10, 10]} />

        <Noised paperMode={paperMode} />

        {/* <MovingPlane /> */}
      </Canvas>
    </div>
  );
}
