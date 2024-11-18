"use client";
import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function Sidebar({ children, className, isOpen, onToggle }) {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  if (isMobile) {
    return (
      <>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed left-4 top-4 z-40 lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open Sidebar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0">
            {children}
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    <>
      <div 
        className={cn(
          "hidden lg:flex h-screen flex-col fixed transition-all duration-300",
          isOpen ? "w-64" : "w-16",
          "border-r bg-white",
          className
        )}
      >
        <div className={cn(
          "flex items-center p-6 border-b",
          isOpen ? "justify-between" : "justify-center"
        )}>
          {isOpen && <h2 className="text-2xl font-bold text-purple-700">DYPCOE</h2>}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="hover:bg-purple-50"
          >
            {isOpen ? (
              <PanelLeftClose className="h-4 w-4" />
            ) : (
              <PanelLeftOpen className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className={cn(
          "flex-1",
          !isOpen && "items-center"
        )}>
          {children}
        </div>
      </div>
    </>
  );
}
