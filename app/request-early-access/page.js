"use client"
import Image from "next/image"
import requestImage from "@/public/request-img.png"
import { motion } from "framer-motion"
export default function Page() {

  const buttonAnimtion = {
    hover: {
      scale: 1.1,
      transition: {
        repeat: Infinity,
        duration: .3,
        repeatType: "reverse"
      },
    }
  }

  return (
    <motion.main className="py-16 px-4"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <section className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-bold text-black lg:text-4xl">
              Start an Open Enterprise
            </h1>
            <p className="mt-3 text-gray-600">
              If you can’t wait to run a new or existing organization on Open Enterprise and are willing to explore and navigate the beta, we’d love to get you started.            </p>
            <motion.button
              className="w-full lg:w-auto bg-primaryBgColor px-5 py-3 mt-6 text-lg tracking-wider text-white rounded-lg "
              aria-label="Request Early Access"
              variants={buttonAnimtion}
              whileHover="hover"
            >
              Request Early Access
            </motion.button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-end">
            <Image
              src={requestImage}
              alt="Open Enterprise Illustration"
              width={700}
              height={700}
              quality={100}
              className="w-full max-w-3xl object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </motion.main>
  )
}


