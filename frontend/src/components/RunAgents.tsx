import {
  Terminal,
  Database,
  Mail,
  Globe,
  DollarSign,
  MessageSquare,
  Play,
  Check,
} from "lucide-react";
import { useState } from "react";

const RunAgents = () => {
  const [workflowInput, setWorkflowInput] = useState("");
  const [selectedTools, setSelectedTools] = useState<string[]>([
    "http-client",
    "finance",
    "slack",
  ]);

  const tools = [
    {
      id: "database",
      name: "Database",
      desc: "PostgreSQL connection",
      icon: Database,
      color: "text-blue-400",
    },
    {
      id: "email",
      name: "Email Sender",
      desc: "SMTP / SendGrid",
      icon: Mail,
      color: "text-purple-400",
    },
    {
      id: "http-client",
      name: "HTTP Client",
      desc: "REST API requests",
      icon: Globe,
      color: "text-green-400",
    },
    {
      id: "finance",
      name: "Finance API",
      desc: "Stripe / Quickbooks",
      icon: DollarSign,
      color: "text-emerald-400",
    },
    {
      id: "slack",
      name: "Slack Bot",
      desc: "Channel messaging",
      icon: MessageSquare,
      color: "text-pink-400",
    },
  ];

  const toggleTool = (id: string) => {
    setSelectedTools((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="h-full p-6">
      <div className="grid grid-cols-9 h-full gap-4">
        {/* Left pane: Scrollable Content + Fixed Footer */}
        <div className="col-span-4 rounded-xl flex flex-col bg-[#070707] overflow-hidden border border-[#222]">
          {/* Scrollable Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Define Workflow Section */}
            <div className="p-6">
              <h2 className="font-semibold text-lg flex items-center gap-2 mb-1">
                Define Workflow
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                Describe what you want the agent to do.
              </p>

              <div className="bg-[#111] border border-[#222] rounded-xl p-4 relative group focus-within:border-gray-600 transition-colors">
                <textarea
                  value={workflowInput}
                  onChange={(e) => setWorkflowInput(e.target.value)}
                  className="w-full bg-transparent border-none outline-none resize-none text-sm min-h-[120px] text-gray-300 placeholder:text-gray-600"
                  placeholder="Example: Update CRM records for new users, fetch their contract PDFs, summarize risk factors, and Slack the results to #sales-ops."
                />
                <div className="absolute bottom-3 right-3 flex justify-end">
                  <button className="text-gray-500 hover:text-white transition-colors">
                    <Terminal className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Select Tools Section */}
            <div className="p-6 pt-0">
              <h3 className="font-semibold text-md mb-4">Select Tools</h3>
              <div className="flex flex-col gap-3">
                {tools.map((tool) => {
                  const isSelected = selectedTools.includes(tool.id);
                  return (
                    <div
                      key={tool.id}
                      onClick={() => toggleTool(tool.id)}
                      className={`flex items-center gap-4 border p-3 rounded-xl cursor-pointer transition-all duration-200
                            ${
                              isSelected
                                ? "bg-[#111] border-white"
                                : "bg-[#0a0a0a] border-[#222] hover:border-gray-700"
                            }`}
                    >
                      <div
                        className={`size-10 rounded-lg flex items-center justify-center border transition-colors
                             ${
                               isSelected
                                 ? "bg-white border-white text-black"
                                 : "bg-[#1a1a1a] border-[#333] " + tool.color
                             }`}
                      >
                        <tool.icon size={20} strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-200">
                          {tool.name}
                        </p>
                        <p className="text-xs text-gray-500">{tool.desc}</p>
                      </div>
                      {isSelected && (
                        <div className="text-white">
                          <Check size={18} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Added extra padding or simplified handling if needed */}
          </div>

          {/* Footer: Run Agent Button */}
          <div className="p-6 border-t border-[#222] bg-[#070707]">
            <button
              disabled={!workflowInput.trim()}
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all
                    ${
                      workflowInput.trim()
                        ? "bg-white text-black hover:bg-gray-200 active:scale-[0.98]"
                        : "bg-[#222] text-gray-500 cursor-not-allowed"
                    }`}
            >
              <Play
                size={18}
                fill={workflowInput.trim() ? "currentColor" : "none"}
              />
              Run Agent
            </button>
          </div>
        </div>

        {/* Right pane: Execution Log */}
        <div className="col-span-5 rounded-xl bg-[#070707] flex flex-col h-full overflow-hidden border border-[#222]">
          <div className="bg-[#0d0d0d] p-4 flex items-center border-b border-[#1a1a1a] rounded-t-xl shrink-0">
            <span className="inline-block h-2 w-2 mr-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="font-semibold text-sm">Execution Log</p>
            <div className="ml-auto flex items-center">
              {/* <span className="text-xs text-emerald-500 mr-1">Live Stream</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span> */}
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center overflow-auto p-4">
            <Terminal className="size-[60px] text-gray-800 mb-4" />
            <p className="text-gray-500 text-lg">Ready to execute workflow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunAgents;
