"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6 text-center">
                Second-year CS student at Universitas Indonesia (GPA: 3.97/4.00). Passionate in building deployable AI systems. Highly Interested in NLP, CV, and RAG architecture, with hands-on experience in developing ML pipelines and optimizing model performance.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
