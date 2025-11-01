import { Code, Smartphone, Brain, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Creating responsive, scalable, and high-performance web applications using modern frameworks like React, Next.js, and Vue.",
      features: [
        "Custom Web Applications",
        "E-Commerce Solutions",
        "Progressive Web Apps (PWA)",
        "API Development",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile applications that deliver native-like experiences on both iOS and Android devices.",
      features: [
        "React Native Apps",
        "iOS & Android Apps",
        "Hybrid Solutions",
        "App Maintenance",
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Integrating intelligent features into your applications using cutting-edge AI and machine learning technologies.",
      features: [
        "Chatbot Development",
        "Sentiment Analysis",
        "Predictive Models",
        "AI Integration",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing beautiful, intuitive, and user-friendly interfaces that enhance user engagement and satisfaction.",
      features: [
        "Wireframing & Prototyping",
        "Responsive Design",
        "Design Systems",
        "User Research",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass rounded-xl p-8 hover:scale-105 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center glass rounded-xl p-12 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. I'm here to help you build
            innovative solutions that drive results.
          </p>
          <a href="/contact">
            <button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
