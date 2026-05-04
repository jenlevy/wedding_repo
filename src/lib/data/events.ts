export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export const timeline: TimelineEvent[] = [
  {
    date: "September 2021",
    title: "We Met",
    description:
      "A chance encounter that changed everything. We immediately clicked and spent the whole evening talking.",
  },
  {
    date: "December 2021",
    title: "First Date",
    description:
      "Coffee turned into dinner, which turned into a long walk. We knew this was something special.",
  },
  {
    date: "June 2023",
    title: "Moved In Together",
    description:
      "We took the leap and found a cozy place to call ours. It finally felt like home.",
  },
  {
    date: "March 2025",
    title: "The Proposal",
    description:
      'A sunset, a question, and a tearful "yes!" — the happiest moment of our lives (so far).',
  },
  {
    date: "October 2026",
    title: "The Big Day!",
    description:
      "We can't wait to say 'I do' surrounded by the people we love most.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What is the dress code?",
    answer:
      "Semi-formal / cocktail attire. Think sundresses, slacks, or a nice suit. Be comfortable — there will be dancing!",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "If your invitation includes a plus one, their name will be on your RSVP. Due to venue capacity we are unable to accommodate additional guests.",
  },
  {
    question: "Is the venue accessible?",
    answer:
      "Yes! The ceremony and reception spaces are fully wheelchair accessible. Please reach out if you have specific needs.",
  },
  {
    question: "Will there be parking?",
    answer:
      "Free parking is available on-site. Rideshare is also a great option as the venue is well-served by Uber and Lyft.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "The ceremony begins at 5:30 PM sharp. We recommend arriving 15–20 minutes early to find your seat.",
  },
  {
    question: "Are children welcome?",
    answer:
      "While we love your little ones, this will be an adults-only celebration. We hope you enjoy a night off!",
  },
  {
    question: "What if I have dietary restrictions?",
    answer:
      "Please note any allergies or dietary needs on your RSVP and we will make sure there are options for you.",
  },
];

export interface ThingToDo {
  name: string;
  category: "eat" | "see" | "do";
  description: string;
  link?: string;
}

export const thingsToDo: ThingToDo[] = [
  {
    name: "The Local Bistro",
    category: "eat",
    description:
      "Farm-to-table brunch spot beloved by locals. Try the shakshuka.",
    link: "#",
  },
  {
    name: "Waterfront Trail",
    category: "do",
    description:
      "A gorgeous 3-mile walk along the harbor. Perfect for a morning stroll.",
    link: "#",
  },
  {
    name: "City Botanical Garden",
    category: "see",
    description:
      "Stunning seasonal gardens and a lovely café. Free entry on weekends.",
    link: "#",
  },
  {
    name: "Craft Brewery District",
    category: "eat",
    description:
      "A half-dozen taprooms within walking distance. Great for an afternoon crawl.",
    link: "#",
  },
  {
    name: "Historic Downtown Walk",
    category: "see",
    description:
      "Beautiful architecture and quirky shops. Guided tours available daily.",
    link: "#",
  },
  {
    name: "Kayak Rentals",
    category: "do",
    description:
      "See the coast from the water. Rentals by the hour, no experience needed.",
    link: "#",
  },
];
