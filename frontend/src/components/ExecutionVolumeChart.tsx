import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  { time: "00:00", requests: 12 },
  { time: "02:00", requests: 15 },
  { time: "04:00", requests: 35 },
  { time: "06:00", requests: 25 },
  { time: "08:00", requests: 18 },
  { time: "10:00", requests: 30 },
  { time: "12:00", requests: 36 },
  { time: "14:00", requests: 45 },
  { time: "16:00", requests: 55 },
  { time: "18:00", requests: 40 },
  { time: "20:00", requests: 28 },
  { time: "22:00", requests: 20 },
  { time: "23:59", requests: 15 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111] border border-[#333] p-3 rounded-lg shadow-xl">
        <p className="text-gray-200 text-sm font-medium mb-1">{label}</p>
        <p className="text-white text-md font-bold">
          runs : <span className="font-normal">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const ExecutionVolumeChart = () => {
  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#333" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#333", fontSize: 12 }}
            interval="preserveStartEnd"
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#fff", strokeWidth: 1 }}
          />
          <Area
            type="monotone"
            dataKey="requests"
            stroke="#333"
            fillOpacity={1}
            fill="url(#colorRequests)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExecutionVolumeChart;
