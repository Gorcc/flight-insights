import React from "react";
import { Card } from "./ui/card";
import { Wind, CloudRain, Thermometer, Eye, Cloud,Sun } from "lucide-react";

export default function WeatherImpactCard() {
  return (
    <div className="flex flex-col gap-6">
    <Card className="relative flex flex-col p-6 rounded-2xl shadow-sm bg-white min-w-[260px] h-full">
      <div className="absolute top-5 right-5">
        <Cloud className="w-5 h-5 text-blue-400" />
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-blue-50 p-2 rounded-full">
          <Wind className="w-6 h-6 text-blue-500" />
        </span>
        <div>
          <div className="font-semibold text-base text-blue-900 leading-tight">Light Turbulence at Departure</div>
          <div className="text-xs text-muted-foreground">Expected during mid-flight</div>
        </div>
      </div>
      <ul className="mt-2 space-y-1 text-sm">
        <li className="flex items-center gap-2 text-slate-700"><CloudRain className="w-4 h-4 text-slate-400" /> No precipitation expected</li>
        <li className="flex items-center gap-2 text-slate-700"><Thermometer className="w-4 h-4 text-slate-400" /> Clear conditions at departure</li>
        <li className="flex items-center gap-2 text-slate-700"><Eye className="w-4 h-4 text-slate-400" /> Good visibility at arrival</li>
      </ul>
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-blue-50 p-2 rounded-full">
          <Sun className="w-6 h-6 text-blue-500" />
        </span>
        <div>
          <div className="font-semibold text-base text-blue-900 leading-tight">Clear Skies at Arrival</div>
          <div className="text-xs text-muted-foreground">Expected during mid-flight</div>
        </div>
        
      </div>
      <ul className="mt-2 space-y-1 text-sm">
        <li className="flex items-center gap-2 text-slate-700"><CloudRain className="w-4 h-4 text-slate-400" /> No precipitation expected</li>
        <li className="flex items-center gap-2 text-slate-700"><Thermometer className="w-4 h-4 text-slate-400" /> Clear conditions at departure</li>
        <li className="flex items-center gap-2 text-slate-700"><Eye className="w-4 h-4 text-slate-400" /> Good visibility at arrival</li>
      </ul>
    </Card>
    </div>
  );
} 