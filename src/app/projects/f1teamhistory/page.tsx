export default function Test() {
  return <div> hi</div>;
}

// "use client";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { useEffect, useRef, useState } from "react";
// import { PageWrapper, TextSectionWrapper } from "./style/articleStyle";
// import { BarChart } from "./components/barChart";
// import {
//   ArticleTitle,
//   CarPath,
//   ColorChangingRect,
// } from "./components/introAnimation";

// gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// const contentFirst = [
//   "Today there are ten teams on the grid, with rumors of an eleventh  set to join in 2026: Ferrari, McLaren, Red Bull, Name, Name, Name and Name, Name, Name and Name. ",
//   "But much like the driver line ups, the teams themselves are ever changing and a team that dominates one season can disappear from the sport entirely or shed its old identity and step into a new team name the same way it changes liveries. Let’s take a look back in time and see how the 10 teams on the grid came to be. ",
//   "At the end of 2024 season, all teams that started the season completed the season.",
// ];
// const contentSecond = [
//   "Four teams on teh grid: Ferrari, Williams, McLaren and Haas, have raced under their own name since they got their start in Formula 1. Though Williams has had partnerships in the past (they were with BMW from XXXX to XXXX), they ahve alwasys remained the title constructor. ",
// ];
// const contentThird = ["In 2024 Alpha Tauri changed to Cash App Racing Bulls"];
// const InfoCard = ({ content, label }: { content: string[]; label: string }) => {
//   const infoCardRef = useRef(null);
//   useGSAP(() => {
//     //this one is to fade out on exit
//     gsap.to(infoCardRef.current, {
//       scrollTrigger: {
//         // pinnedContainer: ".barchartwrapper",
//         trigger: infoCardRef.current,
//         start: "top -5%",
//         end: "top 0%",
//         scrub: 1,
//       },
//       opacity: 0.1,
//     });

//     //this is to change items on entering screen
//     gsap.to(infoCardRef.current, {
//       scrollTrigger: {
//         // pinnedContainer: ".barchartwrapper",
//         trigger: infoCardRef.current,
//         start: "top 80%",
//         end: "top 80%",
//         scrub: 1,
//         onEnterBack: () => InfoTriggersReverse(label),
//         onEnter: () => InfoTriggers(label),
//         markers: true,
//         pin: true,
//         pinSpacing: false,
//       },
//     });
//   });
//   return (
//     <TextSectionWrapper ref={infoCardRef} className={label}>
//       {content.map((x, i) => (
//         <p key={`para${i}`}>{x}</p>
//       ))}
//     </TextSectionWrapper>
//   );
// };

// function InfoTriggers(label: string) {
//   if (label == "first") {
//     let elements = document.querySelectorAll(".item2024");
//     // Loop through the selected elements and change their background color
//     elements.forEach((element) => {
//       element.setAttributeNS(null, "fill", "red");
//       element.classList.remove("opaque");
//     });
//   } else if (label == "second") {
//     let elements = document.querySelectorAll(".currentTeam");
//     // Loop through the selected elements and change their background color
//     elements.forEach((element) => {
//       element.setAttributeNS(null, "fill", "blue");
//       element.classList.remove("opaque");
//     });
//   }
// }
// function InfoTriggersReverse(label: string) {
//   let elements;
//   switch (label) {
//     case "first":
//       elements = document.querySelectorAll(".item2024");
//       // Loop through the selected elements and change their background color
//       elements.forEach((element) => {
//         element.setAttributeNS(null, "fill", "gray");
//         element.classList.add("opaque");
//       });
//     case "second":
//       elements = document.querySelectorAll(".currentTeam");
//       // Loop through the selected elements and change their background color
//       elements.forEach((element) => {
//         element.setAttributeNS(null, "fill", "gray");
//         element.classList.add("opaque");
//       });
//     default:
//       break;
//   }
// }

// export default function F1TeamHistory() {
//   return (
//     <PageWrapper className="wrapper">
//       <CarPath />
//       <ColorChangingRect />
//       <ArticleTitle />
//       <BarChart />
//       <InfoCard content={contentFirst} label="first" />
//       <InfoCard content={contentSecond} label="second" />
//       <InfoCard content={contentSecond} label="third" />
//       <InfoCard content={["placeholder"]} label="lastcard" />
//       <div style={{ backgroundColor: "white", paddingTop: "50vh" }}>
//         <div style={{ backgroundColor: "orange", height: "500px" }}></div>
//       </div>
//     </PageWrapper>
//   );
// }
