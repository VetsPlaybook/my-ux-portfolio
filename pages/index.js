import Head from "next/head";
import Homepage from "../components/pages/homepage/Homepage";
import NavBar from "@components/ui/navigationBar/Navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Homepage />
    </>
  );
}
