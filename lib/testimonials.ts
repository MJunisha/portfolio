export type TestimonialPosition =
  | "opening-work"
  | "work-studies"
  | "studies-advisory"
  | "advisory-footer";

export type Testimonial = {
  position: TestimonialPosition;
  strengthLabel: string;
  quote: string;
  name: string;
  title: string;
  linkedinUrl: string;
  relationship: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    position: "opening-work",
    strengthLabel: "On foresight, not firefighting",
    quote:
      "She has an unusual eye for the problem no one else has spotted yet — and the systems-thinking to build a team around solving it before it becomes a crisis.",
    name: "Shishir Goel",
    title: "Founding Partner, GoGroup",
    linkedinUrl: "https://www.linkedin.com/in/shishirgoel/",
    relationship: "Worked together, different teams",
    date: "April 2016",
  },
  {
    position: "work-studies",
    strengthLabel: "On asking the right question",
    quote:
      "A cross-functional partner who keeps teams moving under real deadline pressure, and a strategic thinker who asks the right question before reaching for a solution.",
    name: "Eric Price",
    title: "Product Manager, Meta",
    linkedinUrl: "https://www.linkedin.com/in/ericsethprice/",
    relationship: "Senior to Junisha, didn't manage her directly",
    date: "December 2015",
  },
  {
    position: "studies-advisory",
    strengthLabel: "On leadership under pressure",
    quote:
      "Built a 25-person quality org from nothing, and held the line between shipping fast and shipping broken. Delivers when the pressure is real.",
    name: "Aarti Gupta",
    title: "Engineering Leader",
    linkedinUrl: "https://www.linkedin.com/in/aarti-gupta-a8727714/",
    relationship: "Worked together, same team",
    date: "April 2016",
  },
  {
    position: "advisory-footer",
    strengthLabel: "On bridging product and engineering",
    quote:
      "Moves fluently between the big idea and the screen-level detail — and translates engineering constraints back into better product decisions.",
    name: "Hardik Belani",
    title: "Hands-on Engineering Leader",
    linkedinUrl: "https://www.linkedin.com/in/hardikbelani/",
    relationship: "Worked together, same team",
    date: "December 2015",
  },
];
