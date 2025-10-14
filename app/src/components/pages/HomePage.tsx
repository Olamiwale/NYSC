import Post from "../posts/Post";
import { SidebarProvider} from "@/components/ui/sidebar"
import { AppSidebar } from "../sidebar/AppSidebar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">

      {/*Side Bar*/}
      <div className="">
        <SidebarProvider>
      <AppSidebar />
      
    </SidebarProvider>
      </div>

      {/*Main Content*/}
      <div className="ml-[300px]">
       <Post /> 
      </div>
    
    
    </div>
  );
}



