import {
  BookOpenText,
  Home,
  SwatchBook,
  Bot,
  Settings,
  NotebookPen,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Provas",
    url: "#",
    icon: BookOpenText,
  },
  {
    title: "Flashcards",
    url: "#",
    icon: SwatchBook,
  },
  {
    title: "IA",
    url: "#",
    icon: Bot,
  },
  {
    title: "Anotações",
    url: "#",
    icon: NotebookPen,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.title === "Home"}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton>
          <Settings /> configurações
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
