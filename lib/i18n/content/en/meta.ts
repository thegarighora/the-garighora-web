/**
 * Per-page titles, descriptions, social-card text and the strings that end up
 * inside JSON-LD.
 *
 * These are the words that decide whether a search result gets clicked, so they
 * are written for search intent rather than lifted from the page headings.
 */
import { keywords } from "@/lib/i18n/content/en/keywords";
import { companyMeta } from "@/lib/i18n/content/en/meta-company";

export const meta = {
  /** Root layout defaults — the home page and anything without its own title. */
  site: {
    title: "Car Rental & Return Car Booking in Bangladesh | GariGhora",
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
    title: "Rent a Car with Driver in Bangladesh",
    description:
      "Rent a car with a verified driver for your trip anywhere in Bangladesh. Book the whole car. Post your route, compare offers from verified drivers, and pay in cash after the trip.",
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
    title: "Return Car — Cheap One-Way Car Booking",
    description:
      "Book a return car at a fraction of the rental fare: ride the leg a driver was going to make anyway. Search Return Trips on your route or post a Ride Request, agree the fare in the app, and pay after the trip.",
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

  ...companyMeta,
};
