import styled from "@emotion/styled";
import Link from "next/link";
import wiltedFlower from "../../gallery/wilted-flower";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`;

const A = styled.a`
  text-decoration: underline;
`;

const Tweet = styled.a`
  max-width: 375px;
  align-self: center;
  color: var(--highlight-green);
  display: flex;
  flex-direction: column;

  & > q {
    font-style: bold;
  }

  & > * {
    font-size: 0.8rem;
  }

  & > span {
    text-align: right;
  }
`;

const Dl = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  text-align: justify;
  padding: 0 1rem;
  word-spacing: 0.2rem;
  line-height: 1.4;

  & > dt {
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--highlight-green);
  }

  & > dd {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 20rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  & > span {
    text-align: center;
    font-size: 0.7rem;
  }
`;

const P = styled.p`
  margin: 0;
`;

const EmbeddedWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function About() {
  return (
    <Section>
      <Link href="https://twitter.com/dhof/status/1469072278356955140" passHref>
        <Tweet target="_blank" rel="noreferrer">
          <q cite="https://twitter.com/dhof/status/1469072278356955140">
            corruptions is first of its kind in so many ways that its very
            difficult to describe in a tweet beyond tweeting corruptions is
            first of its kind in so many ways that its very difficult to
            describe in a tweet
          </q>{" "}
          <span>@dhof</span>
        </Tweet>
      </Link>
      <Dl>
        <dt>What's is corruptions?</dt>
        <dd>
          At the base level, corruptions is an NFT collection, it can be traded
          like any other NFT, it has artworks and it has properties. It started
          with 4196 corruptions, each one having unique visual features. At the
          moment, some of those corruptions evolved or "deviated" to other
          forms. Even though some mechanics related to the collection are a
          breakthrough in the NFT space that does not cover half of what is
          happening in the project, at the root of it, there's something
          different.
        </dd>
        <dt>
          What's different here? What's going on beyond the marketplace
          collection?
        </dt>
        <dd>
          There are some unique features in this collection that have never
          happened before. This all started with the creator, Dom Hofmann,
          deploying a{" "}
          <abbr title="Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met.">
            contract on Ethereum
          </abbr>
          . Followers of Dom, noticed the contract and rushed to{" "}
          <abbr title="Bring an NFT to life.">mint</abbr> the corruptions. The
          artworks were cryptic looking and had a weird mechanic called
          "insight" which would grow in time, decreasing in aceleration if the
          corruption was transferred ownership. From then on, other contracts
          were deployed by Dom, one in particular called{" "}
          <Link
            href={`https://etherscan.io/address/${process.env.NEXT_PUBLIC_DATA_CHANNEL_ADDRESS}`}
            passHref
          >
            <A target="_blank" rel="noreferrer">
              CorruptionsDataChannel
            </A>
          </Link>
          . During this, the creator never explained or promoted the project
          publicly, so, the role to understand and figure out what each contract
          did was delegated to the community. A group of like-minded people
          interested in the project created a{" "}
          <Link
            aria-label="Community discord"
            title="Community discord"
            href="https://discord.gg/MUegeTGwQa"
            passHref
          >
            <A target="_blank" rel="noreferrer">
              discord channel
            </A>
          </Link>{" "}
          to figure out this project and share ideias.
        </dd>
        <dt>Chapter 1</dt>
        <dd>
          From the contract{" "}
          <Link
            href={`https://etherscan.io/address/${process.env.NEXT_PUBLIC_DATA_CHANNEL_ADDRESS}`}
            passHref
          >
            <A target="_blank" rel="noreferrer">
              CorruptionsDataChannel
            </A>
          </Link>{" "}
          appeared cryptic messages and the community eager to understand the
          meaning of it, created a mirror contract called{" "}
          <Link
            href={`https://etherscan.io/address/${process.env.NEXT_PUBLIC_REFLECTIONS_DATA_CHANNEL_ADDRESS}`}
            passHref
          >
            <A target="_blank" rel="noreferrer">
              ReflectionsDataChannel
            </A>
          </Link>{" "}
          to communicate back with this "entity". From those{" "}
          <Link href="/data-channel" passHref>
            <A>messages</A>
          </Link>{" "}
          a narrative started to grow.
        </dd>
        <dt>Deviations, what are those?</dt>
        <dd>
          During chapter 1, there were 2 oportunities to deviate a corruption,
          once deviated a corruption can <b>never turn back</b>.
          <P>
            <b>The first one</b>, through the contract{" "}
            <Link
              href="https://etherscan.io/address/0x4500f6e46D485B62eD35926052F04C04f627F637"
              passHref
            >
              <A target="_blank" rel="noreferrer">
                CorruptionsWiltedRoseDeviationWriter
              </A>
            </Link>{" "}
            you could transform your corruption into a wilted flower, only 64
            could deviate.{" "}
            <ImageWrapper>
              <Img src={wiltedFlower} alt="" />
              <span>The wilted flower 0xF30</span>
            </ImageWrapper>
          </P>
          <P>
            <b>The second one</b>, through the contract{" "}
            <Link
              href="https://etherscan.io/address/0x6a00bC9eD4DcE14ed7bA72D01da6ed4746C5792e"
              passHref
            >
              <A target="_blank" rel="noreferrer">
                CorruptionsTemporalFragmentDeviationWriter
              </A>
            </Link>{" "}
            you could transform your corruption into one of 8 (randomly
            selected) unique artworks which were later used as pieces of the{" "}
            <Link href="/timeline" passHref>
              <A>timeline</A>
            </Link>
            .
          </P>
        </dd>
        <dt>Where to start?</dt>
        <dd>
          The best place to start is by checking out the "get-up-to-speed"
          channel in the{" "}
          <Link
            aria-label="Community discord"
            title="Community discord"
            href="https://discord.gg/MUegeTGwQa"
            passHref
          >
            <A target="_blank" rel="noreferrer">
              discord
            </A>
          </Link>
          . Also, this video series:
          <EmbeddedWrapper>
            <blockquote
              className="twitter-tweet"
              data-dnt="true"
              data-theme="dark"
            >
              <p lang="en" dir="ltr">
                Working on a sort of &quot;documentary&quot; to help you get
                into Corruption(s*),{" "}
                <a href="https://twitter.com/dhof?ref_src=twsrc%5Etfw">@dhof</a>
                &#39;s impossibly amazing on-chain pen &amp; paper art project.{" "}
                <br />
                <br />
                Here&#39;s part 1 of... many to go. 😅
                <br />
                <br />
                Watch this 🔊, find yours*, and join us here:
                <a href="https://t.co/gDPzDnSQ7F">https://t.co/gDPzDnSQ7F</a>
                <br />
                <br />*
                <a href="https://t.co/Bx831ZCZmw">
                  https://t.co/Bx831ZCZmw
                </a>{" "}
                <a href="https://t.co/bJDYt7P3UQ">https://t.co/bJDYt7P3UQ</a>{" "}
                <a href="https://t.co/VFPgFPe1xx">pic.twitter.com/VFPgFPe1xx</a>
              </p>
              &mdash; fabians.eth (😈, 😇) (@fabianstelzer){" "}
              <a href="https://twitter.com/fabianstelzer/status/1470525607104684032?ref_src=twsrc%5Etfw">
                December 13, 2021
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </EmbeddedWrapper>
        </dd>
      </Dl>
    </Section>
  );
}
