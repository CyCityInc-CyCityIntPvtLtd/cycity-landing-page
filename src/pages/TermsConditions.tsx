import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <div className="container-custom py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-orbitron text-sm">Back to Home</span>
          </Link>

          <h1 className="heading-lg text-foreground mb-8">
            Terms & <span className="text-primary">Conditions</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using CyCity's services, you accept and agree to be bound by the terms
                and provisions of this agreement. If you do not agree to abide by these terms, please
                do not use our services.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily access the materials on CyCity's website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on CyCity's website are provided on an 'as is' basis. CyCity makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">4. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall CyCity or its suppliers be liable for any damages arising out of the use
                or inability to use the materials on CyCity's website, even if CyCity has been notified
                orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">5. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with applicable laws,
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
          </div>

          <p className="text-muted-foreground text-sm mt-12">
            Last updated: December 2024
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;
