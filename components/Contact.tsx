"use client";

import { useState } from "react";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6285186072004";
    const waMessage = `Halo, nama saya ${name} (${email}).\n\n${message}`;
    const encodedMessage = encodeURIComponent(waMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-32 reveal">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Bagian Kiri: Teks Ajakan */}
        <div>
          <h4 className="mb-3 text-sm font-bold tracking-widest text-yellow-500 uppercase">Contact</h4>
          <h2 className="mb-6 text-4xl font-bold  text-white">Let`s Work Together! 🚀</h2>
          <p className="mb-8 text-lg  text-zinc-400 leading-relaxed">I`m currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, I`ll try my best to get back to you!</p>

          {/* Info Tambahan (Optional) */}
          <div className="flex items-center gap-3  text-zinc-400">
            <div className="flex items-center justify-center w-10 h-10 rounded-full  bg-green-900/20 text-green-600">
              <FaWhatsapp />
            </div>
            <span className="font-medium">Fast response via WhatsApp</span>
          </div>
        </div>

        {/* Bagian Kanan: Form */}
        <div className="p-6 md:p-8  bg-zinc-900/50 rounded-3xl border  border-zinc-800">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium  text-zinc-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl  bg-zinc-950 border  border-zinc-800 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all placeholder:text-zinc-400"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium  text-zinc-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl  bg-zinc-950 border  border-zinc-800 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all placeholder:text-zinc-400"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium  text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl  bg-zinc-950 border  border-zinc-800 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all placeholder:text-zinc-400 resize-none"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 font-bold text-white transition-all bg-yellow-500 rounded-xl hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-500/20">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
