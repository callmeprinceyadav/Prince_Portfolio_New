import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane, FaCheckCircle, FaRocket } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "pkryadav9304@gmail.com",
    href: "mailto:pkryadav9304@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "India",
    href: null,
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BiGlobe,
    title: "Website",
    value: "Prince's Portfolio",
    href: "#",
    color: "from-purple-500 to-pink-500"
  }
];

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/callmeprinceyadav/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
    label: "LinkedIn"
  },
  {
    icon: FaGithub,
    href: "https://github.com/callmeprinceyadav",
    color: "hover:text-white",
    bgColor: "hover:bg-gray-500/10",
    label: "GitHub"
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/callmeprinceyadav",
    color: "hover:text-pink-400",
    bgColor: "hover:bg-pink-500/10",
    label: "Instagram"
  }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setError(false);
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Submit to Netlify
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setIsSubmitting(false);
      setError(true);
      
      // Keep error message visible for a while
      setTimeout(() => setError(false), 5000);
    }
  }

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-2xl mb-6"
          >
            <FaRocket className="text-indigo-400" />
            <span className="text-gray-300 font-medium">Let's Connect</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold gradient-text mb-4"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6"
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaEnvelope className="text-indigo-400" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-4 p-4 glass rounded-2xl hover:glass-strong transition-all duration-300 cursor-pointer"
                    >
                      <div className={`p-3 bg-gradient-to-r ${info.color} rounded-2xl`}>
                        <IconComponent className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-gray-300 text-sm">{info.value}</p>
                      </div>
                    </motion.div>
                  );
                  
                  return info.href ? (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.02 }}
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <div key={info.title}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, color, bgColor, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group p-4 glass-card rounded-2xl text-gray-400 ${color} ${bgColor} transition-all duration-300`}
                    aria-label={label}
                  >
                    <Icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaPaperPlane className="text-purple-400" />
                Send Message
              </h3>

              {/* Feedback Messages */}
              <AnimatePresence mode="wait">
                {submitted && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-400 text-xl" />
                    <div>
                      <p className="text-green-400 font-semibold">Message Sent Successfully!</p>
                      <p className="text-green-300 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3"
                  >
                    <FaRocket className="text-red-400 text-xl rotate-180" />
                    <div>
                      <p className="text-red-400 font-semibold">Submission Failed</p>
                      <p className="text-red-300 text-sm">Please try again later or contact me via email directly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-6 py-4 glass rounded-2xl border border-white/10 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 text-white placeholder-gray-400 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-6 py-4 glass rounded-2xl border border-white/10 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 text-white placeholder-gray-400 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-6 py-4 glass rounded-2xl border border-white/10 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 text-white placeholder-gray-400 resize-none transition-all duration-300"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  viewport={{ once: true }}
                  className={`w-full btn-primary flex items-center justify-center gap-3 py-4 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
