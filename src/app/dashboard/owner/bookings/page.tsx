"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const recentBookings = [
  { id: "#STN001", tenant: "Priya Sharma", pg: "Sunshine Residency", room: "Single", date: "15 Feb 2026", amount: 20500, status: "confirmed" },
  { id: "#STN002", tenant: "Arun Kumar", pg: "Sunshine Residency", room: "Double", date: "18 Feb 2026", amount: 17000, status: "pending_checkin" },
  { id: "#STN003", tenant: "Sneha R.", pg: "Green Heights", room: "Triple", date: "10 Feb 2026", amount: 13000, status: "completed" },
  { id: "#STN004", tenant: "Rahul M.", pg: "Sunshine Residency", room: "Single", date: "20 Feb 2026", amount: 20500, status: "confirmed" },
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

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Bookings</h2>

      <div className="rounded-xl border bg-card">
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
  );
}
