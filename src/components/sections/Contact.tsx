"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "sv6024010100@camtech.edu.kh";
  const phoneNumber = "(+885) 81 425 255";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Please write a brief message or project details.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    // Construct real mailto link with encoded subject and body
    const subjectLine = encodeURIComponent(
      formData.subject.trim()
        ? `[Opportunity / Inquiry] ${formData.subject}`
        : `[Portfolio Inquiry] From ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Hi Vin,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );

    // Trigger real mail client
    window.location.href = `mailto:${emailAddress}?subject=${subjectLine}&body=${bodyContent}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Hiring CTA */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717] leading-tight">
              Have a role or a challenging problem in mind?{" "}
              <span className="text-[#0071E3]">Let&apos;s talk.</span>
            </h2>
            <p className="text-base text-[#6E6E73] leading-relaxed">
              I am actively considering Software Engineer opportunities, frontend engineering roles, and technical internships. Feel free to reach out directly via email, phone, or GitHub.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="p-4 rounded-2xl border border-[#E5E5E3] bg-white flex items-center justify-between shadow-subtle">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#F2F2F0] text-[#171717]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#86868B]">Official Email</div>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-xs font-medium text-[#171717] hover:text-[#0071E3] transition-colors"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-[#6E6E73] hover:text-[#171717] hover:bg-[#F2F2F0] transition-colors"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#059669]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl border border-[#E5E5E3] bg-white flex items-center gap-3 shadow-subtle">
                <div className="p-2 rounded-full bg-[#F2F2F0] text-[#171717]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#86868B]">Phone Number</div>
                  <a
                    href="tel:+88581425255"
                    className="text-xs font-medium text-[#171717] hover:text-[#0071E3] transition-colors font-mono"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl border border-[#E5E5E3] bg-white flex items-center gap-3 shadow-subtle">
                <div className="p-2 rounded-full bg-[#F2F2F0] text-[#171717]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#86868B]">Location</div>
                  <div className="text-xs font-medium text-[#171717]">
                    Veng Sreng Blvd, Choam Choa, Phnom Penh, Cambodia
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/VinSambrathna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#6E6E73] hover:text-[#171717] bg-white px-3 py-1.5 rounded-full border border-[#E5E5E3] shadow-subtle transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/VinSambrathna</span>
                <ArrowUpRight className="w-3 h-3 text-[#86868B]" />
              </a>
              <a
                href="https://github.com/SambrathnaVin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#6E6E73] hover:text-[#171717] bg-white px-3 py-1.5 rounded-full border border-[#E5E5E3] shadow-subtle transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>@SambrathnaVin</span>
                <ArrowUpRight className="w-3 h-3 text-[#86868B]" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#E5E5E3] bg-white p-8 sm:p-10 shadow-card">
              <div className="pb-6 border-b border-[#E5E5E3] mb-6">
                <h3 className="text-lg font-semibold text-[#171717] tracking-tight">
                  Direct Inquiries &amp; Interview Requests
                </h3>
                <p className="text-xs text-[#6E6E73] mt-1">
                  Submitting will validate inputs and open your mail client with pre-populated message parameters directly addressed to Vin.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[#171717] mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full text-xs px-3.5 py-2.5 rounded-xl border bg-[#FBFBF9] text-[#171717] placeholder-[#86868B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071E3] transition-all ${
                        errors.name ? "border-rose-400 bg-rose-50/30" : "border-[#E5E5E3]"
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-rose-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#171717] mb-1">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className={`w-full text-xs px-3.5 py-2.5 rounded-xl border bg-[#FBFBF9] text-[#171717] placeholder-[#86868B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071E3] transition-all ${
                        errors.email ? "border-rose-400 bg-rose-50/30" : "border-[#E5E5E3]"
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-rose-500 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-[#171717] mb-1">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineer Opportunity at Tech Corp"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E5E5E3] bg-[#FBFBF9] text-[#171717] placeholder-[#86868B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071E3] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[#171717] mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the role, technical team, or inquiry..."
                    className={`w-full text-xs px-3.5 py-2.5 rounded-xl border bg-[#FBFBF9] text-[#171717] placeholder-[#86868B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071E3] transition-all ${
                      errors.message ? "border-rose-400 bg-rose-50/30" : "border-[#E5E5E3]"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-500 mt-1 block">{errors.message}</span>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
                    <Send className="w-3.5 h-3.5 mr-2" />
                    <span>Send Message via Email Client</span>
                  </Button>

                  <span className="text-[11px] text-[#86868B]">
                    Opens system default mail application
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
