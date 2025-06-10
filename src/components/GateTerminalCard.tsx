import React from "react";
import { Card } from "./ui/card";
import { Map, DoorOpen, Building2, Clock } from "lucide-react";

export default function GateTerminalCard() {
  return (
    <Card className="relative flex flex-col p-6 rounded-2xl shadow-sm bg-white min-w-[260px] h-full">
      <div className="absolute top-5 right-5">
        <Map className="w-5 h-5 text-blue-400" />
      </div>
      <div className="font-semibold text-base text-blue-900 mb-4">Gate & Terminal</div>
      <div className="flex flex-col gap-3 mb-3">
        <div className="flex items-center gap-3">
          <span className="bg-blue-50 p-2 rounded-full"><DoorOpen className="w-4 h-4 text-blue-500" /></span>
          <span className="text-xs text-muted-foreground">Departure Gate</span>
          <span className="font-bold text-sm ml-auto">B12</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-blue-50 p-2 rounded-full"><Building2 className="w-4 h-4 text-blue-500" /></span>
          <span className="text-xs text-muted-foreground">Terminal</span>
          <span className="font-bold text-sm ml-auto">Terminal 2</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-blue-50 p-2 rounded-full"><Clock className="w-4 h-4 text-blue-500" /></span>
          <span className="text-xs text-muted-foreground">Boarding Time</span>
          <span className="font-bold text-sm ml-auto">14:45 <span className="text-xs font-normal text-muted-foreground">(in 45 min)</span></span>
        </div>
      </div>
      <div className="border-t border-slate-100 my-2" />
      <div className="text-xs text-muted-foreground mt-2">Walking Time to Gate<br /><span className="font-medium text-slate-700">~15 minutes from security</span></div>
    </Card>
  );
} 