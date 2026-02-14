"use client";

import Link from "next/link";
import { Building2, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  "For Tenants": [
    { label: "Find PG", href: "/search" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Popular Cities", href: "/search" },
    { label: "Student Discounts", href: "#" },
  ],
  "For Owners": [
    { label: "List Your PG", href: "/auth/register" },
    { label: "Owner Dashboard", href: "/dashboard/owner" },
    { label: "Pricing Plans", href: "#" },
    { label: "Owner Support", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Cancellation Policy", href: "#" },
  ],
};

const cities = ["Hyderabad", "Bangalore", "Mumbai", "Delhi", "Pune", "Chennai", "Kolkata", "Ahmedabad"];

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">
                Stay<span className="text-primary">Nest</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              India&apos;s most trusted PG booking platform. Find verified, affordable accommodation near you.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular Cities */}
        <div className="mt-12 border-t pt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Popular Cities</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {cities.map((city) => (
              <Link
                key={city}
                href={`/search?city=${city.toLowerCase()}`}
                className="rounded-full border px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact & Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> support@staynest.in
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" /> 1800-123-4567
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Hyderabad, India
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} StayNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
