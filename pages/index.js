import Head from "next/head";
import Homepage from "../components/pages/homepage/Homepage";
import NavBar from "@components/ui/navigationBar/Navbar";
import Partition1 from "@components/pages/homepage/Partition1";
import Services from "@components/pages/homepage/Services";

export default function Home() {
  return (
    <>
      <NavBar />
      <Homepage />
      <Partition1 />
      <Services />
    </>
  );
}
