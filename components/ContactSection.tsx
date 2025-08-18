"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Contact } from "@/types/portfolio"

interface ContactSectionProps {
  contact: Contact
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 font-sans"
        >
          <Mail className="inline-block w-8 h-8 mr-3 text-cyan-500" />
          ESTABLISH CONNECTION
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-green-400 font-mono mb-16"
        >
          &gt; READY TO PARTY UP?
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-sans">{contact.teamUpTitle}</h3>
            <p className="text-gray-400 mb-8">{contact.teamUpDescription}</p>

            <div className="flex space-x-4">
              <motion.a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors pixel-button border border-green-500/30 hover:border-green-500"
              >
                <Github className="w-6 h-6 text-green-400" />
              </motion.a>
              <motion.a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors pixel-button border border-blue-500/30 hover:border-blue-500"
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
              </motion.a>
              <motion.a
                href={`mailto:${contact.email}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors pixel-button border border-cyan-500/30 hover:border-cyan-500"
              >
                <Mail className="w-6 h-6 text-cyan-400" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-900/50 border-cyan-500/30 pixel-border">
              <CardContent className="p-6">
                <div className="text-green-400 font-mono text-sm mb-4">&gt; SEND_MESSAGE.EXE</div>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="ENTER_USERNAME"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none text-white font-mono"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="EMAIL_ADDRESS"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none text-white font-mono"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="MESSAGE_CONTENT"
                      rows={4}
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none text-white resize-none font-mono"
                    />
                  </div>
                  <Button className="w-full bg-green-500 text-black hover:bg-green-400 font-mono pixel-button">
                    TRANSMIT MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
