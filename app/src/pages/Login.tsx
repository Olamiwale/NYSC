import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


/*const baseUrl = "http://localhost:5000";*/

export default function Login() {


const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

   const onSubmit = async (data: any) => {
    setLoading(true);
    console.log("Login data:", data);
    // Replace with your backend API call
    setTimeout(() => {
      alert("Login successful!");
      setLoading(false);
    }, 1000);
  };

  /*

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

  */

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800 rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-400 text-center">
            NYSC Connect Login
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
            <div>
              <Label className ="pb-2 text-white">Email</Label>
              <Input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

         
            <div>
              <Label className ="pb-2 text-white">Password</Label>
              <Input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

       
            <div className="flex justify-end">
              <a
                href="/forgot-password"
                className="text-green-400 text-sm hover:underline"
              >
                Forgot password?
              </a>
            </div>

          
            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

       
            <div className="flex items-center justify-center text-gray-400 text-sm mt-2">
              <span>Don't have an account?</span>
              <a
                href="/register"
                className="ml-1 text-green-400 hover:underline"
              >
                Register
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}


/**
 
"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

 

  return (
    
  );
}


 */


