import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

/*const baseUrl = "http://localhost:5000";*/

export default function Register() {
 

 const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Registration Data:", data);
    alert("Registration submitted successfully!");
  }; 
  
  /*
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
  }; */

  

  return (

    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <Card className="w-full max-w-lg bg-gray-900 border-gray-800 rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-400 text-center">
            NYSC Connect 
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
            <div className="flex gap-4">
              <div className="flex-1">
                <Label className ="pb-2 text-white">First Name</Label>
                <Input
                  {...register("firstName")}
                  className="bg-gray-800 border-gray-700 text-white"
                />

              </div>
              <div className="flex-1">
                <Label className ="pb-2 text-white">Last Name</Label>
                <Input
                  {...register("lastName")}
                
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <Label className ="pb-2 text-white">Email</Label>
                <Input
                  {...register("email")}
                  type="email"
                 
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="flex-1">
                <Label className ="pb-2 text-white">State Code</Label>
                <Input
                  {...register("stateCode")}
                 
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <Label className ="pb-2 text-white">Call Up Number</Label>
                <Input
                  {...register("callUp")}
               
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="flex-1">
                <Label className ="pb-2 text-white">State of Service</Label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 text-white border-gray-700">
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="oyo">Oyo</SelectItem>
                    <SelectItem value="kano">Kano</SelectItem>
                    <SelectItem value="anambra">Anambra</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <Label className ="pb-2 text-white">Service Year</Label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 text-white border-gray-700">
                    {["2021", "2022", "2023", "2024", "2025"].map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <Label className ="pb-2 text-white">Gender</Label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 text-white border-gray-700">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 5 */}
            <div>
              <Label className ="pb-2 text-white" >University Graduated</Label>
              <Input
                {...register("university")}
              
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
              >
                Register
              </Button>
            </div>
          </form>
        </CardContent>
        <div className="flex items-center justify-center text-gray-400 text-sm mt-2">
              <span>Already have an account?</span>
              <a
                href="/login"
                className="ml-1 text-green-400 hover:underline"
              >
                Login
              </a>
            </div>
      </Card>
      
    </div>
  );
}



