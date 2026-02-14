"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Mail, Lock, Eye, EyeOff, ArrowRight, User, Phone, Upload, FileText, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("tenant");
  const [ownerStep, setOwnerStep] = useState(1);

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

          <h1 className="mt-8 text-2xl font-bold">Create your account</h1>
          <p className="mt-2 text-muted-foreground">Join StayNest to find or list PG accommodations</p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tenant">I&apos;m a Tenant</TabsTrigger>
              <TabsTrigger value="owner">I&apos;m an Owner</TabsTrigger>
            </TabsList>

            <TabsContent value="tenant">
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" className="mt-1.5" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="you@example.com" className="pl-10" type="email" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <div className="relative mt-1.5">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="+91 98765 43210" className="pl-10" type="tel" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Password</label>
                  <div className="relative mt-1.5">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Create a strong password"
                      className="pl-10 pr-10"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 rounded border" />
                  <span className="text-xs text-muted-foreground">
                    I agree to StayNest&apos;s <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </span>
                </div>
                <Button className="w-full gap-2" size="lg">
                  Create Account <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="owner">
              {/* Step indicator */}
              <div className="mt-6 flex items-center gap-3">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                      ownerStep >= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {step}
                    </div>
                    <span className="hidden text-xs sm:block">
                      {step === 1 ? "Basic Info" : step === 2 ? "KYC" : "Bank"}
                    </span>
                    {step < 3 && <div className={`h-px w-8 ${ownerStep > step ? "bg-primary" : "bg-muted"}`} />}
                  </div>
                ))}
              </div>

              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                {ownerStep === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-medium">First Name</label>
                        <Input placeholder="Rajesh" className="mt-1.5" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Last Name</label>
                        <Input placeholder="Kumar" className="mt-1.5" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <div className="relative mt-1.5">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="you@example.com" className="pl-10" type="email" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <div className="relative mt-1.5">
                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="+91 98765 43210" className="pl-10" type="tel" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Password</label>
                      <div className="relative mt-1.5">
                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="Create a strong password" className="pl-10" type="password" />
                      </div>
                    </div>
                    <Button className="w-full gap-2" size="lg" onClick={() => setOwnerStep(2)}>
                      Next: KYC Details <ArrowRight className="h-4 w-4" />
                    </Button>
                  </motion.div>
                )}

                {ownerStep === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Aadhaar Number</label>
                      <Input placeholder="1234 5678 9012" className="mt-1.5" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Upload Aadhaar Card</label>
                      <div className="mt-1.5 flex items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors hover:border-primary/50">
                        <div className="text-center">
                          <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                          <p className="mt-2 text-sm text-muted-foreground">Click or drag to upload</p>
                          <p className="text-xs text-muted-foreground">PDF, JPG, PNG (max 5MB)</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Property Ownership Proof</label>
                      <div className="mt-1.5 flex items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors hover:border-primary/50">
                        <div className="text-center">
                          <FileText className="mx-auto h-8 w-8 text-muted-foreground" />
                          <p className="mt-2 text-sm text-muted-foreground">Click or drag to upload</p>
                          <p className="text-xs text-muted-foreground">Sale deed, rental agreement, etc.</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1" onClick={() => setOwnerStep(1)}>Back</Button>
                      <Button className="flex-1 gap-2" onClick={() => setOwnerStep(3)}>
                        Next: Bank Details <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {ownerStep === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Bank Account Holder Name</label>
                      <Input placeholder="Rajesh Kumar" className="mt-1.5" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Account Number</label>
                      <div className="relative mt-1.5">
                        <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="XXXX XXXX XXXX" className="pl-10" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">IFSC Code</label>
                      <Input placeholder="SBIN0001234" className="mt-1.5" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Bank Name</label>
                      <Input placeholder="State Bank of India" className="mt-1.5" />
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 rounded border" />
                      <span className="text-xs text-muted-foreground">
                        I confirm that all the information provided is accurate and I agree to StayNest&apos;s{" "}
                        <a href="#" className="text-primary hover:underline">Terms of Service</a>
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1" onClick={() => setOwnerStep(2)}>Back</Button>
                      <Button className="flex-1 gap-2" size="lg">
                        Submit for Verification <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>
            </TabsContent>
          </Tabs>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium text-primary hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </div>

      {/* Right - Image */}
      <div className="hidden lg:block lg:flex-1">
        <div className="relative h-full bg-gradient-to-br from-primary to-purple-700 p-12">
          <div className="relative z-10 flex h-full flex-col justify-between text-white">
            <div />
            <div>
              <h2 className="text-3xl font-bold">
                {activeTab === "owner" ? "Start earning from your property today." : "Find your ideal PG in seconds."}
              </h2>
              <p className="mt-4 text-lg text-white/80">
                {activeTab === "owner"
                  ? "List your PG on India's fastest-growing platform. 10,000+ owners trust StayNest."
                  : "50,000+ verified PGs across 50+ cities. Secure booking guaranteed."}
              </p>
            </div>
            <p className="text-sm text-white/50">&copy; 2026 StayNest. All rights reserved.</p>
          </div>
          <div className="absolute right-12 top-12 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute bottom-12 left-12 h-32 w-32 rounded-full bg-white/5" />
        </div>
      </div>
    </div>
  );
}
