import Intro from "@/components/layout/intro";
import Services from "@/components/layout/services";
import WhyPay4Me from "@/components/layout/why-pay4me";
import Partners from "@/components/layout/partners";
import Testimony from "@/components/layout/testimony";

export default function Home() {
  return (
    <main>
      <Intro />
      <Partners />
      <WhyPay4Me />
      <Services />
      <Testimony />
    </main>
  );
}
