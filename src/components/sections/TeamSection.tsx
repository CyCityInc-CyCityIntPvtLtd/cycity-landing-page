import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Merwyn Furtado',
    role: 'CEO and Founder',
    initial: 'M',
    color: 'bg-primary',
  },
  {
    name: 'Raktim Banerjee',
    role: 'System Embedded Engineer',
    initial: 'R',
    color: 'bg-accent',
  },
  {
    name: 'Dishik Setty',
    role: 'Software Engineer',
    initial: 'D',
    color: 'bg-primary',
  },
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-orbitron tracking-[0.3em] text-primary uppercase">
            Team
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg text-center mb-6"
        >
          Meet the <span className="text-gradient-lime">Visionaries</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-lg text-center max-w-2xl mx-auto mb-16"
        >
          In the realm of innovation, visionaries are the architects of tomorrow.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 text-center card-hover">
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className={`w-full h-full rounded-full ${member.color}/20 flex items-center justify-center border-2 border-border group-hover:border-primary/50 transition-colors`}>
                    <span className={`font-orbitron text-4xl font-bold text-primary`}>
                      {member.initial}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-orbitron text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
