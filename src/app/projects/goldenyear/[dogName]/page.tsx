import React from "react";
import DogPageContents from "../components/DogPage";

import dogRecords from "../data/dogs.json";
import dogDetails from "../data/dogDetails.json";
import { DogDetails } from "../components/utils";

interface Props {
  params: {
    dogName: string;
  };
}

// Define the generateStaticParams function
export async function generateStaticParams() {
  const uniqueDogNames = new Set<string>(); // Use a Set to ensure uniqueness
  const params = [];
  for (const record of dogRecords) {
    const processedName = record.dogName.replace(/\s/g, ""); // Remove spaces
    if (!uniqueDogNames.has(processedName)) {
      // Only add if not already present
      uniqueDogNames.add(processedName);
      params.push({ dogName: processedName });
    }
  }

  return params;
}

export default function DogPage({ params }: Props) {
  const { dogName } = params;

  const dogDetail: DogDetails = dogDetails.filter(
    (x) => x.dogName.replace(/\s/g, "") == dogName
  )[0];
  let i = parseInt(dogDetail.fosterNum);
  return (
    <div>
      {/* <h1>{dogName}</h1>
      {dogDetail.fosterNum}, {i}
      hiii! */}
      <DogPageContents
        dogName={dogName}
        nextDog={
          parseInt(dogDetail.fosterNum) < dogRecords.length
            ? dogDetails.filter((x) => parseInt(x.fosterNum) == i + 1)[0]
                .dogName
            : "Last Dog"
        }
        timelineRecords={dogRecords}
        record={dogDetail}
      />
      {/* You can add more content about the specific dog here if needed */}
    </div>
  );
}
