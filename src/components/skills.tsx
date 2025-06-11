"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Database, Globe, Award, Languages } from "lucide-react"

const skillCategories = [
  {
    title: "Programming & Development",
    icon: Code,
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML/CSS",
      "Django",
      "Spring Boot",
      "Next.js",
      "React",
      "Node.js",
    ],
    color: "from-blue-400 to-cyan-400",
    iconColor: "text-blue-400",
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "CatBoost",
      "XGBoost",
      "Computer Vision",
      "Natural Language Processing",
      "Deep Learning",
      "LangChain",
      "RAG",
      "YOLO",
      "ResNet",
      "BERT",
    ],
    color: "from-purple-400 to-pink-400",
    iconColor: "text-purple-400",
  },
  {
    title: "Data Science & Analytics",
    icon: Database,
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Feature Engineering",
      "Data Visualization",
      "Statistical Analysis",
      "Hyperparameter Optimization",
      "Cross-validation",
    ],
    color: "from-green-400 to-teal-400",
    iconColor: "text-green-400",
  },
  {
    title: "Tools & Technologies",
    icon: Globe,
    skills: [
      "Git",
      "Docker",
      "PostgreSQL",
      "FAISS",
      "Jupyter",
      "Google Colab",
      "REST APIs",
      "Microservices",
      "Cloud Computing",
      "Linux",
    ],
    color: "from-orange-400 to-red-400",
    iconColor: "text-orange-400",
  },
]

const certifications = [
  "Machine Learning Specialization (DeepLearning.AI)",
  "Natural Language Processing Specialization (DeepLearning.AI)",
  "NUS Summer Programme in Entrepreneurship (NUS)",
]

const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Proficient" },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {/* Logo kotak untuk technical skills */}
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center p-2 border border-gray-700">
                      <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-gray-700 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications and Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {/* Logo kotak untuk certifications */}
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center p-2 border border-gray-700">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Certifications & Training</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {certifications.map((cert, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {/* Logo kotak untuk languages */}
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center p-2 border border-gray-700">
                    <Languages className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Languages</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {languages.map((lang, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-300">{lang.name}</span>
                      <Badge variant="outline" className="border-gray-700 text-gray-300">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}