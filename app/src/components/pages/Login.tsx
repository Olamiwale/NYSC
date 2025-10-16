import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:5000";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const login = async () => {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (res.ok && data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/posts");
    } else {
      alert(data.msg || "Login failed");
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-[10%] items-center">
      <h1 className="text-2xl mb-10 font-bold">LOGIN</h1>
      <input type="email" name="email" placeholder="Email" className="border rounded p-2 w-[400px]" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" className="border rounded p-2 w-[400px]" onChange={handleChange} />
      <Button className="mt-10 w-54" onClick={login}>Login</Button>
    </div>
  );
}



