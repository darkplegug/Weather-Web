"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function WeatherChart({ data, activeKey }) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-250 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 40, right: 20, left: 0, bottom: 10 }}
          >
            {/* Y AXIS – MEPE T KIRI */}
            <YAxis
              width={28}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#FFFFFF" }}
              tickFormatter={(v) => `${v}`}
            />

            {/* X AXIS */}
            <XAxis
              dataKey="time"
              interval={0}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#FFFFFF" }}
            />

            <Tooltip
              cursor={{ fill: "#202020" }}
              contentStyle={{
                background: "#202020",
                borderRadius: "10px",
                border: "none",
                color: "#fff",
              }}
              formatter={(value) => [`${value}`]}
            />

            <Bar
              dataKey={activeKey}
              radius={[8, 8, 8, 8]}
              fill="#ffffff"
              activeBar={{ fill: "#FEB800" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
