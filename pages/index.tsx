import type { NextPage } from "next";
import Page from "../components/layout/Page";
import Section from "../components/layout/Section";

import SilosView from "../components/layout/rounds/SilosView";

import {
  silosAfterFirstRound,
  silosAfterSecondRound,
} from "../components/layout/rounds/DemoData";
import Spacer from "../components/layout/Spacer";

const Home: NextPage = () => {
  return (
    <Page>
      <Section>
        <div className="text-4xl sm:text-6xl md:text-8xl text-accent font-bold mb-4 max-w-screen-md w-full mt-12 mx-2 text-center">
          <h1>What is Beatroulette?</h1>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col items-center justify-center content-center m-2">
          <div className="text-xl text-rgray-50 max-w-screen-sm border-2 border-accent rounded-xl p-4 mt-12">
            <p>
              In <b>Beatroulette</b>, a number of music producers get together,
              in order to creatively work on a number of tracks in a round based
              minigame.
              <br />
              The way this works is by everyone choosing <b>BPM</b> and{" "}
              <b>Key</b> for their first round entry. After creating the first
              stem (Drums/Sample) they upload their file.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="text-2xl sm:text-4xl md:text-6xl text-accent font-bold mb-4 max-w-screen-sm mt-12 text-center">
          After Round 1
        </div>
        <SilosView silos={silosAfterFirstRound} />
      </Section>
      <Section>
        <div className="text-2xl sm:text-4xl md:text-6xl text-accent font-bold mb-4 max-w-screen-sm text-center">
          Then...
        </div>
        <div className="text-xl text-rgray-50 max-w-screen-sm border-2 border-accent rounded-xl p-4 mt-12 mx-2">
          <p>
            <b>Each</b> player is moved to the <b>next</b> Silo. There, players
            are notified about this Silo&apos;s BPM and Key, as well as{" "}
            <b>the next stem</b> they will have to create. To enable this,
            players automatically get the assigned <b>download links</b> for
            stems in their current Silo.
            <br />
            What stem has to be created in which round be <b>configured</b> by
            the admin when creating the game.
          </p>
        </div>
      </Section>
      <Section>
        <div className="text-2xl sm:text-4xl md:text-6xl text-accent font-bold mb-4 max-w-screen-sm mt-12 text-center">
          After Round 2
        </div>
        <SilosView silos={silosAfterSecondRound} />
      </Section>
      <Section>
        <div className="text-2xl sm:text-4xl md:text-6xl text-accent font-bold mb-4 max-w-screen-sm text-center">
          Next...
        </div>
        <div className="text-xl text-rgray-50 max-w-screen-sm border-2 border-accent rounded-xl p-4 mt-12 mx-2">
          <p>
            <b>Each</b> player is rotated <b>again</b>. This keeps going until
            all rounds are played. At the end, there is just{" "}
            <b>as many unique songs as there are players</b> in the game - with{" "}
            <b>everyone having participated</b> in every song (at least if you
            have played as many rounds as there are players).
          </p>
        </div>
      </Section>
      <Spacer size="large"></Spacer>
    </Page>
  );
};

export default Home;
