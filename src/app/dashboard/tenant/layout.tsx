"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Building2, Home, Heart,
  Settings, Bell, Calendar, Star,
  LogOut, MessageSquare, Search, Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sidebarItems = [
  { label: "Overview", icon: Home, href: "/dashboard/tenant" },
  { label: "My Bookings", icon: Calendar, href: "/dashboard/tenant/my-bookings" },
  { label: "Saved PGs", icon: Heart, href: "/dashboard/tenant/saved-pgs" },
  { label: "Reviews", icon: Star, href: "/dashboard/tenant/reviews" },
  { label: "Complaints", icon: MessageSquare, href: "/dashboard/tenant/complaints" },
  { label: "Settings", icon: Settings, href: "/dashboard/tenant/settings" },
];

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Helper to determine active state (exact match for root, prefix match for others)
  const isActive = (href: string) => {
    if (href === "/dashboard/tenant") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const getPageTitle = () => {
     const item = sidebarItems.find(i => isActive(i.href));
     return item ? item.label : "Tenant Dashboard";
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-card transition-transform lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Building2 className="h-4 w-4" />
            </div>
            <span className="font-bold">Stay<span className="text-primary">Nest</span></span>
          </Link>
          <Badge variant="secondary" className="ml-auto text-xs">Tenant</Badge>
        </div>
        <nav className="mt-4 space-y-1 px-3">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(item.href) ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-0 right-0 px-3">
          <Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">
            <LogOut className="h-4 w-4" /> Sign Out
          </Link>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-card px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden"><Menu className="h-5 w-5" /></button>
            <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/search">
              <Button size="sm" variant="outline" className="gap-2 rounded-full">
                <Search className="h-4 w-4" /> Find PG
              </Button>
            </Link>
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-accent">
              <Bell className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">2</span>
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              PS
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
