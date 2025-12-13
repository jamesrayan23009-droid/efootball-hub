import { Gamepad2, Shield, CreditCard, Headphones } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      {/* Trust badges */}
      <div className="border-b border-border py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold">Secure Trading</h4>
              <p className="mt-1 text-sm text-muted-foreground">100% safe transactions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold">Easy Payments</h4>
              <p className="mt-1 text-sm text-muted-foreground">Multiple payment options</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold">24/7 Support</h4>
              <p className="mt-1 text-sm text-muted-foreground">Always here to help</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Gamepad2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold">Verified Accounts</h4>
              <p className="mt-1 text-sm text-muted-foreground">All accounts checked</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Gamepad2 className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-heading text-xl font-bold">
                  eFootball<span className="text-primary">Market</span>
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                The trusted marketplace for premium eFootball game accounts. Buy and sell with confidence.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold">Marketplace</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-primary">Browse Accounts</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">Featured Deals</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">Sell Account</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold">Support</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-primary">Help Center</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">FAQs</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">Safety Tips</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">Refund Policy</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © 2024 eFootballMarket. All rights reserved. Not affiliated with Konami.
        </div>
      </div>
    </footer>
  );
}
