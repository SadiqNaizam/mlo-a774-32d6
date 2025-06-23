import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, ChevronDown, Menu } from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <header className="bg-background border-b h-16 flex items-center justify-between px-6 sticky top-0 z-10">
        <div className="flex items-center gap-4">
            {/* Hamburger menu for mobile, hidden on larger screens */}
            <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
            <Select defaultValue="last-6-months">
                <SelectTrigger className="w-[180px] h-9 text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-2"/>
                    <SelectValue placeholder="Select a time range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="last-24-hours">Last 24 hours</SelectItem>
                    <SelectItem value="last-7-days">Last 7 days</SelectItem>
                    <SelectItem value="last-30-days">Last 30 days</SelectItem>
                    <SelectItem value="last-6-months">Last 6 months</SelectItem>
                    <SelectItem value="last-12-months">Last 12 months</SelectItem>
                </SelectContent>
            </Select>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="h-9">
                        Create <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>New Lead</DropdownMenuItem>
                    <DropdownMenuItem>New Customer</DropdownMenuItem>
                    <DropdownMenuItem>New Proposal</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Import Data</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
  );
};

export default TopHeader;
