/**
 * FAQ content, shared between the home page (a short selection) and the
 * dedicated /faq page (everything, grouped by topic).
 */

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  /** Included in the shortened list on the home page. */
  featured?: boolean;
};

export type FaqGroup = {
  id: string;
  heading: string;
  description: string;
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    id: "booking",
    heading: "Booking a ride",
    description: "Finding a car, agreeing a fare and confirming the trip.",
    items: [
      {
        id: "why-cheaper",
        question: "How is Return Car cheaper than a normal rental?",
        answer:
          "Because the car is already making the journey. The driver has been paid for the outbound trip and would otherwise drive home empty, so anything they earn on the return leg is a bonus rather than the whole cost of the trip. That lets them post it well below a fresh rental fare — and you still get the whole vehicle to yourself.",
        featured: true,
      },
      {
        id: "negotiate",
        question: "Can I negotiate the fare?",
        answer:
          "Yes, inside the app. A driver sends an offer, you can counter, and they can respond — capped at a couple of rounds so it stays quick and nobody gets worn down. Once you accept an offer, that fare is locked for the trip.",
        featured: true,
      },
      {
        id: "whole-car",
        question: "Am I booking a seat or the whole car?",
        answer:
          "The whole car, for both Rental Car and Return Car. GariGhora does not sell individual seats or split a vehicle between strangers, so the car you book is yours for that trip.",
        featured: true,
      },
      {
        id: "no-match",
        question: "What if no Return Trip matches my route?",
        answer:
          "Post a Ride Request instead. You enter where you are going, when, and the type of vehicle you want, and drivers heading that way send you offers. If nothing suitable comes back, you can always book a Rental Car for the same journey.",
      },
      {
        id: "luggage",
        question: "How do I tell the driver about bags or special requirements?",
        answer:
          "Use the Additional Notes field when you search or post a request — for example \"3 passengers with 4 large bags, AC preferred\". Drivers read those notes before they make an offer, so what you write there shapes the fare you get back.",
      },
      {
        id: "how-far-ahead",
        question: "How far in advance should I book?",
        answer:
          "Return Trips appear when a driver finishes a job, so they are often same-day or next-day. For a Rental Car on a fixed date, posting a day or two ahead gives drivers time to send offers and gives you more to choose from.",
      },
    ],
  },
  {
    id: "payment",
    heading: "Paying for your trip",
    description: "When money changes hands, and who it goes to.",
    items: [
      {
        id: "when-pay",
        question: "When and how do I pay?",
        answer:
          "After the trip, in cash, directly to the driver — the same way you would with a ride you hailed on the street. There is no in-app payment, no card details and no deposit. The fare is agreed and recorded in the app before pickup, so there is nothing to argue about at the end.",
        featured: true,
      },
      {
        id: "price-change",
        question: "Can the fare change after I book?",
        answer:
          "No. The fare you accept is the fare you pay. If a trip genuinely changes — a different drop-off point, a long wait you asked for — talk to the Gari Bhai assigned to your booking rather than settling it informally at the roadside, so the change is recorded.",
      },
      {
        id: "toll-fuel",
        question: "Do tolls, fuel and parking come on top?",
        answer:
          "Drivers are asked to quote a fare that covers the journey as described. If a route involves something unusual — a ferry crossing, for example — it should be raised in the offer stage, before you accept, not after the trip.",
      },
      {
        id: "receipt",
        question: "Do I get a receipt?",
        answer:
          "Every completed trip shows in your booking history with the route, the driver, the vehicle and the agreed fare. That record is your receipt for a cash payment.",
      },
    ],
  },
  {
    id: "safety",
    heading: "Safety and trust",
    description: "Who is driving, and who to call when something goes wrong.",
    items: [
      {
        id: "verification",
        question: "How are drivers verified?",
        answer:
          "Every driver submits their NID, driving licence and vehicle registration when they register, and the vehicle is added to their profile. A driver cannot accept any trip until that check has been completed. You can see the driver, the vehicle and their rating before you accept an offer.",
        featured: true,
      },
      {
        id: "gari-bhai",
        question: "Who is the Gari Bhai on my booking?",
        answer:
          "A GariGhora operations agent assigned to your booking. They call you and the driver to confirm pickup details, keep an eye on the trip while it runs, and are the person to ring if something needs sorting out on the road.",
      },
      {
        id: "cancellation",
        question: "What happens if my driver cancels?",
        answer:
          "The booking is cancelled in the app with the reason recorded, and the Gari Bhai assigned to your booking helps you find another car for the same route and time. Because you have not paid anything up front, there is no money to get back. Repeated cancellations count against a driver's account.",
        featured: true,
      },
      {
        id: "track",
        question: "Can I see where the car is?",
        answer:
          "During an active trip you can see your driver's basic location, along with the vehicle details, the pickup point and the destination, plus one-tap access to support.",
      },
      {
        id: "ratings",
        question: "Who can leave a rating?",
        answer:
          "Both sides, and only after a completed trip — a passenger rates the driver, a driver rates the passenger, one review each. Cancelled trips cannot be reviewed, so ratings reflect journeys that actually happened.",
      },
    ],
  },
  {
    id: "apps",
    heading: "Apps and accounts",
    description: "Getting set up as a passenger or a driver.",
    items: [
      {
        id: "apps",
        question: "Is there an app?",
        answer:
          "Yes — a passenger app and a separate driver app, both built for mobile first. The store listings go live at launch; until then, join the waitlist from the download page and we will send you the link.",
        featured: true,
      },
      {
        id: "signup",
        question: "What do I need to sign up as a passenger?",
        answer:
          "A phone number. You verify it with an OTP, add your name, and you are ready to book. NID is not required to open a passenger account or to make a normal booking.",
      },
      {
        id: "driver-signup",
        question: "What do I need to sign up as a driver?",
        answer:
          "Your phone number, your NID, a valid driving licence and the registration papers for the vehicle you want to drive. Once those are verified you can publish rental availability, post return trips and send offers.",
      },
      {
        id: "commission",
        question: "How does GariGhora make money?",
        answer:
          "A commission on completed trips, paid by the driver rather than added to the passenger's fare. The driver collects the full fare in cash and settles the commission separately by bKash, Nagad, bank transfer or cash.",
      },
    ],
  },
];

/** Flat list, for search or sitemaps. */
export const allFaqs: FaqItem[] = faqGroups.flatMap((group) => group.items);

/** The short selection shown on the home page. */
export const featuredFaqs: FaqItem[] = allFaqs.filter((faq) => faq.featured);
