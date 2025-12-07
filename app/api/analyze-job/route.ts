import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { z } from "zod";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { jobDescription } = await req.json();

  const schema = z.object({
    score_global: z
      .number()
      .min(0)
      .max(100)
      .describe("Score de compatibilité global en %"),
    scores_par_axes: z.object({
      secteur_transport_logistique_pharma: z.number().min(0).max(100),
      qualite_qse_iso_gdp_bpf: z.number().min(0).max(100),
      excellence_operationnelle_lean: z.number().min(0).max(100),
      management_multisite_codir: z.number().min(0).max(100),
      digitalisation_data_ia: z.number().min(0).max(100),
    }),
    points_forts: z
      .array(z.string())
      .describe("Liste de phrases courtes sur les points forts"),
    points_a_discuter: z
      .array(z.string())
      .describe(
        "Liste de phrases courtes sur les points à nuancer ou à clarifier"
      ),
    analyse_detaillee: z
      .string()
      .describe(
        "Paragraphe ou deux expliquant en quoi le profil correspond (ou non) au besoin, à la 3e personne"
      ),
    pitch_court: z
      .string()
      .describe(
        "2 à 3 phrases que le candidat pourrait envoyer à l'entreprise"
      ),
  });

  const result = await streamObject({
    model: openai("gpt-4o"),
    schema,
    system: `Tu es un assistant spécialisé en matching de profils QSE / QHSE / Excellence Opérationnelle / Pharma / Logistique.
Ta mission : comparer le profil de Vivien Closse à une offre d’emploi ou un besoin d’entreprise, et produire :

Un score de compatibilité global en %

Des scores par compétences clés

Une analyse détaillée lisible par un recruteur

Un court pitch expliquant pourquoi Vivien est pertinent pour ce poste.

Tu dois être précis, honnête et professionnel, sans survendre mais en mettant en avant les points forts.
Tu dois TOUJOURS répondre en JSON valide.

PROFIL DE VIVIEN CLOSSE (RÉSUMÉ) :

QSE & Excellence Opérationnelle – Freelance / Transition (2024 – auj.)

Audit flash, diagnostic 360, mise en conformité GDP, structuration SMQ pour PME agro / transport, automatisation Power BI et accompagnement terrain. Construction de SaaS opérationnel.

Responsable Qualité Groupe (Holding) – Partnair & Sea (2023 – auj.)

SMQ multisites, QSSE, relation autorités (DSAC, DGAC, GTA), certification GDP en 6 mois, Norme 9120B. Formations de responsable sûreté.

Responsable Excellence Opérationnelle – EurotransPharma / Walden Group (2022 – 2023)

KPI Power BI, Lean, résolution 8D/Ishikawa, réduction coûts non-qualité.

Responsable Qualité Multisite – EurotransPharma (2019 – 2022)

SMQ multisite, certifications ISO9001 & GDP, audits, CAPA, revue de direction.

Superviseur Qualité & Service Client – EurotransPharma (2018 – 2019)

Gestion réclamations, audit sous-traitants, CAPA, relation client.

Analyste Qualité – ARGOS (2011 – 2018)

SMQ supply chain, traçabilité, audits fournisseurs, NC, entrepôt/stock.

Responsable Qualité – CCL Labels (Pharma / BPF)

Qualité étiquetage pharma, BPF, artworks, traçabilité, CAPA, audits clients.

Compétences clés : ISO 9001, ISO 14001, ISO 27001, ISO 45001, GDP, BPF, QSE, SMQ multisite, Lean / ExOps, Audits internes/externes, CAPA (8D, Ishikawa, 5Why), management transversal, pilotage multi-sites, Power BI, Power Automate, digitalisation, IA pour la performance, Construction de SaaS opérationnel.

Adapte toujours ton analyse à L’OFFRE fournie en input.`,
    prompt: `Voici une offre d’emploi / un besoin d’entreprise.
Analyse la compatibilité entre ce besoin et le profil de Vivien Closse décrit dans tes instructions système.

Offre :
${jobDescription}`,
  });

  return result.toTextStreamResponse();
}
