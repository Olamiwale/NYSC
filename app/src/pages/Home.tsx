import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

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





/*import Post from "../components/Post";
import { SidebarProvider} from "@/components/ui/sidebar"
import { AppSidebar } from "../components/AppSidebar";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <>

    <div className="max-w-[1000px] flex justify-between mx-auto relative">

      <div className="max-w-[100px] px-4 fixed ml-[-12px] left-0 top-0 
      transition-all duration-300 ease-in-out">

        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>

      <div className="bg-gray-950 ml-[80px] md:ml-[120px] md:bg-red-800 lg:bg-blue-500 xl:bg-yellow-900 w-full min-h-screen p-4">

        
        Main content
      </div>

      <Outlet />

    </div>
    </>
  );
}



export default function AppLayout() {
  return (
    <div className="flex justify-center bg-black text-white min-h-screen">
      {/* LEFT SIDEBAR 
      <div className="hidden sm:flex flex-col fixed h-screen w-[250px] border-r border-gray-800 p-4">
        <AppSidebar />
      </div>

      {/* MAIN FEED 
      <div className="flex flex-col border-x border-gray-800 sm:ml-[250px] w-full sm:w-[600px]">
        <Post />
      </div>

      {/* RIGHT PANEL (Trends, Suggestions) 
      <div className="hidden lg:flex flex-col w-[350px] p-4 space-y-4">
        <div className="bg-gray-900 rounded-2xl p-4">
          <h3 className="text-xl font-bold mb-3">Trends for you</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>#NYSCBatchB2</li>
            <li>#YouthCorpers</li>
            <li>#NigeriaConnect</li>
            <li>#CommunityService</li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-2xl p-4">
          <h3 className="text-xl font-bold mb-3">Who to follow</h3>
          <div className="flex flex-col space-y-3">
            {["Tunde", "Amaka", "Chidera"].map((name) => (
              <div key={name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500"></div>
                  <p>{name}</p>
                </div>
                <button className="text-xs bg-white text-black rounded-full px-3 py-1 font-semibold">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
<>
  <div className="relative flex justify-between mx-auto max-w-[1000px]">
    {/* Sidebar 
    <div
      className=" fixed top-0 px-4 max-w-[100px] ml-[-12px]
        transition-all duration-300 ease-in-out
        sm:left-0
        md:left-[calc(50%-500px)]
        lg:left-[calc(50%-500px)]
        xl:left-[calc(50%-500px)]
      "
    >
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
    </div>

    {/* Main content 
    <div className="">
      main content
    </div>
  </div>
</>




  



 <div className=" p-10 text-white">

      {/*Side Bar*
      <div className="">
        <SidebarProvider>
      <AppSidebar />
      
    </SidebarProvider>
      </div>



      {/*Main Content*
      <div className="">
       <Post /> 
      
      </div>   
    </div>

*/

/*
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export default function HomePage() {
  return (
    <div className="flex bg-black min-h-screen text-white relative">
      {/* Sidebar 
      <div className="fixed left-0 top-0 h-screen w-[80px] md:w-[120px] bg-gray-900 border-r border-gray-800">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>

      {/* Main Content Area 
      <main className="flex-1 ml-[80px] md:ml-[120px] p-4">
        <Outlet />
      </main>
    </div>
  );
}

*/
