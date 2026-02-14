"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Search,
  User,
  Building2,
  Shield,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/search", label: "Find PG", icon: Search },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"
              >
                <Building2 className="h-5 w-5" />
              </motion.div>
              <span className="text-xl font-bold tracking-tight">
                Stay<span className="text-primary">Nest</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("roles")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  Portals <ChevronDown className="h-3 w-3" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "roles" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-56 rounded-xl border bg-card p-2 shadow-xl"
                    >
                      <Link
                        href="/dashboard/tenant"
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent"
                      >
                        <User className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">Tenant Portal</p>
                          <p className="text-xs text-muted-foreground">Search & book PGs</p>
                        </div>
                      </Link>
                      <Link
                        href="/dashboard/owner"
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent"
                      >
                        <Building2 className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">Owner Portal</p>
                          <p className="text-xs text-muted-foreground">Manage your PGs</p>
                        </div>
                      </Link>
                      <Link
                        href="/dashboard/admin"
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent"
                      >
                        <Shield className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">Admin Panel</p>
                          <p className="text-xs text-muted-foreground">Platform management</p>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm" className="rounded-full px-6">
                  List Your PG
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-accent lg:hidden"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <nav className="flex flex-col gap-2 p-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="my-4 h-px bg-border" />
              <Link
                href="/dashboard/tenant"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-accent"
              >
                <User className="h-5 w-5 text-primary" /> Tenant Portal
              </Link>
              <Link
                href="/dashboard/owner"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-accent"
              >
                <Building2 className="h-5 w-5 text-primary" /> Owner Portal
              </Link>
              <Link
                href="/dashboard/admin"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-accent"
              >
                <Shield className="h-5 w-5 text-primary" /> Admin Panel
              </Link>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/auth/login" onClick={() => setIsMobileOpen(false)}>
                  <Button variant="outline" className="w-full" size="lg">Sign In</Button>
                </Link>
                <Link href="/auth/register" onClick={() => setIsMobileOpen(false)}>
                  <Button className="w-full" size="lg">List Your PG</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
