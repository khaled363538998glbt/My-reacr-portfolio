import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my priority.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering high-quality projects within deadlines.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to achieve common goals.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a mission to create impactful digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image/Visual */}
          <div className="relative animate-slide-in-right">
            <div className="glass rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-glow-pulse">
                  <Code2 className="w-20 h-20 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
                <p className="text-muted-foreground">5+ Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">My Journey</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with over 5 years of experience building
                scalable web applications and mobile solutions. My expertise spans across
                modern frontend frameworks, backend technologies, and AI integration.
              </p>
              <p>
                I specialize in creating seamless user experiences with React, building robust
                APIs with Node.js and Express, and leveraging AI to solve complex problems.
                My goal is to bridge the gap between design and functionality.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or mentoring aspiring developers in the community.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
