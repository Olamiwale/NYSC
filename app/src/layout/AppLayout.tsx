import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";

export default function AppLayout() {
  const location = useLocation();
  const hideSidebarRoutes = ["/", "/register"];
  const hideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-black text-white flex">
      {!hideSidebar && (
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      )}

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
