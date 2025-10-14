import { Calendar, Home, Search, Settings, Briefcase } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Jobs", url: "#", icon: Briefcase },
  { title: "Events", url: "#", icon: Calendar },
  { title: "Explore", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-[200px] bg-gradient-to-b from-gray-900  to-black border-r border-gray-800 flex flex-col justify-between p-4">

      
      <div className="flex items-center gap-2 mt-2">
        <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center font-extrabold text-white text-xl shadow-md">
          N
        </div>
        <p className="text-white text-sm font-semibold tracking-wide">NYSC Connect</p>
      </div>

      
      <SidebarMenu className="flex flex-col gap-8 mt-10">
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <a
                href={item.url}
                className="flex items-center gap-3 px-4 py-2   rounded-lg "
              >
                <item.icon className="w-10 h-10" />
                <span className="text-sm font-medium">{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      
      <div className="border-t border-gray-800 pt-4 flex items-center gap-3 px-2">
        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
          P
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-white">Paul Olawale</p>
          <a href="#" className="text-xs text-gray-400 hover:text-green-400 transition">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}


