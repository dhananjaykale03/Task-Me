import { motion } from "framer-motion";
import { FileText, CheckCircle2, AlertCircle, Scale, Users, Ban } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
  const sections = [
    {
      icon: CheckCircle2,
      title: "Acceptance of Terms",
      content: `By accessing or using TaskMe, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.

These terms apply to all users of the platform, including administrators, interviewers, and candidates.`
    },
    {
      icon: Users,
      title: "User Accounts",
      content: `When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:

• Maintaining the confidentiality of your account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized access
• Ensuring your account information is up to date

We reserve the right to suspend or terminate accounts that violate these terms.`
    },
    {
      icon: Scale,
      title: "Acceptable Use",
      content: `You agree to use TaskMe only for lawful purposes and in accordance with these Terms. You agree NOT to:

• Use the service for any illegal or unauthorized purpose
• Attempt to gain unauthorized access to any systems
• Transmit any malware, viruses, or harmful code
• Interfere with or disrupt the service or servers
• Collect user information without consent
• Impersonate any person or entity`
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      content: `The TaskMe platform, including its original content, features, and functionality, is owned by TaskMe and protected by international copyright, trademark, and other intellectual property laws.

Tasks and content you create remain your property, but you grant us a license to use, display, and distribute this content as necessary to provide our services.`
    },
    {
      icon: AlertCircle,
      title: "Limitation of Liability",
      content: `TaskMe shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:

• Your use or inability to use the service
• Any unauthorized access to or alteration of your data
• Any third-party conduct on the service
• Any other matter relating to the service

Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.`
    },
    {
      icon: Ban,
      title: "Termination",
      content: `We may terminate or suspend your account immediately, without prior notice, for any reason, including:

• Breach of these Terms of Service
• Violation of applicable laws or regulations
• Fraudulent or illegal activities
• Extended periods of inactivity

Upon termination, your right to use the service will cease immediately.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Legal</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Terms of Service
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to TaskMe. These Terms of Service govern your use of our platform and services. 
              By using TaskMe, you agree to these terms. Please read them carefully before proceeding.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card/50 border border-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">{section.title}</h2>
                    <p className="text-muted-foreground whitespace-pre-line">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
