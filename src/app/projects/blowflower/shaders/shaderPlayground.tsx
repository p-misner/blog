import { Canvas, useFrame } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { Vector2 } from "three";
// import defaultVertShader from "!!raw-loader!./vector.glsl";

// import lygiaNoiseShader from "!!raw-loader!./lygianoised.glsl";
// import lygiaCNoiseShader from "!!raw-loader!./lygiacnoise.glsl";
// import lygiaSNoiseShader from "!!raw-loader!./lygiasnoise.glsl";
// import lygiaSubtle from "!!raw-loader!./subtlenoise.glsl";
import { resolveLygia } from "resolve-lygia";

// const Cube = () => {
//   const mesh = useRef(null);
//   const uniforms = useMemo(
//     () => ({
//       u_test: {
//         value: 1.0,
//       },
//     }),
//     []
//   );

//   return (
//     <mesh ref={mesh}>
//       {/* <boxGeometry args={[2, 4, 1]} />
//       <meshBasicMaterial color={"orange"} /> */}
//       <boxGeometry args={[20, 20, 1]} />
//       <shaderMaterial
//         fragmentShader={gradientFragShader}
//         vertexShader={defaultVertShader}
//         uniforms={uniforms}
//       />
//     </mesh>
//   );
// };
// const CurvePlane = () => {
//   return (
//     <mesh position={[0, 0, 0]} rotation={[-Math.PI / 4, 0, 0]} scale={4}>
//       <planeGeometry args={[1, 1, 32, 32]} />
//       <shaderMaterial
//         fragmentShader={gradientFragShader}
//         vertexShader={curvedVertShader}
//         wireframe
//       />
//     </mesh>
//   );
// };
// const MovingPlane = () => {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef<any>(null);

//   const uniforms = useMemo(
//     () => ({
//       u_time: {
//         value: 0.0,
//       },
//     }),
//     []
//   );

//   useFrame((state) => {
//     const { clock } = state;
//     if (mesh.current) {
//       mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
//     }
//   });

//   return (
//     <mesh
//       ref={mesh}
//       position={[0, 0, 0]}
//       rotation={[-Math.PI / 4, 0, 0]}
//       scale={10}
//     >
//       <planeGeometry args={[1, 1, 32, 32]} />
//       <shaderMaterial
//         fragmentShader={gradientFragShader}
//         vertexShader={movingVertShader}
//         uniforms={uniforms}
//         wireframe
//       />
//     </mesh>
//   );
// };

const defaultVertShader = `varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
`;
const lygiaNoiseShader = `#ifdef GL_ES
precision mediump float;
#endif

// uniform vec2    u_resolution;
uniform float   u_time;
uniform float   u_noisedScaler;

#include "lygia/generative/noised.glsl"

void main(void) {
    vec4 color = vec4(vec3(0.0), 1.0);
    vec2 pixel = vec2(1.0)/u_noisedScaler;
    vec2 st = gl_FragCoord.xy * pixel;

    vec2 d2 = noised(vec2(st * 5. + 1.0)).yz * 0.5 + 0.5;
    vec3 d3 = noised(vec3(st * 5., 1.0)).yzw * 0.5 + 0.5;
    
    // color.rgb += mix(vec3(d2,0.0), d3, step(0.5, st.x));
    // color.rgb += mix(vec3(d2,0.0), vec3(d2,0.0), vec3(d2,0.0));
    // color.rgb=d3
    gl_FragColor = vec4(d3,1.0);
}`;
const lygiaCNoiseShader = `#ifdef GL_ES
precision mediump float;
#endif

// uniform vec2    u_resolution;
uniform float   u_time;
uniform float   u_noisedScaler;

#include "lygia/generative/cnoise.glsl"

void main(void) {
    vec4 color = vec4(vec3(0.0), 1.0);
    vec2 pixel = vec2(1.0)/u_noisedScaler;
    vec2 st = gl_FragCoord.xy * pixel;

    // float d2 = cnoise(vec2(st * 5. + u_time)) * 0.5 + 0.5;
    float d3 = cnoise(vec3(st * 5., mod(u_time, 1.0)*0.4+0.4)) * 0.5 + 0.5;
    
    // color += mix(d2, d3, step(0.5, st.x));

    gl_FragColor = vec4(d3, d3,d3,1.0);
}`;
const lygiaSNoiseShader = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2    u_noiseScaler;
uniform float   u_time;

#include "lygia/generative/worley.glsl"

void main(void) {
    vec4 color = vec4(vec3(0.0), 1.0);
    vec2 pixel = vec2(1.0)/500.0;
    vec2 st = gl_FragCoord.xy * pixel;

    float d2 = worley(vec2(st*10. + u_time));
    float d3 = worley(vec3(st*10., u_time*.2));
    
    color += mix(d2, d3, step(0.5, st.x));

    gl_FragColor = vec4(d3*.4,d3*.7,d3*.9,0.40);
}

`;
const lygiaSubtle = `#ifdef GL_ES
precision mediump float;
#endif

// uniform vec2    u_resolution;
uniform float   u_time;
uniform float   u_noisedScaler;

#include "lygia/generative/cnoise.glsl"

void main(void) {
    vec4 color = vec4(vec3(0.0), 1.0);
    vec2 pixel = vec2(1.0)/40.0;
    vec2 st = gl_FragCoord.xy * pixel;

    // float d2 = cnoise(vec2(st * 5. + u_time)) * 0.5 + 0.5;
    float d3 = cnoise(vec3(st * 8., 0.2)) * 0.5 + 0.4;
    
    // color += mix(d2, d3, step(0.5, st.x));

    gl_FragColor = vec4(d3, d3,d3,.6);
}`;

const Noised = ({ paperMode }: { paperMode: string }) => {
  const mousePosition = useRef({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e: MouseEvent) => {
    // console.log(mousePosition.current.x);
    mousePosition.current = {
      x: e.pageX / window.innerWidth,
      y: e.pageY / window.innerHeight,
    };
  }, []);

  const mesh = useRef<any>(null);
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
        opacity: ["test1", "whitenoise"].includes(paperMode)
          ? 0.7
          : paperMode == "clouds"
          ? 0.2
          : 0.3,
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
