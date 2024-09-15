import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import AddressInput from "./AddressInput";
import TimeRangeSelector from "./TimeRangeSelector";
import CrimeMap from "./CrimeMap";
import CrimeStatistics from "./CrimeStatistics";

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
            <CrimeStatistics timeRange={timeRange} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CrimeTrackerApp;
