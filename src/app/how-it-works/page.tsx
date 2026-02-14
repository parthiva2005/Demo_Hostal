"use client";

import { motion } from "framer-motion";
import { Search, Star, Zap, CheckCircle2, Shield, CreditCard, Clock, ArrowRight, Building2, Users, Headphones, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const tenantSteps = [
  { step: "1", title: "Search & Filter", desc: "Enter your city or area. Use filters for price, gender, food type, and amenities.", icon: Search, color: "bg-blue-100 text-blue-600" },
  { step: "2", title: "Compare Listings", desc: "View photos, reviews, food menus, and detailed amenity lists for each PG.", icon: Star, color: "bg-amber-100 text-amber-600" },
  { step: "3", title: "Book Instantly", desc: "Select room type & joining date. The system locks the bed for 10 minutes during payment.", icon: Zap, color: "bg-green-100 text-green-600" },
  { step: "4", title: "Secure Payment", desc: "Pay online with escrow protection. Money is held until owner confirms your check-in.", icon: CreditCard, color: "bg-purple-100 text-purple-600" },
  { step: "5", title: "Move In", desc: "Show booking confirmation, owner confirms check-in, and you're home!", icon: CheckCircle2, color: "bg-emerald-100 text-emerald-600" },
];

const ownerSteps = [
  { step: "1", title: "Register & KYC", desc: "Sign up, upload Aadhaar, property proof, and bank details for verification.", icon: Shield, color: "bg-blue-100 text-blue-600" },
  { step: "2", title: "List Your PG", desc: "Add property details, room types, food menu, amenities, and pricing.", icon: Building2, color: "bg-amber-100 text-amber-600" },
  { step: "3", title: "Receive Bookings", desc: "Get instant bookings with real-time dashboard updates and notifications.", icon: Users, color: "bg-green-100 text-green-600" },
  { step: "4", title: "Confirm Check-in", desc: "Verify tenant arrival and confirm check-in through your dashboard.", icon: CheckCircle2, color: "bg-purple-100 text-purple-600" },
  { step: "5", title: "Get Paid", desc: "Receive payouts 24 hours after check-in confirmation. Track all earnings.", icon: CreditCard, color: "bg-emerald-100 text-emerald-600" },
];

const safetyFeatures = [
  { title: "Row-Level Locking", desc: "Database transactions with FOR UPDATE prevent double booking of the same bed.", icon: Shield },
  { title: "Escrow Payments", desc: "Money held securely until check-in is confirmed. Protects both parties.", icon: CreditCard },
  { title: "10-Min Lock", desc: "Beds are temporarily locked during payment. Auto-released if payment fails.", icon: Clock },
  { title: "Idempotency", desc: "Unique payment IDs prevent duplicate charges from page refreshes.", icon: RefreshCw },
  { title: "KYC Verified", desc: "All owners undergo Aadhaar + property document verification.", icon: CheckCircle2 },
  { title: "24/7 Support", desc: "Dedicated dispute resolution team. Issues resolved within 48 hours.", icon: Headphones },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <Badge variant="secondary" className="mb-4 rounded-full">How It Works</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, Secure, <span className="gradient-text">Seamless</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Whether you&apos;re searching for a PG or listing one, our platform makes it effortless.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tenant Flow */}
      <section className="border-t bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 rounded-full">For Tenants</Badge>
            <h2 className="text-3xl font-bold">Find & Book Your PG</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {tenantSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl border bg-background p-5 text-center"
              >
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${step.color}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="absolute -top-3 left-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                {i < tenantSteps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground/30 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Flow */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 rounded-full">For Owners</Badge>
            <h2 className="text-3xl font-bold">List & Manage Your PG</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {ownerSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl border bg-card p-5 text-center"
              >
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${step.color}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="absolute -top-3 left-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="border-t bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 rounded-full">Trust & Safety</Badge>
            <h2 className="text-3xl font-bold">Built for Security</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Enterprise-grade safety measures to protect every transaction and interaction.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safetyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 rounded-xl border bg-background p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-purple-700 p-12 text-center text-white">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">
              Join thousands of happy tenants and property owners on StayNest.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/search">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8">
                  <Search className="h-4 w-4" /> Find a PG
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="lg" variant="outline" className="gap-2 rounded-full border-white/30 px-8 text-white hover:bg-white/10">
                  <Building2 className="h-4 w-4" /> List Your PG
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
