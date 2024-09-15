import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CiLogout } from "react-icons/ci";
import { CgPathExclude } from "react-icons/cg";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import getNavByRole from "@/navigation";
import Nav from "@/types/nav";

interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile, isOpen, onClose }) => {
  const location = useLocation();
  const [nav, setNav] = useState<Nav[]>([]);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const navs = getNavByRole("admin");
    setNav(navs);
  }, []);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className={cn("p-6", isCollapsed && "p-2")}>
        <Link to="/admin/dashboard" className={cn("flex items-center")}>
          <CgPathExclude className="h-9 w-9" color="white" />
          {(!isCollapsed || isMobile) && (
            <span className="text-2xl font-bold text-white">FabricFrost</span>
          )}
        </Link>
        {!isMobile && (
          <Button
            variant="noHoverVariant"
            size="smallIcon"
            onClick={toggleSidebar}
            className={cn(
              "border rounded-full shadow-md absolute -right-3 top-[29.6px]"
            )}
          >
            {isCollapsed ? (
              <IoChevronForwardOutline className="h-4 w-4" />
            ) : (
              <IoChevronBackOutline className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
      <ScrollArea
        isCollapsed={isCollapsed}
        className={cn("flex-1", isCollapsed ? "px-1" : "px-3")}
      >
        <nav className="flex flex-col space-y-1">
          {nav.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                  isActive
                    ? "bg-accent text-white"
                    : "text-white hover:bg-accent hover:text-muted-foreground",
                  isCollapsed ? "justify-center" : "justify-start"
                )}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {!isCollapsed || isMobile ? <span>{item.title}</span> : null}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      <div className={cn("mt-auto", isCollapsed ? "p-2" : "p-4")}>
        <Button
          variant="outline"
          size="icon"
          className={cn("justify-center", isCollapsed ? "w-10" : "w-full")}
        >
          <CiLogout className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
          {!isCollapsed && "Logout"}
        </Button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-0 w-64 bg-card">
          <SheetHeader>
            <SheetDescription>
              <VisuallyHidden>
                Navigation menu for Admin Dashboard
              </VisuallyHidden>
            </SheetDescription>
          </SheetHeader>
          <VisuallyHidden>
            <SheetTitle>Menu</SheetTitle>
          </VisuallyHidden>
          <SidebarContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className={cn(
        "hidden md:flex relative border-r transition-all duration-300 bg-card",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
