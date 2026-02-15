"use client";

import { motion } from "framer-motion";
import {
  Building2, Users, AlertTriangle,
  CheckCircle2, XCircle, Eye, TrendingUp, IndianRupee,
  Flag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const pendingOwners = [
  { name: "Ramesh Patel", email: "ramesh@gmail.com", phone: "+91 98123 45678", submitted: "10 Feb 2026", documents: 3, attempts: 1 },
  { name: "Suresh Reddy", email: "suresh@outlook.com", phone: "+91 87654 32109", submitted: "11 Feb 2026", documents: 3, attempts: 1 },
  { name: "Lakshmi Devi", email: "lakshmi@yahoo.com", phone: "+91 76543 21098", submitted: "12 Feb 2026", documents: 2, attempts: 2 },
];

const pendingPGs = [
  { name: "Star Living PG", owner: "Ramesh Patel", location: "Banjara Hills, Hyderabad", rooms: 30, price: "₹6,500 - ₹14,000", submitted: "11 Feb 2026", flag: null },
  { name: "Quick Stay", owner: "Amit Shah", location: "JP Nagar, Bangalore", rooms: 15, price: "₹100 - ₹500", submitted: "12 Feb 2026", flag: "Suspicious pricing" },
];

const auditLogs = [
  { action: "Owner Approved", user: "Admin", target: "Rajesh Kumar", time: "2 hours ago" },
  { action: "PG Listing Rejected", user: "Admin", target: "Quick Stay PG", time: "3 hours ago" },
  { action: "Refund Issued", user: "System", target: "Booking #STN003", time: "5 hours ago" },
  { action: "Account Suspended", user: "Admin", target: "Fake Owner #12", time: "1 day ago" },
  { action: "Payout Processed", user: "System", target: "Owner: Suresh Reddy", time: "1 day ago" },
];

export default function AdminDashboard() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Users", value: "2,34,567", change: "+1,234", icon: Users, color: "text-blue-600" },
          { label: "Active PGs", value: "48,921", change: "+328", icon: Building2, color: "text-green-600" },
          { label: "Open Disputes", value: "23", change: "-5", icon: AlertTriangle, color: "text-red-600" },
          { label: "Monthly Revenue", value: "₹45.2L", change: "+18%", icon: IndianRupee, color: "text-purple-600" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
            <p className="mt-2 text-2xl font-bold">{stat.value}</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="h-3 w-3" /> {stat.change} this month
            </p>
          </motion.div>
        ))}
      </div>

      {/* Pending Approvals Grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Owner Verification */}
        <div className="rounded-xl border bg-card">
          <div className="flex items-center justify-between border-b p-5">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Owner Verification</h2>
              <Badge variant="secondary">{pendingOwners.length} pending</Badge>
            </div>
          </div>
          <div className="divide-y">
            {pendingOwners.map((owner) => (
              <div key={owner.email} className="flex items-center justify-between p-4">
                <div>
                  <p className="font-medium">{owner.name}</p>
                  <p className="text-xs text-muted-foreground">{owner.email} &middot; Submitted {owner.submitted}</p>
                  <div className="mt-1 flex gap-2">
                    <span className="text-xs text-muted-foreground">{owner.documents}/3 docs</span>
                    {owner.attempts > 1 && (
                      <Badge variant="secondary" className="bg-amber-100 text-amber-700 text-[10px]">
                        Attempt #{owner.attempts}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="h-8 gap-1 text-xs">
                    <Eye className="h-3 w-3" /> Review
                  </Button>
                  <Button size="sm" className="h-8 gap-1 text-xs bg-green-600 hover:bg-green-700">
                    <CheckCircle2 className="h-3 w-3" /> Approve
                  </Button>
                  <Button size="sm" variant="destructive" className="h-8 gap-1 text-xs">
                    <XCircle className="h-3 w-3" /> Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PG Approvals */}
        <div className="rounded-xl border bg-card">
          <div className="flex items-center justify-between border-b p-5">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">PG Approvals</h2>
              <Badge variant="secondary">{pendingPGs.length} pending</Badge>
            </div>
          </div>
          <div className="divide-y">
            {pendingPGs.map((pg) => (
              <div key={pg.name} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{pg.name}</p>
                      {pg.flag && (
                        <Badge variant="destructive" className="gap-1 text-[10px]">
                          <Flag className="h-2.5 w-2.5" /> {pg.flag}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">by {pg.owner} &middot; {pg.location}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{pg.rooms} rooms &middot; {pg.price}/mo</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-8 gap-1 text-xs">
                      <Eye className="h-3 w-3" /> View
                    </Button>
                    <Button size="sm" className="h-8 text-xs bg-green-600 hover:bg-green-700">Approve</Button>
                    <Button size="sm" variant="destructive" className="h-8 text-xs">Reject</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audit Logs & Platform Health */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="font-semibold">Recent Audit Logs</h3>
          <div className="mt-4 space-y-3">
            {auditLogs.map((log, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                <div>
                  <p className="text-sm font-medium">{log.action}</p>
                  <p className="text-xs text-muted-foreground">by {log.user} &middot; Target: {log.target}</p>
                </div>
                <span className="text-xs text-muted-foreground">{log.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h3 className="font-semibold">Platform Health</h3>
          <div className="mt-4 space-y-4">
            {[
              { label: "Server Uptime", value: 99.9, color: "bg-green-500" },
              { label: "Booking Success Rate", value: 96.5, color: "bg-blue-500" },
              { label: "Payment Success Rate", value: 98.2, color: "bg-purple-500" },
              { label: "Dispute Resolution Rate", value: 87.0, color: "bg-amber-500" },
            ].map((metric) => (
              <div key={metric.label}>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{metric.label}</span>
                  <span className="font-semibold">{metric.value}%</span>
                </div>
                <Progress value={metric.value} className="mt-1.5 h-2" />
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-red-50 p-3 text-center">
              <p className="text-2xl font-bold text-red-600">3</p>
              <p className="text-xs text-red-600">Flagged Accounts</p>
            </div>
            <div className="rounded-lg bg-amber-50 p-3 text-center">
              <p className="text-2xl font-bold text-amber-600">12</p>
              <p className="text-xs text-amber-600">Pending Refunds</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
