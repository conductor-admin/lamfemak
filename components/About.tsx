import { Award, Users, Target, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <h2 className="text-3xl md:text-6xl font-bold font-heading text-center">
          About Our <span className="text-gradient">Partners</span>
        </h2>
        <div className="space-y-4">
          <p className="mt-4 mb-6 md:text-2xl text-[16px] text-muted-foreground leading-relaxed">
            Led by experienced professionals with deep expertise in data
            protection, privacy regulations, and financial compliance across
            Nigeria and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          {/* Content */}
          {/* partner 1 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">
                  Mohammed Akinwunmi Lawal
                </h3>
                <p className="text-muted-foreground">Chief Executive Officer</p>
                <div className="flex flex-wrap gap-2">
                  {["HND", "MBA", "FCIB", "FCIP", "FERP"].map((credential) => (
                    <span
                      key={credential}
                      className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  Contact: akinmohdlawalowuye@yahoo.com
                </p>
              </div>
            </div>
          </div>
          {/* partner 2 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">
                  Abdulrasheed Oluwafemi Shekoni
                </h3>
                <p className="text-muted-foreground">Partner</p>
                <div className="flex flex-wrap gap-2">
                  {["FCA", "FCTI", "MBA"].map((credential) => (
                    <span
                      key={credential}
                      className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  Contact: femishekoni@gmail.com
                </p>
              </div>
            </div>
          </div>
          {/* partner 3 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">
                  Peter Olarewaju Abidakun
                </h3>
                <p className="text-muted-foreground">Chief Executive Officer</p>
                <div className="flex flex-wrap gap-2">
                  {["FCA", "FCTI"].map((credential) => (
                    <span
                      key={credential}
                      className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  Contact: Lanabidakun@yahoo.co.uk
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed text-center mt-10 md:text-lg">
          With extensive qualifications and experience in banking, compliance,
          and enterprise resource planning, our partners bring unmatched
          expertise to data protection and privacy consulting in Nigeria.
        </p>
        {/* Stats Cards */}
        <div className="mt-6 grid grid-cols-2 gap-6">
          <Card className="shadow-medium border-0 gradient-subtle ">
            <CardContent className="p-6 text-center space-y-3 bg-primary/25 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-secondary">5+</h4>
                <p className="text-sm text-secondary">
                  Professional Certifications
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0 gradient-subtle">
            <CardContent className="p-6 text-center space-y-3 bg-primary/25 rounded-2xl">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-secondary">100+</h4>
                <p className="text-sm text-secondary">Clients Served</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0 gradient-subtle">
            <CardContent className="p-6 text-center space-y-3 bg-secondary/25 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary">99%</h4>
                <p className="text-sm text-primary">Compliance Success Rate</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0 gradient-subtle">
            <CardContent className="p-6 text-center space-y-3 bg-secondary/25 rounded-2xl">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary">24/7</h4>
                <p className="text-sm text-primary">Support Available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
