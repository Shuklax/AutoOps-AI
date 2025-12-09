import MetricCards from "./MetricCards";
import { CheckCircle, Clock, Activity, Workflow } from "lucide-react";
import ExecutionVolumeChart from "./ExecutionVolumeChart";
import RecentRunItem from "./RecentRunItem";

export const metricCardsArray = [
  {
    id: "total-workflows",
    title: "Total Workflows",
    value: "124",
    delta: "+12%",
    deltaLabel: "from last month",
    deltaDirection: "up",
    icon: Workflow,
    iconColor: "text-blue-400",
    deltaColor: "text-emerald-400",
  },
  {
    id: "success-rate",
    title: "Success Rate",
    value: "98.5%",
    delta: "+0.4%",
    deltaLabel: "from last week",
    deltaDirection: "up",
    icon: CheckCircle,
    iconColor: "text-emerald-400",
    deltaColor: "text-emerald-400",
  },
  {
    id: "avg-duration",
    title: "Avg. Duration",
    value: "1.2s",
    delta: "-150ms",
    deltaLabel: "performance boost",
    deltaDirection: "down",
    icon: Clock,
    iconColor: "text-orange-400",
    deltaColor: "text-red-400",
  },
  {
    id: "active-tools",
    title: "Active Tools",
    value: "16",
    delta: "+4",
    deltaLabel: "new tools added",
    deltaDirection: "up",
    icon: Activity,
    iconColor: "text-purple-400",
    deltaColor: "text-emerald-400",
  },
];

const recentRuns = [
  {
    title: "Data Sync: CRM to Warehouse",
    runId: "run_8x92",
    timeAgo: "2 mins ago",
    status: "Success",
  },
  {
    title: "Email Classification Bot",
    runId: "run_7b21",
    timeAgo: "4 mins ago",
    status: "Processing",
  },
  {
    title: "Weekly Report Generator",
    runId: "run_6a11",
    timeAgo: "15 mins ago",
    status: "Success",
  },
  {
    title: "Customer Support Triaging",
    runId: "run_5c99",
    timeAgo: "1 hour ago",
    status: "Failed",
  },
  {
    title: "Inventory Check",
    runId: "run_4d88",
    timeAgo: "2 hours ago",
    status: "Success",
  },
] as const;

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-12 gap-x-4 gap-y-4 mt-6 h-full pb-6">
        <div className="flex justify-evenly col-span-10 row-span-3">
          {metricCardsArray.map((card, index) => (
            <MetricCards key={index} {...card} />
          ))}
        </div>

        {/* Bottom Section: Charts & Logs */}
        {/* Kept col-span-10 to maintain grid width, but used flex inside for the 55/45 split */}
        <div className="col-span-10 row-span-9 mx-6 flex gap-4 min-h-0">
          {/* Execution Volume Chart - 55% */}
          <div
            id="execution_volume"
            className="w-[55%] bg-[#0b0b0b] border border-[#141414] rounded-xl flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold text-gray-200">Execution Volume</p>
              <select className="bg-[#111] border border-[#333] text-xs text-gray-400 rounded px-2 py-1 outline-none">
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="flex-1 min-h-0">
              <ExecutionVolumeChart />
            </div>
          </div>

          {/* Recent Runs List - 45% */}
          <div
            id="recent_runs"
            className="w-[45%] bg-[#0b0b0b] border border-[#141414] rounded-xl flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold text-gray-200">Recent Runs</p>
              <button className="text-xs text-gray-500 hover:text-white transition-colors">
                View All
              </button>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              <div className="flex flex-col">
                {recentRuns.map((run, idx) => (
                  <RecentRunItem key={idx} {...run} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
