"use client";
import Image from "next/image";
import heroImage from "@/public/hero-img.png";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {


  return (
    <motion.main
      className="mt-16 lg:mt-24 px-4 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="space-y-4 lg:space-y-6 max-w-2xl text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-wide">
            A new model for open collaboration
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Run an organization where members get rewarded for their contributions with fractional ownership.
          </p>
          <Link
            href="/request-early-access"
            className="inline-block px-6 py-3 bg-primaryBgColor rounded-md text-white font-medium text-lg tracking-wide"
          >
            Request early access
          </Link>
        </div>
        <div className="aspect-square">
          <Image
            src={heroImage}
            alt="Open collaboration illustration"
            quality={100}
            width={750}
            height={600}
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </motion.main>
  );
}

export default Hero;



