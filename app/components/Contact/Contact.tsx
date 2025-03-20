"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Instagram, Phone, Send, CheckCircle } from "lucide-react";
import Image from "next/image";

const email = "info@makeitlook.co.uk";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send form data to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });

    if (response.ok) {
      setShowPopup(true); // Show pop-up
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form

      // Hide pop-up after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative" id="contact-section">
      {/* Background Design */}
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={686}
        alt="spiral-design"
        className="absolute left-0 hidden lg:block -z-10"
      />

      <div className="mx-auto max-w-7xl mt-20 sm:py-16 lg:px-8">
        {/* Section Header */}
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
          {/* 📞 Contact Details */}
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

          {/* ✉️ Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card-background p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-elements-secondary-contrastText">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Web3Forms Access Key (REQUIRED) */}
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY"
                />

                {/* Name Input */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-elements-primary-main bg-neutral-dimmed-heavy"
                />

                {/* Email Input */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-elements-primary-main bg-neutral-dimmed-heavy"
                />

                {/* Subject Input */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-elements-primary-main bg-neutral-dimmed-heavy"
                />

                {/* Message Input */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-elements-primary-main bg-neutral-dimmed-heavy"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex justify-center items-center rounded-md px-4 py-4 text-sm font-medium transition-all duration-300 ease-in-out bg-elements-primary-main text-white hover:bg-elements-primary-shadow hover:scale-105 active:scale-95 focus:ring-2 focus:ring-offset-2 focus:ring-elements-primary-main/50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ✅ Pop-up Message */}
        {showPopup && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            Message Sent Successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
