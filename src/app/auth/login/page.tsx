"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Mail, Lock, Eye, EyeOff, ArrowRight, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("tenant");

  return (
    <div className="flex min-h-screen">
      {/* Left - Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-full max-w-md"
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Building2 className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold">Stay<span className="text-primary">Nest</span></span>
          </Link>

          <h1 className="mt-8 text-2xl font-bold">Welcome back</h1>
          <p className="mt-2 text-muted-foreground">Sign in to your account to continue</p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tenant">Tenant</TabsTrigger>
              <TabsTrigger value="owner">Owner</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>

            {["tenant", "owner", "admin"].map((role) => (
              <TabsContent key={role} value={role}>
                <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <div className="relative mt-1.5">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="you@example.com" className="pl-10" type="email" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Password</label>
                    <div className="relative mt-1.5">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                        type={showPassword ? "text" : "password"}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded border" /> Remember me
                    </label>
                    <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                  </div>
                  <Link href={`/dashboard/${role}`}>
                    <Button className="w-full gap-2" size="lg">
                      Sign In <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </form>
              </TabsContent>
            ))}
          </Tabs>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="font-medium text-primary hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </div>

      {/* Right - Image */}
      <div className="hidden lg:block lg:flex-1">
        <div className="relative h-full bg-gradient-to-br from-primary to-purple-700 p-12">
          <div className="relative z-10 flex h-full flex-col justify-between text-white">
            <div />
            <div>
              <h2 className="text-3xl font-bold">Your next home is just a click away.</h2>
              <p className="mt-4 text-lg text-white/80">
                Join 2 lakh+ tenants who found their perfect PG through StayNest.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["PS", "RK", "AR", "VM"].map((initials, i) => (
                    <div key={i} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white/20 text-xs font-semibold backdrop-blur-sm">
                      {initials}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/80">Trusted by 2,00,000+ users</p>
              </div>
            </div>
            <p className="text-sm text-white/50">&copy; 2026 StayNest. All rights reserved.</p>
          </div>
          {/* Decorative circles */}
          <div className="absolute right-12 top-12 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute right-24 top-24 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute bottom-12 left-12 h-32 w-32 rounded-full bg-white/5" />
        </div>
      </div>
    </div>
  );
}
