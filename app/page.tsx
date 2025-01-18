import {
  Intro,
  Join,
  Services,
  WhyPay4Me,
  Posts,
  Partners,
  Testimony,
  FAQs,
  Footer,
} from "@/components/layout";

export default function Home() {
  return (
    <main>
      <Intro />
      <Partners />
      <WhyPay4Me />
      <Services />
      <Testimony />
      <Posts />
      <FAQs />
      <Join />
      <Footer />
    </main>
  );
}
