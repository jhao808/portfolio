export type PhotoCategory = "LOVER" | "UK";

export type PhotoItem = {
  src: string;
  alt: string;
  category: PhotoCategory;
};

export const photoFilters = ["All", "LOVER", "UK"] as const;

export type PhotoFilter = (typeof photoFilters)[number];

export const galleryPhotos: PhotoItem[] = [
  {
    src: "/photos/LOVER/05227181cc05c7f59bdcd88b73f3f6.JPG",
    alt: "Lover photo 1",
    category: "LOVER",
  },
  {
    src: "/photos/LOVER/6d810ca451a88439dc08c0e641acc6.JPG",
    alt: "Lover photo 2",
    category: "LOVER",
  },
  {
    src: "/photos/LOVER/730a500eadcb282e1361dc0bebec0a.JPG",
    alt: "Lover photo 3",
    category: "LOVER",
  },
  {
    src: "/photos/LOVER/956902e35966f5d91afb70fdc42a6c.JPG",
    alt: "Lover photo 4",
    category: "LOVER",
  },
  {
    src: "/photos/UK/3.JPG",
    alt: "UK photo 1",
    category: "UK",
  },
  {
    src: "/photos/UK/4.JPG",
    alt: "UK photo 2",
    category: "UK",
  },
  {
    src: "/photos/UK/5.JPG",
    alt: "UK photo 3",
    category: "UK",
  },
  {
    src: "/photos/UK/6.JPG",
    alt: "UK photo 4",
    category: "UK",
  },
];
