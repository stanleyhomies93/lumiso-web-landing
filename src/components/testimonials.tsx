import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Lumiso turned our complex requirements into an elegant, user-friendly application that exceeded our expectations.",
    author: "Sarah Johnson",
    title: "CTO, FinanceHub",
    delay: 0.1
  },
  {
    quote: "Working with Lumiso was a game-changer for our business. Their team delivered a solution that dramatically improved our operational efficiency.",
    author: "Michael Chen",
    title: "Founder, TechNova",
    delay: 0.2
  },
  {
    quote: "The attention to detail and technical expertise at Lumiso is outstanding. They're not just developers, they're strategic partners.",
    author: "Emily Rodriguez",
    title: "Product Manager, HealthTech Solutions",
    delay: 0.3
  }
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            className="inline-block px-3 py-1 mb-4 text-sm font-medium text-brand bg-brand/10 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We pride ourselves on building strong relationships and delivering results that make our clients happy.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-background relative rounded-xl p-8 border border-border/50 group hover:border-brand/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
              viewport={{ once: true }}
            >
              <div className="mb-6 relative">
                <Quote className="h-12 w-12 text-brand/20 absolute -top-2 -left-2 transform -scale-x-100" />
                <p className="relative text-lg italic text-foreground/90 pl-4">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex flex-col mt-auto">
                <span className="font-semibold">{testimonial.author}</span>
                <span className="text-sm text-foreground/70">{testimonial.title}</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 