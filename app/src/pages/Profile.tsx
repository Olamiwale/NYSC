import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Phone } from "lucide-react";

export default function ProfilePage() {
  const user = {
    firstName: "Olawale",
    lastName: "Paul",
    email: "paul@example.com",
    avatar: "https://avatars.githubusercontent.com/u/1?v=4",
    stateCode: "LA/23C/1234",
    callUpNumber: "NYSC/2023/001",
    state: "Lagos",
    year: "2025",
    gender: "Male",
    university: "Unilag",
    social: {
      twitter: "https://x.com/paulOlawale",
      linkedin: "https://linkedin.com/in/paulOlawale",
      whatsapp: "https://wa.me/2348012345678",
    },
  };

 
    // Toggle editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle input change
  const handleChange = (field: string, value: string) => {
    setUser((prev) => ({
      ...prev,
      social: { ...prev.social, [field]: value },
    }));
  };

  // Save edits
  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated user:", user);
    // Optionally send updated data to backend here
  };

  return (
     <div className="min-h-screen bg-black text-white flex justify-center p-4">
      <div className="w-full max-w-3xl">
        <Card className="bg-gray-900 border-gray-800 rounded-2xl shadow-xl">
          {/* Header Section */}
          <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
            <Avatar className="w-24 h-24 border-2 border-green-500">
              <AvatarImage src={user.avatar} alt={user.firstName} />
              <AvatarFallback>
                {user.firstName}
                {user.lastName}
              </AvatarFallback>
            </Avatar>

            <div className="text-center sm:text-left">
              <CardTitle className="text-2xl font-bold text-green-400">
                {user.firstName} {user.lastName}
              </CardTitle>
              <p className="text-gray-400">{user.email}</p>
            </div>

            <div className="sm:ml-auto mt-3 sm:mt-0">
              {isEditing ? (
                <Button
                  onClick={handleSave}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Save
                </Button>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </CardHeader>

          <Separator className="bg-gray-800" />

          {/* Info Section */}
          <CardContent className="grid text-white grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <Info label="State Code" value={user.stateCode} />
            <Info label="Call Up Number" value={user.callUpNumber} />
            <Info label="State of Service" value={user.state} />
            <Info label="Service Year" value={user.year} />
            <Info label="Gender" value={user.gender} />
            <Info label="University Graduated" value={user.university} />

            {/* Social Links Section */}
            <div className="col-span-2 mt-6">
              <h3 className="text-lg font-semibold mb-2 text-green-400">
                Social Links
              </h3>

              {isEditing ? (
                <div className="flex flex-col gap-4">
                  <div>
                
                   
                    <Input
                      id="twitter"
                      type="url"
                      value={user.social.twitter}
                      onChange={(e) => handleChange("twitter", e.target.value)}
                      className="bg-gray-800 text-white border-gray-700"
                    />
                  </div>

                  <div>
                    
                    <Input
                      id="linkedin"
                      type="url"
                      value={user.social.linkedin}
                      onChange={(e) => handleChange("linkedin", e.target.value)}
                      className="bg-gray-800 text-white border-gray-700"
                    />
                  </div>

                  <div>
                    
                   
                    <Input
                      id="whatsapp"
                      type="url"
                      value={user.social.whatsapp}
                      onChange={(e) => handleChange("whatsapp", e.target.value)}
                      className="bg-gray-800 text-white border-gray-700"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <SocialLink
                    icon={<Twitter size={16} />}
                    label="Twitter"
                    url={user.social.twitter}
                    color="text-blue-400"
                  />
                  <SocialLink
                    icon={<Linkedin size={16} />}
                    label="LinkedIn"
                    url={user.social.linkedin}
                    color="text-blue-400"
                  />
                  <SocialLink
                    label="WhatsApp"
                    url={user.social.whatsapp}
                    color="text-green-400"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/* Small reusable info box */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

/* Reusable Social Link component */
function SocialLink({
  icon,
  label,
  url,
  color,
}: {
  icon?: React.ReactNode;
  label: string;
  url: string;
  color: string;
}) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} hover:underline flex items-center gap-2`}
    >
      {icon && icon} {label}
    </a>
  );
}