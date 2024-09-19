"use client"
import Image from "next/image"
import Card from "../_components/Card"
import Heading from "../_components/Heading"
import icon1 from "@/public/icons/icon-3.png"
import icon2 from "@/public/icons/icon 4.png"
import icon3 from "@/public/icons/icon 5.png"
import { motion } from "framer-motion";


const CARD_DATA = [
  {
    icon: icon1,
    title: "Modern workforce",
    description: "Multistakeholder governance aligns employees with the organization's wider community."
  },
  {
    icon: icon2,
    title: "Meritocratic by design",
    description: "Tokenized ownership aligns deeply committed individuals with the organization's success."
  },
  {
    icon: icon3,
    title: "Engineered for resilience",
    description: "Open Enterprise supports best practices in sociocratic management."
  }
];

export default function Page() {
  return (
    <motion.main className="p-4 sm:p-6 mt-16 sm:mt-24 relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Heading className="max-w-4xl mx-auto text-center space-y-3 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Reimagining what it means to work</h1>
        <p className="text-base sm:text-lg leading-relaxed">
          Teams and communities using Open Enterprise fundamentally unlock a reality of work that reimagines how people engage in economic opportunity, meeting the demands and expectations of a modern organization.
        </p>
      </Heading>
      <section
        className="my-12 grid-auto-fit gap-6"
        aria-labelledby="features-heading"
      >
        <h2 id="features-heading" className="sr-only">Key features of Open Enterprise</h2>
        {CARD_DATA.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: "12vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: index * 0.3 }}
          >
            <Card

              key={card.title}
              className="flex flex-col items-center p-6 shadow-md rounded-lg transition-transform duration-200 hover:scale-110 focus-within:scale-110 cursor-pointer"
            >

              <div className="flex justify-center items-center h-16 w-16 mb-4">
                <Image
                  src={card.icon}
                  alt=""
                  width={104}
                  height={88}
                  quality={100}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold tracking-wide text-center mb-2">{card.title}</h3>
              <p className="text-center text-base">{card.description}</p>
            </Card>
          </motion.div>

        ))}
      </section>
    </motion.main>
  )
}

