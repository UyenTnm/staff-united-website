"use client";

import React from "react";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: "",
    timeline: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        serviceType: "",
        timeline: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-12 lg:py-14 md:py-28 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
            Let's Discuss Your Needs
          </h2>
          <p className="text-lg text-foreground max-w-3xl leading-relaxed">
            We respond promptly to all inquiries. Share your requirements, and
            our team will reach out within one business day to discuss how we
            can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Direct Contact */}
            <div className="bg-white border border-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-lg text-primary font-semibold hover:text-accent transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@staffunited.com"
                    className="text-primary hover:text-accent transition-colors break-all"
                  >
                    hello@staffunited.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    Response Time
                  </p>
                  <p className="text-foreground">Within 24 business hours</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white border border-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">
                Office Hours
              </h3>
              <div className="space-y-2 text-sm text-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Emergency support available upon request
              </p>
            </div>

            {/* What to Expect */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">
                What Happens Next
              </h3>
              <ol className="space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">
                    1
                  </span>
                  <span>We receive and review your request</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">
                    2
                  </span>
                  <span>Initial call to understand your needs</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">
                    3
                  </span>
                  <span>Proposal with specific recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">
                    4
                  </span>
                  <span>Agreement and project kickoff</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Submit Your Inquiry
              </h3>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Thank you for your submission!
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    We'll be in touch within one business day. We look forward
                    to discussing your needs.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-muted rounded bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-muted rounded bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-muted rounded bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your company"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Service of Interest *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-muted rounded bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="staffing">Staffing Solutions</option>
                    <option value="optimization">
                      Business Process Optimization
                    </option>
                    <option value="qa">Quality Assurance Services</option>
                    <option value="development">
                      Team Development Programs
                    </option>
                    <option value="consulting">Management Consulting</option>
                    <option value="admin">Administrative Support</option>
                    <option value="other">Other / Custom Solution</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Desired Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-muted rounded bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (ASAP)</option>
                    <option value="1month">Within 1 Month</option>
                    <option value="2-3months">2-3 Months</option>
                    <option value="flexible">Flexible / Not Sure</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-muted rounded bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us more about your needs, current challenges, or specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-primary text-white rounded font-semibold hover:bg-accent hover:text-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  * Required fields. We respect your privacy and will only use
                  your information to contact you regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Sticky CTA Bar (Mobile) */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-muted shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-muted-foreground">Need assistance?</p>
              <a
                href="tel:+1234567890"
                className="font-semibold text-primary hover:text-accent transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 bg-primary text-white rounded text-sm font-semibold hover:bg-accent hover:text-primary transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
