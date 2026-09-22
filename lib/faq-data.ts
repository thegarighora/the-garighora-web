/**
 * FAQ shapes and the selectors pages use to slice them.
 *
 * The questions themselves live per locale in lib/i18n/content/<locale>/faq.ts.
 * Ids are shared across locales so that a page asking for "why-cheaper" gets
 * the right question in whichever language it is rendering.
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

/** Flat list, for FAQPage structured data or search. */
export function allFaqs(groups: FaqGroup[]): FaqItem[] {
  return groups.flatMap((group) => group.items);
}

/** The short selection shown on the home page. */
export function featuredFaqs(groups: FaqGroup[]): FaqItem[] {
  return allFaqs(groups).filter((faq) => faq.featured);
}

/**
 * The questions a service page wants, in the order it asked for them — so
 * /rental-car and /return-car control their own running order rather than
 * inheriting the order of the master list.
 */
export function pickFaqs(groups: FaqGroup[], ids: string[]): FaqItem[] {
  const byId = new Map(allFaqs(groups).map((faq) => [faq.id, faq]));
  return ids
    .map((id) => byId.get(id))
    .filter((faq): faq is FaqItem => faq !== undefined);
}
