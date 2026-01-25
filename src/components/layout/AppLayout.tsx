import { Outlet } from "react-router-dom";
import AppSidebar from "./app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/providers/SidebarProvider";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen ">
        <AppSidebar />

        <main className="flex-1 p-4">
          <SidebarTrigger className="mb-4" />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
