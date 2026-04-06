export type LocalizedText = {
  zh: string;
  en: string;
};

export type ProjectMeta = {
  label: LocalizedText;
  value: LocalizedText;
};

export type ProjectSection = {
  title: LocalizedText;
  body: LocalizedText[];
};

export type ProjectDetail = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  heroLabel: LocalizedText;
  meta: ProjectMeta[];
  outcomes: LocalizedText[];
  sections: ProjectSection[];
  cta: {
    label: LocalizedText;
    href: string;
  };
};

export type SiteContent = {
  brand: LocalizedText;
  nav: Array<{
    label: LocalizedText;
    href: string;
  }>;
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
  };
  featuredProject: {
    label: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    href: string;
  };
  contact: {
    title: LocalizedText;
    description: LocalizedText;
    methods: Array<{
      label: LocalizedText;
      value: string;
      href: string;
      accent: "red" | "blue" | "yellow";
    }>;
  };
  footer: LocalizedText;
};
