"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Star, Shield, Zap, Users, ArrowRight, Building2, CheckCircle2, CreditCard, Headphones, Quote, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import livingBackground from "./images/living-background.img.jpeg";
import hydImg from "./images/hyd-img.jpeg";
import puneImg from "./images/pune-img.jpeg";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const cities = [
  { name: "Hyderabad", pgs: 1240, image: hydImg },
  { name: "Bangalore", pgs: 2180, image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=300&fit=crop" },
  { name: "Mumbai", pgs: 1890, image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop" },
  { name: "Delhi", pgs: 1560, image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop" },
  { name: "Pune", pgs: 980, image: puneImg },
  { name: "Chennai", pgs: 870, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop" },
];

const features = [
  {
    icon: Shield,
    title: "100% Verified Listings",
    description: "Every PG is verified with owner KYC, property documents, and on-ground inspection before listing.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Book your PG in seconds with real-time availability. No waiting, no uncertainty.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Bank-grade encryption with escrow protection. Pay only when you're satisfied.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team available round the clock. Disputes resolved within 48 hours.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Search & Discover",
    description: "Enter your city or area. Filter by price, gender, food type, and amenities to find your perfect match.",
    icon: Search,
  },
  {
    step: "02",
    title: "Compare & Choose",
    description: "View detailed listings with photos, reviews, and virtual tours. Compare multiple options side by side.",
    icon: Star,
  },
  {
    step: "03",
    title: "Book Instantly",
    description: "Select your room type and joining date. Pay securely online with our escrow-protected system.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Move In",
    description: "Show your booking confirmation and move in. Owner confirms check-in and you're all set!",
    icon: CheckCircle2,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    city: "Bangalore",
    rating: 5,
    text: "Found an amazing PG near my office in just 10 minutes. The instant booking feature saved me so much time. Highly recommended!",
    avatar: "PS",
  },
  {
    name: "Rahul Kumar",
    role: "PG Owner",
    city: "Hyderabad",
    rating: 5,
    text: "Managing my 3 PGs was a nightmare before StayNest. Now I get bookings automatically and payouts on time. Revenue increased by 40%!",
    avatar: "RK",
  },
  {
    name: "Ananya Reddy",
    role: "Medical Student",
    city: "Pune",
    rating: 5,
    text: "As a student, budget was my priority. StayNest helped me find an affordable PG with home-cooked food. The reviews from other tenants were super helpful.",
    avatar: "AR",
  },
];

const stats = [
  { value: "50,000+", label: "Verified PGs", icon: Building2 },
  { value: "2,00,000+", label: "Happy Tenants", icon: Users },
  { value: "50+", label: "Cities", icon: MapPin },
  { value: "4.8/5", label: "Avg Rating", icon: Star },
];

const featuredPGs = [
  {
    name: "Sunshine Residency",
    location: "Madhapur, Hyderabad",
    price: 8500,
    rating: 4.8,
    reviews: 124,
    gender: "Unisex",
    food: true,
    wifi: true,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    tags: ["AC", "WiFi", "Food"],
  },
  {
    name: "Green Valley PG",
    location: "Koramangala, Bangalore",
    price: 12000,
    rating: 4.9,
    reviews: 256,
    gender: "Female",
    food: true,
    wifi: true,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    tags: ["AC", "WiFi", "Food", "Gym"],
  },
  {
    name: "Metro Heights",
    location: "Andheri, Mumbai",
    price: 15000,
    rating: 4.7,
    reviews: 189,
    gender: "Male",
    food: false,
    wifi: true,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    tags: ["AC", "WiFi", "Parking"],
  },
];

export default function HomePage() {
  const [searchCity, setSearchCity] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 lg:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <Image
            src={livingBackground}
            alt="Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="grid w-full gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-0">
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col justify-center"
            >
              <motion.div variants={fadeUp}>
                <Badge variant="secondary" className="mb-6 gap-2 rounded-full px-4 py-1.5 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  5,000+ PGs booked this month
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                Find Your Perfect{" "}
                <span className="gradient-text">PG Stay</span>{" "}
                in Minutes
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
              >
                Search from 50,000+ verified PGs across India. Book instantly with
                secure payments, genuine reviews, and 24/7 support.
              </motion.p>

              {/* Search Box */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-8 flex flex-col gap-3 rounded-2xl border bg-card p-2 shadow-xl shadow-primary/5 sm:flex-row sm:items-center"
              >
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Enter city or area..."
                    className="border-0 bg-transparent pl-10 text-base shadow-none focus-visible:ring-0"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                  />
                </div>
                <Link href={`/search${searchCity ? `?city=${searchCity}` : ""}`}>
                  <Button size="lg" className="w-full gap-2 rounded-xl px-8 sm:w-auto">
                    <Search className="h-4 w-4" />
                    Search PGs
                  </Button>
                </Link>
              </motion.div>

              {/* Quick cities */}
              <motion.div variants={fadeUp} custom={4} className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Popular:</span>
                {["Hyderabad", "Bangalore", "Mumbai", "Pune"].map((city) => (
                  <Link
                    key={city}
                    href={`/search?city=${city.toLowerCase()}`}
                    className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {city}
                  </Link>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mt-12 flex lg:mt-0 lg:items-center lg:justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Main card */}
                <div className="relative overflow-hidden rounded-3xl border bg-card shadow-2xl shadow-primary/10">
                  <div className="relative h-64 bg-gradient-to-br from-primary/20 to-purple-500/20">
                    <Image
                      src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"
                      alt="Beautiful PG room"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute left-4 top-4">
                      <Badge className="bg-green-500 text-white">Verified</Badge>
                    </div>
                    <div className="absolute right-4 top-4">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
                        <Heart className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Sunshine Residency</h3>
                        <p className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" /> Madhapur, Hyderabad
                        </p>
                      </div>
                      <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1">
                        <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                        <span className="text-sm font-semibold text-amber-700">4.8</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">&#8377;8,500</span>
                        <span className="text-sm text-muted-foreground">/month</span>
                      </div>
                      <Button size="sm" className="rounded-full">Book Now</Button>
                    </div>
                  </div>
                </div>

                {/* Floating card - Booking confirmation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -left-16 bottom-12 rounded-2xl border bg-card p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Booking Confirmed!</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating card - Rating */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="absolute -right-12 top-8 rounded-2xl border bg-card p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">4.8/5</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">From 2,000+ reviews</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-2 text-3xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="secondary" className="mb-4 rounded-full">Explore</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold tracking-tight sm:text-4xl">
              Popular Cities
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Find PG accommodations in India&apos;s top cities with the most options and best prices.
            </motion.p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, i) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/search?city=${city.name.toLowerCase()}`}
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{city.name}</h3>
                      <p className="text-sm text-white/80">{city.pgs.toLocaleString()}+ PGs available</p>
                    </div>
                    <div className="absolute right-4 top-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all group-hover:bg-primary group-hover:text-white">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="secondary" className="mb-4 rounded-full">Why StayNest</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for Trust & Convenience
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Every feature designed to make your PG search and booking experience seamless and secure.
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border bg-background p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg}`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="secondary" className="mb-4 rounded-full">Simple Process</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              From search to move-in, we&apos;ve simplified every step of finding your perfect PG.
            </motion.p>
          </motion.div>

          <div className="relative mt-16">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 lg:block" />

            <div className="grid gap-12 lg:gap-0">
              {howItWorks.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex items-center gap-8 lg:gap-16 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <span className="text-5xl font-bold text-primary/10">{item.step}</span>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 hidden lg:block">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured PGs */}
      <section className="border-y bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="flex items-end justify-between">
              <div>
                <motion.div variants={fadeUp}>
                  <Badge variant="secondary" className="mb-4 rounded-full">Featured</Badge>
                </motion.div>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Top Rated PGs
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="mt-2 text-muted-foreground">
                  Hand-picked accommodations loved by thousands of tenants
                </motion.p>
              </div>
              <motion.div variants={fadeUp} custom={3} className="hidden sm:block">
                <Link href="/search">
                  <Button variant="outline" className="gap-2 rounded-full">
                    View All <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPGs.map((pg, i) => (
              <motion.div
                key={pg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-2xl border bg-background transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                <Link href="/pg/1">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={pg.image}
                      alt={pg.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 flex gap-2">
                      <Badge className="bg-green-500 text-white">Verified</Badge>
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">{pg.gender}</Badge>
                    </div>
                    <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="p-5">
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
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t pt-4">
                      <div>
                        <span className="text-xl font-bold text-primary">&#8377;{pg.price.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground">/month</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{pg.reviews} reviews</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/search">
              <Button variant="outline" className="gap-2 rounded-full">
                View All PGs <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="secondary" className="mb-4 rounded-full">Testimonials</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by Thousands
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Real stories from real people who found their perfect PG through StayNest.
            </motion.p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border bg-card p-6"
              >
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                <div className="mt-4 flex">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 border-t pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} &middot; {t.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-gradient-to-br from-primary to-purple-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Find Your Perfect PG?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Join 2 lakh+ happy tenants and 10,000+ verified PG owners on India&apos;s fastest-growing PG platform.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/search">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8 text-base">
                  <Search className="h-4 w-4" /> Find a PG
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="lg" variant="outline" className="gap-2 rounded-full border-white/30 px-8 text-base text-white hover:bg-white/10">
                  <Building2 className="h-4 w-4" /> List Your PG
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
