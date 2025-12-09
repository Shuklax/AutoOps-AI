import {
  Command,
  LayoutDashboard,
  Play,
  ScrollText,
  Wrench,
  Settings,
} from "lucide-react";
import NavBarButton from "./NavBarButton";
import { Progress } from "./ui/progress";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="border border-[#131313] items-start w-[15%] h-screen">
      <div className="border-b border-[#131313] align-middle">
        <h1 className="text-xl font-bold m-4">
          <Command className="inline size-7 text-black bg-white rounded-md mr-2 p-1" />
          AutoOps AI
        </h1>
      </div>

      <div className="flex flex-col pl-1 pt-2 pr-5">
        <div id="menu" className="flex flex-col items-start text-left font-semibold">
          <Link to="/"><NavBarButton icon={LayoutDashboard} text="Dashboard" /></Link>
          <Link to="/run-agents"><NavBarButton icon={Play} text="Run Agents" /></Link>
          <Link to="/logs"><NavBarButton icon={ScrollText} text="Logs" /></Link>
          <Link to="/tools"><NavBarButton icon={Wrench} text="Tools" /></Link>
          <Link to="/settings"><NavBarButton icon={Settings} text="Settings" /></Link>
        </div>

        <div id="limit" className="bg-[#0b0b0b] rounded-lg p-3 ml-2">
          <p className=" text-sm font-semibold mb-3">Pro Plan</p>
          <Progress className="bg-[#161616]" value={75}/>
          <p className="text-sm text-gray-500 mt-1">75% of limits used</p>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
