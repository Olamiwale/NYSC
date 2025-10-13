import { NavLink } from "react-router-dom";
import Post from "../posts/Post";

export default function HomePage() {
  return (
    <div className="flex justify-between w-[70%] mx-auto bg-gray-900">
      {/*Side Bar*/}
      <div className="border-r-1 p-2">
        <nav className="flex gap-6 mb-8 flex-col">
          <NavLink to="/" className="hover:underline">
            Register
          </NavLink>
          <NavLink to="/login" className="hover:underline">
            Login
          </NavLink>
          <NavLink to="/posts" className="hover:underline">
            Create Post
          </NavLink>
        </nav>
      </div>

      {/*Main Content*/}
      <Post />
      {/*Right Side Bar*/}
      <div className="border-l-1 p-2">Right Side Bar</div>
    </div>
  );
}
