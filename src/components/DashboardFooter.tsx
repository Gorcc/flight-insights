import React from "react";
import { Github } from "lucide-react";

export default function DashboardFooter() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-2 px-6 py-4 mt-8 bg-[#f8fafc] border-t border-[#e5e7eb] rounded-2xl text-xs text-muted-foreground">
      <div>
        <span className="font-medium text-slate-700">🚧 Work in progress:</span> Currently using mock data
      </div>
      <div className="flex items-center gap-2">
        <span>Currently developing...</span>
        <a
          href="https://github.com/gorcc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline text-slate-700"
        >
          <Github className="w-4 h-4" />
          github/gorcc
        </a>
      </div>
    </footer>
  );
} 