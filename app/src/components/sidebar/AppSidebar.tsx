import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <div> 
    
      
        
          <SidebarGroupLabel>
            <p className="text-white">NYSC Connect</p></SidebarGroupLabel>
          

            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

     
      

      <div className="p-4 border-t border-gray-800 bg-gray-950 flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
      P
    </div>
    <div>
      <p className="font-semibold text-sm">PO</p>
      <p className="text-xs text-gray-400">View Profile</p>
    </div>
  </div>
    
    
    </div>
  )
}