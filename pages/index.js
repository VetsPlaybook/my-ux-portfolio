import Head from "next/head";
import NavBar from "@components/ui/navigationBar/Navbar";
import Homepage from "../components/pages/homepage/Homepage";
import Partition1 from "@components/pages/homepage/Partition1";
import Services from "@components/pages/homepage/Services";
import Partition2 from "@components/pages/homepage/Partition2";
import CaseStudies from "@components/pages/homepage/CaseStudies";
import VetsPlaybook from "@components/pages/homepage/VetsPlaybook";
import ScheduleCall from "@components/pages/homepage/ScheduleCall";
import Footer from "@components/ui/footer/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import HealthMap from "@components/pages/homepage/HealthMap";
import SustainableFarmers from "@components/pages/homepage/SustainableFarmers";

//<NavBar />
//<Homepage />
//<Partition1 />
//<Services />
//<Partition2 />
//<CaseStudies />
//<VetsPlaybook />
//<Partition1 />
//<ScheduleCall />
//<Partition2 />
//<Footer />

export default function Home() {
  return (
    <>
      <NavBar />
      <Homepage />
      <Partition1 />
      <Services />
      <Partition2 />
      <CaseStudies />
      <VetsPlaybook />
      <HealthMap />
      <SustainableFarmers />
      <Partition1 />
      <ScheduleCall />
      <Partition2 />
      <Footer />
    </>
  );
}
