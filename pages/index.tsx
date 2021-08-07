import Hero from "../components/Home/Hero";
import Members from "../components/Home/Members";
import Page from "../components/utility/Page";

export default function Home() {
  return (
    <Page fullTitle="Saratoga ASB">
      <Hero />
      <Members />
    </Page>
  );
}
