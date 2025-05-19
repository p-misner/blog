"use client";
import { useState } from "react";
import "./styles/reset.css";
import "./styles/fonts.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dogRecords from "./data/dogs.json";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/Timeline";
// import DogPage from './components/DogPage';

export interface DogRecord {
  _id: {
    $oid: string;
  };
  dogName: string;
  startDate: string;
  endDate: string;
  imgSrc: string;
}

const allDogs: DogRecord[] = dogRecords;

function App() {
  const [isLoading, setLoading] = useState(false);
  const [records, setRecords] = useState<DogRecord[]>(allDogs);

  const router = useRouter();
  const urlSlug = "/projects/goldenyear";
  return (
    <div>
      {/* <Link href="/">Home</Link> */}
      {/* {isLoading ? (
        <p>Loading...</p>
      ) : (
        records.map((record, index) => (
          <div key={record.dogName.replace(/\s/g, "")}>
            <Link href={`${urlSlug}/${record.dogName.replace(/\s/g, "")}`}>
              dog: {record.dogName}
            </Link>
          </div>
        ))
      )} */}
      <HomePage isLoading={isLoading} records={records} />
    </div>
  );
}

export default App;
