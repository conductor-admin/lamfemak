import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const addresses = [
    {
      title: "Abuja Office - Gwarimpa",
      address:
        "Suites B04(1st floor), D05&D06(3rd Floor) Famous Building Muhammad Sanusi Street, 69 Road, 6th Avenue, Gwarimpa, Abuja",
      type: "Main Office",
    },
    {
      title: "Abuja Office - Lokogoma",
      address:
        "House 7 Ahmadu Bello Close Peace Court Estate Lokogoma District Abuja",
      type: "Branch Office",
    },
    {
      title: "Lagos Office - Ojodu",
      address:
        "All Season Palace Suite 220, 74 Isheri Road, beside Federal Road Safety Corps, Ojodu, Ikeja",
      type: "Regional Office",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to ensure your organization&apos;s data protection compliance?
            Contact us today for expert consultation and comprehensive privacy
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="shadow-medium border-0 gradient-subtle">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <span>Phone</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Call us for immediate consultation
              </p>
              <a
                href="tel:+2348023102182"
                className="text-lg font-semibold text-primary hover:text-primary-glow transition-smooth"
              >
                +234 802 310 2182
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0 gradient-subtle">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <span>Email</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Send us your inquiries</p>
              <a
                href="mailto:IIamfemak@gmail.com"
                className="text-lg font-semibold text-primary hover:text-primary-glow transition-smooth"
              >
                IIamfemak@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0 gradient-subtle">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-primary" />
                <span>Business Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We&apos;re available</p>
              <div className="space-y-1">
                <p className="font-semibold">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="font-semibold">Sat: 9:00 AM - 2:00 PM</p>
                <p className="text-sm text-muted-foreground">
                  Emergency support: 24/7
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office Locations */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold font-heading text-center">
            Our <span className="text-gradient">Locations</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {addresses.map((office, index) => (
              <Card
                key={index}
                className="shadow-medium border-0 hover:shadow-large transition-smooth"
              >
                <CardHeader>
                  <CardTitle className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">{office.title}</div>
                      <div className="text-sm text-secondary font-medium">
                        {office.type}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {office.address}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CEO Contact */}
        <div className="mt-16">
          <Card className="shadow-large border-0 gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold font-heading">
                Direct CEO Contact
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                For executive-level consultations and strategic discussions,
                reach out directly to our CEO Mohammed Akinwunmi Lawal.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Mohammed Akinwunmi Lawal</p>
                <p className="text-primary-foreground/80">
                  HND, MBA, FCIB, FCIP, FERP
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    variant="secondary"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="mailto:akinmohdlawalowuye@yahoo.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email CEO
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
