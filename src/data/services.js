import { HeartPulse, Stethoscope, Baby, Sparkles, Smile, Brain } from "lucide-react";

export const services = [
  {
    id: "cardiology",
    icon: HeartPulse,
    name: "Cardiology",
    description: "Comprehensive heart care, from routine screening to advanced interventional procedures.",
    longDescription:
      "Our cardiology team diagnoses and manages the full spectrum of heart conditions — from hypertension and arrhythmia to complex interventional procedures. We combine advanced diagnostic imaging with a preventive-first philosophy.",
    treatments: [
      "Echocardiograms & stress testing",
      "Hypertension management",
      "Arrhythmia diagnosis & treatment",
      "Cardiac catheterization",
      "Heart failure management",
      "Preventive cardiac screening",
    ],
    startingPrice: "₦25,000",
    duration: "30–45 min",
  },
  {
    id: "general-medicine",
    icon: Stethoscope,
    name: "General Medicine",
    description: "Whole-person primary care for everyday health concerns and chronic condition management.",
    longDescription:
      "Your first point of contact for any health concern. Our general physicians handle everything from routine checkups to managing chronic conditions like diabetes, coordinating specialist referrals when needed.",
    treatments: [
      "Annual physical examinations",
      "Diabetes & chronic disease management",
      "Vaccinations & immunizations",
      "Minor illness & injury treatment",
      "Health screenings",
      "Specialist referral coordination",
    ],
    startingPrice: "₦12,000",
    duration: "20–30 min",
  },
  {
    id: "pediatrics",
    icon: Baby,
    name: "Pediatrics",
    description: "Gentle, attentive care for infants, children, and teens — from checkups to immunizations.",
    longDescription:
      "A calm, child-friendly environment where young patients feel safe. We support families from newborn checkups through adolescence, with a focus on developmental milestones and preventive care.",
    treatments: [
      "Newborn & infant checkups",
      "Childhood immunization schedules",
      "Developmental screening",
      "Sick visits & urgent pediatric care",
      "Growth & nutrition counseling",
      "Adolescent health visits",
    ],
    startingPrice: "₦15,000",
    duration: "25–35 min",
  },
  {
    id: "dermatology",
    icon: Sparkles,
    name: "Dermatology",
    description: "Skin, hair, and nail care including clinical treatment and cosmetic dermatology.",
    longDescription:
      "From persistent acne to skin cancer screening, our dermatologists treat both medical and cosmetic concerns with equal care, using evidence-based treatments tailored to your skin.",
    treatments: [
      "Acne & eczema treatment",
      "Skin cancer screening",
      "Mole & lesion evaluation",
      "Cosmetic dermatology",
      "Hair & scalp conditions",
      "Allergic skin reaction care",
    ],
    startingPrice: "₦18,000",
    duration: "30 min",
  },
  {
    id: "dental-care",
    icon: Smile,
    name: "Dental Care",
    description: "Full-service dentistry — cleanings, restorations, and cosmetic procedures, all in one place.",
    longDescription:
      "Comprehensive dental care in a modern, comfortable setting. Our dentists handle everything from routine cleanings to restorative and cosmetic work, with same-day options for many procedures.",
    treatments: [
      "Routine cleanings & checkups",
      "Fillings & restorations",
      "Teeth whitening",
      "Root canal therapy",
      "Dental implants",
      "Orthodontic consultations",
    ],
    startingPrice: "₦10,000",
    duration: "30–60 min",
  },
  {
    id: "neurology",
    icon: Brain,
    name: "Neurology",
    description: "Diagnosis and treatment for conditions affecting the brain, spine, and nervous system.",
    longDescription:
      "Specialist evaluation and ongoing management for neurological conditions, supported by advanced diagnostics and a multidisciplinary approach to complex cases.",
    treatments: [
      "Migraine & headache management",
      "Epilepsy diagnosis & care",
      "Stroke risk assessment",
      "Nerve conduction studies",
      "Memory & cognitive evaluation",
      "Movement disorder treatment",
    ],
    startingPrice: "₦30,000",
    duration: "40–50 min",
  },
];