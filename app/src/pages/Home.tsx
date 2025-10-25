import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";


export default function HomePage() {
  return (
    <div className="flex bg-black min-h-screen text-white relative">
      
      <div className="fixed left-0 top-0 h-screen w-[80px] md:w-[120px] bg-gray-900 border-r border-gray-800">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>
      <main className="flex-1 ml-[80px] md:ml-[120px] p-4">
        <Outlet />
      </main>
    </div>
  );
}