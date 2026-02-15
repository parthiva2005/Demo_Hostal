"use client";

import { Eye, Flag, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pendingPGs = [
  { id: 1, name: "Star Living PG", owner: "Ramesh Patel", location: "Banjara Hills, Hyderabad", rooms: 30, price: "₹6,500 - ₹14,000", submitted: "11 Feb 2026", flag: null },
  { id: 2, name: "Quick Stay", owner: "Amit Shah", location: "JP Nagar, Bangalore", rooms: 15, price: "₹100 - ₹500", submitted: "12 Feb 2026", flag: "Suspicious pricing" },
  { id: 3, name: "Comfort Zone", owner: "Rajesh Kumar", location: "Gachibowli, Hyderabad", rooms: 45, price: "₹8,000 - ₹15,000", submitted: "13 Feb 2026", flag: null },
];

export default function PGApprovalsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">PG Approvals</h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {pendingPGs.map((pg) => (
          <div key={pg.id} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{pg.name}</h3>
                  {pg.flag && (
                    <Badge variant="destructive" className="gap-1 text-[10px]">
                      <Flag className="h-3 w-3" /> {pg.flag}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">by {pg.owner}</p>
                <div className="mt-2 text-sm text-muted-foreground">
                  <p>{pg.location}</p>
                  <p>{pg.rooms} rooms &middot; {pg.price}/mo</p>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Submitted: {pg.submitted}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline" className="flex-1 gap-2">
                <Eye className="h-4 w-4" /> View Details
              </Button>
              <Button size="sm" className="flex-1 gap-2 bg-green-600 hover:bg-green-700">
                <CheckCircle2 className="h-4 w-4" /> Approve
              </Button>
              <Button size="sm" variant="destructive" className="flex-1 gap-2">
                <XCircle className="h-4 w-4" /> Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
