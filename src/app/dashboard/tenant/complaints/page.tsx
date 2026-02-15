"use client";



import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const complaints = [
  { id: "#CMP001", type: "Maintenance", priority: "High", status: "Open", date: "15 Feb 2026", description: "Water heater not working in bathroom." },
  { id: "#CMP002", type: "Noise Cancellation", priority: "Medium", status: "Resolved", date: "10 Feb 2026", description: "Loud music from neighboring room late at night." },
];

export default function ComplaintsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Complaints & Issues</h2>
        <Button className="gap-2 bg-red-600 hover:bg-red-700">
           File a Complaint
        </Button>
      </div>

      <div className="space-y-4">
         {complaints.map((complaint) => (
            <div key={complaint.id} className="rounded-xl border bg-card p-6">
               <div className="flex items-start justify-between">
                  <div>
                     <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{complaint.type}</h3>
                        <Badge variant={complaint.priority === "High" ? "destructive" : "secondary"}>
                           {complaint.priority} Priority
                        </Badge>
                     </div>
                     <p className="text-sm text-muted-foreground mt-1">Ticket: {complaint.id} &middot; Created on {complaint.date}</p>
                  </div>
                  <Badge variant={complaint.status === "Open" ? "outline" : "secondary"} className={complaint.status === "Resolved" ? "bg-green-100 text-green-700" : ""}>
                     {complaint.status}
                  </Badge>
               </div>
               
               <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm">{complaint.description}</p>
               </div>
               
               {complaint.status === "Open" && (
                  <div className="mt-4 flex gap-2 justify-end">
                     <Button variant="outline" size="sm">Add Comment</Button>
                     <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                        Mark as Resolved
                     </Button>
                  </div>
               )}
            </div>
         ))}
      </div>
    </div>
  );
}
