"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect, useRef, useState } from "react";
import { PageWrapper, TextSectionWrapper } from "./style/articleStyle";
import { BarChart } from "./components/barChart";
import {
  ArticleTitle,
  CarPath,
  ColorChangingRect,
} from "./components/introAnimation";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const contentFirst = [
  "At the end of the 2024 season, there are ten teams on the grid, with rumors of an eleventh set to join in 2026: Ferrari, McLaren, Red Bull, Mercedes, Aston Martin, Alpine, Visa Cash App RB, Sauber, Haas, and Williams. ",
  "But much like the driver line-ups, the teams themselves are ever-changing, and a team that dominates one season can disappear from the sport entirely or shed its old identity and step into a new team name the same way it changes liveries. Let’s take a look back in time and see how the 10 teams on the grid came to be. ",
  // "At the end of the 2024 season, all teams that started the season completed the season.",
];
const contentSecond = [
  "Four teams on the grid: Ferrari, Williams, McLaren and Haas, have raced under their own name as the title constructor since they got their start in Formula 1. Though Williams has had partnerships in the past (they were with Williams-BMW from 2000 to 2005), they have always remained the title constructor. Of these teams, only Ferrari has the distinction of being on the grid since the first season of Formula 1 in 1950.",
];

const contentThird = [
  "Sauber, a long-standing name in Formula 1 with roots tracing back to 1993, will race under the name 'Stake F1 Team Kick Sauber' for the 2025 season. While the Sauber name has been consistent, the team has undergone several identity changes, including stints as BMW Sauber and Alfa Romeo. This 2025 iteration is their final year under the Stake F1 Team Kick Sauber banner before becoming the Audi works team from 2026.",
  "Racing Bulls will compete in Formula 1 for the first time under this name in the 2025 season, having previously raced as 'Visa Cash App RB' in 2024. This team has a rich lineage, originally entering as Minardi in 1985 before being acquired by Red Bull in 2006 and rebranded as Scuderia Toro Rosso. From 2020 to 2023, they operated as Scuderia AlphaTauri.",
];

const contentFourth = [
  " Aston Martin currently stands out as the constructor with the most past identities. Tracing its lineage through the decades, this team has raced under six different names: Jordan (1991-2005), Midland F1 Racing (2006), Spyker F1 Team (2007), Force India (2008-2018), Racing Point (2019-2020), and finally Aston Martin (2021-present).",
];

const contentFifth = [
  "Over the years, some team names on the Formula 1 grid have remained consistent, while others have undergone significant transformations. Dive deeper into the past identities of the current teams on the grid to uncover their unique journeys through the sport's history.",
];
const InfoCard = ({ content, label }: { content: string[]; label: string }) => {
  const infoCardRef = useRef(null);
  useGSAP(() => {
    //this one is to fade out on exit
    gsap.to(infoCardRef.current, {
      scrollTrigger: {
        // pinnedContainer: ".barchartwrapper",
        trigger: infoCardRef.current,
        start: "top -5%",
        end: "top 0%",
        scrub: 1,
      },
      opacity: 0.1,
    });

    //this is to change items on entering screen
    gsap.to(infoCardRef.current, {
      scrollTrigger: {
        // pinnedContainer: ".barchartwrapper",
        trigger: infoCardRef.current,
        start: "top 80%",
        end: "top 80%",
        scrub: 1,
        onEnterBack: () => InfoTriggersReverse(label),
        onEnter: () => InfoTriggers(label),
        markers: true,
        pin: true,
        pinSpacing: false,
      },
    });
  });
  return (
    <TextSectionWrapper ref={infoCardRef} className={label}>
      {content.map((x, i) => (
        <p key={`para${i}`}>{x}</p>
      ))}
    </TextSectionWrapper>
  );
};

function InfoTriggers(label: string) {
  let elementsAll = document.querySelectorAll(".singleyear");
  elementsAll.forEach((element) => {
    element.setAttribute("opacity", "0.1");
  });
  if (label == "first") {
    let elements = document.querySelectorAll(".item2024");
    elements.forEach((element) => {
      element.setAttribute("fill", "red");
      element.setAttribute("opacity", "1");
      element.classList.remove("opaque");
    });
  } else if (label == "second") {
    document.querySelectorAll(".item2024").forEach((element) => {
      element.setAttribute("opacity", "0.6");
    });

    let sameNameTeams = ".Haas, .Ferrari, .McLaren, .Williams";
    let elements = document.querySelectorAll(sameNameTeams);
    elements.forEach((element) => {
      element.setAttributeNS(null, "fill", "blue");
      element.setAttribute("opacity", "1");
    });
  } else if (label == "third") {
    document
      .querySelectorAll(".item2024, .Haas, .Ferrari, .McLaren, .Williams")
      .forEach((element) => {
        element.setAttribute("opacity", "0.6");
      });

    let elements = document.querySelectorAll(
      ".Sauber.currentTeam, .Racing.currentTeam"
    );
    elements.forEach((element) => {
      element.setAttributeNS(null, "fill", "magenta");
      element.setAttribute("opacity", "1");

      element.classList.remove("opaque");
    });
  } else if (label == "fourth") {
    document
      .querySelectorAll(
        ".item2024, .Haas, .Ferrari, .McLaren, .Williams,  .Sauber.currentTeam, .Racing.currentTeam"
      )
      .forEach((element) => {
        element.setAttribute("opacity", "0.6");
      });

    let elements = document.querySelectorAll(".Aston");
    elements.forEach((element) => {
      // element.setAttributeNS(null, "fill", "yellow");
      element.setAttributeNS(null, "opacity", "1");

      element.classList.remove("opaque");
    });
  } else if (label == "lastcard") {
    let elements = document.querySelectorAll(".singleyear");
    //figure out why ferrari, williams etc still at 0.6
    elements.forEach((element) => {
      element.setAttribute("opacity", "1");
    });
  }
}
function InfoTriggersReverse(label: string) {
  let elements;
  switch (label) {
    case "first":
      elements = document.querySelectorAll(".item2024");
      // Loop through the selected elements and change their background color
      elements.forEach((element) => {
        element.setAttributeNS(null, "fill", "gray");
        element.classList.add("opaque");
      });
    case "second":
      elements = document.querySelectorAll(".currentTeam");
      // Loop through the selected elements and change their background color
      elements.forEach((element) => {
        element.setAttributeNS(null, "fill", "gray");
        element.classList.add("opaque");
      });
    default:
      break;
  }
}

export default function F1TeamHistory() {
  return (
    <PageWrapper className="wrapper">
      <CarPath />
      <ColorChangingRect />
      <ArticleTitle />
      <BarChart />
      <InfoCard content={contentFirst} label="first" />
      <InfoCard content={contentSecond} label="second" />
      <InfoCard content={contentThird} label="third" />
      <InfoCard content={contentFourth} label="fourth" />
      <InfoCard content={contentFifth} label="lastcard" />
      <div style={{ backgroundColor: "white", paddingTop: "50vh" }}>
        <div style={{ backgroundColor: "orange", height: "500px" }}></div>
      </div>
    </PageWrapper>
  );
}
