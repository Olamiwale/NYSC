import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Linkedin, X, MessageCircle, Heart } from "lucide-react";

// ===================== PROFILE PAGE =====================
export default function ProfilePage() {
  const [user, setUser] = useState({
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
  });

  const [isEditing, setIsEditing] = useState(false);

  // mock user posts
  const posts = [
    {
      id: 1,
      content: "Just completed my CDS for the week 💪🇳🇬",
      likes: 23,
      comments: 5,
      date: "Oct 20, 2025",
      image: "https://source.unsplash.com/random/600x400?nigeria",
    },
    {
      id: 2,
      content: "NYSC Community service today was fulfilling. #serviceandhumility",
      likes: 45,
      comments: 12,
      date: "Oct 15, 2025",
      image: "https://source.unsplash.com/random/600x400?community",
    },
  ];

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
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center p-4">
      <div className="w-full max-w-3xl space-y-8">
   
        <div className="bg-gray-900 py-8 rounded-2xl">
          <div className="flex flex-col px-4 py-2 sm:flex-row items-center gap-4">
           <img src="./man.png" className="w-18 h-18 rounded-full" />

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
          </div>

         

        
          <CardContent className="grid text-white grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <Info label="State Code" value={user.stateCode} />
            <Info label="Call Up Number" value={user.callUpNumber} />
            <Info label="State of Service" value={user.state} />
            <Info label="Service Year" value={user.year} />
            <Info label="Gender" value={user.gender} />
            <Info label="University Graduated" value={user.university} />

            {/* Social Links Section */}
            <div className="col-span-2 mt-6">
            

              {isEditing ? (
                <div className="flex flex-col gap-4">
                  <Input
                    id="twitter"
                    type="url"
                    value={user.social.twitter}
                    onChange={(e) => handleChange("twitter", e.target.value)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                  <Input
                    id="linkedin"
                    type="url"
                    value={user.social.linkedin}
                    onChange={(e) => handleChange("linkedin", e.target.value)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                  <Input
                    id="whatsapp"
                    type="url"
                    value={user.social.whatsapp}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                </div>
              ) : (
                <div className="flex justify-between gap-4">
                  <SocialLink
                    icon={<img src="./x.png" className="w-4 rounded-sm" />}
                    label="X / Twitter"
                    url={user.social.twitter}
                    color="text-blue-400"
            
                  />
                  <SocialLink
                    icon={<img src="./linkdlen.png" className="w-6 rounded-sm" />}
                    label="LinkedIn"
                    url={user.social.linkedin}
                    color="text-blue-400"
                  />
                  <SocialLink
                   icon={<img src="./whatsapp.png" className="w-4 rounded-sm" />}
                    label="WhatsApp"
                    url={user.social.whatsapp}
                    color="text-green-400"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </div>

        {/* ================== POSTS SECTION ================== */}
        <div>
          <h2 className="text-xl font-bold text-green-400 mb-3">
            Posts
          </h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="bg-gray-900 border border-gray-800 rounded-2xl shadow-md hover:shadow-green-500/10 transition"
              >
                <CardHeader>
                  <p className="text-gray-300">{post.content}</p>
                </CardHeader>

                {post.image && (
                  <CardContent>
                    <img
                      src={post.image}
                      alt="post"
                      className="rounded-xl w-full object-cover"
                    />
                  </CardContent>
                )}

                <CardFooter className="flex justify-between items-center text-gray-400 text-sm border-t border-gray-800 pt-3">
                  <span>{post.date}</span>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 hover:text-pink-500 transition">
                      <Heart size={16} /> {post.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-500 transition">
                      <MessageCircle size={16} /> {post.comments}
                    </button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// =============== REUSABLE COMPONENTS ==================
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

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
