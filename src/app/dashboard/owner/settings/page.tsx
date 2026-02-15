"use client";

import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function OwnerSettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Settings</h2>

      <div className="grid gap-6">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="font-semibold">Profile Settings</h3>
          <div className="mt-4 grid gap-4">
             <div className="grid gap-2">
                <Label htmlFor="owner-name">Name</Label>
                <Input id="owner-name" defaultValue="Ramesh Patel" />
             </div>
             <div className="grid gap-2">
                <Label htmlFor="owner-email">Email</Label>
                <Input id="owner-email" defaultValue="ramesh@gmail.com" />
             </div>
             <div className="grid gap-2">
                <Label htmlFor="owner-phone">Phone</Label>
                <Input id="owner-phone" defaultValue="+91 98123 45678" />
             </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h3 className="font-semibold">Preferences</h3>
          <div className="mt-4 space-y-4">
             <div className="flex items-center justify-between">
                <div>
                   <Label htmlFor="booking-notif" className="text-base">Booking Notifications</Label>
                   <p className="text-sm text-muted-foreground">Receive alerts for new bookings.</p>
                </div>
                <Switch id="booking-notif" defaultChecked />
             </div>
             <Separator />
             <div className="flex items-center justify-between">
                <div>
                   <Label htmlFor="review-notif" className="text-base">Review Notifications</Label>
                   <p className="text-sm text-muted-foreground">Receive alerts for new reviews.</p>
                </div>
                <Switch id="review-notif" defaultChecked />
             </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
         <Button className="gap-2">
            <Save className="h-4 w-4" /> Save Changes
         </Button>
      </div>
    </div>
  );
}
