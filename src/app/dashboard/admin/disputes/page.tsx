"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const disputes = [
  { id: "#DSP001", tenant: "Priya S.", owner: "Rajesh K.", pg: "Sunshine Residency", type: "Check-in dispute", status: "open", date: "12 Feb 2026" },
  { id: "#DSP002", tenant: "Arun M.", owner: "Suresh R.", pg: "Green Valley PG", type: "Refund request", status: "investigating", date: "11 Feb 2026" },
  { id: "#DSP003", tenant: "Neha K.", owner: "Lakshmi D.", pg: "Royal Stays", type: "Maintenance issue", status: "resolved", date: "8 Feb 2026" },
];

const disputeStatusColors: Record<string, string> = {
  open: "bg-red-100 text-red-700",
  investigating: "bg-amber-100 text-amber-700",
  resolved: "bg-green-100 text-green-700",
};

export default function DisputesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Active Disputes</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search disputes..." className="h-9 w-64 pl-9" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-card">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Tenant</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Owner</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">PG</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((dispute) => (
              <tr key={dispute.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3 text-sm font-mono">{dispute.id}</td>
                <td className="px-4 py-3 text-sm">{dispute.tenant}</td>
                <td className="px-4 py-3 text-sm">{dispute.owner}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{dispute.pg}</td>
                <td className="px-4 py-3 text-sm">{dispute.type}</td>
                <td className="px-4 py-3">
                  <Badge className={`text-xs ${disputeStatusColors[dispute.status]}`}>
                    {dispute.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{dispute.date}</td>
                <td className="px-4 py-3">
                  <Button size="sm" variant="outline" className="h-7 text-xs">Resolve</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
