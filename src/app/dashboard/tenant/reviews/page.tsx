"use client";

import { Star, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const reviews = [
  { id: 1, pg: "Sunshine Residency", rating: 5, date: "15 Jan 2026", text: "Amazing place!", status: "Published" },
  { id: 2, pg: "Green Valley PG", rating: 4, date: "10 Dec 2025", text: "Good experience overall.", status: "Published" },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Your Reviews</h2>
        <Button className="gap-2">
           Write a Review
        </Button>
      </div>

      <div className="grid gap-6">
         {reviews.map((review) => (
            <div key={review.id} className="rounded-xl border bg-card p-6">
               <div className="flex items-start justify-between">
                  <div>
                     <h3 className="font-semibold text-lg">{review.pg}</h3>
                     <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <Badge variant="outline" className="gap-1.5 px-3 py-1 text-sm font-medium">
                     <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {review.rating}.0
                  </Badge>
               </div>
               
               <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm italics">&quot;{review.text}&quot;</p>
               </div>
               
               <div className="mt-4 flex items-center justify-between">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                     {review.status}
                  </Badge>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                     <MessageCircle className="h-4 w-4" /> Edit Review
                  </Button>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
}
