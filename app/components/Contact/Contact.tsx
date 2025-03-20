"use client";

import Image from "next/image";
import { Mail, Instagram, Phone, Send } from "lucide-react";
import { useState, ChangeEvent } from "react";

const email = "info@makeitlook.co.uk";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative" id="contact-section">
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={686}
        alt="spiral-design"
        className="absolute left-0 hidden lg:block -z-10"
      />

      <div className="mx-auto max-w-7xl mt-20 sm:py-16 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-elements-secondary-contrastText">
            Let&#39;s{" "}
            <span className="text-elements-primary-main">Connect</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Got a project in mind? Fill out the form below or reach out through
            any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col justify-start">
            <h3 className="text-2xl font-bold mb-6 text-elements-secondary-contrastText">
              Contact Details
            </h3>

            <div className="space-y-6">
              <div className="flex items-center p-4 bg-card-background rounded-lg shadow-lg hover:translate-x-2 transition">
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

              <div className="flex items-center p-4 bg-card-background rounded-lg shadow-lg hover:translate-x-2 transition">
                <div className="p-3 rounded-full mr-4">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-text-primary">Instagram</h3>
                  <a
                    href="https://www.instagram.com/makeitlook_"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <p className="font-semibold text-elements-primary-main">
                      @makeitlook_
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-card-background rounded-lg shadow-lg hover:translate-x-2 transition">
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

          <div className="lg:col-span-2">
            <div className="bg-card-background p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-elements-secondary-contrastText">
                Send a Message
              </h3>

              <form
                action="https://send.pageclip.co/1r6l0UbiwKhrUwxHZBeXLJ9UZlcsjecw"
                className="pageclip-form space-y-6"
                method="post"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-elements-primary-main"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-elements-primary-main"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-elements-primary-main"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-elements-primary-main"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="pageclip-form__submit w-full flex items-center justify-center px-6 py-3 bg-elements-primary-main text-white rounded-md transition hover:bg-elements-primary-main/90"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

              <p className="text-center text-text-secondary text-sm mt-3">
                Your message will be sent securely via Pageclip.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center mt-24">
          <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-elements-primary-main mb-4 text-center leading-tight">
              Let&#39;s Bring <br />
              Your Vision <br />
              <span className="text-elements-secondary-contrastText">
                To Life
              </span>
            </h2>
            <p className="text-xl text-text-secondary text-center mt-6 max-w-sm">
              Your vision. My skills. <br />
              The perfect combination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
