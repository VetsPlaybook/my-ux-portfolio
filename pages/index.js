import Head from "next/head";
import Homepage from "../components/pages/homepage/Homepage";
import NavBar from "@components/ui/navigationBar/Navbar";
import Partition1 from "@components/pages/homepage/Partition1";
import Services from "@components/pages/homepage/Services";
import Partition2 from "@components/pages/homepage/Partition2";
import CaseStudyTitle from "@components/pages/homepage/CaseStudyTitle";

export default function Home() {
  return (
    <>
      <NavBar />
      <Homepage />
      <Partition1 />
      <Services />
      <Partition2 />
      <CaseStudyTitle />
    </>
  );
}
