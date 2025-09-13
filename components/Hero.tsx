import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-subtle">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>Trusted Data Protection Partner</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                <span className="text-gradient">LANFEMAK</span>
                <br />
                <span className="text-foreground">GLOBAL DIGITAL</span>
                <br />
                <span className="text-foreground">SERVICES</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Nigeria&apos;s leading data protection and privacy compliance
                consultancy. We ensure your organization meets NDPR requirements
                and maintains the highest standards of data security and
                privacy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact">
                <Button className="btn-hero group">
                  Get Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" className="btn-secondary">
                  Our Services
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>NDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>Expert Advisory</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>Professional Training</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center animate-slide-in">
            <div className="relative">
              <div className="w-96 h-96 gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-card rounded-2xl shadow-large flex items-center justify-center">
                  <Shield className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
