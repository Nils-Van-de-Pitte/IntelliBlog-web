"use client";

import { ScrollText, ChartLine } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar"
import {usePathname} from "next/navigation";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: ChartLine,
  },
  {
    title: "Posts",
    url: "#",
    icon: ScrollText,
  },
]

export function AppSidebar() {
  const pathname = usePathname().split("/")[1];
  console.log(pathname);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>IntelliBlog</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
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
    </Sidebar>
  )
}