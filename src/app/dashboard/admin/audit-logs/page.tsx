"use client";

import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const auditLogs = [
  { id: 1, action: "Owner Approved", user: "Admin", target: "Rajesh Kumar", time: "2 hours ago" },
  { id: 2, action: "PG Listing Rejected", user: "Admin", target: "Quick Stay PG", time: "3 hours ago" },
  { id: 3, action: "Refund Issued", user: "System", target: "Booking #STN003", time: "5 hours ago" },
  { id: 4, action: "Account Suspended", user: "Admin", target: "Fake Owner #12", time: "1 day ago" },
  { id: 5, action: "Payout Processed", user: "System", target: "Owner: Suresh Reddy", time: "1 day ago" },
];

export default function AuditLogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Audit Logs</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search logs..." className="h-9 w-64 pl-9" />
          </div>
          <Button variant="outline" className="h-9 gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <div className="space-y-3">
          {auditLogs.map((log) => (
            <div key={log.id} className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <div>
                <p className="text-sm font-medium">{log.action}</p>
                <p className="text-xs text-muted-foreground">by {log.user} &middot; Target: {log.target}</p>
              </div>
              <span className="text-xs text-muted-foreground">{log.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
