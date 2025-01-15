import { Intro, Join, Services, WhyPay4Me } from "@/components/layout";
import Posts from "@/components/layout/blog-post";

export default function Home() {
  return (
    <main>
      <Intro />
      <WhyPay4Me />
      <Services />
      <Posts />
      <Join />
    </main>
  );
}
