import React from "react";
import { Card } from "./ui/card";

export default function ArrivalForecastCard() {
  return (
    <Card className="relative flex flex-col p-6 rounded-2xl shadow-sm bg-white min-w-[320px] h-full">
      <div className="absolute top-5 right-5">
        <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-lg">AI Prediction</span>
      </div>
      <div className="font-semibold text-base text-blue-900 mb-2">Arrival Forecast</div>
      <div className="flex gap-8 mb-2">
        <div>
          <div className="text-xs text-muted-foreground">Scheduled Arrival</div>
          <div className="font-bold text-lg text-slate-900">23:15</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Predicted Arrival</div>
          <div className="font-bold text-lg text-green-600">23:10</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Deviation</div>
          <div className="font-bold text-lg text-green-500">-5 min</div>
        </div>
      </div>
      <svg width="100%" height="48" viewBox="0 0 320 48" className="mb-2">
        <polyline
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="2"
          points="0,30 60,28 120,26 180,24 240,22 300,40"
        />
        <polyline
          fill="none"
          stroke="#22c55e"
          strokeWidth="3"
          points="0,30 60,28 120,26 180,24 240,20 300,32"
        />
        <circle cx="300" cy="32" r="4" fill="#22c55e" />
      </svg>
      <div className="text-xs text-muted-foreground mt-1">
        Based on current conditions, we predict your flight will arrive 5 minutes ahead of schedule. Weather at destination is favorable for an on-time arrival.
      </div>
    </Card>
  );
} 