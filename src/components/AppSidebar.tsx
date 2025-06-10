import React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "./ui/sidebar";
import { Plane, Ticket, History, Bell, Settings, User2 } from "lucide-react";

const navLinks = [
  { label: "Dashboard", icon: Plane, active: true },
  { label: "My Bookings", icon: Ticket },
  { label: "Flight History", icon: History },
  { label: "Notifications", icon: Bell },
  { label: "Settings", icon: Settings },
];

const mockUser = {
  name: "Alex Morgan",
  status: "Premium Member",
};

const mockFlight = {
  code: "TK1865",
  from: "IST",
  to: "JFK",
  status: "Active",
};

export function AppSidebar() {
  return (
    <Sidebar className="border-r bg-muted/50 min-h-screen w-[250px] text-sm">
      <SidebarHeader className="flex flex-col items-start gap-2 px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 text-primary font-bold text-lg">
          <Plane className="w-5 h-5 text-blue-600" />
          FlightInsight
        </div>
        <div className="bg-blue-50 rounded-xl p-3 w-full mt-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
            <span>Your Flight</span>
            <span className="bg-blue-200 text-blue-700 px-2 py-0.5 rounded-md font-semibold text-[11px]">{mockFlight.status}</span>
          </div>
          <div className="font-semibold text-base text-blue-900 mb-1">{mockFlight.code}</div>
          <div className="flex items-center justify-between text-xs text-blue-900">
            <span>From<br /><span className="font-bold text-sm">{mockFlight.from}</span></span>
            <Plane className="w-4 h-4 mx-2 text-blue-400 rotate-90" />
            <span>To<br /><span className="font-bold text-sm">{mockFlight.to}</span></span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2 pt-2">
        <SidebarGroup>
          <SidebarGroupLabel className="pl-4 pb-1 text-xs text-muted-foreground font-semibold tracking-wide">Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navLinks.map((link) => (
                <SidebarMenuItem key={link.label}>
                  <SidebarMenuButton asChild isActive={!!link.active}>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-blue-100 text-[15px]">
                      <link.icon className="w-4 h-4 text-blue-700" />
                      <span className="truncate font-medium" style={{fontSize: '15px'}}>{link.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
     
    </Sidebar>
  );
}

export default AppSidebar; 