import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <section id="contact" className="py-32">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Contact</h2>

      {submitted && (
        <p className="text-center text-green-400 mb-6">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      )}

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-xl mx-auto"
      >
        <input type="hidden" name="form-name" value="contact" />
        
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="px-5 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-gray-100"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="px-5 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-gray-100"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={6}
          className="px-5 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-gray-100 resize-y"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 rounded px-8 py-3 font-bold transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
