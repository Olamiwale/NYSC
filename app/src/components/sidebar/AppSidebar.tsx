import { Calendar, Home, Search, Settings, Briefcase, Image } from "lucide-react";

import { SidebarMenu, SidebarMenuButton,SidebarMenuItem } from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";


const items = [
  { title: "Home", url: "/home", icon: Home },
  { title: "Jobs", url: "/jobs", icon: Briefcase },
  { title: "Events", url: "/events", icon: Calendar },
  { title: "Explore", url: "/explore", icon: Search },
  { title: "Profile", url: "/profile", icon: Image },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  return (
    <div className="h-screen bg-gray-900 border-r border-gray-800 flex flex-col justify-between p-2 w-[150px]">

      <div className="flex items-center flex flex-col mt-10 gap-2 mt-2">
      
          <img src="./nysc-logo.png" className="w-12" />
      
        <p className="text-white text-sm font-semibold tracking-wide">NYSC Connect</p>
      </div>

      
      <SidebarMenu className="flex flex-col gap-8 mt-10">
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <NavLink
                to={item.url}
                className="flex items-center gap-3 px-4 py-2 rounded-lg">
                <item.icon className="w-10 h-10" />
                <span className="text-sm font-medium">{item.title}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      
      <div className="border-t border-gray-800 flex flex-col pt-4 mb-10 flex items-center gap-3    
         px-2">
        

          <img src="./man.png" className="w-12 h-12 rounded-full" />
     

        <div className="flex flex-col">
          <p className="text-sm font-semibold text-white">Paul Olawale</p>
        </div>
      </div>
    </div>
  );
}


