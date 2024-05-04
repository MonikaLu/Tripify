import { Button } from "@nextui-org/react";

export default function Home() {
  const dates = ["23.06.2024", "24.06.2024", "25.06.2024"];

  const tripLocation_city = "Rome";
  const tripLocation_country = "Italy";
  return (
    <div className="justify-center flex flex-col items-center space-y-2.5">
      <div>
        <h1 className="prose prose-xl">
          {tripLocation_city} {", "}
          {tripLocation_country}
        </h1>
      </div>
      <div className="items-center space-x-2.5 ">
        {dates.map((_date, index) => (
          <Button
            key={index + 1}
            variant="bordered"
            className="border-1.5 border-secondary text-primary rounded-full"
          >
            Day {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}
