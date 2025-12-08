import LeftNav from "./components/LeftNav";
import TopBar from "./components/TopBar";

function App(){
  return (
    <>
      <div className="h-screen flex bg-[#020202] text-[#e2e2e2] overflow-hidden">
        <LeftNav/>
        <div className="flex flex-col flex-1 lg:w-4/5 md:w-3/4 sm:w-2/3">
          <TopBar/>

          <div id="body" className="flex-1 overflow-auto">

          </div>
        </div>
      </div>
    </>
  )
}

export default App;