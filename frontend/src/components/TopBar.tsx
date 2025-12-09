import { Bell, Moon } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full border border-[#131313] z-10 shadow-lg flex justify-between align-middle text-center">
      <div className="flex m-3">
        <div className="border-r-2 pt-2 pb-2 pl-2 pr-4 mr-3 text-black border-black">
          TopBar
        </div>
        
      </div>
      <div className="flex items-center mr-5 font-semibold">
        {/* <Bell className="text-gray-400 size-5 mr-6"/>
        <Moon className="text-gray-400 size-5 mr-5"/> */}
        <span className="h-2 w-2 mr-2 rounded-full bg-emerald-500 animate-pulse"></span>
        System Operational
      </div>
    </div>
  );
};

export default TopBar;