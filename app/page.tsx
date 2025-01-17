
import { Intro, Join, Services, WhyPay4Me } from "@/components/layout";
import Posts from "@/components/layout/blog-post";
import Partners from "@/components/layout/partners";
import Testimony from "@/components/layout/testimony";

export default function Home() {
  return (
    <main>
      <Intro />
      <Partners />
      <WhyPay4Me />
      <Services />
      <Posts />
      <Testimony />
      <Join />
    </main>
  );
}
