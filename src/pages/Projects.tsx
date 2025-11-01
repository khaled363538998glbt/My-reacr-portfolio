import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "Mobile", "AI"];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online shopping platform with payment integration and admin dashboard.",
      category: "Web",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Mobile-first task manager with real-time collaboration and notifications.",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      tech: ["React Native", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot using natural language processing for customer support.",
      category: "AI",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      tech: ["Python", "TensorFlow", "React"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website Builder",
      description: "Drag-and-drop portfolio builder with customizable templates.",
      category: "Web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["React", "Tailwind", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracker App",
      description: "Track workouts, calories, and progress with interactive charts.",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      tech: ["React Native", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sentiment Analysis Tool",
      description: "Analyze customer feedback and reviews using AI-powered sentiment detection.",
      category: "AI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Python", "React", "ML"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of my work across web development, mobile apps, and AI solutions
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in">
          <Filter className="w-5 h-5 text-muted-foreground" />
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "ghost"}
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
