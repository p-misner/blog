
// #ifdef GL_ES
// precision mediump float;
// #endif

// uniform float   u_noisedScaler;
// uniform float   u_time;

// #include "lygia/generative/snoise.glsl"

// void main(void) {
//     vec4 color = vec4(vec3(0.0), 1.0);
//     vec2 pixel = vec2(1.0)/80.0;
//     vec2 st = gl_FragCoord.xy * pixel;

//        float d2 = snoise(vec2(st * 5. + u_time)) * 0.5 + 0.5;
//     float d3 = snoise(vec3(st * 5., u_time)) * 0.5 + 0.5;
    
    
//     color += mix(d2, d3, step(0.5, st.x));

//     gl_FragColor = vec4(d3*.2,d3*.4,d3*.9, 1.0);
// }

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

