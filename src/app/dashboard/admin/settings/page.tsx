"use client";

import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Settings</h2>

      <div className="grid gap-6">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="font-semibold">General Settings</h3>
          <div className="mt-4 grid gap-4">
             <div className="grid gap-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" defaultValue="StayNest" />
             </div>
             <div className="grid gap-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input id="support-email" defaultValue="support@staynest.com" />
             </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h3 className="font-semibold">Notifications</h3>
          <div className="mt-4 space-y-4">
             <div className="flex items-center justify-between">
                <div>
                   <Label htmlFor="email-notif" className="text-base">Email Notifications</Label>
                   <p className="text-sm text-muted-foreground">Receive emails about new registrations.</p>
                </div>
                <Switch id="email-notif" defaultChecked />
             </div>
             <Separator />
             <div className="flex items-center justify-between">
                <div>
                   <Label htmlFor="push-notif" className="text-base">Push Notifications</Label>
                   <p className="text-sm text-muted-foreground">Receive push notifications for critical alerts.</p>
                </div>
                <Switch id="push-notif" defaultChecked />
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
