import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:5000";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const register = async () => {
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Registration successful!");
      navigate("/posts");
    } else {
      alert(data.msg || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-[10%]">
      <h1 className="text-2xl mb-10 font-bold">REGISTER</h1>
      <input 
      type="text" 
      name="name" 
      placeholder="Name" 
      className="border rounded p-2 w-[400px]" 
      onChange={handleChange} />

      <input type="email" name="email" placeholder="Email" className="border rounded p-2 w-[400px]" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" className="border rounded p-2 w-[400px]" onChange={handleChange} />
      
      <div className="flex gap-10 mt-10">
        <Button className="w-54" onClick={register}>Register</Button>
        <Button className="w-54" variant="secondary" onClick={() => navigate("/login")}>Login Instead</Button>
      </div>
    </div>
  );
}



