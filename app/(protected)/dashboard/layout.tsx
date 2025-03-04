import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Wallet } from "lucide-react";

export default function Layout({children}: {children: React.ReactNode}) {
  
  // TODO: Redirect
 
  return (
    <div className="relative flex min-h-screen w-full">
      <DashboardSidebar />
      <div className="flex flex-1 bg-gray-50 h-screen flex-col">
         <header className="sticky top-0 w-full z-50 flex h-14 bg-background px-4 lg:h-[60px] xl:px-8 items-center gap-6">
          {/* <MaxWidthWrapper className="flex max-w-7xl items-center gap-x-3  px-0">
            <MobileSheetSidebar links={filteredLinks} /> */}

            <div className="w-full">
              {/* TODO: Free space  */}
            </div>

            {/* <ModeToggle /> */}
            <Button>
              <Wallet size={18} />
              Conect Wallet
            </Button>
            <Button className="rounded-full" variant={"secondary"}>
              <Bell size={18} />
            </Button>
            <Avatar  className="bg-red-300"  />
            {/* <div className="bg-green-200 rounded-full w-12 h-12"></div> */}
            {/* <UserAccountNav /> */}
            {/* 
          </MaxWidthWrapper> */}
        </header>
        <main className="flex-1 p-4 xl:px-8">
          {children}
        </main>
          
      
      </div>
    </div>
  )
}
