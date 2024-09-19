"use client"
import Heading from "../_components/Heading";
import ContributeCard from "./ContributeCard";
import { motion } from "framer-motion";
const contributeCards = [
  {
    title: "Ideate a list of features based on the Sociocracy model",
    desc: "We're looking for someone interested in business theory and research that'll help us bridge the gap between our s...",
    aut: "5 AUT",
    date: "Apply by May 15"
  },
  {
    title: "Update documentation with FAQs",
    desc: "Review our community chat for the most frequently asked questions and document answers for our product docs..",
    aut: "10 AUT",
    date: "Apply by May 18"
  },
  {
    title: "Tutorial video series",
    desc: "Create a series of video tutorials that cover everything from start to finish on using Open Enterprise..",
    aut: "40 AUT",
    date: "Apply by May 20"
  }
];

export default function Page() {

  return (
    <motion.main className="px-4 sm:p-6 mt-16 sm:mt-24 relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Heading className="max-w-4xl mx-auto text-center space-y-3 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Help us improve Open Enterprise</h1>
        <p className="text-base sm:text-lg leading-relaxed">As an Open Enterprise ourselves, we are actively looking for new talent to join our mission of improving and delivering the Open Enterprise model to the world. Apply for open tasks and earn a stake in our success.</p>
      </Heading>
      <div className="cards mt-14 grid-auto-fit gap-6" role="list">
        {contributeCards.map((card, index) => (
          <motion.div key={index}
            initial={{ opacity: 0, y: "12vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: index * 0.3 }}>

            <ContributeCard key={index} {...card} />
          </motion.div>
        ))}
      </div>
      <div className="mt-14 text-center">
        <button className="bg-black text-white py-3 px-4 rounded-lg" aria-label="View more opportunities">
          View more
        </button>
      </div>
    </motion.main>
  )
}

