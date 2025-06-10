import Image from "next/image";
import FlightTopInfo from "../components/FlightTopInfo";
import DashboardHeader from "../components/DashboardHeader";
import DelayRiskCard from "../components/DelayRiskCard";
import WeatherImpactCard from "../components/WeatherImpactCard";
import GateTerminalCard from "../components/GateTerminalCard";
import ArrivalForecastCard from "../components/ArrivalForecastCard";
import AircraftInfoCard from "../components/AircraftInfoCard";
import FlightRouteCard from "../components/FlightRouteCard";
import BaggageClaimCard from "../components/BaggageClaimCard";
import AirportTipsCard from "../components/AirportTipsCard";
import DashboardFooter from "../components/DashboardFooter";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[1400px] mx-auto p-6">
      <DashboardHeader />
      <FlightTopInfo />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <DelayRiskCard />
        <WeatherImpactCard />
        <GateTerminalCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <ArrivalForecastCard />
        <AircraftInfoCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <FlightRouteCard />
        <BaggageClaimCard />
        <AirportTipsCard />
      </div>
      
      <DashboardFooter />
    </div>
  );
}
