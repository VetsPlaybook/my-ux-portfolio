import Head from "next/head";
import Homepage from "../components/pages/homepage/Homepage";
import NavBar from "../components/uiComponents/navigationBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Homepage />
    </>
  );
}
