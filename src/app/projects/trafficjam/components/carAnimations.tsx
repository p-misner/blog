import { CarSVG } from "../style/trafficJamStyle";

export const Car1 = () => {
  return (
    <CarSVG
      viewBox="0 0 186 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 70.8276V48.4556L50.8159 1H121.766V38.795H185V70.8276H1Z"
        fill="#A1A1A1"
        stroke="black"
      />
      <circle r={21} cx={38} cy={79} fill="#D9D9D9" stroke="black" />
      <circle r={21} cx={136} cy={79} fill="#D9D9D9" stroke="black" />
    </CarSVG>
  );
};

export const Car2 = () => {
  return (
    <CarSVG
      viewBox="0 0 186 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 70.8276V48.4556L50.8159 1H121.766V38.795H185V70.8276H1Z"
        fill="#6e6e6e"
        stroke="black"
      />
      <circle r={21} cx={38} cy={79} fill="#D9D9D9" stroke="black" />
      <circle r={21} cx={136} cy={79} fill="#D9D9D9" stroke="black" />
    </CarSVG>
  );
};

export const Car3 = () => {
  return (
    <CarSVG
      viewBox="0 0 186 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 70.8276 L50.8159 1H121.766V38.795H185V70.8276H1Z"
        fill="#A1A1A1"
        stroke="black"
      />
      <circle r={21} cx={38} cy={79} fill="#D9D9D9" stroke="black" />
      <circle r={21} cx={136} cy={79} fill="#D9D9D9" stroke="black" />
    </CarSVG>
  );
};

export function returnRandomCar() {
  const carOptions = [Car1, Car2, Car3];
  const randomIndex = Math.floor(Math.random() * carOptions.length);
  const RandomCarToDisplay = carOptions[randomIndex];
  return <RandomCarToDisplay />;
}
