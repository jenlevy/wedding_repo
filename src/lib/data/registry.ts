export interface RegistryItem {
  name: string;
  description: string;
  url: string;
}

export const registries: RegistryItem[] = [
  {
    name: "Crate & Barrel",
    description:
      "Kitchen essentials, home decor, and cozy linens for our new place.",
    url: "https://www.crateandbarrel.com",
  },
  {
    name: "Amazon",
    description: "A mix of everyday items and a few fun wishlist picks.",
    url: "https://www.amazon.com/wedding",
  },
  {
    name: "Honeymoon Fund",
    description: "Help us create unforgettable memories on our honeymoon!",
    url: "#",
  },
];
