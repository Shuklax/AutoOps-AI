import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LeftNav from "./components/LeftNav";
import TopBar from "./components/TopBar";
import RunAgents from "./components/RunAgents";

import Tools from "./components/Tools";
import Settings from "./components/Settings";
import Logs from "./components/Logs";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-screen flex bg-[#020202] text-[#e2e2e2] overflow-hidden">
          <LeftNav />
          <div className="flex flex-col flex-1 lg:w-4/5 md:w-3/4 sm:w-2/3">
            <TopBar />

            <div id="body" className="flex-1 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/run-agents" element={<RunAgents />}/>
                <Route path="/logs" element={<Logs />}/>
                <Route path="/tools" element={<Tools />}/>
                <Route path="/settings" element={<Settings />}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
