import React from "react";
import { Card } from "./ui/card";
import { Share2 } from "lucide-react";

export default function FlightRouteCard() {
  return (
    <Card className="relative flex flex-col p-6 rounded-2xl shadow-sm bg-white min-w-[260px] h-full">
      <div className="absolute top-5 right-5">
        <Share2 className="w-5 h-5 text-blue-400" />
      </div>
      <div className="font-semibold text-base text-blue-900 mb-2">Flight Route</div>
      <div className="flex flex-col items-center mb-2">
        <svg viewBox="0 0 220 90" width="200" height="80" className="mb-2">
          <ellipse cx="110" cy="45" rx="100" ry="40" fill="#f1f5f9" />
          <path d="M30,70 Q110,10 190,70" stroke="#38bdf8" strokeWidth="3" fill="none" />
          <circle cx="30" cy="70" r="4" fill="#2563eb" />
          <circle cx="190" cy="70" r="4" fill="#2563eb" />
          <text x="30" y="85" fontSize="10" textAnchor="middle" fill="#64748b">IST</text>
          <text x="190" y="85" fontSize="10" textAnchor="middle" fill="#64748b">JFK</text>
          <polygon points="110,35 115,45 110,55 105,45" fill="#2563eb" />
        </svg>
        <div className="flex justify-between w-full text-xs text-muted-foreground">
          <span>Istanbul (IST)<br /><span className="font-semibold text-slate-900">13:30</span></span>
          <span>Flight Time<br /><span className="font-semibold text-slate-900">10h 45m</span></span>
          <span>New York (JFK)<br /><span className="font-semibold text-slate-900">23:15</span></span>
        </div>
      </div>
    </Card>
  );
} 