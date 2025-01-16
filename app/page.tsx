
import { Intro, Join, Services, WhyPay4Me } from "@/components/layout";
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
      <Join />
    </main>
  );
}
