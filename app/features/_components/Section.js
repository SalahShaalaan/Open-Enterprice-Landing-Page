"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Section({ title, description, icon, children, reverse = false }) {

  const contentOrder = reverse ? "order-none md:order-2" : "";
  const sectionId = `section-${title.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      aria-labelledby={sectionId}

      className={`grid items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 mb-24`}>
      <div className={`space-y-4 ${contentOrder}`}>
        {icon && <Image src={icon} alt="Icon" width={80} height={80} quality={100} priority />}
        <h2 className="mb-4 text-5xl font-bold tracking-wide text-center text-black md:leading-wide sm:text-left md:text-5xl">{title}</h2>
        <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
          {description}
        </p>
      </div>
      {children}
    </motion.section>
  );
}