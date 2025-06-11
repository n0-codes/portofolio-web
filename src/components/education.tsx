"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
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
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                  <div>
                    <CardTitle className="text-2xl text-white">University of Indonesia</CardTitle>
                    <p className="text-lg text-blue-400 font-semibold">Bachelor of Computer Science</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-900/50 text-green-400 border-green-800">
                  GPA: 3.97/4.0
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Depok, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Expected June 2027</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Advanced Programming",
                    "Operating Systems",
                    "Data Structure and Algorithms",
                    "Introduction to Software Security",
                  ].map((course) => (
                    <Badge key={course} variant="outline" className="border-gray-700 text-gray-300">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
