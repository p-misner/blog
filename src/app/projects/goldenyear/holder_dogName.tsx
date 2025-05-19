// import { DogRecord } from "./page";
// import dogRecords from "./data/dogs.json";

// const allDogs: DogRecord[] = dogRecords;

// export async function getPostDetails(dogName: string) {
//   return allDogs.filter((x) => x.dogName == dogName)[0];
// }

// export async function getDogNames() {
//   return allDogs.map((x) => x.dogName);
// }

// export async function getStaticProps(dogDetails: DogRecord) {
//   const postData = await getPostDetails(dogDetails.dogName);
//   return {
//     props: {
//       postData,
//     },
//   };
// }
// export async function getStaticPaths() {
//   const paths = await getDogNames();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export default function DogDetails(dogDetails: DogRecord) {
//   alert("triggered");
//   return (
//     <div>
//       <h1> {dogDetails.dogName}</h1>
//       this is a dog details!!
//     </div>
//   );
// }
import React from "react";

interface Props {
  params: {
    dogNames: string;
  };
}

export default function DogPage({ params }: Props) {
  const { dogNames } = params;

  return (
    <div>
      hiiii
      <h1>{dogNames}</h1>
      {/* You can add more content about the specific dog here if needed */}
    </div>
  );
}
