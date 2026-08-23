export const profile = {
  name: "Junisha Malkani",
  tagline: "Enterprise Decision Design Counsel",
  subTagline: "Senior Product Manager, ORO Labs — encoding judgment into enterprise workflows",
  location: "Pune, Maharashtra, India",
  email: "jhablani@gmail.com",
  linkedin: "https://www.linkedin.com/in/junisha-malkani/",
  instagram: "https://www.instagram.com/styleitwithjune/",
};

export const philosophy = {
  quote:
    "The hardest product problems I've worked on weren't technical. They were decisions disguised as software.",
  paragraphs: [
    "They usually surfaced as requests for another enhancement, another workflow, another integration, or another dashboard. But the real challenge is rarely what to build — it's deciding who gets to decide, under what conditions, and what trade-offs the product should enforce.",
    "Whether I was building consumer products, scaling a family's retail business, or designing enterprise procurement workflows, I kept seeing the same pattern: organizations don't struggle because they're short of ideas. They struggle because complexity quietly accumulates until every decision becomes slower, every exception becomes permanent, and every new feature makes the system harder to understand.",
    "Great products don't just automate work — they encode judgment. Their quality lies in the decisions they enable people to make, and the unnecessary decisions they eliminate altogether. That's the counsel I bring into every enterprise workflow I design: fewer, better-governed decisions over more features.",
    "At present I'm building AI-native enterprise products and exploring how AI is reshaping software architecture, enterprise workflows, and decision-making — particularly at the intersection of product strategy, user experience, governance, and technology.",
  ],
};

export const positioning = {
  intro:
    "I work as an Enterprise Decision Design counsel — helping organizations figure out who gets to decide, under what conditions, and what trade-offs a system should enforce, before a single workflow gets built.",
  current:
    "At ORO Labs, I own product strategy for Supplier Experience, designing procurement workflows that hold up under enterprise governance, compliance, and scale across global rollouts. Before that, I spent three years as a founder rebuilding the operating model of a 40-year-old retail business from the ground up — which is where I learned that most \"product\" problems are really decision-rights problems wearing a UI.",
  focusAreas: [
    { label: "Enterprise Workflow Design", value: "Procurement, supplier collaboration, and approval systems built for regulated environments" },
    { label: "Decision Governance", value: "Defining who decides, under what conditions, and what the system should enforce automatically" },
    { label: "AI-native Product Architecture", value: "Rethinking enterprise software as AI reshapes workflows and decision-making" },
    { label: "Founder-tested Judgment", value: "Product instincts sharpened by running P&L, ops, and growth for a real business" },
  ],
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    company: "ORO Labs",
    role: "Senior Product Manager",
    period: "January 2024 — Present",
    location: "Pune District",
    current: true,
    bullets: [
      "Own the product strategy and roadmap for Supplier Experience, balancing enterprise usability, governance, and scalability across complex procurement ecosystems.",
      "Partner with global enterprise customers to design rollout strategies that align product architecture with operational, compliance, and organizational realities, enabling adoption across highly regulated environments.",
      "Translate insights from large-scale enterprise deployments into product decisions that improve the platform for every customer.",
      "Impact: Protected and expanded ARR by evolving supplier collaboration and engagement into a scalable platform capability.",
    ],
  },
  {
    company: "Bunawat",
    role: "Co-Founder",
    period: "August 2020 — December 2023",
    location: "Pune District",
    bullets: [
      "Led the digital transformation of a 40-year-old brick-and-mortar apparel business, reimagining its operating model to build a scalable omnichannel brand rather than simply launching an e-commerce website.",
      "Invested in a community-led growth ecosystem — resellers, influencers, and customers — instead of relying primarily on paid acquisition, balancing sustainable growth with capital efficiency.",
      "Impact: Grew the business to 8-figure revenue in year one of digital operations, then 50% YoY growth for two years. Served 40,000+ customers, kept returns below 12%, NPS above 4/5, and paid marketing below 15% of GMV.",
    ],
  },
  {
    company: "Startups — Lido Learning · SHEROES & Mahila Money",
    role: "Lead Product Manager",
    period: "January 2020 — May 2022",
    location: "Pune District",
    bullets: [
      "Lido Learning — Product Lead, Parent Experience & CRM: owned parent/child onboarding, reframing it as a cross-functional systems problem and introducing agile practices that cut onboarding turnaround time 4×.",
      "SHEROES & Mahila Money — Founder's Office: led strategic initiatives across fintech infrastructure and partnerships, implemented an endpoint security solution enabling expansion into new enterprise markets.",
    ],
  },
];

export type EarlyCareerEntry = {
  company: string;
  role: string;
  period: string;
  note: string;
};

export const earlyCareer: EarlyCareerEntry[] = [
  {
    company: "OST",
    role: "Senior Product Manager",
    period: "May 2019 — Jan 2020",
    note: "Product workflows and APIs for a blockchain platform issuing branded digital tokens.",
  },
  {
    company: "OST \"Simple Token\"",
    role: "Product Manager",
    period: "Oct 2017 — Apr 2019",
    note: "KYC and token transfer MVP for a global token sale that exceeded target by 180%.",
  },
  {
    company: "Pepo",
    role: "Product Manager",
    period: "Feb 2016 — Dec 2017",
    note: "Backend systems and admin tooling for a social app; 500 Startups mentorship program.",
  },
  {
    company: "Fab.com",
    role: "Director of QA at Fab & Hem",
    period: "Apr 2012 — Jan 2016",
    note: "Built and scaled a 21-person QA org for a platform serving 10M+ users; 3× faster releases.",
  },
  {
    company: "SoftDEL Systems",
    role: "Technical Product Manager → Sr. Test Engineer",
    period: "Feb 2010 — Mar 2012",
    note: "Requirements and demos for an industrial NMS; built out test automation infrastructure.",
  },
  {
    company: "Cisco",
    role: "Member of Technical Staff",
    period: "Jan 2006 — Jan 2010",
    note: "Test infrastructure and scripting for Rev-A and VOIP protocols.",
  },
];

export type CaseStudyStat = { label: string; value: string };

export type CaseStudySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

// What kind of work this is — distinct from `theme`, which is a topic label (e.g. "Acquisition").
export type CaseStudyKind =
  | "professional"
  | "founder"
  | "independent-study"
  | "curious-build";

// What kind of claim this study represents. None of the current independent
// studies are achieved outcomes — this field exists so the site never implies
// otherwise, now or as new case studies are added.
export type EpistemicStatus =
  | "actual-outcome"
  | "recommendation"
  | "hypothesis"
  | "projection"
  | "experiment";

export type CaseStudy = {
  slug: string;
  title: string;
  theme: string;
  tagline: string;
  kind: CaseStudyKind;
  epistemicStatus: EpistemicStatus;
  // Homepage curation flag. Left `false` for all existing studies until the
  // homepage's featured set is deliberately chosen.
  featured: boolean;
  stats: CaseStudyStat[];
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "bunawat",
    title: "Bunawat",
    theme: "Digital Transformation",
    tagline:
      "Taking a forty-year-old, relationship-led retail business online without losing the trust that made customers buy.",
    kind: "founder",
    epistemicStatus: "actual-outcome",
    featured: true,
    stats: [
      { label: "Revenue", value: "8-figure in Yr 1, +50% YoY ×2" },
      { label: "Customers", value: "40,000+" },
      { label: "Returns", value: "<12% (NPS >4/5)" },
    ],
    sections: [
      {
        heading: "Context",
        paragraphs: [
          "Bunawat was a roughly forty-year-old offline apparel retail business. Like most of that trade, it ran on assisted, relationship-led shopping — customers who trusted a known seller's judgment as much as the product itself.",
          "In August 2020 I joined as co-founder to lead its transition into a digital, omnichannel brand, staying through December 2023.",
        ],
      },
      {
        heading: "The Decision",
        paragraphs: [
          "How do you take a retail business built on human assistance and trust online — without removing the assistance that made customers buy?",
        ],
      },
      {
        heading: "Why it was difficult",
        bullets: [
          "Digitizing a relationship-led business risks trading trust for convenience — the parts of buying that felt human don't automatically survive a self-service storefront.",
          "Growth had to be earned without inflating returns, a common failure mode when apparel moves online and fit becomes harder to judge on a screen than in a store.",
          "Reach had to be built without becoming dependent on paid acquisition — choosing to grow primarily through resellers, influencers and customers instead meant trading a faster, more predictable channel for a slower, relationship-dependent one.",
        ],
      },
      {
        heading: "My judgment",
        paragraphs: [
          "The judgment was not to treat human assistance as friction to engineer away. Rather than replace Bunawat's trusted sellers with a purely self-service storefront, the growth engine was rebuilt around the people who already carried that trust — resellers, influencers and customers — turned into the primary channel for digital growth, with paid acquisition kept deliberately secondary (marketing stayed below roughly 15% of GMV). Assistance didn't disappear when the business went digital; it just changed who delivered it and at what scale.",
        ],
      },
      {
        heading: "What changed",
        paragraphs: [
          "The result was an omnichannel brand rather than a website bolted onto an existing shop — a reimagined operating model where resellers and influencers extended the assisted-buying relationship into digital channels, and community-led growth carried more of the acquisition load than paid marketing did.",
        ],
      },
      {
        heading: "Outcomes",
        bullets: [
          "8-figure revenue in the first year of digital operations, then roughly 50% year-over-year growth for two years.",
          "40,000+ customers served.",
          "Returns kept below 12%.",
          "NPS above 4 out of 5.",
          "Paid marketing kept below roughly 15% of GMV.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "Growth quality mattered as much as growth volume. Bunawat's growth engine was deliberately rebuilt around resellers, influencers and customers rather than paid acquisition — and the business held returns below 12% and NPS above 4/5 while scaling past 40,000 customers. I can't prove the channel choice caused those numbers, but the pattern is consistent with a plainer judgment: in a trust-heavy category, the channel and operating model need to reinforce the customer relationship, not just optimise for acquisition.",
          "That's also the deeper design lesson underneath the project: what looks like friction in an offline experience may actually be carrying trust. Digitising a business doesn't automatically mean removing every human element — the real design problem is deciding what should be simplified and what should be preserved.",
        ],
      },
    ],
  },
  {
    slug: "fab-hem",
    title: "Fab.com / Hem",
    theme: "Quality Ownership",
    tagline:
      "Moving quality ownership into the development cycle — without turning QA into another release gate.",
    kind: "professional",
    epistemicStatus: "actual-outcome",
    featured: true,
    stats: [
      { label: "Production hotfixes", value: "~3–4/week → ~1–2/month" },
      { label: "QA org", value: "2 → 21, across ~13 teams" },
      { label: "Platform scale", value: "10M+ users" },
    ],
    sections: [
      {
        heading: "Context",
        paragraphs: [
          "When I joined as Director of QA at Fab.com / Hem, the platform served 10M+ users, and QA was a newly formed team of roughly two people. The dominant process was code, unit test, ship — there was no clear ownership for final quality sign-off, and production issues were requiring hotfixes roughly three to four times a week.",
        ],
      },
      {
        heading: "The Decision",
        paragraphs: [
          "Where should ownership for quality live, if the goal is to actually improve quality without slowing delivery down?",
        ],
      },
      {
        heading: "Why it was difficult",
        paragraphs: [
          "The obvious answer — hire more QA people — was also the least useful one. More people testing at the end of the same process would still leave quality arriving too late to change anything.",
          "Moving QA earlier created its own tension: the point was to improve quality without adding time to delivery, which meant QA engineers had to get involved while developers were still building and unit-testing, without becoming a second bottleneck in that same cycle.",
          "Spreading QA across roughly 13 product and engineering teams created a further risk — that quality knowledge would fragment into 13 disconnected pockets, or concentrate in single people who became points of failure for entire systems.",
        ],
      },
      {
        heading: "My judgment",
        paragraphs: [
          "Adding headcount wasn't going to fix a problem that was really about where responsibility sat. If quality only showed up at the end, as a release gate, no amount of people would change that. The judgment was to move ownership of quality earlier into the development cycle itself, and to design the QA organisation so that understanding of a system was never trapped in one person.",
        ],
      },
      {
        heading: "What changed",
        paragraphs: [
          "QA engineers were embedded in pods across roughly 13 product and engineering teams, working with developers from the point features were still being unit-tested — not as a downstream check afterward. That required understanding each feature at an architectural level rather than testing it only at the UI: reasoning about Redis and data entries, backend-to-frontend API behaviour, the correctness of picking and packing algorithms, and how systems interacted with each other.",
          "I deliberately cross-trained people across systems rather than letting expertise sit with one person — someone deep in warehouse management would also work on order management, and sometimes mobile — aiming for T-shaped people: deep in one area, broad enough across the others to reason about interactions and avoid single points of failure. The structure itself — hiring, team design, allocation across squads, quality processes, sign-off models, architecture training, release cadence — was my design, built in close coordination with engineering leads and product managers.",
        ],
      },
      {
        heading: "Outcomes",
        paragraphs: [
          "The clearest evidence is production hotfix frequency. Over the first roughly ten months, production hotfixes moved from around three to four per week to around one to two per month. As the operating model matured, they became increasingly occasional — sometimes roughly one every three to four months.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "Quality became, for me, an ownership and system-design problem rather than something you verify at the end. A QA engineer who understands the system and takes responsibility for the experience it produces is doing something different from one who's just checking it. That reframing is also part of why moving from quality into product thinking later felt like a natural progression: the closer I got to the architecture, the closer I was already standing to the product and the customer experience.",
          "The team-design lesson was the value of T-shaped people — deep in one area, broad enough across adjacent systems to catch what a narrower specialist would miss, and to avoid quality knowledge concentrating in any single person.",
          "The principle I still carry from this into product and systems work: design ownership into the system early. If responsibility only shows up at the end — in quality, in product decisions, in approvals, in workflows — you create rework and bottlenecks. The structure of ownership matters as much as the process itself.",
        ],
      },
    ],
  },
  {
    slug: "snapmint",
    title: "Snapmint",
    theme: "Acquisition",
    tagline:
      "A BNPL acquisition strategy for Bharat's micro-business owners who are tech-savvy enough to transact online but locked out of formal credit.",
    kind: "independent-study",
    epistemicStatus: "recommendation",
    featured: false,
    stats: [
      { label: "TAM", value: "₹4,400 Cr" },
      { label: "CAC : LTV", value: "1,000-1,200 : 9,000" },
      { label: "Retention", value: "18-24 months" },
    ],
    sections: [
      {
        heading: "The opportunity",
        paragraphs: [
          "“Udhaar kise chahiye Maam. Jab paisa haath mein na ho aur dhanda badana ho to udhaar lena padta hai” — Keshav, a retail cloth merchant from Solan, Himachal.",
          "There are ~6 Cr credit cards in circulation in India, but 20-30 Cr people transacting online. Merchants like Keshav are digitally capable but have low to zero credit history or collateral — pushing many into informal, high-interest revolving debt.",
          "Snapmint bridges that gap with instant credit at nominal interest rates, through bank tie-ups (Kotak, AU) and an RBI-registered NBFC — building a responsible funnel into credit cards and personal/business loans for aspiring Bharat.",
        ],
      },
      {
        heading: "Ideal customer profile",
        paragraphs: [
          "Four segments transact for credit; I focused the acquisition strategy on the two with the strongest product-market fit:",
        ],
        bullets: [
          "Need First — micro-business owners (25-45, Tier 2/3), running family businesses 20+ years, earning ₹35-50K/month. Need credit to procure inventory, pay salaries and vendor dues.",
          "Financial Health Conscious — freelancers and solopreneurs (21-30, metro-based, Tier 2/3 native), self-employed under 4 years, earning ₹50-70K/month. Credit-averse to informal high-interest sources, want to build a clean credit score.",
        ],
      },
      {
        heading: "Sizing the market",
        bullets: [
          "6.33 Cr unregistered MSMEs in India, 99.47% of them micro-businesses.",
          "49% urban → 3.08 Cr micro-businesses; 68% are manufacturing/trading needing regular working capital → 2 Cr businesses.",
          "~90% of those earn ₹5-10L/year and would need such loans, minus low-ticket exclusions → ~76 lakh businesses.",
          "Capturing 30% share of this ICP in a crowded BNPL market → 22 lakh businesses, against ₹11.9 lakh Cr of individual-business credit exposure (MSME Pulse, SIDBI 2019).",
          "That resolves to a ₹4,400 Cr TAM, with room to expand ~3× by moving into adjacent ICPs later.",
        ],
      },
      {
        heading: "Channel strategy",
        paragraphs: [
          "Lending is a taboo product — people don't like discussing debt — so organic was deprioritized in favor of two channels with faster payback:",
        ],
        bullets: [
          "Paid Ads — this demographic consumes heavy regional video content; CAC ₹1,000-1,200 against an LTV of ₹9,000 over 18-24 months of retention, a healthy ratio to fund.",
          "Product Integrations & Partner Program — Tally + WhatsApp are the two systems already embedded in Tier 2/3 Bharat's business workflows.",
          "SEO — valuable but slow, so sequenced third.",
        ],
      },
      {
        heading: "The partner program",
        paragraphs: [
          "Informal credit today already flows through wholesalers extending 15-30 day credit lines to smaller traders — the acquisition strategy plugs Snapmint into that existing relationship instead of replacing it.",
        ],
        bullets: [
          "Cohort 1 — merchants running informal credit lines, sourced from a database built off Justdial, Yellow Pages and similar; product integration starts with Tally + WhatsApp + Snapmint.",
          "Cohort 2 — D2C webstores, onboarded via storefront integrations as D2C adoption grows.",
          "Reward stack — half cashback, half SnapMoney for every credit line opened, with rewards personalized to spending habits (Swiggy/BlinkIt for grocery-heavy users, travel gift cards for merchants who travel for business, electronics vouchers for high spenders).",
          "A Tally plugin triggers WhatsApp dues reminders via the WhatsApp Business API — meeting merchants inside the workflow they already use.",
        ],
      },
      {
        heading: "Building credit literacy into the product",
        paragraphs: [
          "As store owners repay credit, they unlock higher credit limits — gamified through a quiz-style “Business grow karne ki seedhi” that teaches what it takes to get a higher loan sanctioned, and why loan money should stay ring-fenced for business use.",
          "A content loop closes the acquisition circle: after a user's third top-up, they're nudged to record an experience video, which feeds both CGC (testimonials, influencer collaborations, SEO-driven blogs on micro-business finance) and UGC loops.",
        ],
      },
    ],
  },
  {
    slug: "koskii",
    title: "Koskii",
    theme: "Engagement & Retention",
    tagline:
      "A trust-first engagement and retention system for a D2C Indian occasion-wear brand serving value-conscious, Tier 2/3 India.",
    kind: "independent-study",
    epistemicStatus: "hypothesis",
    featured: false,
    stats: [
      { label: "Market", value: "₹75,000 Cr" },
      { label: "Occasion-wear segment", value: "₹35,000 Cr" },
      { label: "Active-user threshold", value: "₹4K / 90 days" },
    ],
    sections: [
      {
        heading: "The market",
        paragraphs: [
          "The women's ethnic wear market is worth ₹75,000 Cr, of which occasion wear is ~₹35,000 Cr. Organised players — Meena Bazaar, Neeru's, Soch, Mohey, Aza — together account for only ~₹3,000 Cr, concentrated in urban India.",
          "That leaves most of the market unorganised and underserved — specifically value-conscious buyers in sub-urban metros and Tier 2/3 India, which is where Koskii plays.",
        ],
      },
      {
        heading: "Who the ICP is",
        paragraphs: [
          "She juggles a lot and has little time for trial and error, so she chooses slowly and deliberately — often on a friend or family recommendation. She's a little hesitant about digital platforms, which is why she prefers finishing purchases over 1-to-1 WhatsApp.",
          "An unspoken pattern: she often feels guilty buying for herself alone, so she buys for her kids, sister, mother or husband alongside her own purchase — it feels good to be the caregiver.",
          "The takeaway: trust has to sit at the foundation of every interaction. That means building for trust generation, flexibility, and simplicity — and showing up in the channels where trust already exists, especially tight-knit friend and family networks.",
        ],
      },
      {
        heading: "Value proposition — present vs. proposed",
        bullets: [
          "Present: affordable, trendy, vibrant occasion wear, carefully curated for festivities, backed by assisted sales to help budget-conscious buyers decide with confidence.",
          "Proposed extensions: exclusive styling/grooming tips tied to what she bought; shop-together tools to bring friends and family into the purchase; a Share-Earn-accumulate-gold loop that lets her leverage her own network.",
          "Because CAC is only rising and competition is intensifying, Koskii can't rely on legacy playbooks — it has to win on education, personal connection, and closed-community enablement.",
        ],
      },
      {
        heading: "Engagement framework",
        paragraphs: [
          "Users segment into three tiers by depth and frequency, each unlocked by a different product hook — cashback first to warm up new users (first 3-4 months), then feature access (group shopping, exclusive discounts, styling sessions, at-home Trousseau trials) as spend increases.",
        ],
        bullets: [
          "Casual — 1 order every 3 months, ~₹4,000 LTV/year. Values affordability + assisted sales.",
          "Core — 1 order every 2 months, ₹8,000-25,000 LTV/year. Values affordability + group-shopping discounts; refers 2-4 people.",
          "Power (often a reseller persona) — 2 orders/month, >₹50,000 LTV/year. Values exclusive deals + at-home trials; brings in ~10 new customers a month.",
          "North-star metrics: GMV/user/month, repeat orders in a 2-month window (also surfaces the reseller persona), and how often users find shared content valuable enough to re-share.",
        ],
      },
      {
        heading: "Retention — what drives churn",
        paragraphs: [
          "No historical retention baseline existed, so the model assumes the young, fashion-conscious sub-urban ICP and the reseller ICP drive the best retention, via referrals/WhatsApp and the partner program respectively — with live commerce and personalized bundling as the retention-driving sub-features.",
        ],
        bullets: [
          "Voluntary churn drivers: slow site load, unresolved support queries, delayed delivery, poor fit, stock-outs, weak discoverability, product condition, missed live calls.",
          "Involuntary churn drivers: cheaper price elsewhere, buying offline instead, disliking the collection.",
          "Negative signals to track: cancellations, opting out of WhatsApp/marking as spam, declining NPS or star ratings, rising return requests, falling content engagement, skipping sale/group events, and support-ticket volume.",
        ],
      },
      {
        heading: "Activation — from the onboarding teardown",
        paragraphs: [
          "A companion onboarding teardown defined six activation hypotheses to test — spanning post-purchase event participation, fast repeat-order behavior, cart exploration time, referral-driven orders, ongoing social engagement, and cart-abandonment recovery nudges.",
        ],
        bullets: [
          "Core onboarding metrics: D1 / D7 / D30 retention (WAU/MAU), bounce and exit rates, landing-to-signup ratio, add-to-cart → checkout-started → purchase-completed funnel, video-call scheduled → done → converted ratio, and referral invites sent vs. accepted vs. converted.",
        ],
      },
    ],
  },
  {
    slug: "atomberg",
    title: "Atomberg",
    theme: "Event Led Growth",
    tagline:
      "A four-tier event-led growth strategy to help Atomberg scale from ₹1,000 Cr to ₹5,000 Cr ARR by 2030.",
    kind: "independent-study",
    epistemicStatus: "projection",
    featured: false,
    stats: [
      { label: "Growth via events", value: "~14%" },
      { label: "Target revenue / yr", value: "₹135 Cr" },
      { label: "CAC : LTV", value: "1 : 10" },
    ],
    sections: [
      {
        heading: "Context",
        paragraphs: [
          "Atomberg's BLDC-motor fans cut power consumption 65% and save ~₹1,500/year per fan — a proposition that's already driven the fan vertical to ₹1,000 Cr ARR. The company is now bringing the same technology to India's first BLDC-powered mixer grinder.",
          "As Atomberg targets ₹5,000 Cr ARR by 2030, event-led growth is proposed not as a marketing checkbox but as a strategic lever — four distinct event series, together projected to generate ₹135 Cr/year and ~14% of the six-year growth target.",
        ],
      },
      {
        heading: "Is event-led growth the right lever?",
        paragraphs: [
          "Run against a litmus test, the product profile says yes: it's a high-AOV, low-frequency purchase (₹10,000+ minimum per home), with a 3-6 week sales cycle and a healthy 1:10 CAC-to-LTV ratio — exactly the profile where high-touch, relationship-driven events outperform pure digital acquisition.",
        ],
      },
      {
        heading: "The four-tier event portfolio",
        bullets: [
          "Build for Efficiency Summit — quarterly, targets mid-market builders (“Integrated Market Movers”), positions Atomberg as the preferred appliance partner for new residential/commercial projects. Pilot: 400 builders/event → 35 partner accounts at ~₹50L average contract value. Projected 48% of the ₹135 Cr event revenue target.",
          "Atomberg's Innovation & Impact Fest — annual flagship, for industry leaders, partners and policymakers, showcasing innovation and forging strategic alliances. Pilot: 600 stakeholders → 30 new alliances at ~₹1.75 Cr average contract value. Projected 35% of the target.",
          "Bharat Growth Connect — bi-monthly, for traditional distributors, retailers and electricians in rural/semi-urban regions (“Bharat Connectors”), building local partner trust and consistency. Pilot: 80 partners engaged → 8 new local partners at ~₹40L average contract value. Projected 12% of the target.",
          "Green Lifestyle Inspo — bi-annual, for sustainability-minded consumers (“Trendy Comfort-Seekers” and “Conscious Living Stewards”), building brand loyalty and category leadership. Pilot: 3,000 consumers across 2 cities → 600 new customers at ~₹15,000 average yearly value. Projected 1% of the target — low direct revenue, high brand-loyalty payoff.",
        ],
      },
      {
        heading: "Designing the flagship: Build for Efficiency Summit",
        paragraphs: [
          "Deep-diving into the highest-impact series: a 2.5-3 hour hybrid event (in-person + Airmeet/Zoom Events) built around two ideal attendee profiles — Divya, an efficiency-focused development leader with strong budget control, and Raunak, an internal executioner who bridges decision-makers and technical teams.",
          "Hybrid was a deliberate choice: it widens reach to attendees who can't travel, keeps informal in-person networking (“most constructive brainstorming happens over chai and nashta”), and produces attendee-preference data for future events.",
        ],
        bullets: [
          "Opening act (30 min) — founder's personal journey + event roadmap.",
          "Middle act (65 min) — panel discussions on innovation-vs-cost, policy navigation, efficiency-by-design, and staying relevant through 2025, each unlocking a topic-specific guide for attendees; peer breakout and networking sessions with spot awards.",
          "Closing act (40 min) — insights recap, Q&A, awards, virtual product booths, hi-tea with live demos.",
        ],
      },
      {
        heading: "Measuring success",
        bullets: [
          "Leading indicators — registrations from targeted builders, pre-event social/WhatsApp engagement, breakout and networking participation, virtual booth interaction, poll and question engagement.",
          "Lagging indicators — new builder accounts opened, average contract value against the ~₹1.5 Cr target, content engagement by topic, and repeat participation across the event series.",
        ],
      },
      {
        heading: "Budget & ROI",
        paragraphs: [
          "Total budget per Build for Efficiency Summit: ₹10.5L — split across venue & logistics (₹3.3L), virtual platform & tech (₹1.9L), marketing (₹1.55L), content & programming (₹1.75L), and staffing/contingency (₹1L).",
          "ROI is tracked as attendees from target builders × conversion-to-deal % × contract value, divided by total event spend — with a structured 48-hour, weekly, monthly and quarterly follow-up cadence to convert event interest into signed accounts.",
        ],
      },
    ],
  },
];

export const interests = [
  { label: "Focus", detail: "e-commerce, healthcare, and ed-tech", emoji: "🛤️" },
  { label: "Family", detail: "love my girls & parents — prioritize them over everything else", emoji: "👨‍👩‍👧‍👧" },
  { label: "Reading", detail: "~24 books a year", emoji: "📚" },
  { label: "Learning", detail: "a byproduct of reading", emoji: "🤔" },
  { label: "Creator", detail: "designing new corners of my house, and reworking old fashion into new", emoji: "🎨" },
  { label: "Dancing", detail: "Zumba and garba — I always find time for these", emoji: "💃" },
];

export const education = [
  {
    school: "University of Pune",
    credential: "B.E., Computer Science",
    period: "July 2005",
  },
  {
    school: "Sunstone Business School",
    credential: "Nano-MBA, Product Management",
    period: "",
  },
];

export const skills = ["Product Strategy", "Strategic Implementations", "Enterprise SaaS"];
