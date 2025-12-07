"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ShieldCheck, FileBadge, CheckCircle2, ScrollText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function DiplomasSection() {
  const diplomas = [
    {
      title: "Master 2 Qualité, Sécurité, Environnement",
      institution: "Université de Saint-Quentin-en-Yvelines",
      icon: GraduationCap,
      skills: ["SMQ", "Gestion des risques", "Audit", "Réglementation"],
      color: "text-cyan-400",
    },
    {
      title: "Formation Anglais – Niveau C1",
      institution: "Wall Street Institute",
      icon: ScrollText,
      skills: ["Anglais professionnel", "Communication avancée", "Compréhension écrite & orale"],
      color: "text-blue-400",
    },
  ];

  const certifications = [
    {
      title: "Lean Six Sigma Green Belt",
      description: "Méthodologie DMAIC, résolution de problèmes, amélioration continue.",
      icon: Award,
    },
    {
      title: "Audits Internes – ISO 19011",
      description: "Techniques d’audit, analyse de conformité, rédaction rapports.",
      icon: ShieldCheck,
    },
  ];

  const fieldCertifications = [
    { name: "ISO 9001", desc: "Mise en place + audits" },
    { name: "GDP / BPD Pharma", desc: "Mise en conformité + certification" },
    { name: "BPF / GMP", desc: "Industrie pharma – étiquetage" },
    { name: "ISO 14001", desc: "Environnement" },
    { name: "ISO 45001", desc: "Santé & Sécurité" },
    { name: "ISO 27001", desc: "Sécurité Info" },
    { name: "EN 9120B", desc: "Aéronautique" },
  ];

  return (
    <section className="py-20 bg-[#0A1B2A] text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">Diplômes</span> & Certifications
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Diplomas Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold">Parcours Académique</h3>
            </div>

            <div className="space-y-6">
              {diplomas.map((diploma, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-cyan-400/10 transition-colors ${diploma.color}`}>
                          <diploma.icon className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">
                            {diploma.title}
                          </h4>
                          <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                            {diploma.institution}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {diploma.skills.map((skill, i) => (
                              <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <FileBadge className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications & Expertises</h3>
            </div>

            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="p-3 rounded-full bg-linear-to-br from-cyan-400/20 to-blue-600/20 text-cyan-400">
                        <cert.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
                        <p className="text-sm text-gray-400">{cert.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Field Certifications Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Certifications Terrain
                </h4>
                <div className="grid gap-3">
                  {fieldCertifications.map((fc, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                        <span className="font-medium text-gray-200">{fc.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 text-right">{fc.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
