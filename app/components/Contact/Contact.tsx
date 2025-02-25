import Image from "next/image";
import { Mail, Instagram, Phone, MapPin } from "lucide-react";

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
                  <p className="font-semibold text-elements-primary-main">
                    info@makeitlook.co.uk
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center p-4 bg-card-background rounded-lg shadow-lg transition-transform duration-300 hover:translate-x-2">
                <div className="p-3  rounded-full mr-4">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-text-primary">Instagram</h3>
                  <p className="font-semibold text-elements-primary-main">
                    @makeitlook_
                  </p>
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
                    +44 745 931 553
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN-2: Image and Quote */}
          <div className="relative flex flex-col items-center md:items-end justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-elements-primary-dimmed/30 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-elements-secondary-dimmed/30 rounded-full -z-10"></div>

              <Image
                src="/images/aman.png"
                alt="profile-image"
                width={416}
                height={530}
                className="relative z-10 rounded-lg shadow-xl"
              />

              <div className="absolute -bottom-12 left-6 right-6 bg-card-background p-6 rounded-lg shadow-lg z-20">
                <p className="text-text-secondary italic">
                  &quot;I&#39;m passionate about bringing your design ideas to
                  life. Let&#39;s create something amazing together.&quot;
                </p>
                <p className="text-xl font-semibold mt-4 text-elements-primary-main">
                  Aman Arora
                </p>
                <p className="text-text-secondary">Founder, Make It Look</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
