import { ArrowLeft, CheckCircle, Star, Quote, Calendar, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageProvider";

const proofItems = [
  {
    id: 1,
    buyer: "Ahmed M.",
    date: "2024-12-10",
    rating: 5,
    accountType: "Ultimate Dream Team",
    price: "$89.99",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    buyer: "John D.",
    date: "2024-12-08",
    rating: 5,
    accountType: "Barcelona Legends",
    price: "$124.99",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    buyer: "Sara K.",
    date: "2024-12-05",
    rating: 5,
    accountType: "Galácticos Collection",
    price: "$149.99",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    buyer: "Mohammed A.",
    date: "2024-12-03",
    rating: 5,
    accountType: "Premier League Stars",
    price: "$99.99",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    buyer: "Lisa T.",
    date: "2024-11-28",
    rating: 5,
    accountType: "French Connection",
    price: "$79.99",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    buyer: "Omar H.",
    date: "2024-11-25",
    rating: 5,
    accountType: "Serie A Masters",
    price: "$109.99",
    image: "/placeholder.svg",
  },
];

export default function Proofs() {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 gap-2"
        >
          <ArrowLeft className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
          {t.proofs.backToHome}
        </Button>

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
            {t.proofs.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t.proofs.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">{t.proofs.happyCustomers}</div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">{t.proofs.satisfaction}</div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">{t.proofs.delivery}</div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary">5.0</div>
              <div className="text-sm text-muted-foreground">{t.proofs.averageRating}</div>
            </CardContent>
          </Card>
        </div>

        {/* Proofs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proofItems.map((proof) => (
            <Card key={proof.id} className="overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="relative aspect-video bg-muted">
                <img
                  src={proof.image}
                  alt={`Proof ${proof.id}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1">
                    {[...Array(proof.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{proof.buyer}</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{proof.price}</span>
                </div>
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{proof.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{proof.accountType}</span>
                </div>
                <div className="mt-4 rounded-lg bg-muted/50 p-3">
                  <Quote className="mb-2 h-4 w-4 text-primary" />
                  <p className="text-sm italic text-muted-foreground">
                    {t.proofs.testimonial}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-8">
              <h2 className="mb-4 font-heading text-2xl font-bold">
                {t.proofs.ctaTitle}
              </h2>
              <p className="mb-6 text-muted-foreground">
                {t.proofs.ctaSubtitle}
              </p>
              <Button size="lg" onClick={() => navigate("/")}>
                {t.proofs.browseAccounts}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}