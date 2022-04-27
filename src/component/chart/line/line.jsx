import React from "react";
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export default function LineChart({option, data, label}){
  console.log('label', label)
  console.log('data', data)
    const LineData = {
        labels: label,
        datasets:[
          {
            label: `BTC Price`,
            data: data,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
          }
        ]
      }
   return  <Line option={option} data={LineData}></Line>
}