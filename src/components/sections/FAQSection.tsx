import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How is AGI different from traditional AI?',
    answer: 'Traditional AI is task-specific, while AGI can generalize knowledge across any domain, mimicking human cognition.',
  },
  {
    question: 'Why is Quantum Computing revolutionary?',
    answer: 'Quantum computers process many possibilities at once through qubits, unlocking infinite parallelism for complex problem-solving.',
  },
  {
    question: 'What is Photonic Computing?',
    answer: 'Photonic computing uses light (photons) instead of electricity (electrons) to move data at much higher speeds with lower energy consumption.',
  },
  {
    question: 'How does Photonic Computing benefit AI?',
    answer: 'It enables ultra-fast data movement and massive parallelism, which are critical for training next-gen AI models.',
  },
  {
    question: 'What is Quantum-Safe Encryption?',
    answer: 'It refers to encryption algorithms that are secure against attacks from both classical and future quantum computers.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-orbitron tracking-[0.3em] text-primary uppercase">
            FAQ
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg text-center mb-6"
        >
          Frequently Asked <span className="text-gradient-lime">Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-lg text-center max-w-2xl mx-auto mb-16"
        >
          Everything You Need to Know about the future of intelligence.
        </motion.p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-left group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-orbitron font-semibold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
