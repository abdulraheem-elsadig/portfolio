import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Home/Intro";
import Work from "../components/Home/Work";

const Home: NextPage = () => {
  return (
    <div className="">
      <Intro />
      <Work />
    </div>
  );
};

export default Home;
