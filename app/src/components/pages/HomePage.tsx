import Post from "../posts/Post";
import { SidebarProvider} from "@/components/ui/sidebar"
import { AppSidebar } from "../sidebar/AppSidebar";

export default function HomePage() {
  return (
    <div className="flex justify-between w-[70%] mx-auto bg-gray-900">

      {/*Side Bar*/}
      <div className="border-r-1 p-2 w-[200px]">
        <SidebarProvider>
      <AppSidebar />
      <main>
      
    
      </main>
    </SidebarProvider>
      </div>

      {/*Main Content*/}
      <Post />


      {/*Right Side Bar*/}
      <div className="border-l-1 p-2">Right Side Bar</div>
    </div>
  );
}
