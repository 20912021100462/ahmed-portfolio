import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "@/components/ExternalLink";
import { portfolioData } from "@/data/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  const { personal, education, experience, projects, skills, certifications, languages } =
    portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Ahmed Samir
            </h1>
          </motion.div>
          <motion.nav
            className="flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ExternalLink href={personal.links.linkedin}>
              <Linkedin className="w-5 h-5" />
            </ExternalLink>
            <ExternalLink href={personal.links.github}>
              <Github className="w-5 h-5" />
            </ExternalLink>
            <ExternalLink href={personal.links.whatsapp}>
              <MessageCircle className="w-5 h-5" />
            </ExternalLink>
            <a href={`mailto:${personal.email}`} className="text-primary hover:text-primary/80">
              <Mail className="w-5 h-5" />
            </a>
          </motion.nav>
        </div>
      </header>

      <main className="container py-16 space-y-20">
        {/* Hero Section */}
        <motion.section
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-5xl font-bold text-slate-900 leading-tight">
                {personal.name}
              </h2>
              <p className="text-xl text-blue-600 font-semibold">{personal.title}</p>
              <p className="text-lg text-slate-600">{personal.subtitle}</p>
            </div>
            <p className="text-slate-700 leading-relaxed max-w-2xl text-base">{personal.bio}</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 text-slate-700"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href={`mailto:${personal.email}`} className="hover:text-blue-600 transition">
                {personal.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>{personal.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>{personal.location}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex gap-4 pt-4 flex-wrap">
            <ExternalLink href={personal.links.linkedin}>
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </Button>
            </ExternalLink>
            <ExternalLink href={personal.links.github}>
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub Repository
              </Button>
            </ExternalLink>
            <ExternalLink href={personal.links.whatsapp}>
              <Button variant="outline" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </ExternalLink>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-600" />
              Featured Projects
            </h3>
            <p className="text-slate-600 mt-2">
              Interactive dashboards and data analysis solutions built with Power BI
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content on Left */}
                  <div className="order-2 md:order-1">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h4>
                        <div className="flex gap-2 flex-wrap mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-base">{project.description}</p>
                      <div className="flex gap-4 pt-4 border-t border-slate-200">
                        <ExternalLink href={project.links.github} showIcon>
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </ExternalLink>
                        <ExternalLink href={project.links.linkedin} showIcon>
                          <Linkedin className="w-4 h-4" />
                          LinkedIn Post
                        </ExternalLink>
                      </div>
                    </div>
                  </div>
                  {/* Image on Right */}
                  {project.image && (
                    <div className="order-1 md:order-2">
                      <div className="relative h-80 w-full overflow-hidden bg-slate-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Code2 className="w-8 h-8 text-blue-600" />
              Skills and Expertise
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div key={category} variants={itemVariants}>
                <Card className="border-slate-200 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm hover:bg-blue-100 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education and Experience */}
        <motion.section
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-blue-600" />
                Education
              </h3>
              {education.map((edu, index) => (
                <Card key={index} className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      <span className="font-semibold">{edu.year}</span>
                      <br />
                      Graduation: {edu.graduationYear}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Briefcase className="w-7 h-7 text-blue-600" />
                Experience
              </h3>
              {experience.map((exp, index) => (
                <Card key={index} className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-slate-600 font-semibold">{exp.period}</p>
                    <p className="text-sm text-slate-700">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-600" />
              Certifications
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-slate-200 hover:shadow-md transition-shadow h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600">
                      <span className="font-semibold">Issued:</span> {cert.issued}
                    </p>
                    <ExternalLink href={cert.link} showIcon className="text-blue-600">
                      <Globe className="w-4 h-4" />
                      View Certificate
                    </ExternalLink>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Languages Section */}
        <motion.section
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Globe className="w-8 h-8 text-blue-600" />
              Languages
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-900">{lang.name}</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {lang.level}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.section
          className="py-12 text-center space-y-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-slate-900">Let's Work Together</h3>
            <p className="text-slate-600">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`mailto:${personal.email}`}>
              <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
            </a>
            <ExternalLink href={personal.links.whatsapp}>
              <Button className="bg-green-600 hover:bg-green-700 gap-2">
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
            </ExternalLink>
            <ExternalLink href={personal.links.linkedin}>
              <Button variant="outline" className="gap-2">
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </Button>
            </ExternalLink>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 mt-20">
        <div className="container text-center">
          <p>
            © {new Date().getFullYear()} Ahmed Samir. All rights reserved. Built with React and
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
