import React from "react";
import { Card } from "./ui/card";
import { Lock, Info, ArrowRightLeft, CheckCircle2 } from "lucide-react";

export default function BaggageClaimCard() {
  return (
    <Card className="relative flex flex-col p-6 rounded-2xl shadow-sm bg-white min-w-[260px] h-full">
      <div className="absolute top-5 right-5">
        <Lock className="w-5 h-5 text-blue-400" />
      </div>
      <div className="font-semibold text-base text-blue-900 mb-2">Baggage Claim</div>
      <div className="bg-blue-50 rounded-lg p-3 flex items-center gap-3 mb-3">
        <Info className="w-5 h-5 text-blue-500" />
        <div>
          <div className="font-semibold text-blue-900">Carousel 4</div>
          <div className="text-xs text-muted-foreground">Terminal 2, Lower Level</div>
        </div>
      </div>
      <ul className="text-sm space-y-1 mb-2">
        <li className="flex items-center gap-2 text-slate-700"><ArrowRightLeft className="w-4 h-4 text-slate-400" /> Est. time to carousel: 15-20 min after arrival</li>
        <li className="flex items-center gap-2 text-slate-700"><ArrowRightLeft className="w-4 h-4 text-slate-400" /> Follow signs to baggage claim area</li>
        <li className="flex items-center gap-2 text-slate-700"><ArrowRightLeft className="w-4 h-4 text-slate-400" /> Baggage delivery priority: Business Class</li>
      </ul>
      <div className="mt-2 text-green-600 text-sm font-medium flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4" /> Your baggage is loaded on the aircraft
      </div>
    </Card>
  );
} 