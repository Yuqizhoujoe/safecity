import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddressInput from "@/components/inputs/AddressInput";
import TimeRangeSelector from "@/components/inputs/TimeRangeSelector";
import CrimeMap from "@/components/crime/CrimeMap";
import TotalCrimesPanel from "@/components/panels/TotalCrimesPanel";
import MostCommonCrimePanel from "@/components/panels/MostCommonCrimePanel";
import SafetyScorePanel from "@/components/panels/SafetyScorePanel";

const CrimeTrackerApp = () => {
  const [address, setAddress] = useState("");
  const [timeRange, setTimeRange] = useState("week");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Area Crime Tracker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <AddressInput address={address} setAddress={setAddress} />
            <TimeRangeSelector
              timeRange={timeRange}
              setTimeRange={setTimeRange}
            />
            <CrimeMap />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TotalCrimesPanel />
              <MostCommonCrimePanel />
              <SafetyScorePanel />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CrimeTrackerApp;
