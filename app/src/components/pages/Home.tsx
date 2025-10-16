import Post from "../posts/Post";
import { SidebarProvider} from "@/components/ui/sidebar"
import { AppSidebar } from "../sidebar/AppSidebar";

export default function HomePage() {
  return (
    <>

    <div className="max-w-[1000px] flex justify-between mx-auto">

      <div className="max-w-[100px] px-4 fixed ml-[-12px] top-0 ">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>



      <div className="bg-gray-950 ml-36 mr-2 h-200 w-full">
        main ctent
      </div>




    

    </div>

      


       
    
    
    </>
  );
}


/*
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
