import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const MostCommonCrimePanel = () => {
  const [data, setData] = useState<{
    mostCommonCrime: string;
    percentage: number;
  } | null>(null);
  const [timeRange, setTimeRange] = useState("week");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `/api/most-common-crime?timeRange=${timeRange}`
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [timeRange]);

  if (!data) return <div>Loading...</div>;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Most Common Crime</CardTitle>
        <Calendar className="h-4 w-4 text-blue-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.mostCommonCrime}</div>
        <p className="text-xs text-gray-500">
          {data.percentage}% of all crimes
        </p>
      </CardContent>
    </Card>
  );
};

export default MostCommonCrimePanel;
