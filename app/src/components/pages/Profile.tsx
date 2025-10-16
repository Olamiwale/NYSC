"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Profile() {
  // Mock user data – replace with fetched user data later
  const [user] = useState({
    firstName: "Paul",
    lastName: "Olawale",
    email: "paul.olawale@example.com",
    stateCode: "NY/22A/1234",
    callUpNumber: "NYSC2025/123456",
    state: "Lagos",
    year: "2025",
    gender: "Male",
    university: "University of Lagos",
    avatar: "https://api.dicebear.com/8.x/avataaars/svg?seed=Paul",
  });

  return (
    <div className="min-h-screen bg-black text-white flex justify-center p-4">
      <div className="w-full max-w-3xl">
        <Card className="bg-gray-900 border-gray-800 rounded-2xl shadow-xl">
          <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
            <Avatar className="w-24 h-24 border-2 border-green-500">
              <AvatarImage src={user.avatar} alt={user.firstName} />
              <AvatarFallback>
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <CardTitle className="text-2xl font-bold text-green-400">
                {user.firstName} {user.lastName}
              </CardTitle>
              <p className="text-gray-400">{user.email}</p>
            </div>
            <div className="sm:ml-auto mt-3 sm:mt-0">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Edit Profile
              </Button>
            </div>
          </CardHeader>

          <Separator className="bg-gray-800" />

          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <Info label="State Code" value={user.stateCode} />
            <Info label="Call Up Number" value={user.callUpNumber} />
            <Info label="State of Service" value={user.state} />
            <Info label="Service Year" value={user.year} />
            <Info label="Gender" value={user.gender} />
            <Info label="University Graduated" value={user.university} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Reusable Info Component
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col space-y-1">
      <span className="text-gray-400 text-sm">{label}</span>
      <span className="text-white tet-base font-semibold">{value}</span>
    </div>
  );
}
