"use client";

import { MapPin, Star, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

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

const statusColors: Record<string, string> = {
  confirmed: "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  pending_payment: "bg-amber-100 text-amber-700",
};

export default function MyBookingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">My Bookings</h2>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex flex-col gap-4 rounded-xl border bg-card p-4 sm:flex-row"
          >
            <div className="h-32 w-full overflow-hidden rounded-lg sm:w-48 sm:shrink-0 relative">
              <Image src={booking.image} alt={booking.pg} fill className="object-cover" />
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
          </div>
        ))}
      </div>
    </div>
  );
}
