"use client";

import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function TenantSettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Settings</h2>

      <div className="grid gap-6">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="font-semibold">Profile Settings</h3>
          <div className="mt-4 grid gap-4">
             <div className="grid gap-2">
                <Label htmlFor="tenant-name">Name</Label>
                <Input id="tenant-name" defaultValue="Priya Sharma" />
             </div>
             <div className="grid gap-2">
                <Label htmlFor="tenant-email">Email</Label>
                <Input id="tenant-email" defaultValue="priya@gmail.com" />
             </div>
             <div className="grid gap-2">
                <Label htmlFor="tenant-phone">Phone</Label>
                <Input id="tenant-phone" defaultValue="+91 87654 32109" />
             </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h3 className="font-semibold">Preferences</h3>
          <div className="mt-4 space-y-4">
             <div className="flex items-center justify-between">
                <div>
                   <Label htmlFor="rent-reminder" className="text-base">Rent Reminders</Label>
                   <p className="text-sm text-muted-foreground">Receive reminders when rent is due.</p>
                </div>
                <Switch id="rent-reminder" defaultChecked />
             </div>
             <Separator />
             <div className="flex items-center justify-between">
                <div>
                   <Label htmlFor="new-pg-alert" className="text-base">New PG Alerts</Label>
                   <p className="text-sm text-muted-foreground">Get notified about new PGs in your preferred area.</p>
                </div>
                <Switch id="new-pg-alert" />
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
