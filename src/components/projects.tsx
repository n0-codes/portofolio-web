"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Calendar, Github, Bus } from "lucide-react"
import Image from "next/image"
import { LucideIcon } from "lucide-react"
import { StaticImageData } from "next/image"

import lawLogo from "@/assets/images/projects/law-logo.png"
import papikosLogo from "@/assets/images/projects/papikos-logo.png"

interface Project {
  title: string
  date: string
  description: string
  details: string[]
  technologies: string[]
  link: string
  color: string
  icon?: LucideIcon
  iconColor?: string
  logo?: StaticImageData
}

const projects: Project[] = [
  {
    title: "Yellow Bus RTA Prediction",
    date: "March 2025",
    description:
      "Developed a CatBoost-based machine learning model to predict real-time arrival times of Universitas Indonesia's yellow bus, achieving an RMSLE of 1.01.",
    details: [
      "Developed a CatBoost-based machine learning model to predict real-time arrival times of Universitas Indonesia’s yellow bus, achieving an RMSLE of 1.01 by leveraging GPS trajectory analysis, speed pattern recognition, and feature engineering from 50+ temporal and spatial variables.",
      "Feature engineering from 50+ temporal and spatial variables",
      "Built end-to-end data pipeline processing GPS coordinates, implementing sequential node mapping algorithms and dwell time detection using state machines to analyze yellow bus movement and halting events on campus routes",
      ],
    technologies: ["Python", "CatBoost", "GPS Analysis", "Machine Learning", "Data Pipeline"],
    link: "https://github.com/Vincent-Davis/RTA-Prediction",
    color: "from-blue-400 to-cyan-400",
    icon: Bus,
    iconColor: "text-yellow-400",
  },
  {
    title: "Indonesian Law Chatbot",
    date: "Jan 2025",
    description:
      "Developed LegalLink, a full-stack AI-powered legal assistant web application using Django, LangChain, and Google Gemini 2.0 Flash.",
    details: [
      "Developed LegalLink, a full-stack AI-powered legal assistant web application using Django, LangChain, and Google Gemini 2.0 Flash, implementing RAG (Retrieval-Augmented Generation) to process 8+ Indonesian legal documents and provide chat-bot, document analysis, and business compliance checklist generation.",
      "Built intelligent document processing system using FAISS vector database and Google GenerativeAI Embeddings, enabling automated PDF analysis, legal risk assessment, and structured JSON responses through RESTful APIs",
    ],
    technologies: ["Django", "LangChain", "Google Gemini", "RAG", "FAISS", "REST API"],
    link: "https://github.com/Vincent-Davis/Law-Chatbot",
    color: "from-purple-400 to-pink-400",
    logo: lawLogo,
  },
  {
    title: "Papikos - Kost Rental Platform",
    date: "Jun 2025",
    description:
      "Developed booking management system for kost rental platform using Spring Boot and Java with asynchronous processing capabilities.",
    details: [
      "Developed booking management system for kost rental platform using Spring Boot and Java, implementing asynchronous processing with CompletableFuture and @Async annotations to handle concurrent booking requests and automated state transitions.",
      "Built end-to-end booking workflow with REST APIs and state management for booking lifecycle (PENDING → PAID → APPROVED → ACTIVE → INACTIVE), integrating scheduled tasks for automatic status updates and payment processing with transaction service.",
      "Implemented Strategy design pattern for flexible kost search functionality, enabling multiple search criteria and filtering options for enhanced user experience.",
      "Created a comprehensive unit testing suite using JUnit and Mockito to ensure system reliability, maintainability, and proper validation of booking workflows and business logic.",
    ],
    technologies: ["Spring Boot", "Java", "REST API", "JUnit", "Mockito", "PostgreSQL"],
    link: "https://github.com/Papikos-a15/papikos-be",
    color: "from-green-400 to-teal-400",
    logo: papikosLogo,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Personal Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
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
                      {/* Logo/Icon kotak */}
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 overflow-hidden">
                        {project.icon ? (
                          <project.icon className={`w-6 h-6 ${project.iconColor}`} />
                        ) : project.logo ? (
                          <Image
                            src={project.logo}
                            alt={`${project.title} logo`}
                            width={48}
                            height={48}
                            className="object-contain w-full h-full"
                          />
                        ) : (
                          <Code className={`w-6 h-6 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.details.map((detail, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-gray-700 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 hover:bg-gray-700" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}