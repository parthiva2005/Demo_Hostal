"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Star, Heart, Share2, Shield, Wifi, UtensilsCrossed, Wind, Car, Dumbbell,
  Tv, WashingMachine, ChevronLeft, ChevronRight, CheckCircle2, Clock, Calendar,
  Phone, Mail, User, Building2, CreditCard, AlertCircle, Users, BedDouble, Bath, Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const pgData = {
  id: 1,
  name: "Sunshine Residency",
  location: "Madhapur, Hyderabad",
  address: "Plot No. 42, Road No. 3, Ayyappa Society, Madhapur, Hyderabad - 500081",
  rating: 4.8,
  reviews: 124,
  gender: "Unisex",
  description: "Sunshine Residency is a premium PG accommodation located in the heart of Madhapur, Hyderabad's IT hub. Just minutes from major tech parks like Inorbit Mall and Cyber Towers, our PG offers a perfect blend of comfort and convenience. We provide fully furnished rooms with modern amenities, home-cooked meals, and a vibrant community of young professionals.",
  images: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=500&fit=crop",
  ],
  roomTypes: [
    { type: "Single Occupancy", price: 12000, deposit: 12000, beds: 3, total: 10, amenities: ["AC", "Attached Bathroom", "Study Table", "Wardrobe"] },
    { type: "Double Sharing", price: 8500, deposit: 8500, beds: 5, total: 15, amenities: ["AC", "Common Bathroom", "Study Table", "Wardrobe"] },
    { type: "Triple Sharing", price: 6500, deposit: 6500, beds: 8, total: 20, amenities: ["Fan", "Common Bathroom", "Study Table"] },
  ],
  amenities: [
    { name: "WiFi (100 Mbps)", icon: Wifi },
    { name: "Home Cooked Food", icon: UtensilsCrossed },
    { name: "Air Conditioning", icon: Wind },
    { name: "Parking", icon: Car },
    { name: "Gym", icon: Dumbbell },
    { name: "TV Lounge", icon: Tv },
    { name: "Laundry", icon: WashingMachine },
  ],
  foodMenu: {
    breakfast: ["Idli/Dosa/Poha", "Tea/Coffee", "Eggs (Mon/Wed/Fri)"],
    lunch: ["Rice", "Dal", "Sabji (2)", "Roti", "Salad", "Buttermilk"],
    dinner: ["Rice/Roti", "Dal", "Sabji (2)", "Sweet (Fri)"],
  },
  rules: [
    "No smoking inside premises",
    "Visitors allowed until 9 PM",
    "Gate closes at 11 PM (late entry with permission)",
    "Maintain cleanliness in common areas",
    "30-day notice period for vacating",
  ],
  owner: { name: "Rajesh Kumar", phone: "+91 98765 43210", email: "rajesh@sunshine.in", since: "2020", verified: true },
  reviews_data: [
    { name: "Priya S.", rating: 5, date: "Jan 2026", text: "Amazing place! The food is great and the rooms are very well maintained. Staff is super friendly.", avatar: "PS" },
    { name: "Arun M.", rating: 4, date: "Dec 2025", text: "Good location and amenities. WiFi could be better during peak hours. Overall a great stay.", avatar: "AM" },
    { name: "Sneha R.", rating: 5, date: "Nov 2025", text: "Best PG I've stayed in. Home-like food and very clean rooms. Highly recommended for IT professionals.", avatar: "SR" },
  ],
  ratingBreakdown: { 5: 78, 4: 30, 3: 10, 2: 4, 1: 2 },
  nearby: ["Inorbit Mall (0.5 km)", "Cyber Towers (1 km)", "Durgam Cheruvu (2 km)", "IKEA (3 km)"],
};

export default function PGDetailPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [joiningDate, setJoiningDate] = useState("");
  const [bookingStep, setBookingStep] = useState<"select" | "confirm" | "success">("select");
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % pgData.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + pgData.images.length) % pgData.images.length);

  const handleBook = () => {
    if (selectedRoom !== null && joiningDate) {
      setBookingStep("confirm");
    }
  };

  const confirmBooking = () => {
    setBookingStep("success");
  };

  const totalRatings = Object.values(pgData.ratingBreakdown).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/search" className="hover:text-primary">Search</Link>
            <span>/</span>
            <span className="text-foreground">{pgData.name}</span>
          </nav>
        </div>

        {/* Image Gallery */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative h-64 sm:h-96 lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={pgData.images[currentImage]}
                  alt={pgData.name}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>

              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-colors hover:bg-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-colors hover:bg-white">
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {pgData.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-2 rounded-full transition-all ${i === currentImage ? "w-8 bg-white" : "w-2 bg-white/50"}`}
                  />
                ))}
              </div>

              <div className="absolute left-4 top-4 flex gap-2">
                <Badge className="bg-green-500 text-white">Verified</Badge>
                <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">{pgData.gender}</Badge>
              </div>

              <div className="absolute right-4 top-4 flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white"
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white">
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
            {pgData.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg transition-all ${i === currentImage ? "ring-2 ring-primary ring-offset-2" : "opacity-60 hover:opacity-100"}`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div>
                <h1 className="text-2xl font-bold sm:text-3xl">{pgData.name}</h1>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <p className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" /> {pgData.location}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{pgData.rating}</span>
                    <span className="text-muted-foreground">({pgData.reviews} reviews)</span>
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{pgData.description}</p>
              </div>

              <Tabs defaultValue="rooms" className="mt-8">
                <TabsList className="w-full justify-start gap-1 bg-transparent p-0">
                  {["rooms", "amenities", "food", "reviews", "rules", "location"].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="rounded-full capitalize data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="rooms" className="mt-6">
                  <div className="space-y-4">
                    {pgData.roomTypes.map((room, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => room.beds > 0 && setSelectedRoom(i)}
                        className={`cursor-pointer rounded-xl border p-5 transition-all ${
                          selectedRoom === i ? "border-primary bg-primary/5 shadow-md" : "hover:border-primary/30 hover:shadow-sm"
                        } ${room.beds === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{room.type}</h3>
                              {room.beds <= 3 && room.beds > 0 && (
                                <Badge variant="secondary" className="bg-amber-100 text-amber-700">Only {room.beds} left</Badge>
                              )}
                              {room.beds === 0 && <Badge variant="destructive">Full</Badge>}
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {room.amenities.map((a) => (
                                <span key={a} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs">{a}</span>
                              ))}
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground">
                              {room.beds} of {room.total} beds available &middot; Deposit: &#8377;{room.deposit.toLocaleString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">&#8377;{room.price.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">/month</p>
                          </div>
                        </div>
                        {selectedRoom === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-3 flex items-center gap-2 text-sm text-primary"
                          >
                            <CheckCircle2 className="h-4 w-4" /> Selected
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {pgData.amenities.map((amenity) => (
                      <div key={amenity.name} className="flex items-center gap-3 rounded-xl border p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <amenity.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="food" className="mt-6">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {Object.entries(pgData.foodMenu).map(([meal, items]) => (
                      <div key={meal} className="rounded-xl border p-5">
                        <h3 className="font-semibold capitalize">{meal}</h3>
                        <ul className="mt-3 space-y-2">
                          {items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  {/* Rating summary */}
                  <div className="mb-8 flex items-start gap-8 rounded-xl border p-6">
                    <div className="text-center">
                      <p className="text-5xl font-bold">{pgData.rating}</p>
                      <div className="mt-1 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.round(pgData.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}`} />
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{totalRatings} reviews</p>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-3">
                          <span className="w-3 text-sm">{star}</span>
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          <Progress value={(pgData.ratingBreakdown[star as keyof typeof pgData.ratingBreakdown] / totalRatings) * 100} className="h-2 flex-1" />
                          <span className="w-8 text-right text-xs text-muted-foreground">{pgData.ratingBreakdown[star as keyof typeof pgData.ratingBreakdown]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {pgData.reviews_data.map((review, i) => (
                      <div key={i} className="rounded-xl border p-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                            {review.avatar}
                          </div>
                          <div>
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="ml-auto flex items-center gap-1">
                            {[...Array(review.rating)].map((_, j) => (
                              <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="rules" className="mt-6">
                  <div className="space-y-3">
                    {pgData.rules.map((rule, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-xl border p-4">
                        <Info className="mt-0.5 h-4 w-4 text-primary" />
                        <span className="text-sm">{rule}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-6">
                  <div className="rounded-xl border p-5">
                    <h3 className="font-semibold">Address</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{pgData.address}</p>
                    <div className="mt-6 h-64 overflow-hidden rounded-xl bg-muted">
                      <div className="flex h-full items-center justify-center text-muted-foreground">
                        <MapPin className="mr-2 h-5 w-5" /> Map view will be displayed here
                      </div>
                    </div>
                    <h3 className="mt-6 font-semibold">Nearby Places</h3>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {pgData.nearby.map((place) => (
                        <div key={place} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5 text-primary" /> {place}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border bg-card p-6 shadow-lg shadow-primary/5">
                <AnimatePresence mode="wait">
                  {bookingStep === "select" && (
                    <motion.div key="select" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <h3 className="text-lg font-semibold">Book This PG</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Select room type and joining date</p>

                      <div className="mt-6 space-y-4">
                        <div>
                          <label className="text-sm font-medium">Room Type</label>
                          <Select
                            value={selectedRoom !== null ? String(selectedRoom) : undefined}
                            onValueChange={(v) => setSelectedRoom(Number(v))}
                          >
                            <SelectTrigger className="mt-1.5">
                              <SelectValue placeholder="Select room type" />
                            </SelectTrigger>
                            <SelectContent>
                              {pgData.roomTypes.map((room, i) => (
                                <SelectItem key={i} value={String(i)} disabled={room.beds === 0}>
                                  {room.type} - &#8377;{room.price.toLocaleString()}/mo
                                  {room.beds === 0 && " (Full)"}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium">Joining Date</label>
                          <input
                            type="date"
                            className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            value={joiningDate}
                            onChange={(e) => setJoiningDate(e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>

                        {selectedRoom !== null && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="space-y-3 rounded-xl bg-muted/50 p-4"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Monthly Rent</span>
                              <span className="font-semibold">&#8377;{pgData.roomTypes[selectedRoom].price.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Security Deposit</span>
                              <span className="font-semibold">&#8377;{pgData.roomTypes[selectedRoom].deposit.toLocaleString()}</span>
                            </div>
                            <div className="border-t pt-3">
                              <div className="flex justify-between font-semibold">
                                <span>Total to Pay</span>
                                <span className="text-primary">
                                  &#8377;{(pgData.roomTypes[selectedRoom].price + pgData.roomTypes[selectedRoom].deposit).toLocaleString()}
                                </span>
                              </div>
                              <p className="mt-1 text-xs text-muted-foreground">First month rent + deposit</p>
                            </div>
                          </motion.div>
                        )}

                        <Button
                          className="w-full rounded-xl"
                          size="lg"
                          disabled={selectedRoom === null || !joiningDate}
                          onClick={handleBook}
                        >
                          <CreditCard className="mr-2 h-4 w-4" />
                          Proceed to Book
                        </Button>

                        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-xs text-green-700">
                          <Shield className="h-4 w-4" />
                          Escrow protected. Pay only when satisfied.
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {bookingStep === "confirm" && selectedRoom !== null && (
                    <motion.div key="confirm" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <button onClick={() => setBookingStep("select")} className="mb-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                        <ChevronLeft className="h-4 w-4" /> Back
                      </button>
                      <h3 className="text-lg font-semibold">Confirm Booking</h3>

                      <div className="mt-4 space-y-3 rounded-xl border p-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">PG Name</span>
                          <span className="font-medium">{pgData.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Room Type</span>
                          <span className="font-medium">{pgData.roomTypes[selectedRoom].type}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Joining Date</span>
                          <span className="font-medium">{new Date(joiningDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                        </div>
                        <div className="border-t pt-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Rent</span>
                            <span>&#8377;{pgData.roomTypes[selectedRoom].price.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm mt-1">
                            <span className="text-muted-foreground">Deposit</span>
                            <span>&#8377;{pgData.roomTypes[selectedRoom].deposit.toLocaleString()}</span>
                          </div>
                          <div className="mt-3 flex justify-between font-semibold text-lg border-t pt-3">
                            <span>Total</span>
                            <span className="text-primary">
                              &#8377;{(pgData.roomTypes[selectedRoom].price + pgData.roomTypes[selectedRoom].deposit).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-700">
                        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Payment session expires in 10 minutes. Bed is temporarily locked for you.</span>
                      </div>

                      <Button className="mt-4 w-full rounded-xl" size="lg" onClick={confirmBooking}>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Pay &#8377;{(pgData.roomTypes[selectedRoom].price + pgData.roomTypes[selectedRoom].deposit).toLocaleString()}
                      </Button>

                      <p className="mt-3 text-center text-xs text-muted-foreground">
                        By proceeding you agree to our cancellation & refund policy
                      </p>
                    </motion.div>
                  )}

                  {bookingStep === "success" && (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
                      >
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </motion.div>
                      <h3 className="mt-4 text-xl font-bold">Booking Confirmed!</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Your PG has been booked successfully. Check your email for details.
                      </p>
                      <div className="mt-6 space-y-3 rounded-xl bg-muted/50 p-4 text-left text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Booking ID</span>
                          <span className="font-mono font-semibold">#STN2026021301</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status</span>
                          <Badge className="bg-green-500 text-white">Confirmed</Badge>
                        </div>
                      </div>
                      <div className="mt-6 flex flex-col gap-2">
                        <Link href="/dashboard/tenant">
                          <Button className="w-full rounded-xl">View My Bookings</Button>
                        </Link>
                        <Link href="/search">
                          <Button variant="outline" className="w-full rounded-xl">Browse More PGs</Button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Owner Card */}
              <div className="mt-6 rounded-2xl border bg-card p-6">
                <h3 className="text-sm font-semibold">Property Owner</h3>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    {pgData.owner.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{pgData.owner.name}</p>
                      {pgData.owner.verified && <Shield className="h-4 w-4 text-green-500" />}
                    </div>
                    <p className="text-xs text-muted-foreground">Member since {pgData.owner.since}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3.5 w-3.5" /> {pgData.owner.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3.5 w-3.5" /> {pgData.owner.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
