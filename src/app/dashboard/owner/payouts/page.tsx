"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const payouts = [
  { id: "#PO-2026-001", amount: 98000, date: "5 Feb 2026", status: "Processed" },
  { id: "#PO-2026-002", amount: 12500, date: "Pending", status: "Pending" },
  { id: "#PO-2025-012", amount: 85000, date: "5 Jan 2026", status: "Processed" },
  { id: "#PO-2025-011", amount: 92000, date: "5 Dec 2025", status: "Processed" },
];

export default function PayoutsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Payouts</h2>
        <Button className="gap-2 rounded-full">
           Request Payout
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
         <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold text-muted-foreground">Available for Payout</h3>
            <p className="mt-2 text-4xl font-bold text-primary">₹1,23,500</p>
         </div>
         <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold text-muted-foreground">Total Earnings</h3>
            <p className="mt-2 text-4xl font-bold">₹15,67,000</p>
         </div>
      </div>

      <div className="rounded-xl border bg-card">
        <div className="p-6 border-b">
           <h3 className="font-semibold">Payout History</h3>
        </div>
        <div className="divide-y">
           {payouts.map((payout) => (
              <div key={payout.id} className="flex items-center justify-between p-4">
                 <div>
                    <p className="font-medium">{payout.id}</p>
                    <p className="text-sm text-muted-foreground">{payout.date}</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <span className="font-bold">₹{payout.amount.toLocaleString()}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${payout.status === 'Processed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                       {payout.status}
                    </span>
                    {payout.status === 'Processed' && (
                       <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground">
                          <Download className="h-4 w-4" />
                       </Button>
                    )}
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
}
