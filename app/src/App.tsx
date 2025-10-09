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




/*
import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";

const baseUrl = "http://localhost:5000";

export default function App() {
  const [token, setToken] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    content: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const register = async () => {
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
      }),
    });
    alert(JSON.stringify(await res.json(), null, 2));
  };

  const login = async () => {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });
    const data = await res.json();
    setToken(data.token);

    if (res.ok) {
      alert("Login successful");
    } else {
      const errorData = await res.json().catch(() => ({}));
      alert("Login failed: " + (errorData.msg || res.statusText));
    }
  };

  const createPost = async () => {
    const res = await fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content: form.content }),
    });
    alert(JSON.stringify(await res.json(), null, 2));
  };

  const showPosts = async () => {
    const res = await fetch(`${baseUrl}/posts`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    console.log("My Posts:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex min-h-svh items-center justify-center bg-black text-white gap-[100px] p-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">REGISTER TEST</h1>

        <input type="text" name="name" placeholder="Name" className="border rounded p-2 w-64" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="border rounded p-2 w-64" onChange={handleChange}/>
        <input type="password" name="password" placeholder="Password" className="border rounded p-2 w-64" onChange={handleChange}/>

        <div className="flex gap-2">
          <Button onClick={register}>Register</Button>
        </div>
      </div>


      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">LOGIN TEST</h1>

        <input type="email" name="email" placeholder="Email" className="border rounded p-2 w-64" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="border rounded p-2 w-64" onChange={handleChange} />

        <div className="flex gap-2">
          <Button onClick={login}>Login</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">POST TEST</h1>
        <textarea name="content" placeholder="Write a post..." className="border rounded p-2 w-64 h-24" onChange={handleChange}/>
        <Button onClick={createPost} disabled={!token}>
          Create Post
        </Button>
      </div>

      <div>
        <h1 className="text-2xl font-bold"> SHOW POST TEST </h1>

        <Button onClick={showPosts} disabled={!token}>
          Show Post
        </Button>
      </div>
    </div>
  );
}


*/