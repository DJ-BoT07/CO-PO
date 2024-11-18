"use client";
import { useState } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Users,
  FileSpreadsheet,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Overview",
    icon: <LayoutDashboard className="w-5 h-5" />,
    href: "/dashboard"
  },
  {
    title: "CO Definition",
    icon: <BookOpen className="w-5 h-5" />,
    href: "/dashboard/co-definition"
  },
  {
    title: "PO Mapping",
    icon: <FileSpreadsheet className="w-5 h-5" />,
    href: "/dashboard/po-mapping"
  },
  {
    title: "Assessment",
    icon: <BarChart3 className="w-5 h-5" />,
    href: "/dashboard/assessment"
  },
  {
    title: "Students",
    icon: <Users className="w-5 h-5" />,
    href: "/dashboard/students"
  },
  {
    title: "Settings",
    icon: <Settings className="w-5 h-5" />,
    href: "/dashboard/settings"
  }
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);

  const toggleSidebar = () => {
    setIsDesktopOpen(!isDesktopOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={isDesktopOpen} 
        onToggle={toggleSidebar}
      >
        <nav className={cn(
          "flex-1 p-4",
          !isDesktopOpen && "px-2"
        )}>
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 mb-1",
                pathname === item.href && "bg-purple-50 text-purple-700",
                !isDesktopOpen && "justify-center px-2"
              )}
              title={!isDesktopOpen ? item.title : undefined}
            >
              {item.icon}
              {isDesktopOpen && (
                <>
                  <span>{item.title}</span>
                  <ChevronRight 
                    className={cn(
                      "ml-auto h-4 w-4 transition-transform",
                      pathname === item.href && "rotate-90"
                    )} 
                  />
                </>
              )}
            </Link>
          ))}
        </nav>
      </Sidebar>

      {/* Main Content */}
      <div className={cn(
        "transition-all duration-300",
        isDesktopOpen ? "lg:pl-64" : "lg:pl-16"
      )}>
        <header className="sticky top-0 z-30 border-b bg-white">
          <div className="flex h-16 items-center justify-end px-4">
            <Button variant="outline">Profile</Button>
          </div>
        </header>
        <main className="container mx-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 