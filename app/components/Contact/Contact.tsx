import Image from "next/image";
import { Mail, Instagram, Phone, MapPin } from "lucide-react";

const email = "info@makeitlook.co.uk";

const ContactSection = () => {
  return (
    <div className="relative" id="contact-section">
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={686}
        alt="spiral-design"
        className="absolute left-0 hidden lg:block -z-10"
      />

      <div className="mx-auto max-w-7xl mt-32 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16 gap-12">
          {/* COLUMN-1: Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center md:text-start text-elements-secondary-contrastText">
              Let&#39;s{" "}
              <span className="text-elements-primary-main">Connect</span>
            </h2>
            <p className="text-xl text-text-secondary mb-12 text-center md:text-start">
              Got a project in mind? Feel free to reach out through any of these
              channels.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center p-4 bg-card-background rounded-lg shadow-lg transition-transform duration-300 hover:translate-x-2">
                <div className="p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-text-primary">Email</h3>
                  <a href={`mailto:${email}`} className="cursor-pointer">
                    <p className="font-semibold text-elements-primary-main">
                      info@makeitlook.co.uk
                    </p>
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center p-4 bg-card-background rounded-lg shadow-lg transition-transform duration-300 hover:translate-x-2">
                <div className="p-3 rounded-full mr-4">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-text-primary">Instagram</h3>
                  <a
                    href={"https://www.instagram.com/makeitlook_"}
                    target="__blank"
                    className="cursor-pointer"
                  >
                    <p className="font-semibold text-elements-primary-main">
                      @makeitlook_
                    </p>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center p-4 bg-card-background rounded-lg shadow-lg transition-transform duration-300 hover:translate-x-2">
                <div className="p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-text-primary">Phone</h3>
                  <p className="font-semibold text-elements-primary-main">
                    +44 7455 931 553
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN-2: Big Engaging Text */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-elements-primary-dimmed/30 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-elements-secondary-dimmed/30 rounded-full -z-10"></div>

              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-elements-primary-main mb-4 text-center leading-tight">
                Let&#39;s Bring
                <br />
                Your Vision
                <br />
                <span className="text-elements-secondary-contrastText">
                  To Life
                </span>
              </h2>

              <p className="text-xl text-text-secondary text-center mt-6 max-w-sm">
                Your vision. My skills.
                <br />
                The perfect combination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
