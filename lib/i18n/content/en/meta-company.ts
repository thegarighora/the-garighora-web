import { keywords } from "@/lib/i18n/content/en/keywords";

/** Titles, descriptions and social-card text for the company and policy pages. */
export const companyMeta = {
  about: {
    title: "About",
    description:
      "Why GariGhora exists: intercity cars in Bangladesh spend half their journey empty. We turn that empty leg into a cheaper ride and a second fare.",
    keywords: [
      ...keywords.brand,
      "about GariGhora",
      "car marketplace Bangladesh",
    ],
    schemaName: "About GariGhora",
    schemaDescription:
      "Why GariGhora exists: intercity cars in Bangladesh spend half their journey empty, and that empty leg should be somebody else's cheaper ride.",
    og: {
      alt: "About GariGhora — why intercity cars should not drive home empty",
      eyebrow: "About us",
      title: "A car is already going that way.",
      description:
        "Why we exist: half of every intercity journey in Bangladesh is driven empty.",
    },
  },

  trustSafety: {
    title: "Trust & Safety",
    description:
      "How GariGhora verifies drivers and vehicles, keeps fares honest, assigns a human Gari Bhai to every booking, and handles problems on the road.",
    keywords: [
      ...keywords.brand,
      "verified drivers Bangladesh",
      "safe car rental Dhaka",
    ],
    schemaName: "Trust & Safety at GariGhora",
    schemaDescription:
      "How GariGhora verifies drivers and vehicles, keeps fares honest, and supports every booking with a human operations agent.",
    og: {
      alt: "Trust & Safety at GariGhora — verified drivers and a real person on every booking",
      eyebrow: "Trust & Safety",
      title: "Someone accountable on every trip.",
      description:
        "Verification before the first trip, a fare agreed in writing, and a number that a person answers.",
    },
  },

  careers: {
    title: "Careers",
    description:
      "Build the marketplace that stops cars driving home empty. Open roles at GariGhora in engineering, operations and growth — plus how to apply speculatively.",
    keywords: [...keywords.brand, "jobs at GariGhora", "startup jobs Dhaka"],
    schemaName: "Careers at GariGhora",
    schemaDescription:
      "Open roles in engineering, operations and growth at GariGhora in Dhaka.",
    og: {
      alt: "Careers at GariGhora — open roles in Dhaka",
      eyebrow: "Careers",
      title: "Help us stop cars driving home empty.",
      description:
        "Engineering, operations and growth roles on a small team in Dhaka.",
    },
  },

  contact: {
    title: "Contact",
    description:
      "Reach GariGhora support by phone or email — for trips in progress, booking problems, driver questions, press and partnerships.",
    keywords: [...keywords.brand, "GariGhora support", "contact GariGhora"],
    schemaName: "Contact GariGhora",
    schemaDescription:
      "Reach GariGhora support by phone or email for trips in progress, booking problems, driver questions, press and partnerships.",
    og: {
      alt: "Contact GariGhora — a real person on the other end of a real number",
      eyebrow: "Contact us",
      title: "A real number, answered by a person.",
      description:
        "If a trip is happening right now, call. Support runs on phones, not ticket queues.",
    },
  },

  terms: {
    title: "Terms of Service",
    description:
      "The terms that apply when you use GariGhora to book a car or to offer one — bookings, fares, payment, cancellations, conduct and liability.",
    keywords: [...keywords.brand, "GariGhora terms of service"],
    og: {
      alt: "GariGhora Terms of Service",
      eyebrow: "Legal",
      title: "Terms of Service",
      description:
        "What you can expect from GariGhora, and what we expect from you.",
    },
  },

  privacy: {
    title: "Privacy Policy",
    description:
      "What personal data GariGhora collects, why we collect it, who sees it, how long we keep it, and how to ask for a copy or a deletion.",
    keywords: [...keywords.brand, "GariGhora privacy policy"],
    og: {
      alt: "GariGhora Privacy Policy",
      eyebrow: "Legal",
      title: "Privacy Policy",
      description:
        "What we collect, why we need it, and what you can ask us to do with it.",
    },
  },

  cancellation: {
    title: "Cancellation Policy",
    description:
      "How cancellations work on GariGhora: who can cancel, what gets recorded, and why nobody ends up out of pocket — you only ever pay after the trip.",
    keywords: [...keywords.brand, "GariGhora cancellation policy"],
    og: {
      alt: "GariGhora Cancellation Policy",
      eyebrow: "Legal",
      title: "Cancellation Policy",
      description:
        "Plans change. Nobody ends up out of pocket, because nothing is paid up front.",
    },
  },

  driverAgreement: {
    title: "Driver Agreement",
    description:
      "The terms that apply to drivers on GariGhora: verification, vehicles, fares, collecting cash, platform commission, settlement and account standing.",
    keywords: [...keywords.brand, "GariGhora driver agreement"],
    og: {
      alt: "GariGhora Driver Agreement",
      eyebrow: "Legal",
      title: "Driver Agreement",
      description:
        "What you agree to when you drive on GariGhora — and what we owe you in return.",
    },
  },
};
