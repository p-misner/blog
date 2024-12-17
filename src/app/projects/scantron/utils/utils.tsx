export function TestColor({
  testType,
}: {
  testType: "scantron" | "SAT" | "STAR";
}) {
  switch (testType) {
    case "scantron":
      return "#007639";
    case "SAT":
      return "#F291E5";
    case "STAR":
      return "#686ec3";
    default:
      return "white";
  }
}

export function DarkTestColor({
  testType,
}: {
  testType: "scantron" | "SAT" | "STAR";
}) {
  switch (testType) {
    case "scantron":
      return "#003b1c;";
    case "SAT":
      return "#c466b8";
    case "STAR":
      return "#393e85";
    default:
      return "white";
  }
}
