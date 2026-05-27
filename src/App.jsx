import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex items-stretch  justify-between w-full gap-4 min-h-screen">
        <Link
          to="/courses"
          className="bg-[#c33241] text-white px-10 py-4 rounded-md hover:bg-[#1DA077] font-outfit font-semibold text-[20px] items-center gap-2 flex justify-center"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Navigate to Courses Page Here
        </Link>
        <div className="flex-1">
          <Outlet />
        </div>
        <Link
          to="/journey"
          className="bg-[#c33241] text-white px-10 py-4 rounded-md hover:bg-[#1DA077] font-outfit font-semibold text-[20px] items-center gap-2 flex justify-center"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Navigate to Journey Page Here
        </Link>
      </div>
    </>
  );
}

export default App;
