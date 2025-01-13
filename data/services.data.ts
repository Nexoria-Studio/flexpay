interface ServiceCard {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Tuition Payments",
    description:
      "Quick, secure global tuition payments made easy with FlexiPay",
    imageUrl: "/images/tuition.svg",
  },
  {
    id: 2,
    title: "Visa Payments",
    description:
      "Easily handle embassy payments with secure and fast transactions",
    imageUrl: "/images/visa.png",
  },
  {
    id: 3,
    title: "Utility Bills",
    description: "Pay utility bills worldwide quickly and securely",
    imageUrl: "/images/bills.png",
  },
];

export default services;