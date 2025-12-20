import { motion } from 'framer-motion';

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Founder',
    quote: 'Innovation is not about technology, it\'s about imagination.',
  },
  {
    name: 'Sarah Williams',
    role: 'CTO',
    quote: 'Building systems that think beyond human limitations.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of AI',
    quote: 'AI is the bridge between today and tomorrow.',
  },
];

export function CinematicTeam() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 dot-grid opacity-20" />
      
      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-xs font-orbitron font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full uppercase mb-6">
            Our Team
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-foreground">The</span>{' '}
            <span className="text-gradient-lime">Visionaries</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass p-8 rounded-xl text-center card-hover"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-6 flex items-center justify-center">
                <span className="font-orbitron text-3xl font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-orbitron font-semibold text-xl text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-primary text-sm mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm italic">"{member.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
