import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  CustomAxisTick,
  Tooltip,
  ResponsiveContainer
} from "recharts";

class ChartExample extends Component {
  state = {};
  render() {
    let data = [
      { uv: 12, value: 10, minute: 2, score: 12, player: "jhon" },
      { uv: 23, value: 30 },
      { uv: 31, value: 40 },
      { uv: 22, value: 20 }
    ];

    return (
      <div>
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#000000" strokeDasharray="1 9" />
          <XAxis />
          <YAxis dataKey="value" />
        </LineChart>
      </div>
    );
  }
}

export default ChartExample;
