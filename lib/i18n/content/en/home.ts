import {
  BadgeCheck,
  CalendarClock,
  Car,
  CarFront,
  CheckCircle2,
  CircleSlash,
  ClipboardList,
  Fuel,
  Handshake,
  Headphones,
  MapPinned,
  MessageSquareQuote,
  MessagesSquare,
  PhoneCall,
  PlusCircle,
  Repeat,
  ScrollText,
  Search,
  Send,
  ShieldAlert,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { common } from "@/lib/i18n/content/en/common";

const { routes, links } = common;

/**
 * Home-page copy, section by section, in the order the page renders them.
 *
 * Icons live here rather than in the components so each locale file is a
 * complete description of a section and the components stay pure layout. The
 * icons are identical across locales; only the words change.
 *
 * Every fare, count and rating below is SAMPLE DATA for layout.
 */
export const home = {
  hero: {
    badge: "Rental Car + Return Car — one app",
    titleLead: "A car is already going your way.",
    titleAccent: "Don't pay for it to drive back empty.",
    /** Split around the two service names so they can be emphasised inline. */
    intro: {
      before: "Book a car for your own trip with ",
      rental: "Rental Car",
      middle:
        ", or take a whole car for much less on a driver's empty return leg with ",
      returnCar: "Return Car",
      after:
        " — verified drivers, fare agreed up front, and you pay only after the trip is done.",
    },
    primaryCta: { label: "Book a Ride", href: links.passengerSignup },
    secondaryCta: { label: "Post Your Return Trip", href: links.driverSignup },
    trustRow: [
      { icon: BadgeCheck, label: "Verified drivers" },
      { icon: Wallet, label: "Pay after the trip" },
      { icon: Headphones, label: "24/7 support" },
    ],
    /** SAMPLE DATA: the hand-built app preview beside the headline. */
    preview: {
      alt: "Preview of the GariGhora app showing a Dhaka to Cumilla return trip for 1,100 Taka",
      kicker: "Return trips today",
      verified: "Verified",
      trips: [
        {
          from: "Dhaka Airport",
          to: "Cumilla",
          time: "Today, 6:00 PM",
          vehicle: "Toyota Axio · Sedan",
          fare: "৳1,100",
          compare: "Usual rental ৳3,200",
          rating: "4.9",
        },
        {
          from: "Cumilla",
          to: "Dhaka (Banani)",
          time: "Tomorrow, 8:30 AM",
          vehicle: "Toyota Noah · Micro",
          fare: "৳1,650",
          compare: "Usual rental ৳4,000",
          rating: "4.8",
        },
      ],
      note: "Full vehicle, one booking. Fare is agreed in the app — cash is handed to the driver after the trip.",
      caption: "Sample screen — GariGhora passenger app",
    },
  },

  insight: {
    eyebrow: "The insight",
    titleLead: "Half of every long trip is already ",
    titleAccent: "wasted",
    description:
      "Every intercity rental has two legs. Only one of them carries a passenger. That empty leg is fuel the driver pays for, hours they do not earn from, and a cheap ride nobody gets to take.",
    /** SAMPLE DATA: illustrative Dhaka–Cumilla figures, not a price list. */
    origin: "Dhaka",
    destination: "Cumilla",
    panels: [
      {
        variant: "problem" as const,
        icon: CircleSlash,
        label: "Traditional rental",
        title: "The driver returns empty",
        outbound: { note: "Passenger on board", fare: "৳3,200" },
        inbound: { note: "Nobody on board", fare: "৳0 earned" },
        takeaway:
          "The driver burns fuel and hours on the way home, so that cost gets baked into every rental fare. Nobody wins.",
      },
      {
        variant: "solution" as const,
        icon: Sparkles,
        label: "With GariGhora",
        title: "The return leg becomes a ride",
        outbound: { note: "Passenger on board", fare: "৳3,200" },
        inbound: { note: "Return Car booked", fare: "৳1,100 extra" },
        takeaway:
          "The driver posts the empty leg as a Return Car trip. Someone heading the same way books the whole vehicle for a fraction of a normal rental.",
      },
    ],
    pullQuote: {
      strong: "A car is already going that way.",
      rest: " Don't pay for an empty seat to come back empty.",
    },
    moreLink: { label: "See how Return Car works", href: routes.returnCar },
  },

  services: {
    eyebrow: "Two services, one app",
    title: "Same account, same verified drivers, two ways to ride",
    description:
      "Log in once and choose what you need. Rental Car covers the trip you are planning; Return Car turns somebody else's finished trip into your cheaper ride.",
    signatureBadge: "Our signature feature",
    items: [
      {
        id: "rental-car",
        icon: Car,
        eyebrow: "Service 01",
        name: "Rental Car",
        hook: "Need a car for your trip?",
        blurb:
          "Tell us where you are going and when. Verified drivers send you fare offers, you pick the one you like, and the whole vehicle is yours for the trip.",
        steps: [
          {
            icon: Send,
            text: "Post your pickup, drop-off, date, time and vehicle type",
          },
          {
            icon: MessageSquareQuote,
            text: "Compare fare offers from verified drivers",
          },
          {
            icon: CheckCircle2,
            text: "Book the driver you want — the full car, not a seat",
          },
          {
            icon: Wallet,
            text: "Pay the driver in cash after the trip is complete",
          },
        ],
        /** SAMPLE DATA: illustrative listing, not live inventory. */
        sample: {
          label: "Sample rental",
          route: "Dhaka → Sylhet",
          detail: "Fri, 9:00 AM · Sedan · full vehicle",
          fare: "৳8,500",
        },
        cta: { label: "Book a Rental Car", href: links.passengerSignup },
        page: { label: "How Rental Car works", href: routes.rentalCar },
        signature: false,
      },
      {
        id: "return-car",
        icon: Repeat,
        eyebrow: "Service 02",
        name: "Return Car",
        hook: "Going where a car is already heading back from?",
        blurb:
          "Drivers post the empty leg of a trip they have already been paid for. Search those Return Trips, or post a Ride Request and let drivers come to you with offers.",
        steps: [
          {
            icon: Search,
            text: "Search Return Trips already posted on your route",
          },
          {
            icon: Send,
            text: "No match? Post a Ride Request and receive driver offers",
          },
          {
            icon: MessageSquareQuote,
            text: "Agree the fare in the app — a round or two of offers, no haggling on the phone",
          },
          {
            icon: CalendarClock,
            text: "Book the whole car at a return-leg price",
          },
        ],
        sample: {
          label: "Sample return trip",
          route: "Cumilla → Dhaka Airport",
          detail: "Today, 6:00 PM · Sedan · full vehicle",
          fare: "৳1,100",
        },
        cta: { label: "Find a Return Car", href: links.passengerSignup },
        page: { label: "How Return Car works", href: routes.returnCar },
        signature: true,
      },
    ],
    footnote: {
      before: "Both services book the ",
      strong: "whole vehicle",
      after: " — GariGhora does not sell individual seats.",
    },
  },

  howItWorks: {
    eyebrow: "How it works",
    title: "Four steps, whichever side you are on",
    description:
      "The same booking, seen from both ends. Nothing happens by phone call alone — every offer, booking and completion is recorded in the app.",
    passengerTab: "For Passengers",
    driverTab: "For Drivers",
    stepLabel: (n: string) => `Step ${n}`,
    passengerSteps: [
      {
        icon: ClipboardList,
        title: "Search or request",
        body: "Pick Rental Car or Return Car, then enter from, to, date and time. Add a vehicle type and any notes — bags, AC, a child seat.",
      },
      {
        icon: Handshake,
        title: "Compare offers",
        body: "Verified drivers respond with a fare. Counter once if you want; there is a cap on rounds so nobody gets stuck negotiating.",
      },
      {
        icon: MapPinned,
        title: "Book and ride",
        body: "Accept an offer and the booking is confirmed. You see your driver, the vehicle and the pickup point, and can follow the car on the day.",
      },
      {
        icon: Star,
        title: "Pay after the trip, then rate",
        body: "Hand the agreed fare to the driver in cash when the trip is finished — never before. Then rate each other.",
      },
    ],
    driverSteps: [
      {
        icon: BadgeCheck,
        title: "Register and get verified",
        body: "Sign up with your phone, then submit your NID, driving licence and vehicle registration. Verification happens before you can accept trips.",
      },
      {
        icon: CarFront,
        title: "Take a rental or post a return trip",
        body: "Offer on passenger requests, publish rental availability, or post the empty leg of a trip you have already completed as a Return Car trip.",
      },
      {
        icon: ScrollText,
        title: "Run the trip",
        body: "Your Gari Bhai calls to confirm pickup details with both sides. Start the trip in the app, complete it when you arrive.",
      },
      {
        icon: Wallet,
        title: "Get paid and rated",
        body: "Collect the fare in cash from the passenger. The platform commission is recorded against the trip for you to settle later.",
      },
    ],
    moreLink: { label: "See the full walkthrough", href: routes.howItWorks },
  },

  trust: {
    eyebrow: "Why GariGhora",
    title: "Built so both sides can trust the trip",
    description:
      "Intercity travel in Bangladesh usually runs on phone calls and word of mouth. We keep the flexibility, and add verification, a recorded fare, and someone accountable on the other end of the line.",
    items: [
      {
        icon: BadgeCheck,
        title: "Verified drivers and vehicles",
        body: "NID, driving licence and vehicle registration are checked before a driver can accept a single trip. Unverified accounts cannot take bookings.",
      },
      {
        icon: Wallet,
        title: "Pay only after the trip",
        body: "No prepayment, no deposit, no card details. You hand the agreed fare to the driver in cash once the trip is finished.",
      },
      {
        icon: MessagesSquare,
        title: "Fares agreed in the app",
        body: "Offers and counter-offers happen inside GariGhora and are capped at a couple of rounds. The fare you accept is the fare you pay — no bait-and-switch at the pickup point.",
      },
      {
        icon: PhoneCall,
        title: "A real person on every booking",
        body: "Your Gari Bhai — a GariGhora operations agent — is assigned to your booking, calls both you and the driver to confirm the details, and stays reachable until the trip is done.",
        feature: true,
      },
      {
        icon: Star,
        title: "Ratings on both sides",
        body: "Passengers rate drivers and drivers rate passengers after every completed trip. Only completed trips can be reviewed, so ratings mean something.",
      },
      {
        icon: ShieldAlert,
        title: "Support during the trip",
        body: "One tap from your active trip screen reaches support, plus a phone number for anything urgent on the road.",
      },
    ],
    hotline: {
      before: "Something wrong on the road? Call the support line — ",
      after: " — and a Gari Bhai will pick it up.",
    },
    moreLink: { label: "How we keep trips safe", href: routes.trustSafety },
  },

  forDrivers: {
    eyebrow: "For drivers",
    title: "One trip. Two fares.",
    description:
      "You already drive the empty leg. Post it as a Return Car trip and somebody heading that way pays for the journey you were making anyway.",
    benefits: [
      {
        icon: TrendingUp,
        title: "Earn twice on one journey",
        body: "The rental fare on the way out, a Return Car fare on the way back. Same fuel, same hours, more income.",
      },
      {
        icon: Fuel,
        title: "Stop paying to drive home",
        body: "The return leg costs you fuel whether or not anyone is in the car. Post it and let it pay for itself.",
      },
      {
        icon: Users,
        title: "Passengers come to you",
        body: "Ride Requests on your route land in your app. Send an offer with your fare — you decide what a trip is worth.",
      },
      {
        icon: PlusCircle,
        title: "Cash in hand, commission later",
        body: "Passengers pay you directly after the trip. GariGhora's commission is recorded against the trip and settled separately by bKash, Nagad, bank transfer or cash.",
      },
    ],
    primaryCta: { label: "Register as a Driver", href: links.driverSignup },
    secondaryCta: { label: "Get the Driver App", href: links.playStore },
    moreLink: {
      label: "What drivers need to get started",
      href: routes.forDrivers,
    },
    /** SAMPLE FIGURES ONLY — illustrative Dhaka–Cumilla numbers. */
    earnings: {
      title: "What one Dhaka → Cumilla job can look like",
      caption: "Sample figures for illustration.",
      outbound: { label: "Rental fare, Dhaka → Cumilla", value: "৳5,000" },
      inbound: { label: "Return Car fare, Cumilla → Dhaka", value: "৳1,100" },
      totalLabel: "Total for the same journey",
      totalValue: "৳6,100",
      emptyLabel: "Driving back empty",
      emptyValue: "৳5,000",
      note: {
        strong: "+৳1,100",
        rest: " for a drive you were making anyway — and the passenger pays far less than a fresh rental would have cost them.",
      },
    },
  },

  /**
   * SAMPLE DATA: realistic-looking placeholders for layout. Wire these to real
   * reporting figures (or remove the strip) before launch — do not ship
   * invented metrics as fact.
   */
  stats: {
    heading: "GariGhora by the numbers",
    items: [
      { value: "1,200+", label: "Verified drivers" },
      { value: "18", label: "Cities covered" },
      { value: "34,000+", label: "Trips completed" },
      { value: "4.8 / 5", label: "Average driver rating" },
    ],
  },

  /**
   * SAMPLE DATA: placeholder quotes written for layout. Replace with real,
   * consented quotes (and real names/photos) before launch.
   */
  testimonials: {
    eyebrow: "Stories",
    title: "What passengers and drivers say",
    description: "Early feedback from both sides of the same trip.",
    items: [
      {
        quote:
          "I needed to get to Cumilla the same evening. A driver was already heading back that way, so the whole car cost me about a third of a normal rental. The Gari Bhai called me twice to confirm.",
        name: "Nusrat J.",
        role: "Passenger · Dhaka Airport → Cumilla",
        rating: 5,
      },
      {
        quote:
          "I used to drive back from Chattogram with an empty car every week. Now I post the return trip before I start driving home, and most weeks somebody takes it.",
        name: "Md. Rasel",
        role: "Driver · Toyota Axio · 3 years",
        rating: 5,
      },
      {
        quote:
          "What I like is that the fare is settled in the app before pickup, and I only pay when I have actually arrived. No arguing at the roadside.",
        name: "Tanvir A.",
        role: "Passenger · Dhaka → Sylhet",
        rating: 4,
      },
    ],
  },

  faqSection: {
    eyebrow: "FAQ",
    title: "Questions, answered",
    description: "The things people ask most often before their first trip.",
    moreLink: { label: "Read all the questions", href: routes.faq },
    stillUnsure: {
      before: "Still unsure? ",
      after: " reaches a Gari Bhai who will talk you through it.",
    },
  },

  finalCta: {
    title: "Get the app and take the ride that is already going",
    description:
      "One app for passengers, one for drivers. Book a rental, catch a return trip, or start earning on the leg you were driving anyway.",
    appStore: {
      kicker: "Download on the",
      store: "App Store",
      href: links.appStore,
    },
    playStore: {
      kicker: "Get it on",
      store: "Google Play",
      href: links.playStore,
    },
    driverCta: { label: "Become a Driver", href: links.driverSignup },
    footnote:
      "Store links are placeholders while the apps go through review. Payment is always collected after the trip is completed — GariGhora never asks you to pay in advance.",
  },
};
