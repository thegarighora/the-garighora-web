/**
 * Per-page titles, descriptions, social-card text and the strings that end up
 * inside JSON-LD.
 *
 * These are the words that decide whether a search result gets clicked, so they
 * are written for search intent rather than lifted from the page headings.
 *
 * `keywords` are the phrases people actually type. They are not translations of
 * each other: an English speaker searches "car rental Bangladesh", a Bangla
 * speaker searches something else entirely, so each locale carries its own set.
 */
export const keywords = {
  brand: ["GariGhora", "Gari Ghora", "Ghori Ghora", "Return Gari"],
  rental: [
    "car rental Bangladesh",
    "rent a car Dhaka",
    "car hire Dhaka",
    "intercity car rental Bangladesh",
    "full car booking Bangladesh",
  ],
  returnTrip: [
    "return car Bangladesh",
    "return trip car",
    "empty return car Dhaka",
    "one way car rental Bangladesh",
    "cheap car Dhaka to Cumilla",
  ],
  routes: [
    "Dhaka to Cumilla car",
    "Cumilla to Dhaka car",
    "Dhaka to Chattogram car rental",
    "Dhaka to Sylhet car rental",
    "Dhaka airport car service",
  ],
  driver: [
    "driver jobs Bangladesh",
    "earn with your car Dhaka",
    "car owner income Bangladesh",
    "rent out my car Dhaka",
  ],
};

export const meta = {
  /** Root layout defaults — the home page and anything without its own title. */
  site: {
    title: "GariGhora — Rental Car & Return Car across Bangladesh",
    description:
      "A car is already going that way. Book a full car for your trip, or ride a driver's empty return leg for much less — verified drivers, pay after the trip.",
    manifestName: "GariGhora — Rental Car & Return Car",
  },

  ogDefault: {
    alt: "GariGhora — book a rental car, or ride a driver's empty return leg for less",
    eyebrow: "Rental Car + Return Car",
    title: "A car is already going your way.",
    description:
      "Book a whole car, or take a driver's empty return leg for much less. Verified drivers, pay after the trip.",
  },

  /** Footer of every generated social card. */
  ogTrustRow: ["Verified drivers", "Pay after the trip", "Bangladesh"],

  howItWorks: {
    title: "How it works",
    description:
      "From posting a trip to paying the driver: how a GariGhora booking runs, for passengers and for drivers.",
    keywords: [...keywords.brand, ...keywords.rental, ...keywords.returnTrip],
    schemaName: "How GariGhora works",
    og: {
      alt: "How GariGhora works — from posting a trip to paying the driver",
      eyebrow: "How it works",
      title: "Four steps, whichever side you are on",
      description:
        "Offer, booking, confirmation, trip, payment, rating — every step recorded in the app.",
    },
  },

  rentalCar: {
    title: "Rental Car",
    description:
      "Book a whole car for your trip anywhere in Bangladesh. Post your route, compare offers from verified drivers, and pay in cash after the trip.",
    keywords: [...keywords.rental, ...keywords.routes, ...keywords.brand],
    schemaName: "Rental Car",
    schemaDescription:
      "Book a whole car with a verified driver for any journey in Bangladesh. Post your route, compare driver offers, and pay in cash after the trip.",
    schemaOffers: [
      "Intercity car rental with driver",
      "Airport transfer",
      "Full-day car hire",
    ],
    og: {
      alt: "GariGhora Rental Car — book a whole car with a verified driver",
      eyebrow: "Rental Car",
      title: "Book the whole car, not a seat.",
      description:
        "Post your route, compare offers from verified drivers, pay in cash after the trip.",
    },
  },

  returnCar: {
    title: "Return Car",
    description:
      "Ride the leg a driver was going to make anyway. Search Return Trips on your route or post a Ride Request, agree the fare in the app, and pay after the trip.",
    keywords: [...keywords.returnTrip, ...keywords.routes, ...keywords.brand],
    schemaName: "Return Car",
    schemaDescription:
      "Book the empty return leg of a trip a driver has already completed, at a fraction of a fresh rental fare. Whole vehicle, verified driver, pay after the trip.",
    schemaOffers: [
      "Discounted return trip booking",
      "Ride request with driver offers",
      "One-way intercity travel",
    ],
    og: {
      alt: "GariGhora Return Car — ride a driver's empty return leg for much less",
      eyebrow: "Return Car",
      title: "Ride the leg the car was making anyway.",
      description:
        "A driver heading home empty. You, going the same way. The whole car, for a fraction of a rental.",
    },
  },

  forDrivers: {
    title: "For Drivers",
    description:
      "Earn on the leg you were driving anyway. Take rental bookings, post your empty return trips, and collect cash from passengers after every trip.",
    keywords: [...keywords.driver, ...keywords.brand],
    schemaName: "Drive with GariGhora",
    schemaDescription:
      "How drivers earn on GariGhora: take a rental, post the empty return leg, collect cash after each trip and settle commission separately.",
    og: {
      alt: "Drive with GariGhora — get paid for the drive home",
      eyebrow: "For drivers",
      title: "One trip. Two fares.",
      description:
        "Take the rental out, post the empty leg back. Same fuel, same hours, more income.",
    },
  },

  faq: {
    title: "FAQ",
    description:
      "How Return Car is cheaper, when you pay, how drivers are verified, and everything else people ask before their first GariGhora booking.",
    keywords: [...keywords.brand, ...keywords.returnTrip],
    og: {
      alt: "GariGhora FAQ — the questions people ask before their first trip",
      eyebrow: "FAQ",
      title: "Questions, answered.",
      description:
        "Fares, payment, verification, cancellations and everything else before your first booking.",
    },
  },

  download: {
    title: "Get the App",
    description:
      "Download the GariGhora passenger app to book rentals and return trips, or the driver app to take bookings and post your empty return legs.",
    keywords: [
      ...keywords.brand,
      "GariGhora app",
      "car booking app Bangladesh",
    ],
    passengerAppName: "GariGhora - Passenger",
    passengerAppDescription:
      "Book rental cars and discounted return trips with verified drivers across Bangladesh.",
    driverAppName: "GariGhora - Driver",
    driverAppDescription:
      "Take rental bookings, post empty return legs, and manage trips, earnings and commission.",
    og: {
      alt: "Get the GariGhora app — passenger app and driver app",
      eyebrow: "Get the app",
      title: "Two apps, one platform.",
      description:
        "Passengers book. Drivers earn. Same accounts, same bookings, same trips.",
    },
  },

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
