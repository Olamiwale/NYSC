import { Outlet, NavLink } from "react-router-dom";



export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <nav className="flex gap-6 mb-8">
        <NavLink to="/" className="hover:underline">Register</NavLink>
        <NavLink to="/login" className="hover:underline">Login</NavLink>
        <NavLink to="/posts" className="hover:underline">Create Post</NavLink>
        
      </nav>

      <Outlet />
    </div>
  );
}


