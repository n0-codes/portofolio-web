"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import Image from "next/image"

// Import logo files
import compfestLogo from "@/assets/images/activities/compfest17.png"
import ristekLogo from "@/assets/images/activities/ristek.png"

const experiences = [
  {
    title: "Vice Person In Charge",
    organization: "Data Science Academy, COMPFEST 17",
    location: "Depok, Indonesia",
    period: "Jan 2025 – Present",
    type: "Leadership",
    description: "Leading the design and implementation of a structured data science academy program.",
    achievements: [
      "Designed and implemented a structured, three-part data science academy program spanning 10 courses over three weeks, covering key topics including data cleaning, feature engineering, machine learning, deep learning, and data storytelling",
      "Successfully established strategic partnerships with Pusilkom UI and Data Science Indonesia, resulting in the recruitment of 3 expert speakers, 2 mentors, and 1 judge to support lectures, hands-on sessions, and project evaluations.",
      "Coordinated program staffing, with internal teams to secure 10 speakers, 10 mentors, and 3 judges to deliver lectures and final project reviews."
    ],
    color: "from-blue-400 to-cyan-400",
    logo: compfestLogo,
  },
  {
    title: "Member",
    organization: "Data Science and Artificial Intelligence, RISTEK UI",
    location: "Depok, Indonesia",
    period: "Mar 2025 – Present",
    type: "Organization",
    description: "Active member of RISTEK UI's Data Science & AI Special Interest Group.",
    achievements: [
      'Received "Best Growth" award for outstanding contribution to the SIG',
      "Mentored teams at SISTECH event, providing technical guidance in AI and data science",
      "Participated in 8 internal classes covering advanced data science and AI topics including Natural Language Processing (NLP), Large Language Models (LLM), Reinforcement Learning (RL), and Computer Vision (CV)",
      "Engaged in weekly research discussions and data challenge reviews for over 3 months, sharpening practical skills in model evaluation, optimization, and real-world AI applications.",
    ],
    color: "from-purple-400 to-pink-400",
    logo: ristekLogo,
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      {/* Logo kotak */}
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 overflow-hidden">
                        {exp.logo ? (
                          <Image
                            src={exp.logo}
                            alt={`${exp.organization} logo`}
                            width={48}
                            height={48}
                            className="object-contain w-full h-full"
                          />
                        ) : (
                          <Briefcase className={`w-6 h-6 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`} />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                        <p className="text-lg text-blue-400 font-semibold">{exp.organization}</p>
                        <p className="text-gray-400">{exp.location}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="outline" className="border-gray-700 text-gray-300">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}