import { Award, Users, Target, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                About Our <span className="text-gradient">Leadership</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Led by experienced professionals with deep expertise in data
                protection, privacy regulations, and financial compliance across
                Nigeria and beyond.
              </p>
            </div>

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

              <p className="text-muted-foreground leading-relaxed">
                With extensive qualifications and experience in banking,
                compliance, and enterprise resource planning, our CEO brings
                unmatched expertise to data protection and privacy consulting in
                Nigeria.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="shadow-medium border-0 gradient-subtle">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-primary">5+</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional Certifications
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 gradient-subtle">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-secondary">100+</h4>
                  <p className="text-sm text-muted-foreground">
                    Clients Served
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 gradient-subtle">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-primary">99%</h4>
                  <p className="text-sm text-muted-foreground">
                    Compliance Success Rate
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 gradient-subtle">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-secondary">24/7</h4>
                  <p className="text-sm text-muted-foreground">
                    Support Available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
