
import { Intro, Join, Services, WhyPay4Me } from "@/components/layout";
import Posts from "@/components/layout/blog-post";
import Footer from "@/components/layout/footer";
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
      <Posts />
      <Join />
      <Footer />
    </main>
  );
}
