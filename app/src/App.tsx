import { Outlet, NavLink } from "react-router-dom";



export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      

      <Outlet />
    </div>
  );
}


