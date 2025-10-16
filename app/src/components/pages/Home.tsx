import Post from "../posts/Post";
import { SidebarProvider} from "@/components/ui/sidebar"
import { AppSidebar } from "../sidebar/AppSidebar";

export default function HomePage() {
  return (
    <>

    <div className="max-w-[1000px] flex justify-between mx-auto relative">

      <div className="max-w-[100px] px-4 fixed ml-[-12px] left-0 top-0 
      transition-all duration-300 ease-in-out ">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>

      <div className="bg-gray-950 ml-[80px] md:ml-[120px] md:bg-red-800 lg:bg-blue-500 xl:bg-yellow-900 w-full min-h-screen p-4">

        
        Main content
      </div>

    </div>
    </>
  );
}


/*
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















<div className="fixed top-0 px-4 max-w-[100px] transition-all duration-300 ease-in-out sm:left-0 md:left-[calc(50%-500px)] lg:left-[calc(50%-500px)]">







*/
