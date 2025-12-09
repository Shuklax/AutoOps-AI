import { Play, Activity } from "lucide-react";

type RunStatus = "Success" | "Processing" | "Failed";

interface RecentRunItemProps {
  title: string;
  runId: string;
  timeAgo: string;
  status: RunStatus;
}

const RecentRunItem = ({
  title,
  runId,
  timeAgo,
  status,
}: RecentRunItemProps) => {
  const getStatusColor = (status: RunStatus) => {
    switch (status) {
      case "Success":
        return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
      case "Processing":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
      case "Failed":
        return "text-red-500 bg-red-500/10 border-red-500/20";
      default:
        return "text-gray-500 bg-gray-500/10";
    }
  };

  const getIcon = (status: RunStatus) => {
    switch (status) {
      case "Success":
        return <Play size={16} className="text-emerald-500" />;
      case "Processing":
        return <Activity size={16} className="text-yellow-500" />;
      case "Failed":
        return <Play size={16} className="text-red-500" />;
      default:
        return <Play size={16} />;
    }
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-[#1f1f1f] last:border-none group">
      <div className="flex items-center gap-3">
        <div
          className={`size-8 rounded-full flex items-center justify-center border bg-[#111] border-[#222]`}
        >
          {getIcon(status)}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
            {title}
          </h4>
          <p className="text-xs text-gray-400">
            {runId} • {timeAgo}
          </p>
        </div>
      </div>
      <div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
            status
          )}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default RecentRunItem;
