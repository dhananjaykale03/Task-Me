import { motion } from "framer-motion";
import { 
  HelpCircle, MessageCircle, Mail, Phone, 
  Clock, CheckCircle2, Search, ChevronDown
} from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I create my first task?",
      answer: "Navigate to the Admin Dashboard, click on 'Create Task', choose your task type (coding, quiz, or custom), fill in the details, and assign it to candidates. Our AI can also help generate tasks automatically."
    },
    {
      question: "Can I customize the evaluation criteria?",
      answer: "Yes! Each task type supports custom rubrics. For coding tasks, you can define test cases. For quizzes, you can set point values per question. You can also enable AI-powered auto-evaluation."
    },
    {
      question: "How does the AI task generator work?",
      answer: "Our AI analyzes your requirements (role, difficulty, skills) and generates appropriate tasks. You can review and edit the generated content before publishing. The AI learns from your feedback to improve future suggestions."
    },
    {
      question: "What security measures protect candidate data?",
      answer: "We use 256-bit SSL encryption, SOC 2 compliant infrastructure, role-based access controls, and comprehensive audit logging. All data is encrypted at rest and in transit."
    },
    {
      question: "Can I integrate TaskMe with my ATS?",
      answer: "Yes, we offer integrations with popular ATS platforms including Greenhouse, Lever, and Workday. We also provide a REST API for custom integrations."
    },
    {
      question: "How do I invite team members?",
      answer: "Go to Settings > Team Management > Invite Members. Enter their email addresses and select their role (Admin, Interviewer, or Viewer). They'll receive an invitation email to join your workspace."
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      available: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Dkale1477@gmail.com",
      action: "Send Email",
      available: "Response within 24h"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "+91 9087654321",
      action: "Call Now",
      available: "Mon-Fri, 9AM-6PM "
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
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Help Center</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            How Can We Help?
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              className="pl-12 h-14 bg-card/50 border-primary/20 text-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-primary/10 text-center hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{option.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{option.description}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-primary mb-4">
                  <Clock className="w-3 h-3" />
                  {option.available}
                </div>
                <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10">
                  {option.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card/50 border border-primary/10 rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Status */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">All Systems Operational</h3>
                <p className="text-muted-foreground text-sm">Last checked: just now</p>
              </div>
            </div>
            <Button variant="outline" className="border-green-500/20 text-green-500 hover:bg-green-500/10">
              View Status Page
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;
