import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React.js", level: 92 },
        { name: "Bootstrap/Tailwind", level: 88 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 80 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "REST APIs", level: 92 },
        { name: "AI Integration", level: 78 },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass rounded-xl p-8 space-y-6 animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Title */}
              <h2 className="text-2xl font-bold gradient-text mb-6">
                {category.category}
              </h2>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center glass rounded-xl p-8 max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground leading-relaxed">
            Technology evolves rapidly, and so do I. I'm constantly expanding my skillset,
            exploring new frameworks, and staying updated with industry best practices.
            Currently diving deeper into AI/ML integration and cloud architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
