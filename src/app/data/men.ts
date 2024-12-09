export interface MenCartContentType {
  id: number;
  img: string;
  title: string;
  description: string;
  price: string;
}

export const men: MenCartContentType[] = [
  {
    id: 1,
    title: "Nike Dri-FIT ADV TechKnit Ultra",
    img: "/assets/images/Nike Dri-FIT ADV TechKnit Ultra.png",
    description: "Men's Short-Sleeve Running Top",
    price: "₹ 3 895",
  },
  {
    id: 2,
    title: "Nike Dri-FIT Challenger",
    img: "/assets/images/Nike Dri-FIT Challenger.png",
    description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: "₹ 2 495",
  },
];
