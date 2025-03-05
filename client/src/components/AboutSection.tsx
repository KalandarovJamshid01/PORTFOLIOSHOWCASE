import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lightbulb, Target, Users } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries to create unique solutions that set you apart.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Our attention to detail ensures excellence in every project.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients to achieve remarkable results.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground">
            We're passionate about delivering exceptional solutions that help our clients succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
