import {
  Shield,
  FileCheck,
  GraduationCap,
  AlertTriangle,
  Search,
  ClipboardCheck,
  UserCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Data Protection Regulations Compliance & Breach",
      description:
        "Comprehensive compliance assessment and breach response services to ensure your organization meets NDPR requirements and handles data incidents effectively.",
      color: "primary",
    },
    {
      icon: FileCheck,
      title: "Data Protection & Privacy Advisory",
      description:
        "Expert guidance on data protection laws, privacy policies, and regulatory compliance strategies tailored to your business needs.",
      color: "secondary",
    },
    {
      icon: GraduationCap,
      title: "Data Protection & Training Awareness",
      description:
        "Professional training programs to educate your team on data protection best practices, NDPR compliance, and privacy awareness.",
      color: "primary",
    },
    {
      icon: AlertTriangle,
      title: "Data Protection & Privacy Breach Response",
      description:
        "Rapid response services for data breaches including incident management, regulatory notification, and remediation strategies.",
      color: "secondary",
    },
    {
      icon: Search,
      title: "Information Privacy Audit",
      description:
        "Thorough privacy audits to identify vulnerabilities, assess compliance levels, and provide actionable recommendations for improvement.",
      color: "primary",
    },
    {
      icon: ClipboardCheck,
      title: "Data Privacy Impact Assessment",
      description:
        "Comprehensive DPIA services to evaluate privacy risks in new projects, systems, or processes before implementation.",
      color: "secondary",
    },
    {
      icon: UserCheck,
      title: "Data Protection & Privacy Due Diligence",
      description:
        "Due diligence services for mergers, acquisitions, and partnerships to assess data protection risks and compliance status.",
      color: "primary",
    },
  ];

  return (
    <section id="services" className="section-padding gradient-subtle">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive data protection and privacy compliance services
            designed to safeguard your organization and ensure regulatory
            compliance across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClass =
              service.color === "primary"
                ? "text-primary bg-primary/10"
                : "text-secondary bg-secondary/10";

            return (
              <Card
                key={index}
                className="shadow-medium border-0 hover:shadow-large transition-smooth hover:-translate-y-1 group"
              >
                <CardHeader className="space-y-4">
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center ${colorClass}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-semibold leading-tight group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl shadow-medium p-8 space-y-4">
            <h3 className="text-2xl font-bold font-heading">
              Why Choose <span className="text-gradient">LANFEMAK</span>?
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              With deep expertise in Nigerian data protection regulations and
              international best practices, we provide comprehensive solutions
              that protect your business while ensuring full compliance with
              NDPR and other relevant regulations.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">NDPR</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Expert</div>
                <div className="text-sm text-muted-foreground">Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
