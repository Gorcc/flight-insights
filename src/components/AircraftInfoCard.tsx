import React from "react";
import { Card } from "./ui/card";
import { Plane } from "lucide-react";

export default function AircraftInfoCard() {
  return (
    <Card className="relative flex flex-col p-6 rounded-2xl shadow-sm bg-white min-w-[320px] h-full">
      <div className="absolute top-5 right-5">
        <Plane className="w-5 h-5 text-blue-400" />
      </div>
      <div className="font-semibold text-base text-blue-900 mb-2">Aircraft Information</div>
      <div className="flex gap-4 mb-2 items-center">
        <img src="https://cdn.turkishairlines.com/m/beaef56274a04ae/original/TK-Ucak-jpg.jpg" alt="Aircraft" className="w-28 h-20 object-contain rounded-lg bg-slate-50" />
        <div className="flex flex-col gap-1 text-sm">
          <div><span className="text-muted-foreground">Aircraft Type</span> <span className="font-semibold ml-1">Boeing 777-300ER</span></div>
          <div><span className="text-muted-foreground">Registration</span> <span className="font-semibold ml-1">TC-JJT</span></div>
          <div><span className="text-muted-foreground">Age</span> <span className="font-semibold ml-1">6.5 years</span></div>
          <div><span className="text-muted-foreground">Capacity</span> <span className="font-semibold ml-1">349 passengers</span></div>
        </div>
      </div>
      <div className="border-t border-slate-100 my-2" />
      <div className="flex gap-4 text-xs mt-2">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />Business (49)</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500 inline-block" />Premium Economy (28)</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-slate-400 inline-block" />Economy (272)</span>
      </div>
    </Card>
  );
} 