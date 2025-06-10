import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#f8fafc] rounded-2xl px-8 py-6 mb-2 border border-[#e5e7eb]">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Flight Dashboard</h1>
        <p className="text-sm text-muted-foreground">Real-time insights for your journey</p>
      </div>
      <div className="mt-4 md:mt-0 flex items-center w-full md:w-auto max-w-xs md:max-w-[260px]">
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="w-4 h-4" />
          </span>
          <Input
            type="text"
            placeholder="Search flight (e.g. TK1865)"
            className="pl-10 pr-3 py-2 rounded-lg border border-[#e5e7eb] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder:text-muted-foreground"
          />
        </div>
      </div>
    </div>
  );
} 