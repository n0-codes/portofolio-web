"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about AI, data
            science, and technology. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Email</p>
                          <a 
                            href="mailto:vincentdavisleonard@gmail.com"
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            vincentdavisleonard@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Phone</p>
                          <a 
                            href="tel:+6287777805535"
                            className="text-white hover:text-green-400 transition-colors"
                          >
                            +62 87777805535
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Location</p>
                          <p className="text-white">West Jakarta, Indonesia</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links & CTA */}
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-semibold text-white mb-6">Follow My Journey</h4>
                    <div className="space-y-4">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full bg-gray-800 border-gray-700 hover:bg-gray-700 justify-start"
                        asChild
                      >
                        <a href="https://github.com/Vincent-Davis" target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-3" />
                          Check out my projects on GitHub
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full bg-gray-800 border-gray-700 hover:bg-gray-700 justify-start"
                        asChild
                      >
                        <a href="https://www.linkedin.com/in/vincent-davis-bb678828a/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5 mr-3" />
                          Connect with me on LinkedIn
                        </a>
                      </Button>
                      
                      <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-blue-500/20">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Open to collaborations, freelance opportunities, and discussing innovative ideas in AI and data science.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">© 2025 Vincent Davis. Built with Next.js and Tailwind CSS.</p>
        </motion.div>
      </div>
    </section>
  )
}