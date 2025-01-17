interface PostCard {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const posts: PostCard[] = [
  {
    id: 1,
    title: "Highlighting Convenience",
    description:
      "Simplify your global payments with ease – discover how FlexiPay is transforming the way you transact internationally!",
    imageUrl: "/images/tuition.png",
  },
  {
    id: 2,
    title: "Showcasing Benefits",
    description:
      "From tuition fees to utility bills, FlexiPay has you covered. Find out how we’re connecting the world one payment at a time",
    imageUrl: "/images/visa.png",
  },
  {
    id: 3,
    title: "Customer-Centric Approach",
    description:
      "Our customers love us, and here’s why: Explore the top reasons FlexiPay is the go-to platform for global payments.",
    imageUrl: "/images/bills.png",
  },
];

export default posts;
