"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, ExternalLink, DollarSign } from "lucide-react"

const competitions = [
  {
    title: "Citation Recommendation System",
    event: "GammaFest 2025 (IPB University)",
    date: "May 2025",
    position: "1st Place out of 111 teams",
    award: "Most Creative Approach",
    prize: "$300",
    description:
      "Designed a multi-view learning architecture for academic citation prediction using global document semantics (SPECTER), chunk-level analysis (MiniLM), and metadata integration.",
    achievements: [
      "Achieved 1.6× improvement over baseline with MCC 0.616",
      "Ranked 1st of 111 teams",
      "Deployed system via live web interface for real-time recommendations",
    ],
    link: "https://github.com/Vincent-Davis/refchecker",
    color: "from-yellow-400 to-orange-400",
  },
  {
    title: "Human Fall Detection System",
    event: "Data Slayer 2.0, Telkom University Purwokerto",
    date: "Jan 2025",
    position: "Finalist (5th Place out of 222 teams)",
    description:
      "Developed a real-time, camera-based computer vision system for safety-focused fall detection by integrating ResNet152 for classification and YOLO-enhanced bounding boxes.",
    achievements: [
      "Achieved 98.2% accuracy",
      "Built fully functional demo simulating fall scenarios",
      "Accurate detection across various lighting conditions and camera angles",
    ],
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Clothing Classification & Topic Recommendation",
    event: "Hology 7.0, Brawijaya University",
    date: "Nov 2024",
    position: "Finalist (6th Place out of 196 teams)",
    description:
      "Built a CV pipeline for cloth type and color detection using ResNet152, achieving a top 2 ranking on Kaggle's private leaderboard.",
    achievements: [
      "Top 2 ranking on Kaggle's private leaderboard",
      "Developed unsupervised shopping recommendation system using BERTopic",
      "Implemented topic modeling to cluster transactions",
    ],
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "Employee Health Analytics",
    event: "MCF DSC ITB 2024, ITB University",
    date: "March 2024",
    position: "Best Notebook Submission (Perfect Score)",
    description:
      "Developed a comprehensive data validation system for 1,336 employee health records with automated anomaly detection.",
    achievements: [
      "Perfect score submission",
      "Implemented geospatial analysis using GeoPy",
      "Built predictive model achieving NMSE score of 0.722",
    ],
    color: "from-green-400 to-teal-400",
  },
]

export function Competitions() {
  return (
    <section id="competitions" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Competitions & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid gap-8">
          {competitions.map((comp, index) => (
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
                    <div className="flex items-center gap-3">
                      <Trophy className={`w-8 h-8 bg-gradient-to-r ${comp.color} bg-clip-text text-transparent`} />
                      <div>
                        <CardTitle className="text-xl text-white">{comp.title}</CardTitle>
                        <p className="text-gray-400">{comp.event}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{comp.date}</span>
                      </div>
                      {comp.prize && (
                        <Badge variant="secondary" className="bg-green-900/50 text-green-400 border-green-800">
                          <DollarSign className="w-3 h-3 mr-1" />
                          {comp.prize}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className={`bg-gradient-to-r ${comp.color} text-black font-semibold`}>{comp.position}</Badge>
                    {comp.award && (
                      <Badge variant="outline" className="border-gray-700 text-gray-300">
                        {comp.award}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 mb-4">{comp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {comp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {comp.link && (
                    <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 hover:bg-gray-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
