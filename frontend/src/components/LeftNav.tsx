import {
  Command,
  LayoutDashboard,
  ChartPie,
  History,
  FileText,
  Settings,
} from "lucide-react";
import NavBarButton from "./ui/NavBarButton";

const LeftNav = () => {
  return (
    <div className="border border-[#131313] items-start lg:w-1/7 md:w-2/7 h-screen">
      <div className="border-b border-[#131313] align-middle text-center">
        <h1 className="text-xl font-bold m-4">
          <Command className="inline size-7 text-black bg-white rounded-md mr-2 p-1" />
          AutoOps AI
        </h1>
      </div>

      <div className="flex flex-col  pl-1 pt-2 pr-5">
        <div id="menu_1" className="flex flex-col items-start text-left">
          <NavBarButton icon={LayoutDashboard} text="Dashboard" />
          <NavBarButton icon={FileText} text="Analyze document" />
          <NavBarButton icon={History} text="History" />
          <NavBarButton icon={ChartPie} text="Market Overview" />
          <NavBarButton icon={Settings} text="General Settings" />
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
