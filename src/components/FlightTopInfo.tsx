import React from "react";
import { Card } from "./ui/card";
import { CheckCircle, DoorOpen, Luggage, Sun } from "lucide-react";

const infoCards = [
  {
    title: "Flight Status",
    icon: CheckCircle,
    main: "On Time",
    sub: "Scheduled departure in 1h 45m",
  },
  {
    title: "Boarding",
    icon: DoorOpen,
    main: "Gate B12",
    sub: "Terminal 2 • Starts in 45m",
  },
  {
    title: "Baggage",
    icon: Luggage,
    main: "Carousel 4",
    sub: "Terminal 2 • Lower Level",
  },
  {
    title: "Weather at JFK",
    icon: Sun,
    main: "72°F / 22°C",
    sub: "Partly cloudy • Light winds",
  },
];

export default function FlightTopInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {infoCards.map((card) => {
        const Icon = card.icon;
        return (
          <Card key={card.title} className="relative flex flex-col gap-1 p-6 rounded-xl shadow-sm bg-white min-w-[180px]">
            <div className="absolute top-4 right-4">
              <Icon className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-xs text-muted-foreground font-medium mb-1">{card.title}</div>
            <div className="text-xl font-semibold text-blue-900 leading-tight mb-1">{card.main}</div>
            <div className="text-sm text-muted-foreground mt-0.5">{card.sub}</div>
          </Card>
        );
      })}
    </div>
  );
} 