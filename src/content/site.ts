// Approved website copy, transcribed from docs/content-structure.md
// (DEC-014 and DEC-019). Do not add figures, quotations, or service
// promises here without a recorded owner decision.

export const siteCopy = {
  hero: {
    headingLines: ["Your vision,", "Our design"] as const,
    ctaLabel: "LEARN MORE",
    imagePlaceholder: "Hero visual: original magazine-cover sample pending rights clearance",
  },
  about: {
    heading: "Distinctive design for growing businesses",
    body:
      "Founded in Blantyre, Poster Perfect is built on a simple belief: great businesses deserve great design. We help startups, restaurants, salons and growing businesses in Malawi and across Africa access custom branding and visual design without the cost of a traditional agency. Our services span custom logos and brand kits, social media graphics, restaurant menus, posters, flyers, business cards, brochures, websites, packaging and labels. Our approach is partnership over transaction: we listen first, design second, and refine the work together so it reflects each client's vision. Our vision is to help 1,000 African brands compete globally with visuals that command respect.",
  },
  value: {
    heading: "Count on Poster Perfect to look after your brand needs",
    body:
      "We design custom logos and brand kits, social media graphics, restaurant menus, posters, flyers, business cards, brochures, websites, packaging and labels.",
    points: ["RELIABILITY", "PERSONALIZED APPROACH", "TIMELY DELIVERY", "HIGH STANDARDS"] as const,
  },
  services: {
    heading: "Our Services",
    intro: "Featured service categories",
    items: [
      { title: "Brochures", imageLabel: "Brochure sample" },
      { title: "Logos", imageLabel: "Logo sample" },
      { title: "Magazine covers", imageLabel: "Magazine cover sample" },
    ] as const,
  },
  statistics: {
    placeholderText: "Statistic to be confirmed",
    tileCount: 3,
  },
  testimonials: {
    heading: "Client Testimonials",
    placeholderText: "Client testimonial to be added",
    attributionPlaceholder: "Attribution to be added",
    cardCount: 3,
  },
  contact: {
    headingVisuallyHidden: "Contact and office details",
    footerImagePlaceholder: "Footer visual: original sample pending rights clearance",
    fields: [
      { label: "Headquarters", placeholder: "Location to be confirmed" },
      { label: "Telephone", placeholder: "Telephone number to be added" },
      { label: "Email", placeholder: "Email address to be added" },
    ] as const,
    officeHours: {
      heading: "Office hours",
      lines: ["Monday to Friday", "9:00 am to 5:00 pm", "Weekends by appointment"] as const,
      note: "Confirm current office hours before publication",
    },
    social: {
      heading: "Social media",
      networks: [
        { name: "Facebook", placeholder: "Profile link to be added" },
        { name: "X / Twitter", placeholder: "Profile link to be added" },
        { name: "Instagram", placeholder: "Profile link to be added" },
      ] as const,
    },
  },
  wordmark: "Poster Perfect",
} as const;
