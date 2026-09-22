import {
  AlertTriangle,
  BadgeCheck,
  Banknote,
  Bell,
  Building2,
  CalendarClock,
  Car,
  CarFront,
  Clock,
  Code2,
  Compass,
  Eye,
  FileCheck2,
  FileLock2,
  Fuel,
  HandCoins,
  Handshake,
  Headphones,
  Headset,
  History,
  IdCard,
  LifeBuoy,
  Lock,
  Mail,
  MapPin,
  MapPinned,
  Megaphone,
  MessageSquareQuote,
  NotebookPen,
  PhoneCall,
  Receipt,
  Repeat,
  Rocket,
  Route,
  Scale,
  Search,
  Send,
  ShieldCheck,
  ShieldQuestion,
  Smartphone,
  Star,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";
import { common } from "@/lib/i18n/content/en/common";
import { notFound } from "@/lib/i18n/content/en/not-found";

const { routes, links } = common;

/**
 * Copy for the inner pages, one key per route.
 *
 * Structure mirrors the page: a `hero` block feeding `PageHero`, then the
 * sections in render order, then the closing `callout` band.
 */
export const pages = {
  howItWorks: {
    hero: {
      breadcrumb: "How it works",
      eyebrow: "End to end",
      title: "How a GariGhora trip actually runs",
      description:
        "The same booking, seen from both ends — and what happens between accepting an offer and handing over the fare.",
      primaryCta: { label: "Book a Ride", href: links.passengerSignup },
      secondaryCta: { label: "Drive with us", href: links.driverSignup },
    },
    lifecycle: {
      eyebrow: "Behind the booking",
      title: "What the platform does at each stage",
      description:
        "Every step below is recorded, which is what makes a cash-settled trip auditable for both sides.",
      items: [
        {
          icon: MessageSquareQuote,
          title: "Offer",
          body: "A driver proposes a fare for your trip, or you request a fare on a return trip they posted. Counters are capped at a couple of rounds.",
        },
        {
          icon: BadgeCheck,
          title: "Booking",
          body: "Accepting an offer creates the booking and locks the fare. Only one accepted offer can exist per trip — the backend enforces it.",
        },
        {
          icon: PhoneCall,
          title: "Confirmation",
          body: "A Gari Bhai is assigned, calls both sides, confirms the pickup point and time, and notes anything the driver needs to know.",
        },
        {
          icon: Headphones,
          title: "The trip",
          body: "The driver starts the trip in the app. You can see basic location and reach support in one tap while it runs.",
        },
        {
          icon: Wallet,
          title: "Payment",
          body: "The trip is completed in the app and you hand over the agreed fare in cash. The platform commission is billed to the driver, not added to your fare.",
        },
        {
          icon: Star,
          title: "Ratings",
          body: "Both sides rate each other once. Only completed trips can be reviewed, so a rating always refers to a real journey.",
        },
      ],
    },
    choose: {
      eyebrow: "Choosing a service",
      title: "Rental Car or Return Car?",
      description:
        "Both use the same account, the same verified drivers and the same full-vehicle booking. The difference is whose journey it started as.",
      rental: {
        title: "Pick Rental Car when…",
        points: [
          "You have a fixed date and time that has to work.",
          "You are travelling out from your city rather than back to it.",
          "You need the car to wait, or to make several stops.",
          "Nothing on your route has been posted as a return trip.",
        ],
        link: { label: "About Rental Car", href: routes.rentalCar },
      },
      returnCar: {
        title: "Pick Return Car when…",
        points: [
          "Your timing is a little flexible.",
          "You are travelling back along a busy intercity route.",
          "You want the same car for noticeably less money.",
          "You are happy to post a request and wait for offers.",
        ],
        link: { label: "About Return Car", href: routes.returnCar },
      },
    },
    callout: {
      title: "That is the whole process",
      description:
        "No prepayment, no card details, no surprise fare at the end of the road.",
      primary: { label: "Get the App", href: links.appStore },
      secondary: { label: "Read the FAQ", href: routes.faq },
    },
  },

  rentalCar: {
    hero: {
      breadcrumb: "Rental Car",
      eyebrow: "Service 01",
      title: "Need a car for your trip? Book the whole thing.",
      description:
        "Tell GariGhora where you are going and when. Verified drivers send you fares, you pick the one you like, and the vehicle is yours for the journey.",
      primaryCta: { label: "Book a Rental Car", href: links.passengerSignup },
      secondaryCta: { label: "Compare with Return Car", href: routes.returnCar },
    },
    steps: {
      eyebrow: "The booking",
      title: "Four steps from idea to confirmed car",
      items: [
        {
          title: "Post your trip",
          body: "Pickup, drop-off, date, time and the type of vehicle you want. Add anything else — luggage, an AC vehicle, an early start — in Additional Notes.",
        },
        {
          title: "Collect offers",
          body: "Verified drivers on your route send fares. Each offer shows the driver, the vehicle and their rating, so you are comparing more than a number.",
        },
        {
          title: "Agree the fare",
          body: "Accept an offer, or counter it once. Rounds are capped so a negotiation lasts minutes, not an afternoon.",
        },
        {
          title: "Ride, then pay",
          body: "Your Gari Bhai confirms the pickup with both sides the day before. Hand over the agreed fare in cash when you arrive — never before.",
        },
      ],
    },
    /** SAMPLE DATA: replace with real market rates before launch. */
    prices: {
      title: "What routes tend to cost",
      intro:
        "Fares are set by drivers, not by us, so they move with distance, vehicle and timing. These are typical ranges people see:",
      rows: [
        { route: "Dhaka → Cumilla", vehicle: "Sedan", fare: "৳4,500 – ৳5,500" },
        {
          route: "Dhaka → Chattogram",
          vehicle: "Micro",
          fare: "৳9,000 – ৳11,000",
        },
        { route: "Dhaka → Sylhet", vehicle: "Sedan", fare: "৳8,000 – ৳9,500" },
        {
          route: "Airport → Dhaka city",
          vehicle: "Sedan",
          fare: "৳900 – ৳1,400",
        },
      ],
      footnote: "Sample figures for illustration only.",
    },
    returnHint: {
      title: "Travelling on a route someone is returning from?",
      body: "A Return Car trip on the same road often costs a fraction of a fresh rental, because the driver is already making the journey. Worth checking before you book.",
      link: { label: "Look at Return Car", href: routes.returnCar },
    },
    included: {
      eyebrow: "What you get",
      title: "Every rental booking includes",
      items: [
        {
          icon: Car,
          title: "The whole vehicle",
          body: "One booking is one car. No seat sharing, no strangers, no per-head pricing.",
        },
        {
          icon: BadgeCheck,
          title: "A verified driver",
          body: "NID, licence and vehicle registration are checked before a driver can take any booking.",
        },
        {
          icon: MessageSquareQuote,
          title: "A fare fixed in writing",
          body: "The offer you accept is recorded in the app. There is nothing to renegotiate at the roadside.",
        },
        {
          icon: Wallet,
          title: "Payment after the trip",
          body: "Cash to the driver on arrival. No deposit, no card, no in-app payment.",
        },
        {
          icon: Route,
          title: "Any route in the country",
          body: "City runs, intercity journeys, airport transfers — if a driver covers it, you can book it.",
        },
        {
          icon: NotebookPen,
          title: "Notes drivers actually read",
          body: "Special requirements go in one free-text field, and drivers price them into their offer.",
        },
      ],
    },
    faq: {
      eyebrow: "Rental Car FAQ",
      title: "Before you book",
      moreLink: { label: "Read all the questions", href: routes.faq },
    },
    callout: {
      title: "Ready when you are",
      description:
        "Post your trip, see what drivers offer, and decide from there. Nothing is charged until the journey is done.",
      primary: { label: "Get the App", href: links.appStore },
      secondary: { label: "How it works", href: routes.howItWorks },
    },
    icons: { prices: Route, returnHint: CalendarClock },
  },

  returnCar: {
    hero: {
      breadcrumb: "Return Car",
      eyebrow: "Service 02 · our signature feature",
      title: "Ride the leg the car was making anyway.",
      description:
        "When a driver finishes a trip far from home, they would normally drive back empty. Return Car turns that empty leg into a cheap journey for someone heading the same way.",
      primaryCta: { label: "Find a Return Car", href: links.passengerSignup },
      secondaryCta: { label: "Post your return trip", href: links.driverSignup },
    },
    twoWays: {
      eyebrow: "Two ways to book",
      title: "Search what is already posted, or ask for what you need",
      description:
        "Most people start by searching. If nothing on your route matches, post a request and let drivers come to you.",
      browse: {
        icon: Search,
        optionLabel: "Option A",
        title: "Browse Return Trips",
        steps: [
          {
            title: "Search your route",
            body: "From, to, date and time. Return Trips already posted by drivers show up with the vehicle, the departure window and the asking fare.",
          },
          {
            title: "Pick a trip that suits you",
            body: "Check the driver, their rating, the vehicle and any notes about the timing before you commit to anything.",
          },
          {
            title: "Request it",
            body: "Send a request at the asking fare, or counter with your own. The driver accepts, counters once, or lets it go.",
          },
          {
            title: "Ride and pay",
            body: "The booking is confirmed, a Gari Bhai calls both sides, and you pay the driver in cash at the end of the journey.",
          },
        ],
      },
      request: {
        icon: Send,
        optionLabel: "Option B",
        title: "Post a Ride Request",
        steps: [
          {
            title: "Post a Ride Request",
            body: "From, to, date, time and vehicle type — plus anything else in Additional Notes. It takes under a minute.",
          },
          {
            title: "Drivers heading that way respond",
            body: "Drivers whose route, timing and vehicle match your request see it and send offers with their fare.",
          },
          {
            title: "Compare and negotiate",
            body: "Accept the offer you like or counter it once. Everything stays inside the app, so the agreed fare is on record.",
          },
          {
            title: "Booking confirmed",
            body: "Once you accept, the trip is yours. Same verified drivers, same cash-after-the-trip payment.",
          },
        ],
      },
    },
    /** SAMPLE DATA: illustrative listings, not live inventory. */
    samples: {
      eyebrow: "What it looks like",
      title: "Return trips on the routes people actually travel",
      description:
        "Return Car is strongest on the long intercity roads, where driving home empty costs a driver the most.",
      searchLink: { label: "Search your own route", href: links.passengerSignup },
      usualRental: (fare: string) => `Usual rental ${fare}`,
      footnote: "Sample listings for illustration only.",
      trips: [
        {
          route: "Cumilla → Dhaka Airport",
          when: "Today, 6:00 PM",
          vehicle: "Toyota Axio · Sedan",
          fare: "৳1,100",
          rental: "৳3,200",
        },
        {
          route: "Chattogram → Dhaka",
          when: "Tomorrow, 7:30 AM",
          vehicle: "Toyota Noah · Micro",
          fare: "৳3,400",
          rental: "৳9,500",
        },
        {
          route: "Sylhet → Dhaka",
          when: "Friday, 9:00 PM",
          vehicle: "Allion · Sedan",
          fare: "৳2,900",
          rental: "৳8,000",
        },
      ],
    },
    why: {
      eyebrow: "Why it is cheaper",
      title: "A lower fare, without a lower standard",
      items: [
        {
          icon: Fuel,
          title: "The journey is already paid for",
          body: "The driver earned on the way out. The return leg only has to beat driving home empty, which is why it can be posted so much lower.",
          feature: true,
        },
        {
          icon: Repeat,
          title: "Still the whole car",
          body: "A cheaper fare does not mean a shared vehicle. Return Car is a full-vehicle booking, exactly like a rental.",
        },
        {
          icon: BadgeCheck,
          title: "The same verified drivers",
          body: "Return Trips come from drivers already on the platform, with NID, licence and registration checked.",
        },
        {
          icon: Clock,
          title: "Often same-day",
          body: "Return Trips appear as drivers finish jobs, so this is a good place to look when you need to travel today or tomorrow.",
        },
        {
          icon: MessageSquareQuote,
          title: "Fare agreed before pickup",
          body: "Offers and counter-offers happen in the app and stop after a couple of rounds. No haggling at the car door.",
        },
        {
          icon: Wallet,
          title: "Pay when you arrive",
          body: "Cash to the driver after the trip is complete — never a deposit to hold a return trip.",
        },
      ],
      notCard: {
        title: "One thing Return Car is not",
        body: "It is not a shared ride and it is not a bus seat. GariGhora books whole vehicles only — you are not put in a car with strangers, and there is no per-seat pricing in this version.",
      },
    },
    faq: {
      eyebrow: "Return Car FAQ",
      title: "The usual questions",
      moreLink: { label: "Read all the questions", href: routes.faq },
    },
    callout: {
      title: "A car is already going that way",
      description:
        "Check the Return Trips on your route before you pay full rental price for the same journey.",
      primary: { label: "Get the App", href: links.appStore },
      secondary: { label: "See Rental Car", href: routes.rentalCar },
    },
  },

  forDrivers: {
    hero: {
      breadcrumb: "For Drivers",
      eyebrow: "Drive with GariGhora",
      title: "Get paid for the drive home.",
      description:
        "Take rental bookings like you always have — then post the empty return leg and let it earn too. You set the fare, you collect the cash, we handle the matching.",
      primaryCta: { label: "Register as a Driver", href: links.driverSignup },
      secondaryCta: { label: "Get the Driver App", href: links.playStore },
    },
    signup: {
      eyebrow: "Getting started",
      title: "From signup to your first booking",
      steps: [
        {
          title: "Sign up with your phone number",
          body: "Verify it with an OTP and fill in your name and photo. It takes a couple of minutes.",
        },
        {
          title: "Submit your documents",
          body: "NID, driving licence and the registration for the vehicle you want to drive. You can add more vehicles later.",
        },
        {
          title: "Get verified",
          body: "We check the documents against the vehicle. Until that is done, your account can browse but not accept trips.",
        },
        {
          title: "Start taking work",
          body: "Publish rental availability, send offers on ride requests, and post your empty return legs as Return Car trips.",
        },
      ],
      verification: {
        title: "What verification means",
        paragraphs: [
          "Verification is a one-off check, not an inspection regime. We confirm your identity, your licence and that the vehicle you are offering is registered to you.",
          "It exists so passengers can trust an unfamiliar car on a long road at night — which is the same reason they will trust your return trips.",
        ],
        link: {
          label: "How we handle trust and safety",
          href: routes.trustSafety,
        },
      },
    },
    requirements: {
      eyebrow: "What you need",
      title: "Four things to bring",
      description:
        "If you already drive for hire, you almost certainly have all of these.",
      items: [
        {
          icon: IdCard,
          title: "Your NID",
          body: "Used to confirm you are who you say you are. Nothing is shown to passengers beyond your name, photo and rating.",
        },
        {
          icon: FileCheck2,
          title: "A valid driving licence",
          body: "Checked before your account can accept any trip, and expected to stay valid while you drive.",
        },
        {
          icon: CarFront,
          title: "Vehicle registration papers",
          body: "The vehicle is added to your profile with its type, model and seating, so passengers know what is arriving.",
        },
        {
          icon: Smartphone,
          title: "A phone that runs the driver app",
          body: "You will need it for offers, bookings, starting and completing trips, and sharing basic location during a trip.",
        },
      ],
    },
    earnings: {
      eyebrow: "Money",
      title: "How earning works here",
      items: [
        {
          icon: Banknote,
          title: "You set your own fares",
          body: "Every offer is yours to make. Nobody prices your trip for you, and there is no surge or discount engine changing it.",
          feature: true,
        },
        {
          icon: Receipt,
          title: "Cash straight from the passenger",
          body: "You collect the agreed fare at the end of the trip. There is no payout wait and no platform holding your money.",
        },
        {
          icon: ShieldCheck,
          title: "Commission billed separately",
          body: "The platform commission on a completed trip is recorded against you and settled by bKash, Nagad, bank transfer or cash — never taken out of the passenger's fare.",
        },
        {
          icon: PhoneCall,
          title: "A Gari Bhai on every booking",
          body: "An operations agent confirms details with the passenger before pickup, so you are not chasing people by phone yourself.",
        },
      ],
      rule: {
        title: "One rule worth knowing up front",
        body: "Unsettled commission is capped. You can carry a few completed trips with commission outstanding, but once you pass the limit your account cannot accept new trips until you settle. Settlement is verified by the operations team, usually the same day, and your account is unblocked as soon as it clears.",
      },
    },
    faq: {
      eyebrow: "Driver FAQ",
      title: "Questions drivers ask",
      moreLink: { label: "Read all the questions", href: routes.faq },
    },
    callout: {
      title: "Stop driving home for free",
      description:
        "Register, get verified, and post your first return trip this week.",
      primary: { label: "Register as a Driver", href: links.driverSignup },
      secondary: { label: "Talk to us first", href: routes.contact },
    },
    icons: { verification: BadgeCheck, rule: Receipt },
  },

  download: {
    hero: {
      breadcrumb: "Get the App",
      eyebrow: "Passenger app · Driver app",
      title: "Two apps, one platform",
      description:
        "Passengers book. Drivers earn. Both run on the same verified accounts, bookings and trips.",
    },
    passenger: {
      eyebrow: "Passenger app",
      title: "Book a car in a couple of taps",
      description:
        "Built mobile-first, because that is how nearly everyone here travels and books.",
      items: [
        {
          icon: Search,
          title: "Search or request",
          body: "Look through return trips on your route, or post a ride request and let drivers come to you.",
        },
        {
          icon: Wallet,
          title: "See the fare first",
          body: "Compare offers side by side, counter once, and know the exact number before you accept.",
        },
        {
          icon: MapPinned,
          title: "Follow the trip",
          body: "Driver details, vehicle details, pickup point and basic location while the trip is running.",
        },
        {
          icon: History,
          title: "Your booking history",
          body: "Upcoming, active, completed and cancelled trips, with the fare and driver on every record.",
        },
      ],
    },
    driver: {
      eyebrow: "Driver app",
      title: "Run your day from the driver seat",
      description:
        "Availability, offers, bookings, trips, earnings and commission in one place.",
      items: [
        {
          icon: CarFront,
          title: "Your vehicles",
          body: "Add a vehicle, upload photos, keep its status current, and switch which one you are driving.",
        },
        {
          icon: Bell,
          title: "Requests as they land",
          body: "Ride requests matching your route, timing and vehicle arrive in the app for you to offer on.",
        },
        {
          icon: Star,
          title: "Trips and ratings",
          body: "Start, complete and review trips, and see what passengers are saying about your driving.",
        },
        {
          icon: UserRound,
          title: "Earnings and commission",
          body: "Fare, earnings and outstanding commission per trip, plus what you owe before you can take the next one.",
        },
      ],
      waitlist: {
        title: "Not launched yet?",
        before:
          "The store listings go live at launch. Until then, tell us which app you want and we will send the link the day it is available — write to ",
        middle: " or use the ",
        contactLabel: "contact page",
        after: ".",
      },
    },
  },

  about: {
    hero: {
      breadcrumb: "About",
      eyebrow: "About us",
      title: "A car is already going that way.",
      description:
        "GariGhora — also written Ghori Ghora — is a Bangladeshi car marketplace built around one observation: intercity vehicles spend half their working day driving back empty.",
    },
    story: {
      eyebrow: "Why we exist",
      title: "Half the journey, none of the income",
      paragraphs: [
        "Rent a car from Dhaka to Cumilla and the driver takes you there, drops you off, and drives home alone. The fuel, the hours and the wear on that return leg are real costs, and they end up inside the fare everyone pays.",
        "Meanwhile, somebody in Cumilla is trying to get to Dhaka that evening and paying full price for a second car to make the exact same journey in the opposite direction.",
      ],
      emphasis: "Those two people should be in the same car.",
      afterEmphasis:
        " That is the whole idea. GariGhora lets a driver post the empty leg as a Return Car trip, and lets a passenger book it for a fraction of a fresh rental — the driver earns twice on one journey, the passenger travels cheaper, and one less car makes an empty run.",
      closing:
        "Rental Car sits alongside it because the two feed each other: today's rental is tomorrow's return trip.",
      link: { label: "See how Return Car works", href: routes.returnCar },
      building: {
        title: "What we are building",
        body: "A marketplace for intercity car travel in Bangladesh, with two connected services, verified drivers, fares agreed in the app, and a human operations team on every booking.",
      },
      notBuilding: {
        title: "What we are not building",
        first:
          "Not a bus. Not a ride-share where strangers split a car. Not a payment company.",
        second:
          "Bookings are for the whole vehicle, and money moves directly between passenger and driver.",
      },
    },
    principles: {
      eyebrow: "How we work",
      title: "Five things we keep coming back to",
      items: [
        {
          icon: Compass,
          title: "Fix the empty leg first",
          body: "Everything on the platform points at one inefficiency: a car driving home with nobody in it. Return Car is the product; the rest supports it.",
          feature: true,
        },
        {
          icon: Handshake,
          title: "Keep both sides whole",
          body: "A driver should earn more than they did before, and a passenger should pay less. If a change only helps one side, it is not a good change.",
        },
        {
          icon: HandCoins,
          title: "Do not touch the money yet",
          body: "Passengers pay drivers directly in cash. We record the trip and bill our commission to the driver, rather than sitting between them and their income.",
        },
        {
          icon: Users,
          title: "Keep a human in the loop",
          body: "A Gari Bhai calls both sides on every booking. Software matches the trip; a person makes sure it actually happens.",
        },
        {
          icon: Route,
          title: "Start narrow, on real roads",
          body: "Two services, the busiest intercity routes, full-vehicle bookings only. Depth on a few journeys beats a thin presence everywhere.",
        },
      ],
    },
    where: {
      eyebrow: "Where we operate",
      title: "Bangladesh, starting with the busiest roads",
      description:
        "Dhaka and the corridors out of it — Cumilla, Chattogram, Sylhet and the airport routes — are where empty return legs are most common, so that is where we started.",
      link: { label: "Want us on your route? Tell us", href: routes.contact },
    },
    callout: {
      title: "Come along for the ride",
      description: "Book a trip, drive with us, or join the team building it.",
      primary: { label: "Get the App", href: links.appStore },
      secondary: { label: "See open roles", href: routes.careers },
    },
  },

  trustSafety: {
    hero: {
      breadcrumb: "Trust & Safety",
      eyebrow: "Trust & Safety",
      title: "Getting into a stranger's car should not feel like a gamble",
      description:
        "Verification before the first trip, a fare agreed in writing, a real person watching every booking, and a number to call when something goes wrong.",
    },
    verification: {
      eyebrow: "Before the first trip",
      title: "What we check, and when",
      description:
        "Verification happens once, at registration, and it gates everything a driver can do afterwards.",
      steps: [
        {
          title: "Identity",
          body: "Every driver submits their NID at registration. An account with unverified identity cannot accept a single booking.",
        },
        {
          title: "Licence",
          body: "A valid driving licence is checked against the driver's identity before the account is opened for trips.",
        },
        {
          title: "Vehicle",
          body: "Registration papers are checked against the vehicle added to the profile, including type, model and seating.",
        },
        {
          title: "Ongoing standing",
          body: "Ratings, cancellations and reported problems all attach to the account. Repeated issues cost a driver access to bookings.",
        },
      ],
      passengers: {
        title: "What passengers do not need",
        body: "Opening a passenger account takes a phone number and a name. NID is not required to sign up or to make a normal booking — we ask drivers for documents because they are the ones carrying people.",
      },
      documents: {
        title: "What we do with documents",
        body: "Identity documents are used to verify an account and are not shown to passengers. What a passenger sees is the driver's name, photo, vehicle and rating.",
        link: { label: "Read the Privacy Policy", href: routes.privacy },
      },
    },
    during: {
      eyebrow: "While you travel",
      title: "Nobody is left on their own mid-trip",
      items: [
        {
          icon: PhoneCall,
          title: "A Gari Bhai on the booking",
          body: "An operations agent is assigned to your booking, calls both sides to confirm pickup details, and monitors the trip while it runs.",
          feature: true,
        },
        {
          icon: Eye,
          title: "Trip visibility",
          body: "You can see the driver, the vehicle, the pickup point, the destination and basic driver location while the trip is active.",
        },
        {
          icon: LifeBuoy,
          title: "Support in one tap",
          body: "In-app support from the active trip screen, plus a phone number for anything that cannot wait for a message.",
        },
        {
          icon: AlertTriangle,
          title: "Problems get recorded",
          body: "Issues raised during a trip are logged against the booking, not settled informally, so there is a record if it happens again.",
        },
      ],
    },
    fairness: {
      eyebrow: "Fair dealing",
      title: "The rules are the same for everyone",
      items: [
        {
          icon: Scale,
          title: "The fare is fixed when you accept",
          body: "Offers and counters happen in the app and stop after a couple of rounds. The number you agreed is the number you pay.",
        },
        {
          icon: BadgeCheck,
          title: "Ratings work both ways",
          body: "Passengers rate drivers and drivers rate passengers, once each, and only after a trip is actually completed.",
        },
        {
          icon: ShieldCheck,
          title: "No money up front",
          body: "There is no deposit and no in-app payment, so a cancelled booking never leaves you chasing a refund.",
        },
        {
          icon: Lock,
          title: "Backend enforces the rules",
          body: "Booking states, offer acceptance and driver eligibility are enforced on the server, not by the app on someone's phone.",
        },
      ],
    },
    report: {
      eyebrow: "If something goes wrong",
      title: "Tell us, and tell us early",
      description:
        "A trip that felt unsafe, a driver who asked for more than the agreed fare, a booking that never showed up — all of it should come to us rather than being sorted out at the roadside.",
      card: {
        title: "How to reach us fast",
        duringLabel: "During a trip:",
        duringBefore: " use the support button on the active trip screen, or call ",
        duringAfter: ".",
        afterLabel: "After a trip:",
        afterBody:
          " report it from the booking in your history, so the trip record is attached automatically.",
        elseLabel: "Anything else:",
        elseBefore: " the ",
        contactLabel: "contact page",
        elseMiddle: ", or ",
        elseAfter: ".",
        emergency:
          "In an emergency, call the emergency services first. Then call us so we can act on the booking.",
      },
    },
    callout: {
      title: "Travel with someone accountable",
      description:
        "Verified drivers, an agreed fare, and a Gari Bhai who knows your booking by name.",
      primary: { label: "Get the App", href: links.appStore },
      secondary: { label: "Read the FAQ", href: routes.faq },
    },
    icons: { documents: FileLock2, report: PhoneCall },
  },

  careers: {
    hero: {
      breadcrumb: "Careers",
      eyebrow: "Careers",
      title: "Help us stop cars driving home empty",
      description:
        "We are a small team in Dhaka building a two-sided marketplace for intercity car travel — and looking for people who want the problem more than the title.",
      cta: "Send us your CV",
    },
    why: {
      eyebrow: "Why here",
      title: "What working on this is like",
      items: [
        {
          icon: Rocket,
          title: "Early enough to shape it",
          body: "The platform is at MVP. What you build in the first year becomes how the product works.",
          feature: true,
        },
        {
          icon: MapPin,
          title: "A local problem, not a copy",
          body: "Empty return legs are a specific inefficiency on Bangladeshi roads. This is not a template business dropped into a new market.",
        },
        {
          icon: Users,
          title: "Close to the users",
          body: "Operations talk to drivers and passengers every single day, and that feedback reaches the product in days, not quarters.",
        },
        {
          icon: Building2,
          title: "Small team, real ownership",
          body: "No layers to route work through. You own an area and you see it live.",
        },
      ],
    },
    /**
     * SAMPLE DATA: placeholder openings so the page has structure.
     * TODO: replace with the real roles (and real application links) before
     * launch, or empty `items` to show the "no openings" state.
     */
    roles: {
      eyebrow: "Open roles",
      title: "Where we need people right now",
      description:
        "Sample openings while we finalise hiring — if one is close to what you do, write to us anyway.",
      applyLabel: "Apply",
      applySubject: (role: string) => `Application: ${role}`,
      footnote:
        "Sample listings for layout — final roles and application links are being confirmed.",
      items: [
        {
          icon: Code2,
          title: "Backend Engineer (NestJS)",
          team: "Engineering",
          location: "Dhaka · On-site",
          type: "Full-time",
          body: "Own booking, offer and trip state machines, plus the commission ledger that keeps cash-settled trips auditable.",
        },
        {
          icon: Code2,
          title: "Mobile Engineer (React Native)",
          team: "Engineering",
          location: "Dhaka · Hybrid",
          type: "Full-time",
          body: "Build the passenger and driver apps — search, offers, active trips and everything a driver touches on the road.",
        },
        {
          icon: Headset,
          title: "Gari Bhai — Operations Agent",
          team: "Operations",
          location: "Dhaka · On-site",
          type: "Full-time",
          body: "Call passengers and drivers, confirm bookings, monitor active trips and sort out problems before they become complaints.",
        },
        {
          icon: Megaphone,
          title: "Driver Growth Executive",
          team: "Growth",
          location: "Dhaka & Cumilla · Field",
          type: "Full-time",
          body: "Bring drivers onto the platform on the routes that matter, and keep them posting return trips after the first one.",
        },
      ],
    },
    apply: {
      eyebrow: "How to apply",
      title: "One email is enough",
      description: "No forms, no portal, no fifteen-field application.",
      cardTitle: "What to send",
      points: [
        "Your CV, or a link to something you have built or run.",
        "The role you are after — or the role you think we are missing.",
        "A couple of lines on why this problem interests you. That part we actually read.",
      ],
      sendBefore: "Send it to ",
      sendAfter: ". We reply to everyone, even when the answer is no.",
    },
    callout: {
      title: "Not looking for a job, just a ride?",
      description: "That works too — the app does both.",
      primary: { label: "Get the App", href: links.appStore },
      secondary: { label: "About GariGhora", href: routes.about },
    },
    icons: { apply: Mail },
  },

  contact: {
    hero: {
      breadcrumb: "Contact",
      eyebrow: "Contact us",
      title: "A real person, on the other end of a real number",
      description:
        "Support runs on phones, not ticket queues. If a trip is happening right now, call — do not email.",
      callCta: (phone: string) => `Call ${phone}`,
      emailCta: "Email support",
    },
    channels: {
      eyebrow: "Ways to reach us",
      title: "Pick whichever fits",
      items: [
        {
          icon: Headphones,
          key: "phone" as const,
          title: "Support line",
          body: "The fastest route for anything happening now — a driver who has not arrived, a trip in progress, a fare dispute at the roadside.",
        },
        {
          icon: Mail,
          key: "email" as const,
          title: "Email support",
          body: "Better for things with detail: a booking that went wrong, a refund question, feedback on a trip that has already finished.",
        },
        {
          icon: CarFront,
          key: "drivers" as const,
          title: "Driver questions",
          body: "Verification, vehicles, commission settlement or getting your account unblocked after you have paid.",
          actionLabel: "For Drivers",
        },
        {
          icon: Building2,
          key: "press" as const,
          title: "Press & partnerships",
          body: "Media enquiries, corporate travel, or working together on a route.",
        },
      ],
    },
    report: {
      eyebrow: "Report a trip issue",
      title: "Something went wrong on a trip?",
      description:
        "Report it against the booking rather than settling it informally — that way the trip record, the driver and the agreed fare all come with the report.",
      duringLabel: "While the trip is running:",
      duringBody:
        " use the support button on the active trip screen, or call the support line. The Gari Bhai assigned to your booking can reach the driver directly.",
      afterLabel: "After the trip:",
      afterBody:
        " open the booking in your history and report it from there, or email us with the date and route so we can find it.",
      emergencyLabel: "In an emergency:",
      emergencyBody:
        " call the emergency services first, then call us so we can act on the booking.",
      callCta: "Call support",
      trustCta: "Trust & Safety",
      hours: {
        title: "When we are reachable",
        phoneLabel: "Phone support:",
        phoneBody:
          " every day, including while trips run late into the evening.",
        emailLabel: "Email:",
        emailBody:
          " answered within one working day. TODO: confirm final published support hours before launch.",
      },
      where: {
        title: "Where we are",
        note: "TODO: replace with the registered office address.",
      },
      privacy: {
        title: "Privacy questions",
        before:
          "For anything about your data — access, correction or deletion — write to ",
        middle: ", or read the ",
        policyLabel: "Privacy Policy",
        after: ".",
      },
    },
    before: {
      title: "Before you call",
      body: "Most questions are answered on the FAQ — how fares are agreed, when you pay, what happens if a driver cancels, and how verification works.",
      link: { label: "Read the FAQ first", href: routes.faq },
    },
    callout: {
      title: "We would rather hear from you early",
      description:
        "A small problem on the road is much easier to fix than a complaint after the trip.",
      secondary: { label: "Get the App", href: links.appStore },
    },
    icons: {
      hours: Clock,
      where: MapPin,
      privacy: ShieldQuestion,
      before: AlertTriangle,
    },
  },

  faqPage: {
    hero: {
      breadcrumb: "FAQ",
      eyebrow: "Questions",
      title: "Everything people ask before their first trip",
      description:
        "Grouped by topic. If your question is not here, the support line reaches a real person.",
    },
    srHeading: "Frequently asked questions",
    topics: "Topics",
    topicsNav: "FAQ topics",
    notCovered: {
      strong: "Not covered here?",
      rest: " Reach the support team directly.",
    },
    callout: {
      title: "Ready to try it?",
      description:
        "Book a rental, or see what return trips are already heading your way.",
      primary: { label: "Get the App", href: links.appStore },
      secondary: { label: "Contact support", href: routes.contact },
    },
  },

  notFound,
};
