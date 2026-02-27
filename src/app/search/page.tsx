"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, MapPin, SlidersHorizontal, Star, X, ArrowUpDown, Grid3X3, List
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const allPGs = [
  { id: 1, name: "Sunshine Residency", location: "Madhapur, Hyderabad", city: "hyderabad", area: "madhapur", price: 8500, rating: 4.8, reviews: 124, gender: "unisex", food: true, wifi: true, ac: true, gym: false, parking: true, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop", beds: 5, tags: ["AC", "WiFi", "Food", "Parking"], type: "single", deposit: 8500 },
  { id: 2, name: "Green Valley PG", location: "Koramangala, Bangalore", city: "bangalore", area: "koramangala", price: 12000, rating: 4.9, reviews: 256, gender: "female", food: true, wifi: true, ac: true, gym: true, parking: false, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop", beds: 3, tags: ["AC", "WiFi", "Food", "Gym"], type: "single", deposit: 12000 },
  { id: 3, name: "Metro Heights", location: "Andheri, Mumbai", city: "mumbai", area: "andheri", price: 15000, rating: 4.7, reviews: 189, gender: "male", food: false, wifi: true, ac: true, gym: true, parking: true, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop", beds: 2, tags: ["AC", "WiFi", "Gym", "Parking"], type: "double", deposit: 15000 },
  { id: 4, name: "Comfort Zone PG", location: "Whitefield, Bangalore", city: "bangalore", area: "whitefield", price: 9000, rating: 4.5, reviews: 87, gender: "unisex", food: true, wifi: true, ac: false, gym: false, parking: true, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop", beds: 8, tags: ["WiFi", "Food", "Parking"], type: "triple", deposit: 9000 },
  { id: 5, name: "Royal Stays", location: "Gachibowli, Hyderabad", city: "hyderabad", area: "gachibowli", price: 11000, rating: 4.6, reviews: 156, gender: "female", food: true, wifi: true, ac: true, gym: true, parking: true, image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&h=400&fit=crop", beds: 1, tags: ["AC", "WiFi", "Food", "Gym", "Parking"], type: "single", deposit: 11000 },
  { id: 6, name: "Urban Nest PG", location: "HSR Layout, Bangalore", city: "bangalore", area: "hsr", price: 10500, rating: 4.4, reviews: 98, gender: "male", food: true, wifi: true, ac: true, gym: false, parking: false, image: "https://images.unsplash.com/photo-1598928506311-c55ez389e8a?w=600&h=400&fit=crop", beds: 4, tags: ["AC", "WiFi", "Food"], type: "double", deposit: 10500 },
  { id: 7, name: "Lakeside Living", location: "Hitech City, Hyderabad", city: "hyderabad", area: "hitech-city", price: 13500, rating: 4.9, reviews: 312, gender: "unisex", food: true, wifi: true, ac: true, gym: true, parking: true, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop", beds: 6, tags: ["AC", "WiFi", "Food", "Gym", "Parking"], type: "single", deposit: 13500 },
  { id: 8, name: "Cozy Corner PG", location: "Baner, Pune", city: "pune", area: "baner", price: 7500, rating: 4.3, reviews: 67, gender: "female", food: true, wifi: true, ac: false, gym: false, parking: false, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", beds: 10, tags: ["WiFi", "Food"], type: "triple", deposit: 7500 },
  { id: 9, name: "Prime PG Residency", location: "Powai, Mumbai", city: "mumbai", area: "powai", price: 16000, rating: 4.8, reviews: 201, gender: "unisex", food: true, wifi: true, ac: true, gym: true, parking: true, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop", beds: 0, tags: ["AC", "WiFi", "Food", "Gym", "Parking"], type: "single", deposit: 16000 },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([3000, 20000]);
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [foodIncluded, setFoodIncluded] = useState(false);
  const [wifiIncluded, setWifiIncluded] = useState(false);
  const [acIncluded, setAcIncluded] = useState(false);
  const [gymIncluded, setGymIncluded] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredPGs = useMemo(() => {
    const results = allPGs.filter((pg) => {
      const matchesSearch =
        !searchQuery ||
        pg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pg.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pg.city.includes(searchQuery.toLowerCase()) ||
        pg.area.includes(searchQuery.toLowerCase());
      const matchesPrice = pg.price >= priceRange[0] && pg.price <= priceRange[1];
      const matchesGender = selectedGender === "all" || pg.gender === selectedGender;
      const matchesFood = !foodIncluded || pg.food;
      const matchesWifi = !wifiIncluded || pg.wifi;
      const matchesAC = !acIncluded || pg.ac;
      const matchesGym = !gymIncluded || pg.gym;
      return matchesSearch && matchesPrice && matchesGender && matchesFood && matchesWifi && matchesAC && matchesGym;
    });

    switch (sortBy) {
      case "price-low": results.sort((a, b) => a.price - b.price); break;
      case "price-high": results.sort((a, b) => b.price - a.price); break;
      case "rating": results.sort((a, b) => b.rating - a.rating); break;
      case "reviews": results.sort((a, b) => b.reviews - a.reviews); break;
    }
    return results;
  }, [searchQuery, priceRange, selectedGender, foodIncluded, wifiIncluded, acIncluded, gymIncluded, sortBy]);

  const activeFilterCount = [
    selectedGender !== "all",
    foodIncluded,
    wifiIncluded,
    acIncluded,
    gymIncluded,
    priceRange[0] !== 3000 || priceRange[1] !== 20000,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 lg:pt-24">
        {/* Search Header */}
        <div className="border-b bg-card">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by city, area, or PG name..."
                  className="h-12 pl-10 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <Badge className="ml-1 h-5 w-5 rounded-full p-0 text-xs">{activeFilterCount}</Badge>
                  )}
                </Button>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-44">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>
                <div className="hidden items-center gap-1 rounded-lg border p-1 sm:flex">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`rounded-md p-1.5 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`rounded-md p-1.5 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 grid gap-6 rounded-xl border bg-background p-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Price */}
                    <div>
                      <label className="text-sm font-medium">Price Range</label>
                      <Slider
                        min={3000}
                        max={20000}
                        step={500}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mt-3"
                      />
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>&#8377;{priceRange[0].toLocaleString()}</span>
                        <span>&#8377;{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="text-sm font-medium">Gender</label>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["all", "male", "female", "unisex"].map((g) => (
                          <button
                            key={g}
                            onClick={() => setSelectedGender(g)}
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                              selectedGender === g
                                ? "border-primary bg-primary text-primary-foreground"
                                : "hover:border-primary hover:text-primary"
                            }`}
                          >
                            {g === "all" ? "All" : g}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div>
                      <label className="text-sm font-medium">Amenities</label>
                      <div className="mt-3 space-y-2.5">
                        {[
                          { label: "Food Included", checked: foodIncluded, set: setFoodIncluded },
                          { label: "WiFi", checked: wifiIncluded, set: setWifiIncluded },
                          { label: "AC", checked: acIncluded, set: setAcIncluded },
                          { label: "Gym", checked: gymIncluded, set: setGymIncluded },
                        ].map((item) => (
                          <label key={item.label} className="flex items-center gap-2 text-sm">
                            <Checkbox checked={item.checked} onCheckedChange={(v) => item.set(v === true)} />
                            {item.label}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Clear */}
                    <div className="flex items-end">
                      <Button
                        variant="ghost"
                        className="gap-2 text-sm"
                        onClick={() => {
                          setPriceRange([3000, 20000]);
                          setSelectedGender("all");
                          setFoodIncluded(false);
                          setWifiIncluded(false);
                          setAcIncluded(false);
                          setGymIncluded(false);
                        }}
                      >
                        <X className="h-4 w-4" /> Clear All Filters
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Results */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredPGs.length}</span> PGs found
              {searchQuery && <span> for &quot;{searchQuery}&quot;</span>}
            </p>
          </div>

          {filteredPGs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <Search className="h-16 w-16 text-muted-foreground/30" />
              <h3 className="mt-4 text-xl font-semibold">No PGs Found</h3>
              <p className="mt-2 text-muted-foreground">Try adjusting your filters or searching for a different area.</p>
              <Button variant="outline" className="mt-4" onClick={() => { setSearchQuery(""); setPriceRange([3000, 20000]); setSelectedGender("all"); setFoodIncluded(false); setWifiIncluded(false); setAcIncluded(false); setGymIncluded(false); }}>
                Clear All Filters
              </Button>
            </motion.div>
          ) : (
            <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "flex flex-col gap-4"}>
              {filteredPGs.map((pg, i) => (
                <motion.div
                  key={pg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className={`group overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-xl hover:shadow-primary/5 ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <Link href={`/pg/${pg.id}`} className={viewMode === "list" ? "flex w-full" : "block"}>
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "h-auto w-64 shrink-0" : "h-52"}`}>
                      <Image
                        src={pg.image}
                        alt={pg.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-3 top-3 flex gap-2">
                        <Badge className="bg-green-500 text-white">Verified</Badge>
                        {pg.beds === 0 && <Badge variant="destructive">Full</Badge>}
                      </div>
                      {pg.beds > 0 && pg.beds <= 3 && (
                        <div className="absolute right-3 top-3">
                          <Badge variant="secondary" className="bg-amber-100 text-amber-700">Only {pg.beds} left!</Badge>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{pg.name}</h3>
                          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" /> {pg.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1">
                          <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                          <span className="text-xs font-semibold text-amber-700">{pg.rating}</span>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {pg.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                            {tag}
                          </span>
                        ))}
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium capitalize text-secondary-foreground">
                          {pg.gender}
                        </span>
                      </div>
                      <div className="mt-auto flex items-center justify-between border-t pt-4 mt-4">
                        <div>
                          <span className="text-xl font-bold text-primary">&#8377;{pg.price.toLocaleString()}</span>
                          <span className="text-sm text-muted-foreground">/month</span>
                        </div>
                        <Button size="sm" className="rounded-full" disabled={pg.beds === 0}>
                          {pg.beds === 0 ? "Full" : "Book Now"}
                        </Button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
