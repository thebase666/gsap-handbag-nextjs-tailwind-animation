const navLinks = [
  { id: "collections", title: "Collections" },
  { id: "best-seller", title: "Best Seller" },
  { id: "features", title: "Features" },
  { id: "about", title: "About Us" },
  { id: "contact", title: "Contact" },
];
const socials = [
  { name: "Instagram", icon: "/insta.png", url: "#" },
  { name: "X (Twitter)", icon: "/x.png", url: "#" },
  { name: "Facebook", icon: "/fb.png", url: "#" },
];

const allBags = [
  {
    id: 1,
    name: "Classic Tote",
    title: "Elegant Everyday Tote",
    description:
      "A timeless tote bag crafted with premium leather. Perfect for work, shopping, and casual outings.",
    image: "bag1.jpg",
  },
  {
    id: 2,
    name: "Evening Clutch",
    title: "Chic Evening Clutch",
    description:
      "Sleek and compact design with a metallic clasp. Adds sophistication to your evening wear.",
    image: "bag2.jpg",
  },
  {
    id: 3,
    name: "Crossbody Bag",
    title: "Casual Crossbody",
    description:
      "Lightweight and versatile crossbody bag with adjustable straps. Ideal for hands-free comfort.",
    image: "bag6.jpg",
  },
  {
    id: 4,
    name: "Mini Backpack",
    title: "Trendy Mini Backpack",
    description:
      "A stylish mini backpack made with soft vegan leather. Great for daily essentials.",
    image: "bag4.jpg",
  },
  {
    id: 5,
    name: "Shoulder Bag",
    title: "Modern Shoulder Bag",
    description:
      "Curved silhouette with gold-tone hardware. A modern twist on the classic shoulder bag.",
    image: "bag5.jpg",
  },
];

const counterItems = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 120, suffix: "+", label: "Shipping Countries" },
  { value: 32, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
];

export { navLinks, socials, allBags, counterItems };
