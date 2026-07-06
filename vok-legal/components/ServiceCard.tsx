"use client";

import { motion } from "framer-motion";

export default function ServiceCard({
  id,
  category,
  title,
  description,
}: {
  id: string;
  category: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="card-surface group relative flex flex-col gap-4 p-7 transition-colors hover:border-gold/50"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-2xl text-gold/40 transition-colors group-hover:text-gold">
          {id}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-obsidian/40 dark:text-bone/40">
          {category}
        </span>
      </div>
      <h3 className="font-display text-xl leading-snug">{title}</h3>
      <p className="text-sm leading-relaxed text-obsidian/60 dark:text-bone/60">{description}</p>
      <div className="mt-auto h-px w-10 bg-gold/40 transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}
