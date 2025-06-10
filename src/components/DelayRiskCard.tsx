import React from "react";
import { Card } from "./ui/card";

export default function DelayRiskCard() {
  return (
    <Card className="relative flex flex-col items-center p-6 rounded-2xl shadow-sm bg-white min-w-[260px] h-full">
      <div className="absolute top-5 right-5">
        <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-lg">AI Powered</span>
      </div>
      <div className="w-28 h-28 my-2 flex items-center justify-center">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" stroke="#e5e7eb" strokeWidth="8" fill="none" />
          <circle
            cx="50" cy="50" r="42"
            stroke="#22c55e"
            strokeWidth="8"
            fill="none"
            strokeDasharray={2 * Math.PI * 42}
            strokeDashoffset={2 * Math.PI * 42 * (1 - 0.12)}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s' }}
          />
          <text x="50" y="54" textAnchor="middle" fontSize="2em" fill="#0f172a" fontWeight="bold">12%</text>
          <text x="50" y="70" textAnchor="middle" fontSize="0.9em" fill="#64748b">Risk</text>
        </svg>
      </div>
      <div className="text-green-600 font-semibold text-base mb-1">Low probability of delay</div>
      <div className="text-xs text-center text-muted-foreground max-w-[220px]">Based on historical data, weather, and airport conditions</div>
    </Card>
  );
} 