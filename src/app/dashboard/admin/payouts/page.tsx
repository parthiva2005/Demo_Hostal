"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const payouts = [
  { id: 1, owner: "Ramesh Patel", amount: 12000, date: "15 Feb 2026", status: "Pending" },
  { id: 2, owner: "Suresh Reddy", amount: 8500, date: "14 Feb 2026", status: "Processed" },
  { id: 3, owner: "Amit Shah", amount: 5000, date: "12 Feb 2026", status: "Rejected" },
];

export default function PayoutsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Payouts</h2>

      <div className="rounded-xl border bg-card">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Owner</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Amount</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout) => (
              <tr key={payout.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3 text-sm font-mono">{payout.id}</td>
                <td className="px-4 py-3 text-sm">{payout.owner}</td>
                <td className="px-4 py-3 text-sm font-semibold">₹{payout.amount}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{payout.date}</td>
                <td className="px-4 py-3 text-sm">
                  <Badge variant={payout.status === "Processed" ? "secondary" : (payout.status === "Pending" ? "outline" : "destructive")}>
                    {payout.status}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  {payout.status === "Pending" && (
                    <div className="flex gap-2">
                       <Button size="icon" variant="ghost" className="h-8 w-8 text-green-600">
                          <CheckCircle2 className="h-4 w-4" />
                       </Button>
                       <Button size="icon" variant="ghost" className="h-8 w-8 text-red-600">
                          <XCircle className="h-4 w-4" />
                       </Button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
