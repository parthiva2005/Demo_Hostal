"use client";

import { motion } from "framer-motion";
import {
  Plus, BarChart3, Calendar,
  TrendingUp, IndianRupee, BedDouble, Star, CheckCircle2,
  FileText, MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { useState } from "react";

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

const rentReminders = [
  { id: 1, tenant: "Amit Patel", room: "101", amount: 15000, dueDate: "2026-02-10", status: "Overdue" },
  { id: 2, tenant: "Sarah Jones", room: "204", amount: 12500, dueDate: "2026-02-18", status: "Due Soon" },
  { id: 3, tenant: "Rajesh Kumar", room: "305", amount: 18000, dueDate: "2026-02-20", status: "Due Soon" },
];

function RentReminders() {
  const [remindedTenants, setRemindedTenants] = useState<number[]>([]);

  const handleRemind = (id: number) => {
    // In a real app, this would make an API call
    if (remindedTenants.includes(id)) return;
    
    // Simulate API call/toast
    // toast.success("Reminder sent successfully!"); 
    // fallback for now since toast isn't set up in this file
    setRemindedTenants([...remindedTenants, id]);
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Rent Reminders</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rentReminders.map((reminder) => (
          <div key={reminder.id} className="rounded-xl border bg-card p-5 shadow-sm">
             <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{reminder.tenant}</h3>
                  <p className="text-sm text-muted-foreground">Room {reminder.room}</p>
                </div>
                <Badge variant={reminder.status === "Overdue" ? "destructive" : "secondary"} className={reminder.status === "Due Soon" ? "bg-amber-100 text-amber-800 hover:bg-amber-100" : ""}>
                  {reminder.status}
                </Badge>
             </div>
             <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                   <span className="text-muted-foreground">Amount Due</span>
                   <span className="font-semibold">₹{reminder.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                   <span className="text-muted-foreground">Due Date</span>
                   <span>{new Date(reminder.dueDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
                </div>
                <Button 
                  className="w-full" 
                  size="sm" 
                  variant={remindedTenants.includes(reminder.id) ? "outline" : "default"}
                  disabled={remindedTenants.includes(reminder.id)}
                  onClick={() => handleRemind(reminder.id)}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {remindedTenants.includes(reminder.id) ? "Reminder Sent" : "Send Reminder"}
                </Button>
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function OwnerDashboard() {
  return (
    <>
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
                  <tr key={booking.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
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

      {/* Rent Reminders */}
      <RentReminders />

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
              { label: "Add New PG", icon: Plus, color: "bg-blue-50 text-blue-600", href: "/dashboard/owner/my-pgs" },
              { label: "View Analytics", icon: BarChart3, color: "bg-purple-50 text-purple-600", href: "/dashboard/owner/analytics" },
              { label: "Manage Complaints", icon: MessageSquare, color: "bg-amber-50 text-amber-600", href: "/dashboard/owner/reviews" },
              { label: "Update Food Menu", icon: FileText, color: "bg-green-50 text-green-600", href: "/dashboard/owner/my-pgs" },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-colors hover:bg-accent"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.color}`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">{action.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
