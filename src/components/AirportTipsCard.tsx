import React from "react";
import { Card } from "./ui/card";
import { Lightbulb, BadgeCheck, Clock, Utensils, Wifi } from "lucide-react";

export default function AirportTipsCard() {
  return (
    <Card className="relative flex flex-col p-6 rounded-2xl shadow-sm bg-white min-w-[260px] h-full">
      <div className="absolute top-5 right-5">
        <Lightbulb className="w-5 h-5 text-yellow-400" />
      </div>
      <div className="font-semibold text-base text-blue-900 mb-3">Airport Tips</div>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-3"><BadgeCheck className="w-5 h-5 text-purple-500 mt-0.5" /><span><span className="font-semibold text-slate-900">Lounge Access</span><br />Turkish Airlines Lounge is located near Gate B8, a 5-minute walk from your gate</span></li>
        <li className="flex items-start gap-3"><Clock className="w-5 h-5 text-blue-500 mt-0.5" /><span><span className="font-semibold text-slate-900">Security Wait Time</span><br />Current wait time at Terminal 2 security: ~15 minutes</span></li>
        <li className="flex items-start gap-3"><Utensils className="w-5 h-5 text-green-500 mt-0.5" /><span><span className="font-semibold text-slate-900">Dining Options</span><br />Several restaurants available near your gate, including Istanbul Café and Simit Sarayi</span></li>
        <li className="flex items-start gap-3"><Wifi className="w-5 h-5 text-red-400 mt-0.5" /><span><span className="font-semibold text-slate-900">Free Wi-Fi</span><br />Connect to &quot;IST-Free-WiFi&quot; network for 2 hours of complimentary access</span></li>
      </ul>
    </Card>
  );
} 