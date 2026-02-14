"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2, Home, Search, Calendar, Heart, Star, Settings, Bell, Menu,
  LogOut, MapPin, Clock, CheckCircle2, XCircle, CreditCard, MessageSquare,
  ArrowRight, ChevronRight, IndianRupee, FileText, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const sidebarItems = [
  { label: "Overview", icon: Home, active: true },
  { label: "My Bookings", icon: Calendar },
  { label: "Saved PGs", icon: Heart },
  { label: "Reviews", icon: Star },
  { label: "Complaints", icon: MessageSquare },
  { label: "Settings", icon: Settings },
];

const bookings = [
  {
    id: "#STN2026021301",
    pg: "Sunshine Residency",
    location: "Madhapur, Hyderabad",
    room: "Double Sharing",
    joiningDate: "15 Feb 2026",
    rent: 8500,
    deposit: 8500,
    status: "confirmed",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop",
  },
  {
    id: "#STN2025120501",
    pg: "Green Valley PG",
    location: "Koramangala, Bangalore",
    room: "Single",
    joiningDate: "5 Dec 2025",
    rent: 12000,
    deposit: 12000,
    status: "completed",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop",
  },
];

const savedPGs = [
  { name: "Lakeside Living", location: "Hitech City, Hyderabad", price: 13500, rating: 4.9, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop" },
  { name: "Comfort Zone PG", location: "Whitefield, Bangalore", price: 9000, rating: 4.5, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
];

const statusColors: Record<string, string> = {
  confirmed: "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  pending_payment: "bg-amber-100 text-amber-700",
};

export default function TenantDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Overview");

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
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-card px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden"><Menu className="h-5 w-5" /></button>
            <h1 className="text-lg font-semibold">Welcome, Priya!</h1>
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
          {/* Current Stay Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-2xl border bg-gradient-to-r from-primary/10 to-purple-500/10 p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Badge variant="secondary" className="mb-2">Current Stay</Badge>
                <h2 className="text-xl font-bold">Sunshine Residency</h2>
                <p className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> Madhapur, Hyderabad
                </p>
                <div className="mt-3 flex gap-4 text-sm">
                  <span className="text-muted-foreground">Room: <span className="font-medium text-foreground">Double Sharing</span></span>
                  <span className="text-muted-foreground">Rent: <span className="font-medium text-primary">₹8,500/mo</span></span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" className="rounded-full">View Details</Button>
                <Button size="sm" variant="outline" className="rounded-full gap-1">
                  <MessageSquare className="h-3.5 w-3.5" /> Contact Owner
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Total Spent", value: "₹1,53,000", icon: IndianRupee, sub: "Since Dec 2024" },
              { label: "Active Booking", value: "1", icon: Calendar, sub: "Sunshine Residency" },
              { label: "Reviews Given", value: "3", icon: Star, sub: "Avg 4.5 stars" },
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
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Bookings */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">My Bookings</h2>
            <div className="mt-4 space-y-4">
              {bookings.map((booking, i) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col gap-4 rounded-xl border bg-card p-4 sm:flex-row"
                >
                  <div className="h-32 w-full overflow-hidden rounded-lg sm:w-48 sm:shrink-0">
                    <img src={booking.image} alt={booking.pg} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{booking.pg}</h3>
                          <p className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" /> {booking.location}
                          </p>
                        </div>
                        <Badge className={statusColors[booking.status]}>
                          {booking.status === "confirmed" ? "Active" : "Completed"}
                        </Badge>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                        <span>Booking: <span className="font-mono text-foreground">{booking.id}</span></span>
                        <span>Room: <span className="text-foreground">{booking.room}</span></span>
                        <span>Joined: <span className="text-foreground">{booking.joiningDate}</span></span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t pt-3">
                      <span className="text-lg font-bold text-primary">₹{booking.rent.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/month</span></span>
                      <div className="flex gap-2">
                        {booking.status === "completed" && (
                          <Button size="sm" variant="outline" className="gap-1 text-xs rounded-full">
                            <Star className="h-3 w-3" /> Leave Review
                          </Button>
                        )}
                        {booking.status === "confirmed" && (
                          <Button size="sm" variant="outline" className="gap-1 text-xs text-red-600 hover:text-red-600 rounded-full">
                            <XCircle className="h-3 w-3" /> Cancel
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Saved PGs */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Saved PGs</h2>
              <Link href="/search" className="text-sm text-primary hover:underline">Browse more</Link>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {savedPGs.map((pg, i) => (
                <motion.div
                  key={pg.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 rounded-xl border bg-card p-4"
                >
                  <div className="h-20 w-24 overflow-hidden rounded-lg shrink-0">
                    <img src={pg.image} alt={pg.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{pg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pg.location}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-bold text-primary">₹{pg.price.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/mo</span></span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-semibold">{pg.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Recent Notifications</h2>
            <div className="mt-4 space-y-2">
              {[
                { icon: CheckCircle2, text: "Your booking at Sunshine Residency has been confirmed", time: "2 hours ago", color: "text-green-600" },
                { icon: CreditCard, text: "Payment of ₹17,000 processed successfully", time: "2 hours ago", color: "text-blue-600" },
                { icon: AlertCircle, text: "Reminder: Your monthly rent is due on 1st March", time: "1 day ago", color: "text-amber-600" },
              ].map((notif, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border p-3">
                  <notif.icon className={`mt-0.5 h-4 w-4 ${notif.color}`} />
                  <div className="flex-1">
                    <p className="text-sm">{notif.text}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
