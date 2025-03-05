import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Lightbulb, Code, Brain, Shield, Cog, PhoneCall } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Автоматизация бизнес-процессов",
    description: "Разработка и внедрение решений для оптимизации работы компаний и минимизации человеческого фактора."
  },
  {
    icon: Code,
    title: "Интеграция с государственными системами",
    description: "Подключение к государственным информационным системам для упрощения документооборота и отчетности."
  },
  {
    icon: Lightbulb,
    title: "Цифровизация бизнеса",
    description: "Создание IT-решений для перехода на цифровые процессы и повышения операционной эффективности."
  },
  {
    icon: Brain,
    title: "Интеграция искусственного интеллекта",
    description: "Внедрение AI-алгоритмов для аналитики данных и автоматизированного принятия решений."
  },
  {
    icon: Code,
    title: "Разработка и интеграция API",
    description: "Создание надежных API для взаимодействия между бизнес-системами и внешними сервисами."
  },
  {
    icon: Shield,
    title: "Кибербезопасность",
    description: "Обеспечение безопасности цифровых активов и защита информации от утечек и кибератак."
  },
  {
    icon: PhoneCall,
    title: "Консалтинг и поддержка",
    description: "Анализ бизнес-процессов, разработка стратегий развития и сопровождение IT-инфраструктуры."
  }
];

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img 
              src="/assets/softy 1.jpg" 
              alt="SOFTYSOFTWARE Logo" 
              className="h-32 w-auto mx-auto"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Цифровая трансформация{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              вашего бизнеса
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Мы предоставляем инновационные IT-решения для развития и оптимизации вашего бизнеса
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}