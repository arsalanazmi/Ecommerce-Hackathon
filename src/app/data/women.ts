export interface WomenCartContentType {
  id: number;
  img: string;
  title: string;
  description: string;
  price: string;
}

export const women: WomenCartContentType[] = [
  {
    id: 1,
    title: "Nike Dri-FIT ADV Run Division",
    img: "/assets/images/Nike Dri-FIT ADV Run Division.png",
    description: "Women's Long-Sleeve Running Top",
    price: "₹ 5 295",
  },
  {
    id: 2,
    title: "Nike Fast",
    img: "/assets/images/Nike Fast.png",
    description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: "₹ 3 795",
  },
];
