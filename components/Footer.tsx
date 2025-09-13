import { Shield, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/lanfemax-logo.png"
                width={40}
                height={40}
                alt="LANFEMAK GLOBAL DIGITAL SERVICES"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Nigeria&apos;s leading data protection and privacy compliance
              consultancy, ensuring your organization meets NDPR requirements.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <Shield className="h-5 w-5" />
              <span className="font-medium">NDPR Compliant</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Data Protection Compliance</li>
              <li>Privacy Advisory</li>
              <li>Training & Awareness</li>
              <li>Breach Response</li>
              <li>Privacy Audits</li>
              <li>Impact Assessments</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+234 802 310 2182</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>IIamfemak@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Offices in Abuja & Lagos</span>
              </div>
            </div>
          </div>

          {/* CEO */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Leadership</h4>
            <div className="space-y-2">
              <p className="font-medium text-primary">
                Mohammed Akinwunmi Lawal
              </p>
              <p className="text-sm text-muted-foreground">
                Chief Executive Officer
              </p>
              <p className="text-sm text-muted-foreground">
                HND, MBA, FCIB, FCIP, FERP
              </p>
              <a
                href="mailto:akinmohdlawalowuye@yahoo.com"
                className="text-sm text-primary hover:text-primary-glow transition-smooth"
              >
                akinmohdlawalowuye@yahoo.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © 2024 LANFEMAK GLOBAL DIGITAL SERVICES. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                NDPR Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
