"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", total: 12000 },
  { name: "Feb", total: 15000 },
  { name: "Mar", total: 18000 },
  { name: "Apr", total: 22000 },
  { name: "May", total: 28000 },
  { name: "Jun", total: 25000 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Revenue", value: "₹1,20,000", change: "+12%" },
          { label: "Occupancy Rate", value: "85%", change: "+5%" },
          { label: "New Bookings", value: "45", change: "+8%" },
          { label: "Pending Payouts", value: "₹25,000", change: "-2%" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className={stat.change.startsWith("+") ? "text-green-600 text-sm" : "text-red-600 text-sm"}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
