import { motion } from 'framer-motion';

interface CinematicTeamProps {
  onNavigate?: (index: number) => void;
}

const team = [
  {
    name: 'Merwyn Furtado',
    role: 'Chairman | MD | CEO & Founder',
    image: '/team/Mer.png',
  },
  {
    name: 'Raktim Banerjee',
    role: 'Embedded Systems Engineer',
    image: '/team/raktim.png',
  },
  {
    name: 'Dishik Setty',
    role: 'Junior Software Engineer',
    image: '/team/Dishik.png',
  },
  {
    name: 'Vinay Patil',
    role: 'Cyber Security & DevOps Engineer',
    image: '/team/vinay.png',
  },
  {
    name: 'Ravi Raj',
    role: 'Senior Software Engineer',
    image: '/team/Ravi.png',
  },
  {
    name: 'Aditya Sharma',
    role: 'IT Infrastructure & Network Engineer',
    image: '/team/aditya.png',
  },
  {
    name: 'Bharatkumar Koshti',
    role: 'Chartered Accountant',
    image: '/team/kashi.png',
  },
];

export function CinematicTeam({ onNavigate }: CinematicTeamProps) {
  // Detect Safari browser for specific styling
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 dot-grid opacity-20" />
      
      <div className={`relative z-10 container-custom px-4 ${isSafari ? 'py-4 lg:py-6' : 'py-6 lg:py-8'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-center ${isSafari ? 'mb-3 lg:mb-6' : 'mb-4 lg:mb-8'}`}
        >
          <span className={`inline-block px-3 lg:px-4 py-1.5 lg:py-2 text-xs font-orbitron font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full uppercase ${isSafari ? 'mb-1.5 lg:mb-3' : 'mb-2 lg:mb-4'}`}>
            Our Team
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${isSafari ? 'mb-1 lg:mb-2' : 'mb-2 lg:mb-4'}`}>
            <span className="text-foreground">The</span>{' '}
            <span className="text-gradient-lime">Visionaries</span>
          </h2>
        </motion.div>

        <div className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3 ${isSafari ? 'max-h-[calc(100vh-18rem)]' : 'max-h-[calc(100vh-20rem)]'} md:max-h-[60vh] overflow-y-auto scrollbar-hide pb-4`}>
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className={`glass ${isSafari ? 'p-2 lg:p-3' : 'p-2.5 lg:p-4'} rounded-xl text-center card-hover group`}
            >
              <div className={`relative ${isSafari ? 'w-14 h-14 lg:w-16 lg:h-16' : 'w-16 h-16 lg:w-20 lg:h-20'} mx-auto ${isSafari ? 'mb-1.5 lg:mb-3' : 'mb-2 lg:mb-4'} overflow-hidden rounded-full border-2 border-primary/20`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: 'center top' }}
                  onError={(e) => {
                    // Fallback to initial-based avatar if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <span className={`font-orbitron ${isSafari ? 'text-base lg:text-lg' : 'text-lg lg:text-xl'} font-bold text-primary`}>
                    {member.name.charAt(0)}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className={`font-orbitron font-semibold ${isSafari ? 'text-xs lg:text-sm' : 'text-xs lg:text-base'} text-foreground ${isSafari ? 'mb-0.5 lg:mb-1' : 'mb-1 lg:mb-2'}`}>
                {member.name}
              </h3>
              <p className={`text-primary ${isSafari ? 'text-xs' : 'text-xs lg:text-sm'} line-clamp-2`}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
