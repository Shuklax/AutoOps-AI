import React from "react";
import { type LucideProps } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: React.ReactNode;
  delta?: React.ReactNode;
  deltaLabel?: string;
  deltaDirection?: React.ReactNode;
  icon?: React.ComponentType<LucideProps>;
  iconColor?: string;
  deltaColor?: string;
}

const MetricCards: React.FC<MetricCardProps> = ({
  title,
  value,
  delta,
  deltaLabel,
  icon: Icon,
  iconColor = "text-white",
  deltaColor = "text-gray-400",
}) => {
  return (
    <div className="bg-[#0b0b0b] border border-[#141414] flex flex-col p-4 rounded-lg w-[23%]">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-gray-500">{title}</p>
        {Icon ? <Icon className={`${iconColor} w-4 h-4`} /> : null}
      </div>

      <div className="mt-3">
        <p className="text-2xl font-bold">
          {value}{" "}
          {delta !== undefined ? (
            <span className={`${deltaColor} text-sm font-medium ml-1`}>
              {delta}
            </span>
          ) : null}
        </p>
        {deltaLabel ? <p className="text-xs text-gray-500 mt-1">{deltaLabel}</p> : null}
      </div>
    </div>
  );
};

export default MetricCards;
