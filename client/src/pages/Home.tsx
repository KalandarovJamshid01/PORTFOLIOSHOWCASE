import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ContactSection } from "@/components/ContactSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <Separator />
        <ContactSection />
      </main>
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SOFTYSOFTWARE. Все права защищены.
        </div>
      </footer>
    </div>
  );
}