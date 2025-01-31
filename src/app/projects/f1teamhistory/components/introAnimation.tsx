// import { useRef, useState } from "react";
// import { ArticleTitleWrapper, RectBox, SVGBox } from "../style/articleStyle";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";

// const carPathString =
//   "M17.2665 9.00017L1307 244.339L633 446L1638.5 557.5L358.124 769.014L19.8949 898.284C-29.5457 932.15 -133.057 808.555 17.2662 871.874C167.589 935.194 1317.15 1008.2 1695 1022.5";
// const carPathLength = 6430;

// export const ColorChangingRect = () => {
//   const rectRef = useRef(null);
//   useGSAP(() => {
//     gsap.to(rectRef.current, {
//       motionPath: {
//         path: ".carpath",
//         // autoRotate: true,
//         align: ".carpath",
//       },
//       scrollTrigger: {
//         trigger: ".wrapper",
//         endTrigger: ".barchartwrapper",
//         start: "top-=100 top",
//         end: "top 80%",
//         scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//         // markers: true,
//         // pin: true,
//         // pinSpacing: false,
//       },
//       transformOrigin: "50% 50%",
//       backgroundColor: "red",
//       // duration: 7,
//     });
//   });
//   return <RectBox ref={rectRef} />;
// };

// export const CarPath = () => {
//   const carRef = useRef(null);
//   useGSAP(() => {
//     gsap.to(carRef.current, {
//       scrollTrigger: {
//         trigger: ".wrapper",
//         endTrigger: ".barchartwrapper",
//         start: "top-=100 top",
//         end: "top 80%",
//         scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//         // markers: true,
//         // pin: true,
//         // pinSpacing: false,
//       },
//       transformOrigin: "50% 50%",
//       strokeDasharray: `${carPathLength} 10000`,
//       stroke: "lightgrey",
//       // duration: 7,
//       // x: endX,
//     });
//   });

//   return (
//     <SVGBox
//       viewBox="0 0 1512 1112"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       preserveAspectRatio="xMidYMid meet"
//     >
//       <path
//         ref={carRef}
//         className="carpath"
//         d={carPathString}
//         stroke="lightgrey"
//         strokeWidth="200"
//         strokeLinecap="square"
//         strokeLinejoin="round"
//         strokeDasharray="1 20000"
//       />
//     </SVGBox>
//   );
// };

// export const ArticleTitle = () => {
//   const articleRef = useRef(null);

//   return (
//     <ArticleTitleWrapper ref={articleRef}>
//       <h1> Behind the Name</h1>
//       <h2>The history of F1 team constructors</h2>
//     </ArticleTitleWrapper>
//   );
// };
