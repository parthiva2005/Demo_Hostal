"use client";

import { Star, ThumbsUp, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const reviews = [
  { id: 1, user: "Priya Sharma", rating: 5, date: "15 Feb 2026", pg: "Sunshine Residency", text: "Great place to stay! The amenities are top-notch and the location is perfect.", helpful: 12 },
  { id: 2, user: "Arun Kumar", rating: 4, date: "10 Feb 2026", pg: "Sunshine Residency", text: "Good PG, but the food could be better. Overall a pleasant experience.", helpful: 8 },
  { id: 3, user: "Sneha R.", rating: 5, date: "5 Feb 2026", pg: "Green Heights", text: "Love the environment here. Very safe and secure for girls.", helpful: 15 },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Reviews</h2>

      <div className="grid gap-6 md:grid-cols-3">
         <div className="rounded-xl border bg-card p-6 text-center">
            <h3 className="text-lg font-semibold">Overall Rating</h3>
            <div className="mt-2 flex items-center justify-center gap-2">
               <span className="text-4xl font-bold">4.7</span>
               <div className="flex text-amber-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current opacity-50" />
               </div>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Based on 128 reviews</p>
         </div>
         {/* Add review breakdown here if needed */}
      </div>

      <div className="space-y-4">
         {reviews.map((review) => (
            <div key={review.id} className="rounded-xl border bg-card p-6">
               <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                     <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                        {review.user[0]}
                     </div>
                     <div>
                        <h4 className="font-semibold">{review.user}</h4>
                        <p className="text-xs text-muted-foreground">{review.date} &middot; {review.pg}</p>
                     </div>
                  </div>
                  <Badge variant="outline" className="gap-1">
                     <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {review.rating}.0
                  </Badge>
               </div>
               <p className="mt-4 text-sm">{review.text}</p>
               <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-foreground">
                     <ThumbsUp className="h-3.5 w-3.5" /> Helpful ({review.helpful})
                  </button>
                  <button className="flex items-center gap-1 hover:text-foreground">
                     <MessageCircle className="h-3.5 w-3.5" /> Reply
                  </button>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
}
