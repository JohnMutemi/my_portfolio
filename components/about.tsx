"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Docker"] },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="aspect-square rounded-full overflow-hidden bg-muted mx-auto md:mx-0 max-w-[250px]">
                     <img
  src="/john.jpeg"
  alt="John Mutemi"
  className="w-full h-full object-cover"
/>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-semibold mb-4">Hello! I'm John</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate software developer with a keen eye for design and a love for creating intuitive,
              user-friendly applications. With expertise in both frontend and backend technologies, I specialize in
              building responsive web applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through technical writing and mentoring.
            </p>

            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-lg font-medium mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
