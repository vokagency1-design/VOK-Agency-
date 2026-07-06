"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/lib/get-dictionary";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  dict,
  services,
}: {
  dict: Dictionary;
  services: { title: string }[];
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border-b border-obsidian/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-obsidian/40 focus:border-gold dark:border-bone/20 dark:placeholder:text-bone/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <label className="section-label mb-2 block">{dict.contactPage.formName}</label>
          <input required name="name" type="text" className={inputClass} />
        </div>
        <div>
          <label className="section-label mb-2 block">{dict.contactPage.formEmail}</label>
          <input required name="email" type="email" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <label className="section-label mb-2 block">{dict.contactPage.formPhone}</label>
          <input name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label className="section-label mb-2 block">{dict.contactPage.formService}</label>
          <select name="service" className={inputClass}>
            {services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="section-label mb-2 block">{dict.contactPage.formMessage}</label>
        <textarea required name="message" rows={5} className={inputClass} />
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
        {status === "submitting" ? dict.contactPage.formSubmitting : dict.contactPage.formSubmit}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-gold-dim dark:text-gold"
          >
            {dict.contactPage.formSuccess}
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-500"
          >
            {dict.contactPage.formError}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
