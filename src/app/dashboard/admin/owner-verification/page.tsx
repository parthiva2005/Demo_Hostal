"use client";

import { Eye, CheckCircle2, XCircle, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const owners = [
  { id: 1, name: "Ramesh Patel", email: "ramesh@gmail.com", phone: "+91 98123 45678", submitted: "10 Feb 2026", documents: 3, attempts: 1, status: "pending" },
  { id: 2, name: "Suresh Reddy", email: "suresh@outlook.com", phone: "+91 87654 32109", submitted: "11 Feb 2026", documents: 3, attempts: 1, status: "pending" },
  { id: 3, name: "Lakshmi Devi", email: "lakshmi@yahoo.com", phone: "+91 76543 21098", submitted: "12 Feb 2026", documents: 2, attempts: 2, status: "rejected" },
];

export default function OwnerVerificationPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Owner Verification</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search owners..." className="h-9 w-64 pl-9" />
          </div>
          <Button variant="outline" className="h-9 gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
        </div>
      </div>

      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="font-semibold">Pending Requests</h3>
          <Badge variant="secondary">{owners.filter(o => o.status === "pending").length} pending</Badge>
        </div>
        <div className="divide-y">
          {owners.map((owner) => (
            <div key={owner.id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{owner.name}</p>
                  {owner.attempts > 1 && (
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 text-[10px]">
                      Attempt #{owner.attempts}
                    </Badge>
                  )}
                </div>
                <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
                  <span>{owner.email}</span>
                  <span className="hidden sm:inline">&middot;</span>
                  <span>{owner.phone}</span>
                  <span className="hidden sm:inline">&middot;</span>
                  <span>Submitted {owner.submitted}</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{owner.documents}/3 documents uploaded</div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="gap-1">
                  <Eye className="h-4 w-4" /> Review
                </Button>
                <Button size="sm" className="gap-1 bg-green-600 hover:bg-green-700">
                  <CheckCircle2 className="h-4 w-4" /> Approve
                </Button>
                <Button size="sm" variant="destructive" className="gap-1">
                  <XCircle className="h-4 w-4" /> Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
