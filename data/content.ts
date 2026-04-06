import { ProjectDetail, SiteContent } from "@/lib/types";

export const locale = "zh" as const;

export const siteContent: SiteContent = {
  brand: {
    zh: "HAO / STUDIO",
    en: "HAO / STUDIO",
  },
  nav: [
    {
      label: { zh: "首页", en: "Home" },
      href: "/",
    },
    {
      label: { zh: "项目", en: "Project" },
      href: "/projects/modular-poster",
    },
    {
      label: { zh: "联系", en: "Contact" },
      href: "#contact",
    },
  ],
  hero: {
    eyebrow: {
      zh: "BAUHAUS INSPIRED DIGITAL PORTFOLIO",
      en: "BAUHAUS INSPIRED DIGITAL PORTFOLIO",
    },
    title: {
      zh: "把界面做成一张会呼吸的现代主义海报",
      en: "Turn interfaces into living modernist posters.",
    },
    description: {
      zh: "我专注于把品牌、内容和交互压缩进强烈又清晰的几何系统里。这个站点展示一种更大胆的个人表达方式：高对比、强构成、清楚传达。",
      en: "I build bold digital identities with geometry, contrast, and clear narrative structure.",
    },
    primaryCta: {
      zh: "查看代表项目",
      en: "View Featured Project",
    },
    secondaryCta: {
      zh: "联系合作",
      en: "Start a Conversation",
    },
  },
  featuredProject: {
    label: {
      zh: "精选项目",
      en: "Featured Project",
    },
    title: {
      zh: "MODULAR POSTER SYSTEM",
      en: "MODULAR POSTER SYSTEM",
    },
    description: {
      zh: "一个把品牌页面、活动视觉和内容叙事统一到同一几何系统里的实验性项目。重点不是装饰，而是让信息层级和视觉节奏同时成立。",
      en: "An experimental project that aligns brand pages, campaign visuals, and editorial storytelling under one geometric system.",
    },
    href: "/projects/modular-poster",
  },
  contact: {
    title: {
      zh: "让下一张海报开始动起来",
      en: "Let's make the next poster move.",
    },
    description: {
      zh: "如果你正在筹备个人品牌、作品集、活动页面或视觉实验，我们可以从一个清晰的问题出发，把它设计成值得记住的界面。",
      en: "If you're building a portfolio, campaign, or visual experiment, let's turn it into a memorable interface.",
    },
    methods: [
      {
        label: { zh: "邮箱", en: "Email" },
        value: "hello@hao.studio",
        href: "mailto:hello@hao.studio",
        accent: "red",
      },
      {
        label: { zh: "GitHub", en: "GitHub" },
        value: "github.com/hao",
        href: "https://github.com/hao",
        accent: "blue",
      },
      {
        label: { zh: "X / Twitter", en: "X / Twitter" },
        value: "@hao__studio",
        href: "https://x.com/hao__studio",
        accent: "yellow",
      },
    ],
  },
  footer: {
    zh: "构成、节奏、功能。2026 HAO / STUDIO.",
    en: "Composition, rhythm, function. 2026 HAO / STUDIO.",
  },
};

export const featuredProject: ProjectDetail = {
  slug: "modular-poster",
  title: {
    zh: "MODULAR POSTER SYSTEM",
    en: "MODULAR POSTER SYSTEM",
  },
  summary: {
    zh: "为一个创意工作室打造的数字作品集概念页，把品牌识别、内容结构和转化路径统一成一套 Bauhaus 风格的网页语言。",
    en: "A digital portfolio concept for a creative studio, unifying identity, content structure, and conversion into one Bauhaus-inspired web language.",
  },
  heroLabel: {
    zh: "项目详情",
    en: "Project Detail",
  },
  meta: [
    {
      label: { zh: "角色", en: "Role" },
      value: { zh: "视觉设计 / 前端开发", en: "Visual Design / Frontend" },
    },
    {
      label: { zh: "周期", en: "Timeline" },
      value: { zh: "3 周概念冲刺", en: "3-week concept sprint" },
    },
    {
      label: { zh: "技术", en: "Stack" },
      value: { zh: "Next.js / Tailwind / Motion", en: "Next.js / Tailwind / Motion" },
    },
  ],
  outcomes: [
    {
      zh: "把传统作品集页面改造成更具识别度的品牌入口。",
      en: "Turned a conventional portfolio page into a more distinctive brand entry point.",
    },
    {
      zh: "用统一几何模块提升了内容复用和页面一致性。",
      en: "Improved reuse and consistency through a unified geometric module system.",
    },
    {
      zh: "让视觉表达和信息层级不再彼此妥协。",
      en: "Aligned visual expression with information hierarchy instead of trading one for the other.",
    },
  ],
  sections: [
    {
      title: { zh: "挑战", en: "Challenge" },
      body: [
        {
          zh: "客户原有页面内容完整，但视觉语言松散，无法在第一屏形成记忆点。项目需要在不牺牲可读性的前提下，建立更鲜明的品牌姿态。",
          en: "The original site had complete content but a loose visual language that lacked a memorable first impression.",
        },
      ],
    },
    {
      title: { zh: "解决方案", en: "Solution" },
      body: [
        {
          zh: "我将页面系统抽象成“海报模块”：每个模块都由粗边框、硬阴影、主色块和几何构件组成，再通过不对称网格重新编排内容节奏。",
          en: "I abstracted the interface into poster modules built from thick borders, hard shadows, solid primary blocks, and geometric forms.",
        },
        {
          zh: "交互层面只保留机械感明显的快速反馈，例如按钮下压、卡片轻微上浮和图形旋转，保证整体气质统一。",
          en: "Interactions stay mechanical and decisive: pressed buttons, lifted cards, and rotating forms keep the tone consistent.",
        },
      ],
    },
    {
      title: { zh: "结果", en: "Outcome" },
      body: [
        {
          zh: "最终交付的是一套可扩展的网页语言，而不是单独一张页面。后续新增案例、活动或文章时，都能沿用同一套视觉骨架继续扩展。",
          en: "The deliverable is a scalable visual language rather than a single page, ready to extend into new cases, campaigns, or editorials.",
        },
      ],
    },
  ],
  cta: {
    label: {
      zh: "返回首页",
      en: "Back Home",
    },
    href: "/",
  },
};

export function getText<T extends { zh: string; en: string }>(text: T) {
  return text[locale];
}
