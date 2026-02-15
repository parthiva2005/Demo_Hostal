"use client";

import { Star, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const savedPGs = [
  { id: 1, name: "Lakeside Living", location: "Hitech City, Hyderabad", price: 13500, rating: 4.9, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop" },
  { id: 2, name: "Comfort Zone PG", location: "Whitefield, Bangalore", price: 9000, rating: 4.5, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
  { id: 3, name: "Urban Nest", location: "Indiranagar, Bangalore", price: 15000, rating: 4.7, image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&h=200&fit=crop" },
];

export default function SavedPGsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Saved PGs</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {savedPGs.map((pg) => (
          <div key={pg.id} className="overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="h-48 w-full overflow-hidden relative">
               <Image src={pg.image} alt={pg.name} fill className="object-cover transition-transform hover:scale-105" />
            </div>
            <div className="p-5">
               <div className="flex justify-between items-start">
                  <div>
                     <h3 className="font-semibold text-lg">{pg.name}</h3>
                     <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3.5 w-3.5" /> {pg.location}
                     </p>
                  </div>
                  <Badge variant="secondary" className="gap-1">
                     <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {pg.rating}
                  </Badge>
               </div>
               
               <div className="mt-4 flex items-center justify-between pt-4 border-t">
                  <span className="text-xl font-bold text-primary">₹{pg.price.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                  <button className="text-sm font-medium text-primary hover:underline">View Details</button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
