"use client"

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface BarGraphProps {
  data: GraphData[]
}

type GraphData = {
  day: string;
  date: string;
  totalAmount: number;
}

const BarGraph: React.FC<BarGraphProps> = ({
  data
}) => {
  console.log(data)
  return (
    <></>
  );
}

export default BarGraph;