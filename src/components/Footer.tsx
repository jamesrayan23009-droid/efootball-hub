import { Gamepad2, Shield, CreditCard, Headphones } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

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
              <h4 className="font-heading font-bold">{t.footer.secureTrading}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{t.footer.secureTradingDesc}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold">{t.footer.easyPayments}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{t.footer.easyPaymentsDesc}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold">{t.footer.support247}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{t.footer.support247Desc}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Gamepad2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold">{t.footer.verifiedAccounts}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{t.footer.verifiedAccountsDesc}</p>
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
                  {t.header.brand}<span className="text-primary">{t.header.brandSuffix}</span>
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {t.footer.brandDesc}
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold">{t.footer.marketplace}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.browseAccounts}</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.featuredDeals}</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.sellAccount}</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.pricing}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold">{t.footer.supportTitle}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.helpCenter}</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.contactUs}</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.faqs}</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.safetyTips}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold">{t.footer.legal}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.terms}</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.privacy}</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.refund}</a></li>
                <li><a href="#" className="transition-colors hover:text-primary">{t.footer.cookie}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6">
        <div className="container text-center text-sm text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}