import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { HiMenuAlt1 } from "react-icons/hi";

interface HeaderProps {
  isMobile: boolean;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobile, onMenuClick }) => {
  return (
    <header className="w-full bg-background md:border-b">
      <div className="container flex h-16 items-center justify-between px-1.5 md:px-4">
        <div className="flex items-center flex-1">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              onClick={onMenuClick}
            >
              <HiMenuAlt1 className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          )}
          <div className="hidden md:block relative md:max-w-[300px] md:w-[400px] space-y-1">
            <IoIosSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 w-full"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 lg:absolute lg:right-4">
          <div className="hidden md:flex md:flex-col md:items-end md:justify-between h-full space-y-0.5">
            <p className="text-sm font-medium leading-none">Sujay</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
          <Avatar>
            <AvatarImage src="/admin.png" alt="Sujay" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
