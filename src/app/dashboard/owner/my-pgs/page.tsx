"use client";

import { Plus, Star, BedDouble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const myPGs = [
  { id: 1, name: "Sunshine Residency", location: "Madhapur, Hyderabad", totalBeds: 45, occupiedBeds: 38, rating: 4.8, revenue: 342000, status: "active", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop" },
  { id: 2, name: "Green Heights PG", location: "Gachibowli, Hyderabad", totalBeds: 30, occupiedBeds: 25, rating: 4.5, revenue: 225000, status: "active", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop" },
  { id: 3, name: "Metro Living", location: "Kukatpally, Hyderabad", totalBeds: 20, occupiedBeds: 0, rating: 0, revenue: 0, status: "pending", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop" },
];

export default function MyPGsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">My PG Properties</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Add New PG
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {myPGs.map((pg) => (
          <div key={pg.id} className="overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm">
             <div className="h-48 w-full overflow-hidden">
                <Image src={pg.image} alt={pg.name} fill className="object-cover transition-transform hover:scale-105" />
             </div>
             <div className="p-5">
                <div className="flex items-start justify-between">
                   <div>
                      <h3 className="font-semibold text-lg">{pg.name}</h3>
                      <p className="text-sm text-muted-foreground">{pg.location}</p>
                   </div>
                   <Badge className={pg.status === "active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}>
                      {pg.status === "active" ? "Active" : "Pending"}
                   </Badge>
                </div>
                
                {pg.status === "active" && (
                   <div className="mt-4 space-y-4">
                      <div>
                         <div className="flex justify-between text-sm mb-1.5">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                               <BedDouble className="h-4 w-4" /> Occupancy
                            </span>
                            <span className="font-medium">{pg.occupiedBeds}/{pg.totalBeds} beds</span>
                         </div>
                         <Progress value={(pg.occupiedBeds / pg.totalBeds) * 100} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t">
                         <div className="flex items-center gap-1.5">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="font-semibold">{pg.rating}</span>
                         </div>
                         <div className="text-sm">
                            <span className="text-muted-foreground">Revenue: </span>
                            <span className="font-semibold text-primary">₹{(pg.revenue / 1000).toFixed(0)}k</span>
                         </div>
                      </div>
                   </div>
                )}
                
                <div className="mt-5 flex gap-2">
                   <Button variant="outline" className="flex-1">Manage</Button>
                   <Button variant="outline" className="flex-1">Edit</Button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
