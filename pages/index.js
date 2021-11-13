import Head from "next/head";
import Intro from "../components/Intro";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Randycodes | Web Designer & Developer</title>
        <meta
          name="description"
          content="Toronto's number 1 freelance Web Designer & Developer"
        />
      </Head>
      <Intro />
    </div>
  );
}
