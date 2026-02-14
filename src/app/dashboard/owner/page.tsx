"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2, Plus, Home, BarChart3, Wallet, Users, Settings, Bell, Calendar,
  ChevronRight, TrendingUp, IndianRupee, BedDouble, Star, Eye, CheckCircle2,
  Clock, XCircle, ArrowUpRight, Menu, X, LogOut, FileText, MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const sidebarItems = [
  { label: "Overview", icon: Home, active: true },
  { label: "My PGs", icon: Building2 },
  { label: "Bookings", icon: Calendar },
  { label: "Payouts", icon: Wallet },
  { label: "Reviews", icon: Star },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const recentBookings = [
  { id: "#STN001", tenant: "Priya Sharma", pg: "Sunshine Residency", room: "Single", date: "15 Feb 2026", amount: 20500, status: "confirmed" },
  { id: "#STN002", tenant: "Arun Kumar", pg: "Sunshine Residency", room: "Double", date: "18 Feb 2026", amount: 17000, status: "pending_checkin" },
  { id: "#STN003", tenant: "Sneha R.", pg: "Green Heights", room: "Triple", date: "10 Feb 2026", amount: 13000, status: "completed" },
  { id: "#STN004", tenant: "Rahul M.", pg: "Sunshine Residency", room: "Single", date: "20 Feb 2026", amount: 20500, status: "confirmed" },
];

const myPGs = [
  { name: "Sunshine Residency", location: "Madhapur, Hyderabad", totalBeds: 45, occupiedBeds: 38, rating: 4.8, revenue: 342000, status: "active" },
  { name: "Green Heights PG", location: "Gachibowli, Hyderabad", totalBeds: 30, occupiedBeds: 25, rating: 4.5, revenue: 225000, status: "active" },
  { name: "Metro Living", location: "Kukatpally, Hyderabad", totalBeds: 20, occupiedBeds: 0, rating: 0, revenue: 0, status: "pending" },
];

const statusColors: Record<string, string> = {
  confirmed: "bg-blue-100 text-blue-700",
  pending_checkin: "bg-amber-100 text-amber-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  no_show: "bg-gray-100 text-gray-700",
};

const statusLabels: Record<string, string> = {
  confirmed: "Confirmed",
  pending_checkin: "Pending Check-in",
  completed: "Completed",
  cancelled: "Cancelled",
  no_show: "No Show",
};

export default function OwnerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Overview");

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-card transition-transform lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2 className="h-4 w-4" />
          </div>
          <span className="font-bold">Stay<span className="text-primary">Nest</span></span>
          <Badge variant="secondary" className="ml-auto text-xs">Owner</Badge>
        </div>
        <nav className="mt-4 space-y-1 px-3">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { setActiveItem(item.label); setSidebarOpen(false); }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                activeItem === item.label ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
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
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-card px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-semibold">{activeItem}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-accent">
              <Bell className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">3</span>
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              RK
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-4 lg:p-8">
          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total Revenue", value: "₹5,67,000", change: "+12%", icon: IndianRupee, color: "text-green-600" },
              { label: "Active Bookings", value: "63", change: "+5", icon: Calendar, color: "text-blue-600" },
              { label: "Occupancy Rate", value: "84%", change: "+3%", icon: BedDouble, color: "text-purple-600" },
              { label: "Avg Rating", value: "4.7", change: "+0.2", icon: Star, color: "text-amber-600" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border bg-card p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" /> {stat.change} from last month
                </p>
              </motion.div>
            ))}
          </div>

          {/* My PGs */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">My PG Properties</h2>
              <Button size="sm" className="gap-2 rounded-full">
                <Plus className="h-4 w-4" /> Add New PG
              </Button>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {myPGs.map((pg, i) => (
                <motion.div
                  key={pg.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border bg-card p-5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{pg.name}</h3>
                      <p className="text-sm text-muted-foreground">{pg.location}</p>
                    </div>
                    <Badge className={pg.status === "active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}>
                      {pg.status === "active" ? "Active" : "Pending Approval"}
                    </Badge>
                  </div>
                  {pg.status === "active" && (
                    <>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Occupancy</span>
                          <span className="font-medium">{pg.occupiedBeds}/{pg.totalBeds} beds</span>
                        </div>
                        <Progress value={(pg.occupiedBeds / pg.totalBeds) * 100} className="mt-2 h-2" />
                      </div>
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          <span className="font-semibold">{pg.rating}</span>
                        </div>
                        <span className="text-muted-foreground">₹{(pg.revenue / 1000).toFixed(0)}K revenue</span>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Recent Bookings</h2>
            <div className="mt-4 overflow-hidden rounded-xl border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Booking ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Tenant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Room</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Joining Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="border-b last:border-0">
                        <td className="px-4 py-3 text-sm font-mono">{booking.id}</td>
                        <td className="px-4 py-3 text-sm font-medium">{booking.tenant}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{booking.room}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{booking.date}</td>
                        <td className="px-4 py-3 text-sm font-semibold">₹{booking.amount.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[booking.status]}`}>
                            {statusLabels[booking.status]}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          {booking.status === "pending_checkin" && (
                            <Button size="sm" variant="outline" className="h-7 gap-1 text-xs">
                              <CheckCircle2 className="h-3 w-3" /> Confirm Check-in
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Payout Summary */}
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Payout Summary</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pending Payout</p>
                    <p className="text-2xl font-bold text-primary">₹1,23,500</p>
                  </div>
                  <Button size="sm" className="rounded-full">Request Payout</Button>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Last Payout", value: "₹98,000", date: "5 Feb 2026" },
                    { label: "Total Earned", value: "₹15,67,000", date: "Since Jan 2024" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-lg bg-muted/50 p-3 text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <div className="text-right">
                        <span className="font-semibold">{item.value}</span>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Quick Actions</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: "Add New PG", icon: Plus, color: "bg-blue-50 text-blue-600" },
                  { label: "View Analytics", icon: BarChart3, color: "bg-purple-50 text-purple-600" },
                  { label: "Manage Complaints", icon: MessageSquare, color: "bg-amber-50 text-amber-600" },
                  { label: "Update Food Menu", icon: FileText, color: "bg-green-50 text-green-600" },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-colors hover:bg-accent"
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.color}`}>
                      <action.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
