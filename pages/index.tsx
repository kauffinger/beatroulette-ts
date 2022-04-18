import type { NextPage } from "next";
import Page from "../components/layout/Page";
import Section from "../components/layout/Section";

const Home: NextPage = () => {
  return (
    <Page>
      <Section>
        <div className="h-screen w-screen flex flex-col justify-center">
          <h1>Hi There</h1>
        </div>
      </Section>
    </Page>
  );
};

export default Home;
