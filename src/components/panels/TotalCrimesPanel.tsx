import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const TotalCrimesPanel = () => {
  const [data, setData] = useState(null);
  const [timeRange, setTimeRange] = useState("week");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/total-crimes?timeRange=${timeRange}`);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [timeRange]);

  if (!data) return <div>Loading...</div>;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Crimes</CardTitle>
        <AlertTriangle className="h-4 w-4 text-red-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.totalCrimes}</div>
        <p className="text-xs text-gray-500">
          {data.trend > 0 ? "+" : ""}
          {data.trend} from last {timeRange}
        </p>
      </CardContent>
    </Card>
  );
};

export default TotalCrimesPanel;
